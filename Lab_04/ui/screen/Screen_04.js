import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Screen_04() {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    let password = '';
    
      if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialSymbols) {
        setGeneratedPassword('Vui lòng chọn yêu cầu');
        return;
      }

      if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
      if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (includeNumbers) charset += '0123456789';
      if (includeSpecialSymbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

      const length = parseInt(passwordLength) || 8;

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }

      setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <View style={styles.passwordDisplay}>
          <Text style={styles.passwordText}>{generatedPassword}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password length</Text>
          <TextInput
            style={styles.input}
            value={passwordLength}
            onChangeText={setPasswordLength}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include lower case letters</Text>
          <Switch
            value={includeLowercase}
            onValueChange={setIncludeLowercase}
            trackColor={{ false: '#767577', true: '#4a90e2' }}
            thumbColor={includeLowercase ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include upcase letters</Text>
          <Switch
            value={includeUppercase}
            onValueChange={setIncludeUppercase}
            trackColor={{ false: '#767577', true: '#4a90e2' }}
            thumbColor={includeUppercase ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include number</Text>
          <Switch
            value={includeNumbers}
            onValueChange={setIncludeNumbers}
            trackColor={{ false: '#767577', true: '#4a90e2' }}
            thumbColor={includeNumbers ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.label}>Include special symbol</Text>
          <Switch
            value={includeSpecialSymbols}
            onValueChange={setIncludeSpecialSymbols}
            trackColor={{ false: '#767577', true: '#4a90e2' }}
            thumbColor={includeSpecialSymbols ? '#f5dd4b' : '#f4f3f4'}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3a3b5f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#2c2d4f',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordDisplay: {
    backgroundColor: '#1e1f36',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordText: {
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: 'white',
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    width: 50,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4a4dff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});