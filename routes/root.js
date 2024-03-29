const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllCoffee, getCoffeeRecipe } = require('../controller/coffeeController')

router.get('^/$|/home(.html)?', (req, res) => {
    res.render(path.join(__dirname, '..', 'view', 'pages', 'home'));
});

router.route('^/page1(.html)?')
    .get((req, res) => {
        const cData = getAllCoffee(req, res).coffee
        res.render(path.join(__dirname, '..', 'view', 'pages', 'page1'), { coffeeData: cData });
    });

router.route('^/page2(.html)?')
    .get(async (req, res) => {
        if (req.query.id) {
            let id = req.query.id;
            const recipe = await getCoffeeRecipe(id);
            res.render(path.join(__dirname, '..', 'view', 'pages', 'page2'), recipe);
            return;
        }
        res.render(path.join(__dirname, '..', 'view', 'pages', '404'));
    });

module.exports = router;