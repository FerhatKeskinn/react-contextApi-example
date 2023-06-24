import React from "react";
import "./index.css";
import "../../asset/style/css/variables/table.css";
import Table from "../../component/Table/Table";
import Header from "../../component/Header/Header";
import Basket from "../../component/Basket/Basket";
import ListState from "../../context/List/ListState";
import BasketState from "../../context/Basket/BasketState";

function Home() {
  return (
    <ListState>
      <BasketState>
        <Header />
        <Table />
        <Basket />
      </BasketState>
    </ListState>
  );
}

export default Home;
