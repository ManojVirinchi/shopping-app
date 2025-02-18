import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import icon from "../../assets/shopping.png";
const CartBtn = ({ cart }) => {
  const location = useLocation();

  const cartLength = () => {
    let result = 0;
    cart.forEach((product) => {
      result += product.quantity;
    });
    return result;
  };

  return (
    <>
      {(location.pathname === "/store" ||
        location.pathname.split("/")[1] === "product") && (
        <Link to="cart">
          <button id="cartBtn">
            {cart.length >= 1 && <span id="cartQuant">{cartLength()}</span>}
            <img src={icon} />
          </button>
        </Link>
      )}
    </>
  );
};

export default CartBtn;
