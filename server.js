
// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static('public'));

// Route for rendering the index.ejs template
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server

app.listen(PORT, () => {
    console.log(`Its Up !!! ${PORT}`);
});