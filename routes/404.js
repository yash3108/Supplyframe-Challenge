const express = require('express');
const router = express.Router();
const path = require('path');

router.route('*')
    .all((req, res) => {
        res.status(404);
        if (req.accepts('html')) {
            res.render(path.join(__dirname, '..', 'view', 'pages', '404'));
        } else {
            res.type('txt').send("404 Page Not Found");
        }
    });

module.exports = router;