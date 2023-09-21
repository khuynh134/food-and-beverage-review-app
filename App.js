import React from 'react'; 
import {
  StyleSheet, 
  Pressable, 
  Button,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

import SearchBar from './components/SearchBar'

const App = () => {
  const [text, onChangeText] = React.useState('Search');
  return (
      
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Food & Beverage Review App</Text>

        <SearchBar/>

        <TouchableOpacity 
          onPress={ () => {
            console.log('button was pressed');
          }}
          style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>Restaurants</Text>
          
        </TouchableOpacity>


        <TouchableOpacity 
          onPress={ () => {
            console.log('button was pressed');
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Brands</Text>
      
        </TouchableOpacity>


        <TouchableOpacity 
          onPress={ () => {
            console.log('button was pressed');
          }}
          style={styles.buttonContainer2}
        >
          <Text style={styles.buttonText}>+ Add Item</Text>
      
        </TouchableOpacity>

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input:{
    height: 40,
    margin:12,
    borderWidth:1, 
    padding:10,
  },
  title: {
    fontSize: 30,
    color: '#44ccb4',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 4,
    borderColor: '#545f71',
    borderRadius: 6,
    backgroundColor: '#edf2f1',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'absolute',
    top: '3%',
    right: '2%',
    left: '25%',
  },
  buttonContainer: {
    height: 100,
    marginHorizontal: '2%',
    backgroundColor: '#545f71',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
  },
  buttonContainer2: {
    height: 100,
    marginHorizontal: '2%',
    backgroundColor: '#545f71',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    position: 'absolute',
    bottom: '3%',
    width: '96%',
  },
  buttonText:{
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 22,
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    //padding: 10,
    backgroundColor: '#f0fbfa',
  },
});

export default App; 
 