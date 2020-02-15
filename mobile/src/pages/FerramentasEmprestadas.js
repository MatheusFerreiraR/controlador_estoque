import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Dimensions, TouchableOpacity, View, Alert, AsyncStorage } from 'react-native';

import api from '../service/api';
import {getToken, TOKEN_KEY} from '../service/auth';
import moment from 'moment';

function Item({ title, idTool, date }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cod}>Cod: {idTool}</Text>
      <Text style={styles.texto}>Pego em: {date}</Text>
    </View>
  );
}


export default function App({ navigation }) {
  const [tools, setTools] = useState([]);

  React.useEffect(() => {
    async function loadToolsRented(e) {
      try {

        const employee = JSON.parse(await AsyncStorage.getItem(TOKEN_KEY + 'employee'));

        const response = await api.get(`/employees/${employee.id}/location`, {
          headers:{
            'authorization': await getToken()
          }
        });
        setTools(response.data);

      } catch (error) {
        Alert.alert("Erro! :(", error.response.data.error);
        console.log(error.response.data.error);
      }

    }

    loadToolsRented();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={tools}
        numColumns={2}
        renderItem={({ item }) => (
          //console.log(item),
          <Item
            style={styles.itens}
            id={item.id} //id do aluguel

            title={item.Tool.description} //description
            idTool={item.Tool.id} //id da ferramenta
            date={String(moment(item.rental_date).format('DD/MM/YYYY H:m:s'))} //data do aluguel

            onSelect={e => (e.preventDefault())}
          />
        )}
      />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Ferramentas')} style={styles.botaoFooter}>
          <Text style={styles.textBotaoFooter}> Alugar nova ferramenta </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E2A9'
  },
  item: {
    flexGrow: 1,
    flexBasis: 0,
    alignItems: 'center',
    backgroundColor: '#F7D358',
    padding: 8,
    margin: 5,
    marginBottom: 0,
    width: Dimensions.get('window').width / 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cod: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6E6E6E',
  },
  texto: {
    fontWeight: 'bold',
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
