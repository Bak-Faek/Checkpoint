const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const candleControllers = require("./controllers/candleControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/candle", candleControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/candle/:id", candleControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to delete an item
router.delete("/candle/:id", candleControllers.deleteById);

/* ************************************************************************* */

module.exports = router;
