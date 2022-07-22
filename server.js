// dotenv 
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { requestLogger } = require('./core/helpers/logger');
const { applyRoutes } = require('./core/utils');

const app = express();
// public view
app.set('view engine', 'ejs');

// url encoded
app.use(bodyParser.urlencoded({ extended: false }));
// json
app.use(bodyParser.json());
app.use(requestLogger);
//api router
const apiRoutes = require('./api/');
const apiRouter = express.Router();
app.use('/api', applyRoutes(apiRouter,apiRoutes));

app.get("/",(req,res)=>{
    res.render("index");
});

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!<br>'+err.message);
})

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});
// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
})