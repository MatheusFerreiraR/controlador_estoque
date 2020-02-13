import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, Dimensions, View} from 'react-native';
import api from '../service/api';

function Item({id }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{id}</Text>
      <Text style={styles.title}>Ola</Text>
    </View>
  );
}

export default function App() {
  const [tools, setTools] = useState([]);

  React.useEffect(() => {
    async function loadToolsRented(e) {
      const response = await api.get('/employees/4/location');

      setTools(response.data.employee);
    }
      
    loadToolsRented();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={tools}
        numColumns={2}
        renderItem={({ item }) => (
          <Item
            style={styles.itens}
            id={item.employee.id}
            
            onSelect={e =>( e.preventDefault())}
          /> 
        )}
        keyExtractor={item => item.employee.id}
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
