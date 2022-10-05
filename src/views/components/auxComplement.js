import useFilter from "../../hooks/useFilter";
import useOrder from "../../hooks/useOrder";
import React from "react";

const AuxFilter = ({ type, category }) => {
  const { Activate } = useFilter({ type: type, category: category });

  return { Activate };
};

const AuxOrder = ({ type, category }) => {
  const { Activate } = useOrder({ type: type, category: category });

  return { Activate };
};

const AuxComplement = ({ type, category, _Parent, _Method, _toggle }) => {
  const onClickFunction =
    _Parent === "bubble_Filter"
      ? AuxFilter({ type, category, _Method })
      : AuxOrder({ type, category, _Method });

  return (
    <div
      onClick={() => {
        onClickFunction.Activate();
        _toggle();
      }}>
      {category}
    </div>
  );
};



export default AuxComplement;
