import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface StreakItemProps {
  id?: uuid;
  name: string;
}

const StreakItem: React.FC<StreakItemProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textStyle}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StreakItem;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 2,
  },
  textStyle: {
    fontSize: 20,
  },
});
