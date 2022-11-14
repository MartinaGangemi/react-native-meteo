import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Flex} from 'antd-mobile-rn';

import globalStyles from '../globalStyles';

interface Props {
  weather: any;
}

const DailyForecast = ({weather}: Props) => {
  return (
    <View style={{marginTop: 15}}>
      <Text style={styles.whiteTitle}>Daily Forecast</Text>
      <Flex>
        {weather.map((item: any, i: number) => (
          <Flex.Item key={i} style={{alignItems: 'center'}}>
            <Text style={globalStyles.textWhite}>{item.title}</Text>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'http://openweathermap.org/img/wn/' + item.icon + '@2x.png',
              }}
            />
            <Text style={globalStyles.textWhite}>{item.temp.toFixed()}°</Text>
          </Flex.Item>
        ))}
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
  },
  whiteTitle: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textTransform: 'uppercase',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
});

export default DailyForecast;
