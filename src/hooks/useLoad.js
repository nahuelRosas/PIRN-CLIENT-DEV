import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GGDBA, GAG, GAP, GAS, OGR, FGR } from "../stores/actions";

const useLoad = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GGDBA(), dispatch(GAG()), dispatch(GAP()), dispatch(GAS()));
  }, [dispatch]);

  return false;
};
export default useLoad;

export const useLoadRestart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(OGR(), dispatch(FGR()));
  }, [dispatch]);

  return false;
};

export const useLoadRestartWP = ({ component }) => {
  const dispatch = useDispatch();
  const method = {
    OGR: () => dispatch(OGR()),
    FGR: () => dispatch(FGR()),
  };
  const restart = () => {
    dispatch(method[component]);
  };

  return { Restart: restart };
};
