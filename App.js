import React from 'react';
import { View, StyleSheet } from 'react-native';
import SMSDetector from './SMSDetector';

const App = () => {
  return (
    <View style={styles.container}>
      <SMSDetector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

