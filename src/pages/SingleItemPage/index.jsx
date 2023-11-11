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
        <div className={style.product_info}>
          <h1 className={style.product_title}>{singleProduct.title}</h1>
          <div className={style.product_wrapper}>

            <div className={style.image_wrapper}>
              <img src={"http://localhost:3333/" + singleProduct.image} />
            </div>

            <div className={style.detail_info}>

              <div className={style.price}>
                <p className={style.regular_price}>{singleProduct.price}<span>$</span></p>
                {singleProduct.discont_price && 
                <p className={style.old_price} >{singleProduct.discont_price}$</p>}
                {singleProduct.discont_price && singleProduct.price && 
                <p className={style.discount}>
                  -{discount(singleProduct.price, singleProduct.discont_price)}<span>%</span>
                  </p>}
              </div>

              <ButtonUI text="To cart" content="to_cart_btn" onClick={addProduct} />

              <div className={style.description}>
                <p className={style.description_title}>Description </p>
                <p>{singleProduct.description}</p>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
