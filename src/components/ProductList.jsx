import { ItemProduct } from "./ItemProduct";

export const ProductList = (props) => {
  const { products } = props;
  return (
    <section className="products-gallery-container">
      {products.map((product, index) => {
        return <ItemProduct key={index} product={product} />;
      })}
    </section>
  );
};
