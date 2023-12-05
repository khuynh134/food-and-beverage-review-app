import React from 'react';
import {Button, View, Text, FlatList} from 'react-native';
import {ListStyles} from './components/style-sheet';
import realm, {getAllBrands} from './components/Database';

export default function BrandsScreen({ navigation }){
      return(
        <FlatList
            data={getAllBrands()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return( 
                    <View style={ListStyles.listView}>
                        <Text style={ListStyles.listText}>{`\u2740 ${item.BrandName}`}</Text>
                        <Button title="Reviews"
                          onPress = { () => {
                            navigation.navigate('Detail', {
                              EntityName : item.BrandName,
                              Entity: 'Brand'
                    })
                  }} color="grey" />
                    </View>
                )
        }}/>
      );
}
