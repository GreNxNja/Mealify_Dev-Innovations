import { Heart } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import { getMealDetails } from '../services/api';
import { colors } from '../theme/colors';
import { isFavorite, removeFavorite, saveFavorite } from '../utils/storage';

export default function DetailsScreen({ route }) {
  const { mealId } = route.params;
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    loadMeal();
    checkFavorite();
  }, []);

  const loadMeal = async () => {
    try {
      setLoading(true);
      const data = await getMealDetails(mealId);
      setMeal(data);
    } catch (err) {
      setError('Failed to load meal details');
    } finally {
      setLoading(false);
    }
  };

  const checkFavorite = async () => {
    const isFav = await isFavorite(mealId);
    setFavorite(isFav);
  };

  const toggleFavorite = async () => {
    if (favorite) {
      await removeFavorite(mealId);
      setFavorite(false);
    } else {
      await saveFavorite(meal);
      setFavorite(true);
    }
  };

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!meal) return <ErrorMessage message="Meal not found" />;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.category}>{meal.strCategory} • {meal.strArea}</Text>
          </View>
          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteBtn}>
            <Heart 
              size={28} 
              color={favorite ? colors.primary : colors.textLight}
              fill={favorite ? colors.primary : 'transparent'}
              strokeWidth={2}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        {getIngredients().map((item, index) => (
          <Text key={index} style={styles.ingredient}>• {item}</Text>
        ))}

        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.instructions}>{meal.strInstructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    fontFamily: 'Inter',
  },
  category: {
    fontSize: 16,
    color: colors.textLight,
    fontFamily: 'Inter',
  },
  favoriteBtn: {
    padding: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginTop: 20,
    marginBottom: 12,
    fontFamily: 'Inter',
  },
  ingredient: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 6,
    fontFamily: 'Inter',
  },
  instructions: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    fontFamily: 'Inter',
  },
});