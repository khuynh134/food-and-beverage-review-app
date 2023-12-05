import React from 'react'; 
import logo from './assets/FABRAlogo.png';
import HomeStyles from './components/style-sheet';
import SearchBar from './components/SearchBar';
import SearchBarWithSuggestions from './components/SearchBarWithSuggestions'; 
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingView';
import {
  Image, 
  View,
  Text,
  TouchableOpacity,
  SafeAreaView, 
} from 'react-native';


const Home = ({ navigation }) => {
    
    console.log(logo);
    return (
        <KeyboardAvoidingWrapper>
        <SafeAreaView style={HomeStyles.container}>

            <Text style={HomeStyles.title}>Food & Beverage Review App</Text>
            <Image source={logo} style={HomeStyles.logostyle} />
        
            <View style={{marginTop: 150}}>
                <SearchBarWithSuggestions/>
                <TouchableOpacity style={HomeStyles.buttonContainer}
                    onPress={() => {navigation.navigate('Restaurants')}}
                    title='Restaurants'>
                    <Text style={HomeStyles.buttonText}>Restaurants</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={HomeStyles.buttonContainer}
                    onPress={() => {navigation.navigate('Brands')}}
                    title='Brands'>
                    <Text style={HomeStyles.buttonText}>Brands</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={HomeStyles.buttonContainer}
                    onPress={()=> {navigation.navigate('Add Item')}}
                    title='Add Item'>
                    <Text style={HomeStyles.buttonText}>+ Add Item</Text>
                </TouchableOpacity>
            </View>

    
        </SafeAreaView>
        </KeyboardAvoidingWrapper>
    );
  };

  export default Home; 