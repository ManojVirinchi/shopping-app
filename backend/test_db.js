const pool = require("./db");

async function testDB() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Database is working!", res.rows);
  } catch (err) {
    console.error("❌ Database connection failed", err);
  }
}

testDB();
