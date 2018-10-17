import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  controlContainer: Platform.select({
    ios: {
      padding: 16,
      backgroundColor: '#fff',
    },
    android: {
      backgroundColor: '#fafafa',
      display: 'flex',
      flexDirection: 'row',
      minHeight: 48,
    },
  }),
  tabContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.4,
  },
});
