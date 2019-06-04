const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/app', AppRouter);
app.use('/auth', AuthRouter);
app.use(passport.initialize());


app.get("/hello", async (request, response) => {
    response.send("hello world");
})

app.listen(PORT, () => { 
    console.log(`Express web server listening on port ${PORT}`);
  });