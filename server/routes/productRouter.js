const express = require("express");
const products = require("../data");

const router = express.Router({ mergeParams: true });
router
  .route("/")
  .get((req, res) =>
    req.query.search
      ? res.send(
          JSON.stringify(
            products.filter(
              (item) =>
                item.tags.includes(req.query.search.toLowerCase()) ||
                item.name.toLowerCase().includes(req.query.search.toLowerCase())
            )
          )
        )
      : res.send(JSON.stringify(products))
  );

module.exports = router;
