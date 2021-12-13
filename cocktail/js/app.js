// Instance the Classes
const ui = new UI(),
    cocktail = new CocktailAPI();


// Create the Event Listeners
function eventListeners() {

    // Add event listener when form is submitted
    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }
    
}

eventListeners();



// Get cocktails function
function getCocktails(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;

    // Check something is on the search input
    if(searchTerm === '') {
        // Call User Interface print message
        ui.printMessage('Please add something into the form', 'danger');
    } else {
        // Server response from promise
        let serverResponse;

        // Type of search (ingredients, cocktails, or name)
        const type = document.querySelector('#type').value;

        // Evaluate the type of method and then execute the query


        switch(type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName( searchTerm );
                break;
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient( searchTerm );
                break;
        }

        // Query by the name of the drink

        serverResponse.then(cocktails => {
            if(cocktails.cocktails.drinks === null) {
                // Nothing exists
                ui.printMessage('There\'re no results, try a different term ', 'danger');
            } else {
                if(type === 'name') {
                    // Display with ingrdients
                    ui.displayDrinksWithIngredients( cocktails.cocktails.drinks );
                } else {
                    // Display without ingredients (category, alcohol, ingredient)
                    ui.displayDrink(cocktails.cocktails.drinks);
                }
            }
        })
    }

}