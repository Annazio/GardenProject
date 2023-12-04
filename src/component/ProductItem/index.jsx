import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import ButtonUI from "../../UI/ButtonUI";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";
import { useCalculateDiscount } from "../../utils/useCalculateDiscount";
import { getProductId } from "../../store/slice/productSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductItem({
  id,
  image,
  title,
  price,
  discont_price,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const discount = useCalculateDiscount(price, discont_price);

  const addProduct = () => {
    dispatch(addToCart(id));
    toast(`Added to the shopping cart!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        background: "green",
        color: "white",
        boxShadow: "none",
      },
    });
  };

  function handleSingleProduct(id) {
    dispatch(getProductId(id));
    localStorage.setItem("ProductId", JSON.stringify(id));
    navigate("/products/:id");
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={style.wrapper}
    >
      <div
        className={`${style.image_wrapper} ${isHovered ? style.hovered : ""}`}
        onClick={() => handleSingleProduct(id)}
      >
        <img
          src={"http://localhost:3333" + image}
          alt={title}
          className={style.product_img}
        />
      </div>
      {isHovered && (
        <ButtonUI
          content="add_to_cart_btn"
          text="Add to cart"
          onClick={addProduct}
        />
      )}

      <div onClick={() => handleSingleProduct(id)}>
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

          {discont_price && price && (
            <p className={style.discount}>-{discount}%</p>
          )}
        </div>

        <h3 className={style.product_title}>{title}</h3>
      </div>
    </div>
  );
}
