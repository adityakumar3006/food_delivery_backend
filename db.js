const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;
const fetchData = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("food_items");
        const foodData = await foodCollection.find({}).toArray();

        const categoryCollection = mongoose.connection.db.collection("food_category");
        const categoryData = await categoryCollection.find({}).toArray();

        return [foodData, categoryData];
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err; // Throw the error so that it can be caught by the caller
    }
};

module.exports = fetchData;
