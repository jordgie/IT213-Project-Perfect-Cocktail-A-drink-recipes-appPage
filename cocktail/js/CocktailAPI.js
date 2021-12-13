class CocktailAPI{

    async getDrinksByName(name) {
        // Search by name
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        // Returns a json response
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get recipes by ingredient
    async getDrinksByIngredient(ingredient) {
        // Search by Ingredient
        const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Wait for response then return JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
}