import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
export default function Screen_01() {
  return (
    <LinearGradient  style={styles.container}
        colors={["#00CCF9", "#00CCF9"]}
    >
      <View style={styles.ellipse}/>
      <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      <Text style={styles.text}>We will help you to grow your business using online server</Text>
      <View style={styles.buttonContainer}>
            <Pressable style={styles.button}><Text style={styles.buttonText}>Login</Text></Pressable>
            <Pressable style={styles.button}><Text style={styles.buttonText}>Sign Up</Text></Pressable>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingHorizontal: 30,
      paddingVertical: 60,
      width: "100%"
    },
    ellipse: {
        width: 160,
        height: 160,
        borderRadius: 100,
        backgroundColor: '#00CCF9',
        borderBlockColor: 'black',
        borderWidth: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        width: 200,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: "bold",
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 140,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: 'uppercase',
    }
})