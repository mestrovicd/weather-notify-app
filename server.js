require("dotenv").config();

const express = require("express");
const app = express();
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
const path = require("path");

app.use(express.static("public"));

app.get("/weather/:lat/:lon/:dt", async (req, res) => {
    try {
        const { lat, lon, dt } = req.params;
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const url = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
