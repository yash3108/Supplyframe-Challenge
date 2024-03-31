const { getCoffeeRecipe } = require('./controller/coffeeController')

test('retrieves data through api call for the given drink id only', async () => {
    let drinkId = 12770;
    const payload = await getCoffeeRecipe(12770);
    expect(payload.id).toBe(drinkId);
});