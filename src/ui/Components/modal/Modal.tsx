import { useDispatch, useSelector } from "react-redux";
import toggleScreen from "../../../redux/actions/toggleScreen";
import "./modal.css";
import { AiOutlineCloseCircle } from "react-icons/Ai";
import { AiOutlineTag } from "react-icons/Ai";

export const Modal = () => {
  // @ts-ignore
  const toggleScreenSelector = useSelector((state) => state.openedScreen);
  // @ts-ignore
  const activeItem = useSelector((state) => state.modalInfo);
  const dispatch = useDispatch();
  return (
    toggleScreenSelector === true && (
      <article className="modal">
        <div className="modal-article">
          <div
            onClick={() => dispatch(toggleScreen())}
            className="modal-close-icon"
          >
            <AiOutlineCloseCircle />
          </div>
          <img src={activeItem.image} alt={activeItem.title} />
          <div className="modal-info">
            <h2>{activeItem.title}</h2>
            <span className="single-item-category-tag">
              <AiOutlineTag /> {activeItem.category}
            </span>
            <p>{activeItem.description}</p>
          </div>
          <p className="modal-price">${activeItem.price}</p>
        </div>
        <div
          onClick={() => dispatch(toggleScreen())}
          className="backdrop"
        ></div>
      </article>
    )
  );
};
