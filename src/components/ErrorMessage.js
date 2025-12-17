import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: colors.error,
    fontSize: 16,
    textAlign: 'center',
  },
});