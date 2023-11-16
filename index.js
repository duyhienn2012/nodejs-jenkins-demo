const express = require('express');
const app = express()

app.get('/contact', function (req, res) {
    res.send("Hello node")
})
app.listen(3000, function () {
    console.log("example app listening on port 3000");
})