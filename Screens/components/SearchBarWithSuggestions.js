import {View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import { SearchBar } from 'react-native-elements'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import realm from './Database';

import { useNavigation } from '@react-navigation/native'; 

const SearchBarWithSuggestions = () => {
    
    const [searchText, setSearchText] = useState(''); 
    const [suggestions, setSuggestions] = useState([]); 

    const navigation = useNavigation(); //get the navigation object 

    const handleSearch = (text) => {
        setSearchText(text); 
        if(text.trim() === ''){ //checking the length of the search 
          setSuggestions([]); //clearing suggestions if the search text is empty 
        }
        else{
           //Query your Realm database for suggestions based on the search text 
          const reviewItems = realm.objects('Review'); 
          const results = reviewItems.filtered('ItemName CONTAINS[c] $0 OR TypeName CONTAINS[c] $0', text); //Adjust your query as needed 
          console.log('Search Text: ',text);
          console.log('Results:', results);
          setSuggestions(Array.from(results)); //Convert the Realm Results to an array 
        }
       
    }; 
    
    return(

      <View style={styles.container} >
      
        <SearchBar
          placeholder="Search for Reviews..."
          containerStyle={{backgroundColor: '#545f71'}}
          inputContainerStyle={{backgroundColor: '#545f71'}}
          onChangeText={handleSearch}
          value={searchText}
        />

      <FlatList 
          scrollEnabled={false}  //to fix the error of flatlist being nested inside of scrollview 
          data={suggestions}
          keyExtractor={(item) => item.TypeName} 
          renderItem={({ item }) => (
            
              <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => {
                  navigation.navigate('Display Review', {
                    EntityName : item.TypeName,
                    Item: item.ItemName
                  }); // Pass data to the 'Display Review' screen
                  }} 
                 
                  >
                  <Text>{item && item.TypeName} - {item && item.ItemName} </Text>
              </TouchableOpacity>
          )}
         // ListEmptyComponent = { () => (
        //    <Text style={styles.emptyText}> No results found</Text>
       //   )}
      />
     </View>
         
    );
}


const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    buttonContainer:{
      padding: 10,
      borderWidth: 1, 
      borderColor: 'gray',
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
      },
      searchBar: {
        backgroundColor: '#FFF',
        width: 310,
        height: 60,
        borderColor: '#0000000',
        borderWidth: 2,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderLeftWidth: 0,
      },
      input: {
        marginLeft: 10,
        marginTop: 14,
        fontSize: 20,
      },
      searchButton: {
        height: 60,
        width: 40,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#0000000',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: 'center'
      },
      icon: {
        marginLeft: 9 
      },
})

export default SearchBarWithSuggestions;