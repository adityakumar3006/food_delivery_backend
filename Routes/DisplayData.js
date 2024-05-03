const express = require("express");
const router = express.Router();
const fetchData = require("../db");

router.post("/foodData", async (req, res) => {
    try {
        const [foodData, categoryData] = await fetchData();
        res.send([foodData, categoryData]);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).send("Server error");
    }
});

module.exports = router;