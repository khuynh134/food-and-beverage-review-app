import { useNavigation } from "@react-navigation/native";
import React from "react";
import logo from '../assets/FABRAlogo.png';
import styles from '../style-sheet';
import SearchBar from '../components/SearchBar';
import {Image, TouchableOpacity, Button, SafeAreaView, StyleSheet, View, Text} from "react-native";

export default function HomeScreen({navigation}){
    return (
        <SafeAreaView style={styles.container} >

        <Text style={styles.title}>Food & Beverage Review App</Text>

        <Image source={logo} style={styles.logostyle} />

        <SearchBar/>

        <TouchableOpacity  onPress={ () =>navigation.navigate("AddItem")}
            style={styles.buttonContainer}
        >
           <Text style={styles.buttonText}>+ Add Item</Text>
        </TouchableOpacity>

        </SafeAreaView>
    )
}