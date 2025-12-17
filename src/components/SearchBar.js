import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../theme/colors';

export default function SearchBar({ value, onChangeText, onSubmit }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search for meals..."
      placeholderTextColor={colors.textLight}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmit}
      returnKeyType="search"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
});