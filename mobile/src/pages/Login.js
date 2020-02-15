import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';

import api from '../service/api';

export default function App({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensageErr, setMensageErr] = useState(null);

  useEffect(() => {
    async function verificationLogin() {
      const token = await AsyncStorage.getItem('@RokoneyApi:token');
      const employee = JSON.stringify(await AsyncStorage.getItem('@RokoneyApi:employee'));

      if (token && employee) {
        navigation.navigate('Menu');
      }
    }

    verificationLogin();

  }, []);

  async function login() {
    try {
      const response = await api.post('/authenticate', {
        email,
        password
      });

      // console.log("oie");

      // console.log(response.data);

      const { employee, token } = response.data;

      // console.log(employee);
      // console.log(token);

      await AsyncStorage.multiSet([
        ['@RokoneyApi:token', token],
        ['@RokoneyApi:employee', JSON.stringify(employee)]
      ]);

      navigation.navigate('Menu');

    } catch (error) {
      //  setMensageErr(response.data.error);
      Alert.alert("Erro! :(", error.response.data.error);
      console.log(error.response.data.error);
    }

  }

  function criarConta() {
    <Text style={[styles.texto, { color: '#fff', },]} />
  }

  return (
    <>
      <View style={styles.container}>

        <Text style={styles.title}>ROKONEY</Text>

        <TextInput
          style={styles.input}
          placeholder='Digite seu Email'
          keyboardType='email-address'
          value={email} onChangeText={setEmail}
          required
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Digite sua Senha'
          value={password} onChangeText={setPassword}
          required
        />

        <View style={styles.adicionaInput}>
          <TouchableOpacity onPress={login} style={styles.botaoAdd}>
            <Text style={styles.textoBotao}> Login </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.texto} onPress={() => navigation.navigate('CriarFunc')}> Criar conta </Text>

      </View>


    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3E2A9',
  },

  title: {
    color: 'white',
    marginBottom: 40,
    marginTop: 70,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  texto: {
    color: '#111',
    marginTop: 10,
    textAlign: 'right',
  },

  input: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 3,
    elevation: 3,
  },

  botaoAdd: {
    backgroundColor: '#F7D358',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 50,
    width: 300,
    borderWidth: 0.5,
    borderColor: '#111',
    borderRadius: 3,
    elevation: 3,
  },

  textoBotao: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3
  }
});
