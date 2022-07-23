// dotenv 
require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { requestLogger } from './core/helpers/logger';
import { applyRoutes } from './core/utils';
import apiRoutes from './components/routes';
const app = express();
// public view
app.set('view engine', 'ejs');

// url encoded
app.use(bodyParser.urlencoded({ extended: false }));
// json
app.use(bodyParser.json());
app.use(requestLogger);
//api router
const apiRouter = express.Router();
app.use('/api', applyRoutes(apiRouter, apiRoutes));

app.get("/", (req, res) => {
    res.render("index");
});

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!<br>' + err.message);
})

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});

export { app };