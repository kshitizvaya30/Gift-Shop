import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ innerPage, headingText, products }) => {
  console.log(products);
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.map((item) => {
          return <Product key={item.Id} id ={item.Id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
