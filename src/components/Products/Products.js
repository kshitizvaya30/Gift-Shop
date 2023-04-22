import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ innerPage, headingText, products }) => {

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.map((item) => {
          return <Product key={item.id} id ={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
