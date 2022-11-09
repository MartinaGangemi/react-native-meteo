/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import TopButtons from './Components/TopButtons';
import Input from './Components/Input';
import TimeAndLocation from './Components/TimeAndLocation';
import Details from './Components/Details';
import DailyForecast from './Components/DailyForecast';

const App = () => {
  return (
    <LinearGradient
      colors={['#0066ff', '#99ccff']}
      style={styles.linearGradient}>
      <View>
        <TopButtons></TopButtons>
        <Input></Input>
        <TimeAndLocation></TimeAndLocation>
        <Details></Details>
        <DailyForecast></DailyForecast>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    padding: 5,
  },
});

export default App;
