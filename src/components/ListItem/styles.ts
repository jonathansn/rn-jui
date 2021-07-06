import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  },
  label: {
    color: colors.textSecondary,
    fontSize: 10,
    paddingBottom: 5,
  },
  divider: {
    borderBottomColor: colors.textSecondary,
    borderBottomWidth: 1,
    marginTop: 10,
  },
});