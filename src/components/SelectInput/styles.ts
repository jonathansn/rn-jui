import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 5,
    height: 45,
    borderBottomWidth: 0.8,
    borderBottomColor: colors.textSecondary,
  },
  label: {
    fontSize: 10,
    color: colors.textSecondary
  },
  value: {
    fontSize: 14,
    paddingTop: 5,
    color: colors.text
  }
});