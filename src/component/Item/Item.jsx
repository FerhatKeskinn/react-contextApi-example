import React from "react";
import "./Item.css";

function Item({ value, isSelected, index, setSelectedIndex, data, changeBasket }) {
  const isSelectedControl = isSelected && typeof value === "number";

  const handleClicks = (value) => {
    if (typeof value === "number") {
      setSelectedIndex(isSelectedControl ? null : index);
      changeBasket({ ...data, index, value });
    }
  };

  return (
    <td
      className={isSelectedControl ? "is-selected" : ""}
      onClick={() => handleClicks(value)}
    >
      {value}
    </td>
  );
}

export default Item;
