import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default class ChartScreen extends Component {
  render() {
    const pieData = [
      {value: 50, text: '25%'},
      {value: 25, text: '15%'},
      {value: 100, text: '50%'},
      {value: 15, text: '10%'},
    ];
    return (
      <>
        <View style={styles.pieContainer}>
          <PieChart
            data={pieData}
            donut
            radius={120}
            tooltipWidth={1}
            focusOnPress
            toggleFocusOnPress
            shadowColor="grey"
            innerCircleColor="#ffffff"
            innerRadius={105}
            
            // tooltipBorderRadius={0}
            showValuesAsLabels
            onPress={(item: {}, index: number) =>
              console.log('25', item, index)
            }
            centerLabelComponent={() => {
              return (
                <View style={styles.innerContainer}>
                  <Text>Total</Text>
                  <Text style={styles.innerAmount}>140.90k</Text>
                </View>
              );
            }}
          />

          <View style={styles.mainContainer}>
            <View style={styles.styleContainer}>
              <View style={styles.circle}></View>
              <Text> Excellent: 50%</Text>
            </View>
            <View style={styles.styleContainer}>
              <View style={[styles.circle, styles.circleFour]}></View>
              <Text> Good: 25%</Text>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.styleContainer}>
              <View style={[styles.circle, styles.circleTwo]}></View>
              <Text> Okay: 15%</Text>
            </View>
            <View style={styles.styleContainer}>
              <View style={[styles.circle, styles.circleThree]}></View>
              <Text> Poor: 10%</Text>
            </View>
          </View>
        </View>

       
      </>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    // borderWidth: 1,
    padding: 10,
    width: responsiveWidth(50),
    // width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerAmount: {
    fontWeight: 700,
    fontSize: 18,
  },
  circle: {
    height: 12,
    width: 12,
    backgroundColor: '#FAA502',
    borderRadius: 50,
  },
  circleTwo: {
    backgroundColor: '#1B8000',
  },
  circleThree: {
    backgroundColor: '#7F1580',
  },
  circleFour: {
    backgroundColor: '#46FDFF',
  },
  styleContainer: {
    flexDirection: 'row',
    width: responsiveWidth(30),
    // borderWidth: 1,
    // margin: 10,
    // textAlign: 'left',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
  },
  pieContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  }

});
