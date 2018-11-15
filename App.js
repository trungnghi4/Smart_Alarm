import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import Map from './Map';
import ListAlarm from './ListAlarm';
import SetAlarm from './SetAlarm';
import MapStackNavigator from './MapStackNavigator';

const TravelAlarmDrawer = DrawerNavigator({
  MapStackNavigator: {screen: MapStackNavigator},
  ListAlarm: {screen: ListAlarm},
  }
);

export default TravelAlarmDrawer;
