import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Dimensions, View} from 'react-native';


const DATA = [
  {
    id: '1',
    title: 'Martelo',
    cod: 1,
    qtd: 3,
    decricao: 'Descrição...'
  },
  {
    id: '2',
    title: 'Segundo Item',
    cod: 2,
    qtd: 5,
    decricao: 'Descrição...'
  },
  {
    id: '3',
    title: 'Terceiro Item',
    cod: 3,
    qtd: 2,
    decricao: 'Descrição...'
  },
  {
    id: '4',
    title: 'Quarto Item',
    cod: 4,
    qtd: 2,
    decricao: 'Descrição...'
  },
  {
    id: '5',
    title: 'Quinto Item',
    cod: 5,
    qtd: 2,
    decricao: 'Descrição...'
  },
  {
    id: '6',
    title: 'Sexto Item',
    cod: 6,
    qtd: 2,
    decricao: 'Descrição...'
  },
  {
    id: '7',
    title: 'Sexto Item',
    cod: 7,
    qtd: 2,
    decricao: 'Descrição...'
  },
];

function Item({title, cod, qtdEstoque, descricao }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cod}>Cod: {cod}</Text>
      <Text style={styles.texto}>Quantidade: {qtdEstoque}</Text>
      <Text style={styles.texto}>{descricao}</Text>
    </View>
  );
}

export default function App() {


  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <Item
            style={styles.itens}
            id={item.id}
            title={item.title}
            cod={item.cod}
            qtdEstoque={item.qtd}
            descricao={item.decricao}
            onSelect={e =>( e.preventDefault())}
          /> 
        )}
        
      />

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
 
});
