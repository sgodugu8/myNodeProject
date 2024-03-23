/* Soujanya Godugu */
/* 1226809885 */
/* 02/03/2024 */

const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  
});

// Serve the form
app.get('/', (req, res) => {
    res. render('form') ;
    
    });
    
// Handle form submissions
    app. post('/submit', (req, res) => {
    console. log(req.body); // This will log form data to console
    res. redirect('/');
    
    });