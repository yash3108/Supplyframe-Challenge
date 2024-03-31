const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllCoffee, getCoffeeRecipe } = require('../controller/coffeeController') // import controller

// routing for caching
router.route('/service-worker.js')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'service-worker.js'));
    });

//routing for home page
router.get('^/$|/home(.html)?', (req, res) => {
    res.status(200);
    res.render(path.join(__dirname, '..', 'view', 'pages', 'home'));
});

//routing for coffee menu page
router.route('^/page1(.html)?')
    .get((req, res) => {
        const cData = getAllCoffee(req, res).coffee //get coffee menu
        res.status(200);
        res.render(path.join(__dirname, '..', 'view', 'pages', 'page1'), { coffeeData: cData });
    });

//routing for recipe page    
router.route('^/page2(.html)?')
    .get(async (req, res) => {
        if (req.query.id) {
            let id = req.query.id; //drink id from url param
            let drinkName = req.query.name; //drink name from url param
            const recipe = await getCoffeeRecipe(id); //get recipe from api call
            recipe.name = drinkName;
            res.render(path.join(__dirname, '..', 'view', 'pages', 'page2'), recipe);
            return;
        }
        res.status(200);
        res.render(path.join(__dirname, '..', 'view', 'pages', '404'));
    });

module.exports = router;