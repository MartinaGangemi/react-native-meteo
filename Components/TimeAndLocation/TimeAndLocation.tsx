import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
interface Props {
  weather: any;
}
const TimeAndLocation = ({weather}: Props) => {
  return (
    <View style={{marginTop: 25, alignItems: 'center'}}>
      <Text style={styles.todayText}>Today</Text>
      <Text style={styles.locationText}>
        {weather.name}, {weather.country}
      </Text>
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
