import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let password = '';
    const length = parseInt(passwordLength, 10);
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      
      <Text>Password Length</Text>
      <TextInput
        style={styles.input}
        value={passwordLength}
        onChangeText={setPasswordLength}
        keyboardType="numeric"
        placeholder="Enter length"
      />
      
      <View style={styles.option}>
        <Text style={styles.opText}>Include lower case letters</Text>
        <Switch
          value={includeLower}
          onValueChange={setIncludeLower}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.opText}>Include upper case letters</Text>
        <Switch
          value={includeUpper}
          onValueChange={setIncludeUpper}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.opText}>Include numbers</Text>
        <Switch
          value={includeNumbers}
          onValueChange={setIncludeNumbers}
        />
      </View>

      <View style={styles.option}>
        <Text style={styles.opText}>Include special symbols</Text>
        <Switch
          value={includeSymbols}
          onValueChange={setIncludeSymbols}
        />
      </View>

      <Button title="Generate Password" onPress={generatePassword} />
      
      <Text style={styles.generatedPassword}>
        {generatedPassword ? `Generated Password: ${generatedPassword}` : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1A1A3D',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  generatedPassword: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  opText: {
    color: '#fff'
  }
});