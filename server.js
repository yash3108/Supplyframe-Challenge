const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('./errors/errorHandler')
const router = require('./routes/root')
const PORT = process.env.PORT || 3500;

app.set('view engine', 'ejs');

//serve static files
app.use('/', express.static(path.join(__dirname, 'public')));

//routes
app.use('/', router);

//404
app.use('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.render(path.join(__dirname, 'view', 'pages', '404'))
    } else {
        res.type('txt').send("404 Page Not Found");
    }
})

//Error Handling
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));