import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {formatToLocalTime} from '../../Services/WeatherServices';
import globalStyles from '../globalStyles';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  weather: any;
}
const Details = ({weather}: Props) => {
  return (
    <View style={{marginTop: 25, alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 24}}>{weather.description}</Text>
      <Flex>
        <Flex.Item style={{alignItems: 'center'}}>
          <Image
            style={styles.icon}
            source={{
              uri:
                'http://openweathermap.org/img/wn/' + weather.icon + '@2x.png',
            }}
          />
          <Text style={{color: 'white', fontSize: 30}}>
            {' '}
            {weather.temp.toFixed()}°
          </Text>
        </Flex.Item>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>
            <FontAwesome5 name="temperature-low" size={22} />{' '}
            {weather.feels_like.toFixed()}°
          </Text>
          <Text style={globalStyles.textWhite}>
            <FontAwesome5 name="cloud-rain" size={22} /> {weather.humidity} %
          </Text>
          <Text style={globalStyles.textWhite}>
            <FontAwesome5 name="wind" size={22} /> {weather.speed}%
          </Text>
        </Flex.Item>
      </Flex>

      <Flex wrap="wrap" style={{marginTop: 20}}>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>
            <Feather name="sunrise" size={22} />
            {'  '}
            {formatToLocalTime(weather.sunrise, 'hh:mm')}
          </Text>
        </Flex.Item>

        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>
            <Feather name="sunset" size={22} />
            {'  '}
            {formatToLocalTime(weather.sunset, 'hh:mm')}
          </Text>
        </Flex.Item>
        {/* <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>|</Text>
        </Flex.Item> */}
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>
            <FontAwesome5 name="temperature-high" size={22} />
            {'  '}
            {weather.temp_max.toFixed()}°
          </Text>
        </Flex.Item>
        {/* <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>|</Text>
        </Flex.Item> */}
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>
            <FontAwesome5 name="temperature-low" size={22} /> {'  '}
            {weather.temp_min.toFixed()}°
          </Text>
        </Flex.Item>
      </Flex>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
  },
});
export default Details;
