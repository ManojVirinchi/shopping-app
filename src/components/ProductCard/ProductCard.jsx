import { useNavigate } from "react-router-dom";
import styles from "./productCard.module.css";
import star from "../../assets/star.png";
import up from "../../assets/up.png";
import down from "../../assets/down.png";

const ProductCard = ({
  title,
  images,
  price,
  rating,
  id,
  setCart,
  cart,
  thumbnail,
}) => {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    setCart((prev) => [...prev, { title, price, id, thumbnail, quantity: 1 }]);
  };
  const handleIncreaseQuantity = () => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecreaseQuantity = () => {
    if (cart.find((product) => product.id === id).quantity === 1) {
      setCart((prev) => {
        return prev.filter((product) => product.id !== id);
      });
    }
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleCardClick = (e) => {
    if (e.target.localName !== "button") {
      if (e.target.parentNode.localName !== "button") {
        navigate("/product/" + id);
      }
    }
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>
      <img className={styles.image} src={images[0]} />
      <h2 className={styles.title}>{title}</h2>
      <div>
        <span className={styles.price}>${price}</span>
        <span className={styles.rating}>
          <img src={star} />
          {rating}
        </span>
      </div>
      {!cart.some((product) => product.id === id) ? (
        <button className={styles.btn} onClick={handleAddToCart}>
          Add To Cart
        </button>
      ) : (
        <div className={styles.quantityCont}>
          <button onClick={handleDecreaseQuantity}>
            <img src={down} />
          </button>
          <span>{cart.find((product) => product.id === id).quantity}</span>
          <button onClick={handleIncreaseQuantity}>
            <img src={up} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
