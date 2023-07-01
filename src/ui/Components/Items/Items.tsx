import { useFetchItems } from "../../../infrastructure/API/queries/useFetchItems";
import { SingleItem } from "../SingleItem/SingleItem";
import "./items.css";
import { item } from "../../../domain/interfaces/item";

export const Items = () => {
  const { data } = useFetchItems();
  return (
    <>
      <h2 className="section-items-title">Our products</h2>
      <section className="section-items">
        {data?.data?.map((item: item) => {
          return <SingleItem key={item.id} props={item} />;
        })}
      </section>
    </>
  );
};
