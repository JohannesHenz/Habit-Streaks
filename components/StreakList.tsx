import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StreakItem from './StreakItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';


const StreakList = () => {
  const [data, setData] = useState<string | null>(null);
const getMyStringValue = async () => {
  try {
    return await AsyncStorage.getItem('key')
  } catch(e) {
    console.log('error while reading from storage:', e);
    return '';
  }
  console.log('Read to Storage.')
}

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      (async () => {
        const v = await AsyncStorage.getItem('key');
        if (!cancelled) setData(v ?? "");
      })();
      return () => {
        cancelled = true; // avoid setState after unfocus/unmount
      };
    }, [])
  );

  return (
    <View>
      <Text>This is the start of the List:</Text>
      <Text>{data}</Text>
      <StreakItem name="Item_1" />
      <StreakItem name="Item_2" />
      <StreakItem name="Item_3" />
    </View>
  );
};

export default StreakList;

const styles = StyleSheet.create({});
