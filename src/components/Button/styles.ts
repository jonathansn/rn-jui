import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
  primaryContainer: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryChildren: {
    color: 'white',
  },
  defaultContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultChildren: {
    color: colors.secondary,
  },
  disabledContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.placeholder,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledChildren: {
    color: colors.placeholder,
  },
});