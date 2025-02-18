import { Link } from "react-router-dom";
import styles from "../../routes/Home/home.module.css";
const Category = ({ name, image, link }) => {
  return (
    <div className={styles["category-card"]}>
      <img src={image} alt={name} />
      <div className={styles["category-card-content"]}>
        <h3>{name}</h3>
        <Link to={link}>
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
