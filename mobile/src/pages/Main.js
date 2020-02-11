import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Text,TouchableOpacity} from 'react-native';

export default function App({ navigation }) {

  return (
    <>
      <ScrollView style={styles.container}>
        
        <Text style={styles.title}>ROKONEY</Text>
        <Text style={styles.subtitle}>Nome Funcionario</Text>


        <View style={styles.adicionaInput}>
          <TouchableOpacity title="ordem"  onPress={() => {
            navigation.navigate('Ordem');
          }} style={styles.botaoAdd}>
              <Text style={styles.texto}> Criar Ordem de serviço </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.adicionaInput}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('FerramentasEmprestadas');
          }} style={styles.botaoAdd}>
              <Text style={styles.texto}> Ferramentas emprestadas </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.adicionaInput}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('MateriasEmprestados');
          }} style={styles.botaoAdd}>
              <Text style={styles.texto}> Materiais emprestados </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

  
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
    marginBottom: 10,
    marginTop: 10,   
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    color: 'red',
    marginBottom: 40,
    marginTop: 0,
    textAlign: 'center',
  },

  botaoAdd: {
    backgroundColor: '#F7D358',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 50,
    width: Dimensions.get('window').width - 10,
    borderWidth: 0.5,
    borderColor: '#111',
    borderRadius: 3,
    elevation: 3,
  },  

  texto: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3
  }
});
