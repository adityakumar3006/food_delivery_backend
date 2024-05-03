const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file
const port = process.env.PORT || 5000; // Use PORT environment variable or default to 5000
//FRONTEND_URL=https://dynamic-pixie-25914d.netlify.app/
const mongoDB = require("./db");

mongoDB();
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "https://dynamic-pixie-25914d.netlify.app"); // Use FRONTEND_URL environment variable
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

app.use(cors({
    origin: "https://dynamic-pixie-25914d.netlify.app" // Replace this with your Netlify frontend URL
}));
app.get("/", (req, res) => {
    res.send("hello aditya!!");
});
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.listen(port, () => {
    console.log(`App listening on ${port}`);
});
