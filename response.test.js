const { getCoffeeRecipe } = require('./controller/coffeeController')

//test case for checking api retireval by validating passed drink id and fetched drink id 
test('retrieves data through api call for the given drink id only', async () => {
    let drinkId = 12770; //drink id to be passed
    const payload = await getCoffeeRecipe(drinkId); //payload received from api
    expect(payload.id).toBe(drinkId); //validating
});