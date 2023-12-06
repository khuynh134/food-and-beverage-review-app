import React from 'react'; 
import logo from './assets/FABRAlogo.png';
import HomeStyles from './components/style-sheet';
import SearchBarWithSuggestions from './components/SearchBarWithSuggestions'; 
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingView';
import { PageSelectionButton } from './components/ButtonComponents';
import {
  Image, 
  View,
  Text,
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
                
                <PageSelectionButton page={'Restaurants'} navigation={navigation}/>

                <PageSelectionButton page={'Brands'} navigation={navigation}/>

                <PageSelectionButton page={'Add Item'} navigation={navigation}/>
            </View>

        </SafeAreaView>
        </KeyboardAvoidingWrapper>
    );
  };

  export default Home; 