import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  decrAmount,
  incrAmount,
  removeItem,
} from "../../store/slice/cartSlice";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getProductId } from "../../store/slice/productSlice";

export default function ShoppingCartItem({
  id,
  image,
  title,
  count,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSingleProduct(id) {
    dispatch(getProductId(id));
    localStorage.setItem("ProductId", JSON.stringify(id));
    navigate("/products/:id");
  }

  return (
    <div className={style.item_container}>
      <div
        className={style.image_wrapper}
        onClick={() => handleSingleProduct(id)}
      >
        <img src={"https://gardenprojectserver.onrender.com" + image} alt={title} />
      </div>

      <div className={style.title_counter_wrapper}>
        <p onClick={() => handleSingleProduct(id)} className={style.title}>
          {title}
        </p>
        <div className={style.counter}>
          <AiOutlineMinus
            className={style.decr_btn}
            onClick={() => dispatch(decrAmount(id))}
          />
          <p>{count}</p>
          <AiOutlinePlus
            className={style.incr_btn}
            onClick={() => dispatch(incrAmount(id))}
          />
        </div>
      </div>

      <div className={style.price_container}>
        {discont_price && (
          <p className={style.actual_price}>
            {discont_price}
            <span>$</span>
          </p>
        )}
        {discont_price ? (
          <p className={style.old_price}>
            {price}
            <span>$</span>
          </p>
        ) : (
          <p className={style.actual_price}>
            {price}
            <span>$</span>
          </p>
        )}
      </div>
      <IoMdClose
        className={style.remove_btn}
        onClick={() => dispatch(removeItem(id))}
      />
    </div>
  );
}
