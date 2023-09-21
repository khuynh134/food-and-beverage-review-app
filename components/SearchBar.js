import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    const [userInput, setSearch] = useState('');
    
    return(
        <View style={styles.searchContainer}>
            <TouchableOpacity 
                onPress={ () => {
                    console.log(userInput);
                }}
            >
            <View style={styles.searchButton}>
                <Icon name='search' style={styles.icon} size={20}/>
            </View>
            </TouchableOpacity>
            <View style={styles.searchBar}>
                <TextInput 
                    style={styles.input} placeholder='Search here...'
                    value={userInput}
                    onChangeText={(text) => setSearch(text)}
                >
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default SearchBar;