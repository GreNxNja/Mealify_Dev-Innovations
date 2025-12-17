const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchMeals = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    throw new Error('Failed to fetch meals');
  }
};

export const getMealDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    throw new Error('Failed to fetch meal details');
  }
};