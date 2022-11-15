import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Flex, InputItem} from 'antd-mobile-rn';
import {log} from 'console';

interface Props {
  setQuery: any;
}

const InputComponent = ({setQuery}: Props) => {
  const [city, setCity] = useState('');

  const onChangeSetHandler = (city: string) => {
    setCity(city);
  };

  const clicca = (): any => {
    if (city !== '') {
      setQuery(city);
      setCity(' ');
    }
  };

  return (
    <View style={{flexDirection: 'row', marginTop: 15}}>
      <InputItem
        style={styles.input}
        value={city}
        onChange={onChangeSetHandler}
        placeholder="Search for cities..."
      />
      <Button style={styles.button} onClick={clicca} type="primary">
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
