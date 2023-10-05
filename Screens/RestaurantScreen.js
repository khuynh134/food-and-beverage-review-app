import React from 'react';
import {View, Text} from 'react-native';
import realm, {getAllRestaurants} from './components/Database';

export default function RestaurantScreen({ navigation }){
    for(let i = 0; i < 3; i++){
        realm.write(() => {
          const restaurant = realm.create('Restaurant', {
            RestaurantName: 'Chik-Fil-A' + i,
            Menu: 'Chik-Fil-A Nuggets'
          });
        });
      }

      realm.write(() => {
        const restaurant = realm.create('Restaurant', {
          RestaurantName: "Popeye's",
          Menu: 'Popcorn Shrimp'
        });
      });

    return(
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text>This is the Restaurant Screen</Text>
            <Text>{JSON.stringify(getAllRestaurants())}</Text>
            <Text>Test text.</Text>
        </View>
    );
}
