import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
export default function Screen_02() {
  return (
    <LinearGradient 
    style={styles.container} 
    colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
    locations={[0, 0.3, 0.85, 1]}>
      <View style={styles.ellipse}/>
      <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      <Text style={styles.text}>We will help you to grow your business using online server</Text>
      <View style={styles.buttonContainer}>
            <Pressable style={styles.button}><Text style={styles.buttonText}>Login</Text></Pressable>
            <Pressable style={styles.button}><Text style={styles.buttonText}>Sign Up</Text></Pressable>
      </View>
      <Text style={styles.footer}>HOW WE WORK?</Text>
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
        width: '100%',
    },
    ellipse: {
        width: 160,
        height: 160,
        borderRadius: 100,
        backgroundColor: '#C7F4F6',
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
    },
    footer: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: 'uppercase',
    }
})