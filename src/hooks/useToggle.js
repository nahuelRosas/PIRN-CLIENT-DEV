import { CT } from "../stores/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const useToggle = ({ component }) => {
  const dispatch = useDispatch();
  const IsOpen = useSelector((e) => e[component]);

  const Toggle = async () => {
    dispatch(CT({ component: component, stateComponent: IsOpen }));
  };

  return {
    Toggle,
    IsOpen,
  };
};
