import ButtonUI from "../../UI/ButtonUI";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";
import style from "./style.module.css";
import { useCalculateDiscount } from "../../utils/useCalculateDiscount";
import { fetchSingleProduct } from "../../store/slice/productSlice";
import { useEffect } from "react";

export default function SingleItemPage() {
  const { singleProduct, productId, status } = useSelector(
    (state) => state.products
  );

  const id = productId ? productId : localStorage.getItem("ProductId");

  const discount = useCalculateDiscount;
  const dispatch = useDispatch();
  const addProduct = () => dispatch(addToCart(+id));

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  if (singleProduct.length === 0) {
    return "";
  }

  return (
    <div className="container">
      {status === "ready" && (
        <div className={style.single_item_wrapper}>
          <h1 className={style.title}>{singleProduct.title}</h1>
          <div className={style.image_wrapper}>
            <img src={"http://localhost:3333/" + singleProduct.image} />
          </div>
          <div className={style.detail_wrapper}>
            <p>{singleProduct.price}</p>
            <p>{singleProduct.discont_price}</p>
            <p>{discount(singleProduct.price, singleProduct.discont_price)}</p>
            <ButtonUI text="To cart" onClick={addProduct} />
            <div className={style.description}>
              <p>Description </p>
              <p>{singleProduct.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
