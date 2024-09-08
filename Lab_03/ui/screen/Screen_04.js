import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OTP_LENGTH = 6;

export default function Screen_04() {
    const otp = Array(OTP_LENGTH).fill('')

  return (
    <LinearGradient
      style={styles.container}
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      locations={[0, 0.3, 0.85, 1]}>
      <Text style={styles.bigTitle}>CODE</Text>
      <Text style={styles.title}>VERIFICATION</Text>
      <Text style={styles.text}>Enter ontime password sent on +849092605798</Text>
      <View style={styles.inputNumberContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.textInput}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  bigTitle: {
    fontSize: 70,
    fontWeight: "bold",
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: "bold",
  },
  inputNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    borderColor: "#000",
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    height: '100%',
    borderRightWidth: 1,
    borderColor: "#000",
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: 'uppercase',
}
});