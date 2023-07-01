import "../FeaturedItem/featured.css";
import "./button.css";
import "./button.css";

// @ts-ignore
export const Button = ({ text, icon, event, cl }) => {
  return (
    <button className={cl} onClick={() => event}>
      {text} {icon}
    </button>
  );
};
