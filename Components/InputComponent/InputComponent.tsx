import React, {useState} from 'react';
import {StyleSheet, View, Keyboard, Text} from 'react-native';
import {Button, InputItem} from 'antd-mobile-rn';
import {variables} from '../variables';

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
                <Text style={styles.textButton}>Search</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: variables.primary,
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
    textButton: {
        textTransform: 'uppercase',
    },
});

export default InputComponent;
