import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Flex, InputItem} from 'antd-mobile-rn';

const InputComponent = () => {
  const [city, setCity] = useState('');

  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <InputItem
        style={styles.input}
        value={city}
        onChange={text => console.log(text)}
        placeholder="Search for cities..."
      />
      <Button
        style={styles.button}
        onPress={() => {
          console.log('hai cliccato');
        }}
        type="primary">
        clicca
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    opacity: 0.8,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 5,
    height: 50,
    padding: 5,
    fontSize: 12,
    width: '75%',
  },
  button: {
    height: 50,
    width: '22%',
  },
});

export default InputComponent;
