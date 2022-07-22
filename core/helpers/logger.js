module.exports.requestLogger = (req, res, next) => {
   //details of the request with timestamp
    console.warn(`==> ${new Date().toLocaleString()} ${req.method} ${req.url} `);
    next();
}