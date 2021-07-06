import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  card: {
    width: '100%',
  },
  container: {
    width: '100%',
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5
  },
  content: {},
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.placeholder,
  }
});