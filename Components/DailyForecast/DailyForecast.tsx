import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Flex} from 'antd-mobile-rn';

const DailyForecast = () => {
  return (
    <View style={{marginTop: 15}}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          marginTop: 20,
          marginBottom: 20,
          textTransform: 'uppercase',
          borderBottomWidth: 2,
          borderBottomColor: 'white',
        }}>
        Daily Forecast
      </Text>
      <Flex>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Mon</Text>
          <Image
            style={styles.icon}
            source={{
              uri: 'http://openweathermap.org/img/wn/01d@2x.png',
            }}
          />
          <Text style={{color: 'white', fontSize: 18}}>35°</Text>
        </Flex.Item>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Mon</Text>
          <Image
            style={styles.icon}
            source={{
              uri: 'http://openweathermap.org/img/wn/01d@2x.png',
            }}
          />
          <Text style={{color: 'white', fontSize: 18}}>35°</Text>
        </Flex.Item>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Mon</Text>
          <Image
            style={styles.icon}
            source={{
              uri: 'http://openweathermap.org/img/wn/01d@2x.png',
            }}
          />
          <Text style={{color: 'white', fontSize: 18}}>35°</Text>
        </Flex.Item>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Mon</Text>
          <Image
            style={styles.icon}
            source={{
              uri: 'http://openweathermap.org/img/wn/01d@2x.png',
            }}
          />
          <Text style={{color: 'white', fontSize: 18}}>35°</Text>
        </Flex.Item>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>Mon</Text>
          <Image
            style={styles.icon}
            source={{
              uri: 'http://openweathermap.org/img/wn/01d@2x.png',
            }}
          />
          <Text style={{color: 'white', fontSize: 18}}>35°</Text>
        </Flex.Item>
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 80,
    height: 80,
  },
});

export default DailyForecast;
