import React from 'react'; 
import logo from './assets/FABRAlogo.png';
import styles from './style-sheet';
import SearchBar from './components/SearchBar';
import {
  StyleSheet,
  Image, 
  Pressable, 
  Button,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('Search');
  console.log(logo);
  return (
      
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Food & Beverage Review App</Text>

        <Image source={logo} style={styles.logostyle} />
        
        
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

export default App; 
 