const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const AuthRouter = require('./routes/AuthRouter.js')


const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use('/app', AppRouter);
app.use('/auth', AuthRouter);
app.use(passport.initialize());


app.get("/", async (request, response) => {
    response.send("hello =^.^= ");
})

app.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/'); 
})

app.use( '/',(err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ message: err.message });
});

app.listen(PORT, () => { 
    console.log(`Express web server listening on port ${PORT}`);
  });
