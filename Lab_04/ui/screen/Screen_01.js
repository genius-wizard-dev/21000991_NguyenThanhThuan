import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React from 'react'

export default function Screen_01() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/avatar_user.png')} style={styles.inputIcon}/>
        <TextInput placeholder='Email' style={styles.inputEmail}/>
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/lock_icon.png')} style={styles.inputIcon}/>
        <TextInput placeholder='Password' style={styles.inputPassword} secureTextEntry={!showPassword}/>
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Image source={require('../assets/eye.png')} style={styles.inputIcon}/>
        </Pressable>
      </View>
      <Pressable style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </Pressable>
      <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 60,
    width: "100%",
    backgroundColor: "#f4c501",
    gap: 30
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: "100%",
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    gap: 10,
    paddingHorizontal: 10,
  },
  inputEmail: {
    width: "90%",
    height: 50
  },
  inputPassword: {
    width: "80%",
    height: 50
  },
  inputIcon: {
    width: 20,
    height: 20,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  forgotPasswordText: {
    fontSize: 15,
    fontWeight: "bold"
  }
})