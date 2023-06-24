import React, { useState, memo } from "react";
import Item from "../Item/Item";
import { transformItem } from "./dataTransform";
import "./List.css";

function List ({ item, changeBasket }) {
  const data = transformItem(item);
  const [ selectedIndex, setSelectedIndex] = useState(null)
  return (
    <>
      {data.information.map((items, firstIndex) => (
        <tr key={firstIndex}>
          {items.map((value, index) => (
            <Item value={value} data={data} index={index} setSelectedIndex={setSelectedIndex} isSelected={selectedIndex === index} key={index} changeBasket={changeBasket} />
          ))}
        </tr>
      ))}
    </>
  );
};

export default memo(List);
