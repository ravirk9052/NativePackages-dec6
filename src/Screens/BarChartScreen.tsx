import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

export default class BarChartScreen extends Component {
  render() {
    const barData = [
      {
        value: 100,
        label: 'Mon',
        frontColor: '#FAA502',
        topLabelComponent: () => <Text style={styles.barTextStyle}>100</Text>,
      },
      {
        value: 20,
        label: 'Tue',
        frontColor: '#46FDFF',
        topLabelComponent: () => <Text style={styles.barTextStyle}>20</Text>,
      },
      {
        value: 120,
        label: 'Wed',
        frontColor: '#1B8000',
        topLabelComponent: () => <Text style={styles.barTextStyle}>120</Text>,
      },
      {
        value: 40,
        label: 'Thu',
        frontColor: '#7F1580',
        topLabelComponent: () => <Text style={styles.barTextStyle}>40</Text>,
      },
      {
        value: 80,
        label: 'Fri',
        frontColor: '#177AD5',
        topLabelComponent: () => <Text style={styles.barTextStyle}>80</Text>,
      },
    ];
    return (
      <View style={styles.barContainer}>
        <View style={styles.barChartStyles}>
          <BarChart
            data={barData}
            isAnimated
            // isThreeD
            roundedTop
            barWidth={30}
            noOfSections={5}
            maxValue={150}
            topLabelTextStyle={20}
            onPress={(item: {},index: number) => console.log('50',item)}
            xAxisLabelTextStyle={styles.xAxisStyle}
            yAxisTextStyle={styles.yAxisStyle}
            // showLine
            // showGradient
            // showFractionalValues
            // showYAxisIndices
            // showXAxisIndices
            // hideRules
            // gradientColor={'#FFEEFE'}
            // backgroundColor={'#FECF9E'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barChartStyles: {
    // flex: 1,
    // borderWidth:1,
    // margin: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  barTextStyle: {
    color: '#FAA502',
    marginBottom: 6,
    fontSize: 16,
  },
  barContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  xAxisStyle: {
    // color: 'red',
    fontWeight: 600,
    fontSize: 14
  },
  yAxisStyle: {
    fontWeight: 600,
    fontSize: 14
  }
});
