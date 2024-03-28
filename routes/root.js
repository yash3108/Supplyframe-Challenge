const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/home(.html)?', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'view', 'home.html'));
    res.render(path.join(__dirname, '..', 'view', 'pages', 'home'));
});

router.route('^/page1(.html)?')
    .get((req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'view', 'page1.html'))
        res.render(path.join(__dirname, '..', 'view', 'pages', 'page1'));
    });

router.route('^/page2(.html)?')
    .get((req, res) => {
        // res.sendFile(path.join(__dirname, '..', 'view', 'page2.html'))
        res.render(path.join(__dirname, '..', 'view', 'pages', 'page2'));
    });

module.exports = router;