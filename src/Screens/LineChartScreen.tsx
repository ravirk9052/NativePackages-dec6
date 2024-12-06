import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {LineChart} from 'react-native-gifted-charts';

export default class LineChartScreen extends Component {
  render() {
    const lineData = [
      {
        value: 100,
        label: 'Mon',
        // dataPointText: '100',
      },
      {
        value: 150,
        label: 'Tue',
        // dataPointText: '90',
      },
      {
        value: 120,
        label: 'Wed',
        // dataPointText: '120',
      },
      {
        value: 90,
        label: 'Thu',
        // dataPointText: '110',
      },
      {
        value: 190,
        label: 'Fri',
        // dataPointText: '140',
      },
    ];
    return (
      <View style={styles.lineContainer}>
        <View style={styles.mainContainer}>
          <LineChart
            data={lineData}
            color={'black'}
            thickness={6}
            isAnimated
            dataPointsColor="green"
            dataPointsHeight={10}
            textFontSize={18}
            textColor="#0BA5A4"
            animateOnDataChange
            animationDuration={1000}
            areaChart
            noOfSections={5}
            maxValue={300}
            startFillColor="#ACE445"
            startOpacity={1}
            endOpacity={0.3}
            curved
            xAxisLabelTextStyle={styles.xAxisStyle}
            yAxisTextStyle={styles.yAxisStyle}
            // backgroundColor="#414141"

            pointerConfig={{}}
            //   hideDataPoints
            //   hideYAxisText
            //   yAxisColor={'#0BA5A4'}
            //   showVerticalLines
            //   verticalLinesColor={'red'}
            //   xAxisColor={'#0BA5A4'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
    padding: 5,
  },
  barTextStyle: {
    color: '#FAA502',
    marginBottom: 6,
    fontSize: 16,
  },
  lineContainer: {
    // borderWidth: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
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
