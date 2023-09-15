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


const App = () => {
  const [text, onChangeText] = React.useState('Search');
  return (
      
      <SafeAreaView style={styles.container}>
        <TouchableOpacity 
          onPress={ () => {
            console.log('button was pressed');
          }}
          style={styles.buttonContainer}
        >
            <Text style={styles.buttonText2}>Restaurants</Text>
          

        </TouchableOpacity>

        <TouchableOpacity 
          onPress={ () => {
            console.log('button was pressed');
          }}
          style={styles.brandsButtonContainer}
        >
          <Text style={styles.buttonText2}>Brands</Text>
      

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
  buttonContainer: {
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#545f71',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20,
  },
  brandsButtonContainer: {
    height: 50,
    marginHorizontal: 10,
    backgroundColor: '#545f71',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20, 
  },
  buttonText:{
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 18,
  },
  buttonText2:{
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 18,
  },
  buttonBrandContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 370,
    paddingVertical: 90,
    paddingHorizontal: 60,
    borderColor: 'black',
  },
  buttonRestContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    //top: 370,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'black',
  },
  button: {
    backgroundColor: 'green', 
    borderColor: 'black',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    //padding: 10,
  },
});

export default App; 
 
