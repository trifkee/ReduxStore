import { useSelector } from "react-redux";
import { SingleItem } from "../../Components/SingleItem/SingleItem";
import { item } from "../../../domain/interfaces/item";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { BsArrowReturnLeft } from "react-icons/Bs";
import { Link } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  // @ts-ignore
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <>
      <h2
        className="cart-title"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span>Your cart</span>
        <span
          style={{ fontSize: "2rem", alignSelf: "center", display: "flex" }}
        >
          <AiOutlineShoppingCart />
        </span>
      </h2>
      {cartItems.length < 1 && (
        <h3
          style={{
            // marginLeft: "1rem",
            paddingLeft: "1rem",
            width: "100%",
            color: "white",
            fontWeight: 300,
          }}
        >
          There are no items in your cart, add some!
          <Link className="home-btn" to="/">
            go back <BsArrowReturnLeft />
          </Link>
        </h3>
      )}
      <section className="cart-section">
        {cartItems?.map((item: item) => (
          <SingleItem key={item?.id} props={item} />
        ))}
      </section>
    </>
  );
};
