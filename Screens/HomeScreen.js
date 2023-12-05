import React from 'react'; 
import logo from './assets/FABRAlogo.png';
import styles from './style-sheet';
import SearchBar from './components/SearchBar';
import SearchBarWithSuggestions from './components/SearchBarWithSuggestions'; 
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingView';
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


const Home = ({ navigation }) => {
    
    console.log(logo);
    return (
        <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Food & Beverage Review App</Text>
            <Image source={logo} style={styles.logostyle} />
        
            <View style={styles.temp}>
                <SearchBarWithSuggestions/>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => {navigation.navigate('Restaurants')}}
                    title='Restaurants'>
                    <Text style={styles.buttonText}>Restaurants</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => {navigation.navigate('Brands')}}
                    title='Brands'>
                    <Text style={styles.buttonText}>Brands</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={()=> {navigation.navigate('Add Item')}}
                    title='Add Item'>
                    <Text style={styles.buttonText}>+ Add Item</Text>
                </TouchableOpacity>
            </View>

    
        </SafeAreaView>
        </KeyboardAvoidingWrapper>
    );
  };

  export default Home; 