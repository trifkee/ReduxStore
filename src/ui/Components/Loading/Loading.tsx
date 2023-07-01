import "./loading.css";
import { FaRegSmileBeam } from "react-icons/Fa";

export const Loading = () => {
  return (
    <>
      <h1 className="loading-text">
        {" "}
        We are loading content <FaRegSmileBeam />
      </h1>
      <section className="loading-section">
        <div className="loading-ball"></div>
      </section>
    </>
  );
};
