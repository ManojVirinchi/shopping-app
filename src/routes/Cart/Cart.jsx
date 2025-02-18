import styles from "./cart.module.css";
import CartItem from "../../components/CartItem/CartItem";
const Cart = ({ cart, setCart }) => {
  console.log(cart);
  const getCartTotal = () => {
    let result = 0;
    cart.forEach((product) => {
      result += product.price * product.quantity;
    });
    return result;
  };
  return (
    <div className="main--cont">
      <section className={styles.cartMain}>
        <h2>Your Cart</h2>
        {cart.length >= 1 ? (
          <div className={styles.cartCont}>
            {cart.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  price={product.price}
                  quantity={product.quantity}
                  title={product.title}
                  thumbnail={product.thumbnail}
                  id={product.id}
                  setCart={setCart}
                />
              );
            })}
          </div>
        ) : (
          <div className={styles.emptyCont}>Your cart is empty!</div>
        )}
        {cart.length >= 1 && (
          <>
            <div className={styles.totalCont}>
              <h3 className="">Total: </h3>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <button className={styles.purchase} onClick={() => setCart([])}>
              Purchase
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
