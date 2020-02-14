import React, {useState, useEffect} from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Text, Dimensions, View} from 'react-native';
import api from '../service/api';

function Item({ id, title, cod, qtdEstoque, descricao, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#DBA901' : '#F7D358',
        width: Dimensions.get('window').width/2,        
        },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cod}>Cod: {cod}</Text>
      <Text style={styles.texto}>Estoque: {qtdEstoque}</Text>
      <Text style={styles.texto}>{descricao}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [selected, setSelected] = useState(new Map());
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function loadToolsRented() {
      const response = await api.get('/tools');
      setTools(response.data.products)
    }
      
    loadToolsRented();
  }, []);

  const onSelect = React.useCallback( id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <>
      <FlatList
        data={tools}
        numColumns={2}
        renderItem={({ item }) => (
          <Item
            style={styles.itens}
            id={item.id}
            title={item.title}
            cod={item.cod}
            qtdEstoque={item.qtdEstoque}
            descricao={item.decricao}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          /> 
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
      <View>
        <TouchableOpacity  style={styles.botaoFooter}>
            <Text style={styles.textBotaoFooter}> Adicionar </Text>
        </TouchableOpacity>
      </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E2A9',
  },
  item: {
    flexGrow: 1,
    flexBasis: 0,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    margin: 5,
    marginBottom: 0,
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
