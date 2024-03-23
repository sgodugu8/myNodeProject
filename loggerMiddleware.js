/* Soujanya Godugu */
/* 1226809885 */
/* 03/23/2024 */

// Define the middleware function
const loggerMiddleware = (req, res, next) => {
    // Log the request method and URL to the console
    console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
    // Call the next middleware function
    next();
};


module.exports = loggerMiddleware;