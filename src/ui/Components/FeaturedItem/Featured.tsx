import { useFetchFeaturedItem } from "../../../infrastructure/API/queries/useFetchFeaturedItem";
import { AiOutlineShoppingCart, AiOutlineTag } from "react-icons/Ai";
import "./featured.css";
import { useDispatch, useSelector } from "react-redux";
import addToCart from "../../../redux/actions/cartItems";
export const Featured = () => {
  const { data } = useFetchFeaturedItem();
  // @ts-ignore
  const items = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <section className="featured-section">
      <img
        className="featured-img"
        src={data?.data?.image}
        alt={data?.data?.title}
      />
      <div className="featured-info">
        <h2 className="featured-title">{data?.data?.title}</h2>
        <span
          className="featured-category"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: ".5rem",
          }}
        >
          <AiOutlineTag />
          {data?.data?.category}
        </span>
        <p className="featured-desc">{data?.data?.description}</p>
      </div>
      <div className="featured-cta">
        {/* <button>Read more 📖</button> */}
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: data?.data?.id,
                title: data?.data?.title,
                price: data?.data?.price,
                qty: (!!data?.data?.qty && data?.data?.qty + 1) || 1,
                image: data?.data?.image,
              })
            )
          }
          style={{
            display: "flex",
            gap: "1rem",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <span>Add to cart </span>
          <AiOutlineShoppingCart />
        </button>
      </div>
    </section>
  );
};
