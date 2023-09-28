import React from 'react'; 
import logo from './assets/FABRAlogo.png';
import styles from './style-sheet.js';
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

const Resaurants = () => {
    console.log(logo);
    return (
        
        <SafeAreaView style={styles.container}>
  
          <Text style={styles.title}>Restaurants</Text>
  
          <Image source={logo} style={styles.logostyle} />
  
        </SafeAreaView>
    );
  };