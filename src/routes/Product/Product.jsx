import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import down from "../../assets/down.png";
import up from "../../assets/up.png";
import flip from "../../assets/flip.png";
import styles from "./product.module.css";
const Product = ({ products, setCart, cart }) => {
  const { id } = useParams();
  const [hiddenInfo, setHiddenInfo] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/" + id);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (products.length > 0) {
      const foundProduct = products.find((product) => product.id == id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    } else {
      fetchProduct();
    }
  }, [id, products]);

  const handleAddToCart = () => {
    setCart((prev) => [
      ...prev,
      {
        title: product.title,
        price: product.price,
        id: product.id,
        thumbnail: product.thumbail,
        quantity: 1,
      },
    ]);
  };

  const handleIncreaseQuantity = () => {
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
      )
    );
  };

  const handleDecreaseQuantity = () => {
    if (cart.find((prod) => prod.id === product.id).quantity === 1) {
      setCart((prev) => {
        return prev.filter((prod) => prod.id !== product.id);
      });
    }
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === product.id ? { ...prod, quantity: prod.quantity - 1 } : prod
      )
    );
  };

  return (
    <div className="main--cont">
      <section className={styles.productPageCont}>
        <div className={styles.card}>
          <img
            className={styles.mainImg}
            src={product?.images?.[activeImg] || null}
          />
          {product?.images?.length > 1 && (
            <div className={styles.thumbnails}>
              {product?.images?.map((img, index) => {
                return (
                  <img
                    className={`${styles.thumbnail} ${
                      index === activeImg ? styles.activeThumbnail : ""
                    }`}
                    src={img}
                    key={index}
                    onClick={() => {
                      setActiveImg(index);
                    }}
                  />
                );
              })}
            </div>
          )}
          <h1>{product.title}</h1>
          <div>
            <span className={styles.price}>${product.price}</span>
            <span>{"⭐️".repeat(product.rating)}</span>
          </div>
          <p className={styles.desc}>{product.description}</p>
          {!cart.some((prod) => prod.id === product.id) ? (
            <button className={styles.btn} onClick={handleAddToCart}>
              Add To Cart
            </button>
          ) : (
            <div className={styles.quantityCont}>
              <button onClick={handleDecreaseQuantity}>
                <img src={down} />
              </button>
              <span>
                {cart.find((prod) => prod.id === product.id).quantity}
              </span>
              <button onClick={handleIncreaseQuantity}>
                <img src={up} />
              </button>
            </div>
          )}
          <h2 className={styles.reviewsTitle}>Reviews</h2>
          {product?.reviews?.map((rev, index) => {
            return (
              <div className={styles.review} key={index}>
                <div>
                  <h3>{rev.reviewerName}</h3>
                  <p>{"⭐️".repeat(rev.rating)}</p>
                </div>

                <p>{rev.comment}</p>
              </div>
            );
          })}
          <h2
            className={styles.aditionalTitle}
            onClick={() => {
              setHiddenInfo((prev) => !prev);
            }}
          >
            Additional Information
            <img className={hiddenInfo ? styles.expandImg : null} src={flip} />
          </h2>
          <div
            className={`${styles.aditionalCont} ${
              !hiddenInfo && styles.hidden
            }`}
          >
            <p>
              <span className={styles.subtitle}>Dimensions: </span>
              Depth: {product?.dimensions?.depth} Height:{" "}
              {product?.dimensions?.height} Width: {product?.dimensions?.width}
            </p>
            {product?.brand && (
              <p>
                <span className={styles.subtitle}>Brand: </span>
                {product?.brand}
              </p>
            )}
            <p>
              <span className={styles.subtitle}>Return Policy: </span>
              {product?.returnPolicy}
            </p>
            <p>
              <span className={styles.subtitle}>Shipping: </span>
              {product?.shippingInformation}
            </p>
            <p>
              <span className={styles.subtitle}>SKU: </span>
              {product?.sku}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
