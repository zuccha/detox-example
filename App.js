import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  const inputRef = useRef(null);
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <View style={styles.customInput}>
          <Text>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        onChangeText={setText}
        value={text}
        testID='hidden-input'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customInput: {
    borderWidth: 1,
    minWidth: 100,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  hiddenInput: {
    height: 0,
    width: 0,
  },
});
