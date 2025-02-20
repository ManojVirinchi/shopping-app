const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

app.get("/products", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM products");
      res.json(result.rows);
    } catch (err) {
      console.error("❌ Error fetching products:", err.message);
    }
  });
  

const { faker } = require("@faker-js/faker");
const pool = require("./db");

async function seedProducts() {
    try {
      console.log("🛠 Seeding products...");
  
      const insertPromises = [];
      for (let i = 0; i < 20; i++) {
        insertPromises.push(
          pool.query(
            "INSERT INTO products (name, price, image_url) VALUES ($1, $2, $3)",
            [faker.commerce.productName(), faker.commerce.price(), faker.image.url()]
          )
        );
      }
  
      await Promise.all(insertPromises); // Ensures all queries complete
      console.log("✅ Seeded 20 products!");
  
    } catch (err) {
      console.error("❌ Error seeding products:", err);
    }
  }
  

// Run this once to add fake data
seedProducts();


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
