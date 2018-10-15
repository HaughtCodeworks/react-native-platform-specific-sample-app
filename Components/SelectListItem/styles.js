import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  row: {
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.22)',
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    flex: 1,
    flexDirection: 'row',
    minHeight: 44,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  itemLabel: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: -0.4,
  },
});
