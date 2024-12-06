import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import { responsiveWidth } from 'react-native-responsive-dimensions';
export default class DataSwiper extends Component {
  render() {
    return (
      <Swiper style={styles.swiperContainer} autoplay>
        <View style={styles.swiper1}>
          <Text>Hello Swiper</Text>
        </View>
        <View style={styles.swiper1}>
          <Text>Hello Ravi</Text>
        </View>
        <View style={styles.swiper1}>
          <Text>Hello kiran</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
    swiperContainer: {
        height: 200,
        // width: responsiveWidth(50),
        
    },
  swiper1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
});
