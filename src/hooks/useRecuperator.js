import { useSelector } from "react-redux";

const useRecuperator = ({ component, WOtestArray = false }) => {
  const response = useSelector((e) => e[component]);

  if (!WOtestArray) {
    if (!Array.isArray(response)) {
      return { Element: false };
    }
  }
  return { Element: response };
};
export default useRecuperator;
