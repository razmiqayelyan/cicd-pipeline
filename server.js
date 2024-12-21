const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Welcome to Razos API Page!!!"
    });
});

app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ];
    res.json(users);
});

app.get("/products", (req, res) => {
    const products = [
        { id: 1, name: "Laptop", price: 800 },
        { id: 2, name: "Smartphone", price: 500 }
    ];
    res.json(products);
});

app.get("/about", (req, res) => {
    res.send("About Razos API Service");
});

app.listen(8080, () => {
    console.log("Razos server is successfully running on port 8080.");
});
