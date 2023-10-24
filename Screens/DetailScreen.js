
import React from 'react'; 
import { StyleSheet, Text, View, FlatList} from 'react-native'; 
import { useRoute } from '@react-navigation/native'; 
import styles from './style-sheet';
import realm, {addBrand, getAllBrands, deleteAllBrands} from './components/Database';

const DetailScreen = ({route}) => {
    

    return(
        <View style = {styles.container}>
            <Text>the name of the restaurant </Text>
            <Text style = {styles.title}>{JSON.stringify(route.params.RestaurantName)}</Text>
        </View>
    );
}; 

export default DetailScreen; 

