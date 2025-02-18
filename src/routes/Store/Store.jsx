import { useEffect, useState } from "react";
import styles from "./store.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const Store = ({
  cart,
  setCart,
  category,
  sort,
  setCategory,
  setSort,
  filtered,
}) => {
  return (
    <div className="main--cont">
      <section className={styles.storeMain}>
        <section className={styles.bar}>
          <label htmlFor="category">Category: </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All Categories</option>
            <option value="kitchen">Kitchen Accessories</option>
            <option value="home">Home Decor</option>
            <option value="furniture">Furniture</option>
          </select>
          <label htmlFor="sort">Sort by: </label>
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </section>
        <section className={styles.productGrid}>
          {filtered?.map((product, index) => {
            return (
              <ProductCard
                key={index}
                title={product.title}
                images={product.images}
                price={product.price}
                rating={product.rating}
                id={product.id}
                setCart={setCart}
                cart={cart}
                thumbnail={product.thumbnail}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Store;
