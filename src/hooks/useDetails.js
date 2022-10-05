import useRecuperator from "./useRecuperator";
import { useDispatch } from "react-redux";
import { GD } from "../stores/actions";
import { useEffect } from "react";

const useDetails = ({ payload }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GD({ payload }));
  }, [dispatch, payload]);

  const { Element } = useRecuperator({
    component: "gameDetails",
    WOtestArray: true,
  });

  return Element;
};
export default useDetails;
