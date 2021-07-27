import create from 'zustand';
import { meals } from '../data/dummy-data';

const toggleFavoriteMeal = (meal, favoriteMeals) => {
  const resultFavMeals = [...favoriteMeals];
  const mealIndex = resultFavMeals.findIndex(
    (curMeal) => curMeal.id === meal.id
  );
  if (mealIndex >= 0) resultFavMeals.splice(mealIndex, 1);
  else resultFavMeals.push(meal);
  return { favoriteMeals: resultFavMeals };
};

const saveFiltersAndUpdateFilteredMeals = (filters, meals) => {
  const filteredMeals = meals.filter((meal) => {
    if (
      (filters.glutenFree && !meal.isGlutenFree) ||
      (filters.vegan && !meal.isVegan) ||
      (filters.vegetarian && !meal.isVegetarian) ||
      (filters.lactoseFree && !meal.isLactoseFree)
    )
      return false;
    return true;
  });

  return { filters, filteredMeals };
};

const useStore = create((set) => ({
  meals: meals,
  filteredMeals: meals,
  favoriteMeals: [],
  filters: {},
  toggleFavoriteMeal: (meal) =>
    set((state) => toggleFavoriteMeal(meal, state.favoriteMeals)),
  resetFilteredMeals: () => set({ filteredMeals: meals }),
  saveFiltersAndUpdateFilteredMeals: (filters) =>
    set((state) => saveFiltersAndUpdateFilteredMeals(filters, state.meals)),
}));

export default useStore;
