const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "ShopEasy backend is running" });
});

app.use("/api/products", productsRouter);

app.post("/api/cart", (req, res) => {
  const { productId, quantity } = req.body;

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      error: "A valid productId is required",
    });
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({
      error: "Quantity must be a positive integer",
    });
  }

  res.status(201).json({
    message: "Cart item accepted",
    productId,
    quantity,
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
