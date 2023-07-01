import { useDispatch, useSelector } from "react-redux";
import { item } from "../../../domain/interfaces/item";
import addToCart from "../../../redux/actions/cartItems";
import removeFromCart from "../../../redux/actions/removeFromCart";
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from "react-icons/Ai";
import { BsTrash3 } from "react-icons/Bs";
import "./singleItem.css";
import { AiOutlineTag } from "react-icons/Ai";

import toggleScreen from "../../../redux/actions/toggleScreen";
import activeModalInfo from "../../../redux/actions/activeModalInfo";

export const SingleItem = ({ props }: { props: item }) => {
  // @ts-ignore
  const items = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      <article className="single-item">
        {props?.category && (
          <span className="single-item-category-tag">
            <AiOutlineTag /> {props?.category}
          </span>
        )}
        <div className="single-item-cta">
          {/* ADD TO CART BTN */}
          <button
            className="single-item-add"
            onClick={() =>
              dispatch(
                addToCart({
                  id: props.id,
                  title: props.title,
                  price: props.price,
                  qty: (!!props.qty && props.qty + 1) || 1,
                  image: props.image,
                })
              )
            }
          >
            <AiOutlineShoppingCart />
          </button>
          <button
            onClick={() => (
              dispatch(toggleScreen()), dispatch(activeModalInfo(props))
            )}
            className="single-item-info"
          >
            <AiOutlineInfoCircle />
          </button>
        </div>
        <div className="single-item-img">
          <img src={props?.image} alt={props?.title} />
        </div>
        <h3>{props?.title}</h3>
        {props?.qty && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>quantity:{props?.qty}</p>
            <button
              onClick={() => dispatch(removeFromCart(props.id))}
              className="remove-item"
              style={{
                padding: ".5rem",
                borderRadius: ".2rem",
              }}
            >
              <BsTrash3 />
            </button>
          </div>
        )}
      </article>
    </>
  );
};
