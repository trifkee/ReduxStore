import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/Ai";
import "./navbar.css";
import { BiLogoRedux } from "react-icons/Bi";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsSunFill } from "react-icons/Bs";
import toggleMode from "../../../redux/actions/toggleMode";

export const Navbar = () => {
  // @ts-ignore
  const totalItems = useSelector((state) => state.cartItems);
  // @ts-ignore
  const toggleModeState = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  return (
    <nav>
      <Link to="/">
        <h1 className="nav-logo" style={{ display: "flex", gap: ".2rem" }}>
          ReduxStore
          <span
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <BiLogoRedux />
          </span>
        </h1>
      </Link>
      <div className="nav-btns">
        <button onClick={() => dispatch(toggleMode())} className="nav-darkmode">
          {!toggleModeState ? <MdDarkMode /> : <BsSunFill />}
        </button>
        <Link className="home-btn" to="/">
          home <AiOutlineHome />
        </Link>
        <Link to="/cart" className="nav-btn nav-login">
          checkout <AiOutlineShoppingCart />{" "}
          {totalItems.length > 0 && <span>{totalItems.length}</span>}
        </Link>
      </div>
    </nav>
  );
};
