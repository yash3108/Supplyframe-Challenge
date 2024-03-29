const data = {
    coffee: require('../model/coffee.json'),
    setCoffee: function (data) { this.coffee = data }
}

const getAllCoffee = (req, res) => {
    // getCoffeeRecipe(12770);
    return (data);
}

const getCoffeeRecipe = async (drinkId) => {

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkId);
    const data = await response.json();
    const payload = {
        image: data.drinks[0].strDrinkThumb,
        ingredients: getIngredients(data.drinks[0]),
        measurements: getMeasurements(data.drinks[0]),
        recipe: getRecipe(data.drinks[0])
    }
    return (payload);
}

const getIngredients = (raw_data) => {
    const ingredients = []
    for (let i = 1; i < 16; i++) {
        if (raw_data[`strIngredient${i}`] == null) {
            break;
        }
        ingredients[i] = raw_data[`strIngredient${i}`];
    }
    return (ingredients);
}

const getMeasurements = (raw_data) => {
    const measurements = []
    for (let i = 1; i < 16; i++) {
        if (raw_data[`strMeasure${i}`] == null) {
            break;
        }
        measurements[i] = raw_data[`strMeasure${i}`] + ' ' + raw_data[`strIngredient${i}`];
    }
    return (measurements);
}

const getRecipe = (raw_data) => {
    const recipe = raw_data.strInstructions.split(". ");
    return (recipe);
}
module.exports = { getAllCoffee, getCoffeeRecipe };