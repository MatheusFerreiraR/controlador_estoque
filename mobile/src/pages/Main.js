import React, { useState } from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Text, TextInput,TouchableOpacity, Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export default function App({ navigation }) {


  const [state, setState] = useState({
    data: '',
    show: false,
    dataString: ''
  }) 

  function mudarData(e, date) {
    setState({
      dataString: String(moment(date).format('DD/MM/YYYY')),
    })
  }

  function showDatepicker() {
    setState({
      data: new Date(),
      show: true,
    }) 
  }


  return (
    <>
      <ScrollView style={styles.container}>
        
        <Text style={styles.title}>Rokoney</Text>

        <TextInput keyboardType='numeric' style={styles.input} placeholder='Código da Ordem de serviço' required />

        <View style={styles.adicionaInput}>
          <TextInput keyboardType='numeric' value={state.dataString} placeholder='Data' required />
          <TouchableOpacity onPress={showDatepicker} title="Calendario"  style={styles.botaoAdd}>
              <Text> Calendário </Text>
          </TouchableOpacity>
        </View>

        { state.show && <DateTimePicker 
                      value={state.data}
                      mode='date'
                      display="calendar"
                      onChange={mudarData}
                      />
        }
        
        <TextInput style={styles.input} placeholder='Nome do Cliente' required />

        <TextInput style={styles.input} placeholder='Nome do Funcionário' required/>

        <TextInput style={styles.input} placeholder='Endereço' required />
        
        <View style={styles.adicionaInput}>
          <TextInput keyboardType='numeric'  placeholder='Materiais' />
          <TouchableOpacity onPress={() => {
            navigation.navigate('Materias');
          }} style={styles.botaoAdd}>
              <Text> + </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.adicionaInput}>
          <TextInput keyboardType='numeric' placeholder='Ferramentas' />
          <TouchableOpacity  style={styles.botaoAdd}>
              <Text> + </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <View>
        <TouchableOpacity  style={styles.botaoFooter}>
            <Text style={styles.textBotaoFooter}> Salvar </Text>
        </TouchableOpacity>
      </View>
  
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
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
    backgroundColor: '#F2F5A9',
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
