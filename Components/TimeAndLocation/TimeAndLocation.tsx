import React from 'react';
import {Text, View} from 'react-native';
const TimeAndLocation = () => {
  return (
    <View style={{marginTop: 15, alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 20}}>Today</Text>
      <Text style={{color: 'white', fontSize: 30, textTransform: 'uppercase'}}>
        Luogo
      </Text>
    </View>
  );
};

export default TimeAndLocation;
