import React, {useState} from 'react';
import {Button, View, Text, FlatList} from 'react-native';
import styles from './style-sheet';
import realm, {addRestaurant, getAllRestaurants, deleteRestaurant} from './components/Database';

export default function RestaurantScreen({ navigation }){
  return(
  <FlatList
      data={getAllRestaurants()}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
          return( 
              <View style={styles.listView}>
                  <Text style={styles.listText}>{`\u2740 ${item.RestaurantName}`}</Text>
                  <Button title="Reviews"
                  onPress = { () => {
                    navigation.navigate('Detail', {
                      EntityName : item.RestaurantName,
                      Entity: 'Restaurant'
                    })
                  }} color="grey" />
              </View>
          )
  }}/>
);
}

/*
Unicode for bullet points:
  \u2386 - arrow in box
  \u23e3 - hexagram in hexagram
  \u235f - star in circle
  \u25a3 - box in box
  \u272f - 5 prong star
  \u2735 - 8 prong star
  \u274a - 8 prong teardrop asterisk
  \u273c - 6 prong open-center teardrop asterisk
  \u2740 - flower
  \u2741 - flower 2
*/