import { useEffect, useState } from "react";
import axios from "axios";

function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("❌ Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <img src={product.image_url} alt={product.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;
