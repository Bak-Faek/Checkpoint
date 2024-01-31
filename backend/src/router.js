const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Import auth services for security operations
const { hashPassword } = require("./services/Auth");

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const candleControllers = require("./controllers/candleControllers");
const userControllers = require("./controllers/userControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/candle", candleControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/candle/:id", candleControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/candle/add", candleControllers.add);

// Route to edit an item
router.put("/candle/:id/update", candleControllers.edit);

// Route to delete an item
router.delete("/candle/:id/delete", candleControllers.deleteById);

// Route to add a new user
router.post("/user", hashPassword, userControllers.add);

// Import authControllers module for handling auth-related operations
const authControllers = require("./controllers/authControllers");

// Route to login
router.post("/login", authControllers.login);
/* ************************************************************************* */

module.exports = router;
