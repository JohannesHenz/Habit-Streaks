import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StreakItem from './StreakItem';

const StreakList = () => {
  return (
    <View>
      <Text>This is the start of the List:</Text>
      <StreakItem name="Item_1" />
      <StreakItem name="Item_2" />
      <StreakItem name="Item_3" />
    </View>
  );
};

export default StreakList;

const styles = StyleSheet.create({});
