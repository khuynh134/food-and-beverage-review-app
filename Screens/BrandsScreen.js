import React from 'react';
import {Button, View, Text, FlatList} from 'react-native';
import styles from './style-sheet';
import realm, {addBrand, getAllBrands, deleteAllBrands} from './components/Database';

export default function BrandsScreen({ navigation }){
    addBrand('Gatorade');
    addBrand("Lay's");

    return(
        <FlatList
            data={getAllBrands()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return( 
                    <View style={styles.listView}>
                        <Text style={styles.listText}>{`\u2740 ${item.BrandName}`}</Text>
                        <Button title="Reviews"
                          onPress = { () => {
                            navigation.navigate('Detail', {
                              EntityName : item.BrandName
                    })
                  }} color="grey" />
                    </View>
                )
        }}/>
      );
}
