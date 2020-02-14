import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Dimensions, View, TouchableOpacity} from 'react-native';
import api from '../service/api';



export default function App({navigation}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProductsRented() {
      const response = await api.get('/products');
      setProducts(response.data.products)
    }
      
    loadProductsRented();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.cod}>Cod: {item.id}</Text>
            <Text style={styles.title}>{item.description}</Text>
            <Text style={styles.texto}>Quantidade: {item.quantity}</Text>
          </View>
        )}
        
      />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Materiais')} style={styles.botaoFooter}>
            <Text style={styles.textBotaoFooter}> Alugar novos Materiais </Text>
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
    width: Dimensions.get('window').width/2,        
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
