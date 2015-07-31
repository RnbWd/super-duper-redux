import includes from 'lodash/collection/includes';
import reduce from 'lodash/collection/reduce';

function selectShoppingList(store) {
  const meals = store.meals.filter((meal) => {
    return includes(store.shoppingList, meal.id);
  });

  const ingredients = reduce(meals, (ingredients, meal) => {
    meal.ingredientIds.forEach((ingredientId) => {
      let ingredient;

      ingredient = ingredients.find((ingredient) => {
        return ingredient.id === ingredientId;
      });

      if (ingredient) {
        ingredient.count += 1;
      } else {
        ingredient = store.ingredients.find((ingredient) => {
          return ingredient.id === ingredientId;
        });
        ingredient.count = 1;
        ingredients.push(ingredient);
      }
    });

    return ingredients;
  }, []);

  return { meals: meals, ingredients: ingredients };
}

export {
  selectShoppingList
}
