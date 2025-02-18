import styles from "./cartItem.module.css";

const CartItem = ({ price, id, quantity, title, thumbnail, setCart }) => {
  const handleQuantChange = (e) => {
    const value = e.target.value;
    setCart((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: value } : product
      )
    );
  };

  const handleBlur = () => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, parseInt(quantity, 10) || 1) }
          : product
      )
    );
  };

  return (
    <div className={styles.itemCont}>
      <img src={thumbnail} />
      <h4>{title}</h4>
      <div className={styles.quantityCont}>
        <input
          min={1}
          type="number"
          value={quantity}
          onChange={handleQuantChange}
          onBlur={handleBlur}
        />
      </div>
      <span>${price * quantity}</span>
    </div>
  );
};

export default CartItem;
