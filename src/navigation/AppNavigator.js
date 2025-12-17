import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heart } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Inter',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Mealify',
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Favorites')}
                style={{ marginRight: 10 }}
              >
                <Heart size={24} color="#fff" fill="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{ title: 'Recipe Details' }}
        />
        <Stack.Screen 
          name="Favorites" 
          component={FavoritesScreen}
          options={{ title: 'My Favorites' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}