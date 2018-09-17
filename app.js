const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser());
app.listen(port, () => {
    console.log("listening on ${port}")
})
app.get('/', (req, res) => {
    queries.getall().then(result => { res.send(result) })
})