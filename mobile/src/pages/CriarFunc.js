import React, { useState } from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Text, TextInput,TouchableOpacity, Button} from 'react-native';
import api from '../service/api';

export default function App({ navigation }) {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [address, setAddress] = useState('');

    async function handleAddEmployee(e) { 
        e.preventDefault();
        try{
            if(password === passwordConfirm){
                await api.post('/employees', {
                    name,
                    phone,
                    email,
                    password,
                    address
                });
                navigation.navigate('Menu');
            }else{
                console.log('Senha diferente');
            }
        }catch(error){
            console.log(error)
        }
    };

  return (
    <>
      <ScrollView style={styles.container}>
        
        <Text style={styles.title}>Usuário</Text>

        <TextInput 
          style={styles.input} 
          placeholder='Nome Completo' 
          value={name}
          onChangeText={setName} 
          required 
         />

        <TextInput 
            keyboardType='numeric' 
            style={styles.input} 
            placeholder='Celular' 
            value={phone}
            onChangeText={setPhone} 
            required 
        />

        <TextInput 
          keyboardType='email-address'
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          required
        />

        <TextInput 
          style={styles.input}
          placeholder='Senha'
          value={password}
          onChangeText={setPassword}
          required
        />

        <TextInput
          style={styles.input}
          placeholder='Confirme sua Senha'
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          required
        />
        
        <TextInput 
          style={styles.input} 
          placeholder='Endereço' 
          value={address}
          onChangeText={setAddress} 
          required
        />
        
      </ScrollView>
      
      <View>
        <TouchableOpacity onPress={handleAddEmployee} style={styles.botaoFooter}>
            <Text style={styles.textBotaoFooter}> Criar Conta </Text>
        </TouchableOpacity>
      </View>
  
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E2A9',
  },

  title: {
    color: 'white',
    marginBottom: 30,
    marginTop: 20,   
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  input: {
    fontSize: 16,
    margin: 10,
    marginTop: 0,
    padding: 6,
    backgroundColor: 'white',
  },

  adicionaInput: {
    padding: 6,
    margin: 10,
    marginTop: 0,
    backgroundColor: 'white',
    height: 40,
  },

  botaoAdd: {
    position: "absolute",
    backgroundColor: '#F3E2A9',
    padding: 11,
    height: 40,
    right: 0,
    borderWidth: 0.5,
    borderColor: '#111',
    borderRadius: 3,
    elevation: 2
  },  

  botaoFooter: {
    position: 'absolute',
    bottom: 0,
    padding: 10, 
    height: 45,   
    backgroundColor: '#d1af3e',
    width: Dimensions.get('window').width,
  },

  textBotaoFooter: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }

});
