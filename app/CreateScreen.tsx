import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const setStringValue = async (value: string) => {
  try {
    await AsyncStorage.setItem('key', value);
  } catch (e) {
    console.log('error:', e);
  }
  console.log('Done.');
};
const CreateScreen = () => {
  const [value, setValue] = useState<string>('');
  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unFillColor="#FFFFFF"
        text="Custom Checkbox"
        iconStyle={{ borderColor: 'red' }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{ fontFamily: 'JosefinSans-Regular' }}
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <KeyboardAvoidingView style={styles.nameInputContainer}>
        <Text style={styles.nameInputText}>Enter Name:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={setValue}
          onSubmitEditing={() => {
            void setStringValue(value.trim());
          }}
          value={value}
        ></TextInput>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInputContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
  },
  nameInputText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'flex-start',
  },
  nameInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 200,
    height: 40,
    marginTop: 8,
    paddingHorizontal: 8,
  },
});
export default CreateScreen;
