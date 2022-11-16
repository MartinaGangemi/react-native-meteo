import React from 'react';
import {Text, View} from 'react-native';
import {Button, Flex} from 'antd-mobile-rn';

const TopButtons = ({setQuery}: any) => {
    const cities = ['Torino', 'Sidney', 'Tokyo', 'Paris'];
    const cityMap = cities.map((city, i) => (
        <View key={i} style={{padding: 2}}>
            <Button type="primary" onClick={() => setQuery(city)}>
                <Text style={{textTransform: 'uppercase'}}>{city}</Text>
            </Button>
        </View>
    ));
    return <Flex wrap="wrap">{cityMap}</Flex>;
};

export default TopButtons;
