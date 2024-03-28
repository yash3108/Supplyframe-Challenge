const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('./errors/errorHandler')
const PORT = process.env.PORT || 3500;

//serve static files
// app.use('/', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

//routes
app.use('/', require('./routes/root'));

//404
app.use('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        // res.sendFile(path.join(__dirname, 'view', '404.html'));
        res.render(path.join(__dirname, 'view', 'pages', '404'))
    } else {
        res.type('txt').send("404 File not found");
    }
})

//Error Handling
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));