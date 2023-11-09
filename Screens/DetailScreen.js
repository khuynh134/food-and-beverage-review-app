
import React from 'react'; 
import { StyleSheet, Text, View, FlatList} from 'react-native'; 
import { useRoute } from '@react-navigation/native'; 
import styles from './style-sheet';
import realm, {addBrand, getAllBrands, deleteAllBrands} from './components/Database';

const DetailScreen = ({route}) => {
    
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <Text style = {{flex: 1, fontSize: 20, color: '#8ea0fa', textAlign: 'center',}}>the name of the restaurant </Text>
            <Text style = {styles.itemTitle}>{JSON.stringify(route.params.EntityName)}</Text>
        </View>
    );
}; 

export default DetailScreen; 

