const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('./errors/errorHandler'); //For error handling
const router = require('./routes/root'); //For page routing
const router_404 = require('./routes/404'); //For unavailable page routing 
const PORT = process.env.PORT || 3500; //Port for server to listen

//set ejs as view engine
app.set('view engine', 'ejs');

//serve static files
app.use('/', express.static(path.join(__dirname, 'public')));

//routes
app.use('/', router);

//404 - routing unavailable routes
app.use('*', router_404);

//Error Handling
app.use(errorHandler);

//Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));