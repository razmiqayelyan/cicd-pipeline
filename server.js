const express = require('express')

const app = express()


app.get("/", (req, res) => {
    res.json({
        status:200,
        message:"Welcome to Razos API Page"
    })
})


app.listen(8080, () => {
    console.log("Razos server is successfully running.")
})