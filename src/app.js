const express = require('express');
require('../src/db/conn');
const myRouter = require("./routers/myrouter");
const FemaleRank = require('../src/models/runner');
const port = process.env.PORT || 8080;


const app = express();
app.use(express.json());

// Call router
app.use(myRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});