import { useDispatch } from "react-redux";
import useRecuperator from "./useRecuperator";
import { OG } from "../stores/actions/index";

const alphabetically = ({ category, games }) => {
  const sorted =
    category === "A-Z"
      ? games.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
      : games.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });

  return sorted;
};

const releasedate = ({ category, games }) => {
  const sorted =
    category === "Newest"
      ? games.sort((a, b) => {
          if (a.released > b.released) {
            return -1;
          }
          if (a.released < b.released) {
            return 1;
          }
          return 0;
        })
      : games.sort((a, b) => {
          if (a.released > b.released) {
            return 1;
          }
          if (a.released < b.released) {
            return -1;
          }
          return 0;
        });

  return sorted;
};

const rating = ({ category, games }) => {
  const sorted =
    category === "Highest"
      ? games.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          }
          if (a.rating < b.rating) {
            return 1;
          }
          return 0;
        })
      : games.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        });

  return sorted;
};

const LoadGames = () => {
  const { Element: allGames } = useRecuperator({ component: "allGames" });
  const { Element: filteredGames } = useRecuperator({
    component: "filteredGames",
  });
  const { Element: filteredStatus } = useRecuperator({
    component: "filteredGamesStatus",
    WOtestArray: true,
  });
  const { Element: searchStatus } = useRecuperator({
    component: "filterInSearch",
  });

  let games = [];
  if (searchStatus === false && filteredStatus === false) {
    if (Array.isArray(allGames)) {
      games = [...allGames];
    }
  } else {
    if (filteredGames !== false) {
      if (Array.isArray(filteredGames)) {
        games = [...filteredGames];
      }
    }
  }
  return games;
  };

const useOrder = ({ type, category }) => {
  // Type => {"alphabetically", "releasedate", "rating"}
  // category => {"asc", "desc"}
  const dispatch = useDispatch();
  const games = LoadGames();
  let filtered;
  filtered =
    type === "alphabetically"
      ? alphabetically({ category, games })
      : type === "releasedate"
      ? releasedate({ category, games })
      : rating({ category, games });

  const Activate = async () => {
    dispatch(OG({ payload: filtered }));
  };

  return Activate && { Activate };
};

export default useOrder;
