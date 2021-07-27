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

const useStore = create((set) => ({
  meals: meals,
  filteredMeals: meals,
  favoriteMeals: [],
  toggleFavoriteMeal: (meal) =>
    set((state) => toggleFavoriteMeal(meal, state.favoriteMeals)),
  resetFilteredMeals: () => set({ filteredMeals: meals }),
}));

export default useStore;
