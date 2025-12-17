import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import MealCard from '../components/MealCard';
import SearchBar from '../components/SearchBar';
import { searchMeals } from '../services/api';
import { colors } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    try {
      setLoading(true);
      setError(null);
      const results = await searchMeals(query);
      setMeals(results);
      if (results.length === 0) {
        setError('No meals found. Try another search!');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar 
        value={query}
        onChangeText={setQuery}
        onSubmit={handleSearch}
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <MealCard
            meal={item}
            onPress={() => navigation.navigate('Details', { mealId: item.idMeal })}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
});