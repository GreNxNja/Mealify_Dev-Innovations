import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@mealify_favorites';

export const saveFavorite = async (meal) => {
  try {
    const favorites = await getFavorites();
    const updated = [...favorites, meal];
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Error saving favorite:', error);
    return false;
  }
};

export const removeFavorite = async (mealId) => {
  try {
    const favorites = await getFavorites();
    const updated = favorites.filter(meal => meal.idMeal !== mealId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Error removing favorite:', error);
    return false;
  }
};

export const getFavorites = async () => {
  try {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const isFavorite = async (mealId) => {
  const favorites = await getFavorites();
  return favorites.some(meal => meal.idMeal === mealId);
};