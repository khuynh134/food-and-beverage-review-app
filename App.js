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

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen"
import AddItem from "./components/AddItem"

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false 
        }}
      />
      <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={{
          headerTintColor: 'black',
          headerStyle: {backgroundColor: 'tomato'}
        }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const [text, onChangeText] = React.useState('Search');
  console.log(logo);
  return (
      
      <SafeAreaView style={styles.container}>

        <NavigationContainer>
          <MyStack />
        </NavigationContainer>

        

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

      </SafeAreaView>
  );
};

export default App; 
 