import React from "react";
import SaleList from "../../component/SaleList";
import style from "./style.module.css";

export default function Sale() {
  return (
    <div className="container">
      <h1 className={style.title}>Products with sale</h1>
      <SaleList />
    </div>
  );
}
