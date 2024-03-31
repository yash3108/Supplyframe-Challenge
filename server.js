const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('./errors/errorHandler');
const router = require('./routes/root');
const router_404 = require('./routes/404');
const PORT = process.env.PORT || 3500;

app.set('view engine', 'ejs');

//serve static files
app.use('/', express.static(path.join(__dirname, 'public')));

//routes
app.use('/', router);

//404
app.use('*', router_404);

//Error Handling
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));