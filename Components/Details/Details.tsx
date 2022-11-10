import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Flex} from 'antd-mobile-rn';

import globalStyles from '../globalStyles';
const Details = () => {
  return (
    <View style={{marginTop: 15, alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 20}}>Weather</Text>
      <Flex>
        <Flex.Item style={{alignItems: 'center'}}>
          <Image
            style={styles.icon}
            source={{
              uri: 'http://openweathermap.org/img/wn/01d@2x.png',
            }}
          />
          <Text style={{color: 'white', fontSize: 30}}> 26°</Text>
        </Flex.Item>
        <Flex.Item style={{alignItems: 'center'}}>
          <Text style={globalStyles.textWhite}>Percepite</Text>
          <Text style={globalStyles.textWhite}>Umidità</Text>
          <Text style={globalStyles.textWhite}>Vento</Text>
        </Flex.Item>
      </Flex>

      <Flex style={{marginTop: 15}}>
        <Flex.Item>
          <Text style={globalStyles.textWhite}>Rise:</Text>
        </Flex.Item>
        <Flex.Item>
          <Text style={globalStyles.textWhite}>|</Text>
        </Flex.Item>
        <Flex.Item>
          <Text style={globalStyles.textWhite}>Set</Text>
        </Flex.Item>
        <Flex.Item>
          <Text style={globalStyles.textWhite}>|</Text>
        </Flex.Item>
        <Flex.Item>
          <Text style={globalStyles.textWhite}>Max:</Text>
        </Flex.Item>
        <Flex.Item>
          <Text style={globalStyles.textWhite}>|</Text>
        </Flex.Item>
        <Flex.Item>
          <Text style={globalStyles.textWhite}>Min:</Text>
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
