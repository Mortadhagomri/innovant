require("./db/mongoose");
const express = require('express');
const cors = require("cors")
const userRouter = require("./routes/users");
const bodyParser = require("body-parser")

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', userRouter);


app.listen(3030, () => {
    console.log('Serving on port 3030')
})
