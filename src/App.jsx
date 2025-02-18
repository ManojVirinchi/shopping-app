import { StrictMode, useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./routes/Home/Home.jsx";
import Store from "./routes/Store/Store.jsx";
import About from "./routes/About/About.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import Cart from "./routes/Cart/Cart.jsx";
import CartBtn from "./components/CartBtn/CartBtn.jsx";
import Product from "./routes/Product/Product.jsx";
import "./main.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("name");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const [furniture, home, kitchen] = await Promise.all([
          fetch("https://dummyjson.com/products/category/furniture").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/home-decoration").then(
            (res) => res.json()
          ),
          fetch(
            "https://dummyjson.com/products/category/kitchen-accessories?limit=10"
          ).then((res) => res.json()),
        ]);
        const allProducts = [
          ...furniture.products,
          ...home.products,
          ...kitchen.products,
        ];

        // Set the combined products to the filtered state
        setFiltered(allProducts);
        setProducts(allProducts);
        setData({
          furniture,
          home,
          kitchen,
        });
      } catch (error) {
        console.error(`Error fetching categories: ${err}`);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category !== "all") {
      setFiltered([...data[category]?.products]);
    } else if (
      category === "all" &&
      data.furniture &&
      data.home &&
      data.kitchen
    ) {
      setFiltered([
        ...data.furniture.products,
        ...data.home.products,
        ...data.kitchen.products,
      ]);
    }
    if (sort === "name") {
      setFiltered((prev) =>
        prev.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }

          return 0;
        })
      );
    } else if (sort === "price") {
      setFiltered((prev) =>
        prev.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }

          return 0;
        })
      );
    } else if (sort === "rating") {
      setFiltered((prev) =>
        prev.sort((a, b) => {
          if (a.rating < b.rating) {
            return -1;
          }
          if (a.rating > b.rating) {
            return 1;
          }

          return 0;
        })
      );
    }
  }, [sort, category, data]);

  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="store"
            element={
              <Store
                cart={cart}
                setCart={setCart}
                setProducts={setProducts}
                category={category}
                sort={sort}
                setSort={setSort}
                setCategory={setCategory}
                filtered={filtered}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route
            path="product/:id"
            element={
              <Product products={products} setCart={setCart} cart={cart} />
            }
          />
        </Routes>
        <CartBtn cart={cart} />
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
