import create from 'zustand';
import { meals } from '../data/dummy-data';

const useStore = create((set) => ({
  meals: meals,
  filteredMeals: meals,
  favoriteMeals: [],
  resetFilteredMeals: () => set({ filteredMeals: meals }),
}));

export default useStore;
