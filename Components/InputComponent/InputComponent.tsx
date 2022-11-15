import React, {useState} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';
import {Button, InputItem} from 'antd-mobile-rn';

const InputComponent = ({setQuery}: any) => {
  const [city, setCity] = useState('');

  const onChangeSetHandler = (city: string) => {
    setCity(city);
  };

  const searchCities = (): any => {
    if (city !== '') {
      setQuery(city);
      setCity(' ');
      Keyboard.dismiss();
    }
  };

  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <InputItem
        style={styles.input}
        value={city}
        onChange={onChangeSetHandler}
        onSubmitEditing={searchCities}
        returnKeyType="search"
        placeholder="Search for cities..."
      />
      <Button style={styles.button} onClick={searchCities} type="primary">
        Search
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
    width: '70%',
  },
  button: {
    height: 50,
    width: '27%',
  },
});

export default InputComponent;
