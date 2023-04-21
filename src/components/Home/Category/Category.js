import { useNavigate } from "react-router-dom";
import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
      {categories?.map((item) => {
        return(
          <div key={item.id} className="category" onClick={() => {navigate(`/category/${item.id}`)}}>
            <img src="https://drive.google.com/uc?export=view&id=1U_0ym07imctEF37XeLJqX_CcJMFKenG1" alt={categories.category_name} />
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
