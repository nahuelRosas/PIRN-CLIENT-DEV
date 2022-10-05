import SpinnerLoading from "../components/spinnerLoading";
import useRecuperator from "../../hooks/useRecuperator";
import { useLoadRestart } from "../../hooks/useLoad";
import React, { useEffect, useState } from "react";
import Pagination from "../components/pagination";
import CardGame from "../components/cardGame";
import "../../assets/styles/css/home.css";
import { FaSadCry } from "react-icons/fa";
import { Link } from "react-router-dom";

const Games = () => {
  const { Element: filteredGamesStatus } = useRecuperator({
    component: "filteredGamesStatus",
    WOtestArray: true,
  });
  const { Element: orderedGamesStatus } = useRecuperator({
    component: "orderedGamesStatus",
    WOtestArray: true,
  });
  const { Element: filteredGames } = useRecuperator({
    component: "filteredGames",
  });
  const { Element: orderedGames } = useRecuperator({
    component: "orderedGames",
  });
  const { Element: allGames } = useRecuperator({ component: "allGames" });

  let games =
    filteredGamesStatus && orderedGamesStatus
      ? [...orderedGames]
      : filteredGamesStatus
      ? [...filteredGames]
      : orderedGamesStatus
      ? [...orderedGames]
      : [...allGames];

  return games;
};

export default function Home() {
  useLoadRestart();
  const games = Games();
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(20);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (games.length < 20 && !isLoading) {
      setGamesPerPage(games.length);
    }
    if (games.length > 20 && !isLoading) {
      setGamesPerPage(20);
    }
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [games.length, isLoading]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);
  const _Pagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="home_container">
        <div className="home_container_content_games">
          {currentGames.length === 0 && isLoading === true ? (
            <SpinnerLoading />
          ) : currentGames.length === 0 && isLoading === false ? (
            <div className="home_container_empty">
              <span>No games found</span>
              <FaSadCry className="SVG_home_empty" />
            </div>
          ) : (
            currentGames.length > 0 &&
            currentGames.map((game) => {
              return (
                <Link
                  to={`/videogame/${game.id}`}
                  key={game.id}
                  className="home_container_content_games_card">
                  <CardGame game={game} />
                </Link>
              );
            })
          )}
        </div>
      </div>

      <div className="home_cointainer_Pagination">
        {games.length > 20 && (
          <Pagination
            functionPagination={_Pagination}
            gamesLength={games.length}
            gamesPage={gamesPerPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </>
  );
}
