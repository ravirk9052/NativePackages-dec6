import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import BarChartScreen from './src/Screens/BarChartScreen';
import ChartScreen from './src/Screens/ChartScreen';
import LineChartScreen from './src/Screens/LineChartScreen';
import DataSwiper from './src/Screens/DataSwiper';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            {/* <Text>App</Text> */}
            <ChartScreen />
            <BarChartScreen />
            <LineChartScreen />
          </View>
          <DataSwiper />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
