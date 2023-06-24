import React, { memo, useCallback, useContext } from "react";
import List from "../List/List";
import BasketContext from "../../context/Basket/BasketContext";
import ListContext from "../../context/List/ListContext";

function Table () {
  const { changeBasket } = useContext(BasketContext);

  const { items } = useContext(ListContext);

  const basketChange = useCallback((value)=> {
    changeBasket(value)  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div style={{overflow: "hidden", overflowX: "auto"}}>
    <table className="table">
      <tbody>
        {items.map((item, index) => (
          <List item={item} parentIndex={index} key={index} changeBasket={basketChange} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default memo(Table);
