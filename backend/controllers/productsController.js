const pool = require("../db");

async function getProducts(req, res) {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id");

    res.json(result.rows);
  } catch (error) {
    console.error("Database query failed:", error);
    res.status(500).json({
      error: "Unable to fetch products",
    });
  }
}

module.exports = { getProducts };
