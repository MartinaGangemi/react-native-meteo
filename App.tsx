/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import TopButtons from './Components/TopButtons';
import InputComponent from './Components/InputComponent';
import TimeAndLocation from './Components/TimeAndLocation';
import Details from './Components/Details';
import DailyForecast from './Components/DailyForecast';

import getFormattedWeatherData from './Services/WeatherServices';
import {variables} from './Components/variables';
const App = () => {
    const [query, setQuery] = useState<string>('london');

    const [weather, setWeather] = useState<any | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData(query).then((data) => {
                setWeather(data);

                console.log(weather);
            });
        };

        fetchWeather();
    }, [query]);

    return (
        <LinearGradient
            colors={[
                variables.primaryBackground,
                variables.secondaryBackground,
            ]}
            style={styles.linearGradient}>
            <TopButtons setQuery={setQuery}></TopButtons>
            <InputComponent setQuery={setQuery}></InputComponent>
            {weather && (
                <View>
                    <TimeAndLocation weather={weather}></TimeAndLocation>
                    <Details weather={weather}></Details>
                    <DailyForecast
                        weather={weather.dailyForecast}></DailyForecast>
                </View>
            )}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        padding: 7,
    },
});

export default App;
