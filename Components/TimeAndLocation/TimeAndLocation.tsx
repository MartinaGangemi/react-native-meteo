import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const TimeAndLocation = () => {
  return (
    <View style={{marginTop: 15, alignItems: 'center'}}>
      <Text style={styles.todayText}>Today</Text>
      <Text style={styles.locationText}>Luogo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todayText: {
    color: 'white',
    fontSize: 20,
  },
  locationText: {color: 'white', fontSize: 30, textTransform: 'uppercase'},
});

export default TimeAndLocation;
