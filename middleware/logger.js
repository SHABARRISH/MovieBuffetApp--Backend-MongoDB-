const logRequest = (req, res, next) => {
    console.log(`Logging Request:: URL: ${req.originalUrl} - METHOD: ${req.method} - IP:${req.ip}`);
    next();
  }
  
  module.exports = {
    logRequest
  }