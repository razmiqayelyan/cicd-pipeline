const express = require('express')

const app = express()


app.get("/", (req, res) => {
    res.json({
        status:200,
        message:"Welcome to Razos API"
    })
})

app.get("/r/api", (req,res)=>{
    res.json({
        status:200,
        message:"This is custom API url created by @razmiqayelyan to check ci/cd"
    })
})


app.listen(8080, () => {
    console.log("Razos server is successfully running.")
})