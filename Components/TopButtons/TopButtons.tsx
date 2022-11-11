import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Button, Flex} from 'antd-mobile-rn';

const TopButtons = () => {
  const cities = ['Torino', 'Sidney', 'Tokyo', 'Paris'];
  const cityMap = cities.map((city, i) => (
    <View key={i} style={{padding: 2}}>
      <Button type="primary">
        <Text style={{textTransform: 'uppercase'}}>{city}</Text>
      </Button>
    </View>
  ));
  return <Flex wrap="wrap">{cityMap}</Flex>;
};

const styles = StyleSheet.create({});

export default TopButtons;
