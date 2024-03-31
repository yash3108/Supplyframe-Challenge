//fetch data from data base (json file)
const data = {
    coffee: require('../model/coffee.json'),
    setCoffee: function (data) { this.coffee = data }
}

//get the coffee menu
const getAllCoffee = () => {
    return (data);
}

//get the recipe through api call
const getCoffeeRecipe = async (drinkId) => {

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkId); //fetching api response
    const data = await response.json(); //fetching data from response
    const payload = {
        id: parseInt(data.drinks[0].idDrink), //drink id
        image: data.drinks[0].strDrinkThumb, //drink image
        ingredients: getIngredients(data.drinks[0]), //get ingredients
        measurements: getMeasurements(data.drinks[0]), //get measurements
        recipe: getRecipe(data.drinks[0]) //get recipe
    }
    return (payload); //sending back the payload
}

//extract ingredients from the api response
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

//extract measurements from the api response
const getMeasurements = (raw_data) => {
    const measurements = []
    for (let i = 1; i < 16; i++) {
        if (raw_data[`strMeasure${i}`] == null) {
            break;
        }
        
        //concat measurement with the corresponding ingredient
        measurements[i] = raw_data[`strMeasure${i}`] + ' ' + raw_data[`strIngredient${i}`];
    }
    return (measurements);
}

//extract recipe from the api response
const getRecipe = (raw_data) => {
    const recipe = raw_data.strInstructions.split(". ");
    return (recipe);
}

//export the coffee menu and recipe
module.exports = { getAllCoffee, getCoffeeRecipe };