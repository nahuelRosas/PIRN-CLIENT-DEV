import { FG } from "../stores/actions/index";
import { useSelector, useDispatch } from "react-redux";

const filterByCategory = ({ type, category, games }) => {
  return games.filter((e) => e[type]?.includes(category));
};

const filterWithoutCategory = ({ type, games }) => {
  const filtered =
    type === "DB"
      ? games.filter((e) => e["createDB"])
      : games.filter((e) => !e["createDB"]);
  return filtered;
};

const logicalFilter = ({ type, category, games }) => {
  let filtered;
  games.length
    ? category !== false
      ? (filtered = filterByCategory({
          type: type,
          category: category,
          games: games,
        }))
      : (filtered = filterWithoutCategory({ type: type, games: games }))
    : (filtered = false);
  return filtered;
};

const useFilter = ({ type = false, category = false }) => {
  // Type => {"platforms", "genres", "stores", "DB", "API"}
  // category => {"action", "steam", "PC"}
  const dispatch = useDispatch();
  const selector = useSelector((e) => e);

  const Activate = async () => {
    const filterInSearch = selector["filterInSearch"];
    const store = filterInSearch === false ? "allGames" : "filteredGames";
    const games = selector[store];
    const filtered = logicalFilter({
      type: type,
      category: category,
      games: games,
    });

    dispatch(FG({ payload: filtered }));
  };

  return Activate && { Activate };
};
export default useFilter;
