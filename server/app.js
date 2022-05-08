const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/productRouter");

const hostname = "localhost";
const port = 3035;

const app = express();
app.use(cors());

app.use("/api/v1/products", productRouter);
app.use("/", (req, res) =>
  res.send(
    `Products route: <a href="http://${hostname}:${port}/api/v1/products">http://${hostname}:${port}/api/v1/products</a>`
  )
);

const server = app.listen(port, () =>
  console.log(`🚀 Server is running on port http://${hostname}:${port}`)
);
