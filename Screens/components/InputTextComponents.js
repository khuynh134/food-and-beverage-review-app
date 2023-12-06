import React, {useState} from "react";
import {  
    View,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView } from "react-native";
import {AddEditReviewStyles} from './style-sheet';

function ItemInput({itemName, setItemName}){
    return(
        <View style={AddEditReviewStyles.textBox}>
            <TextInput  style={AddEditReviewStyles.textInput} 
                        placeholder="Enter Item Name..."
                        onChangeText={(text) => setItemName(text)}
                        value={itemName}/>
        </View>
    );
}

function RestaurantOrBrandNameInput({restaurantOrBrandName, SetRestaurantOrBrandName, placeholder}){
    return(
        <View style={AddEditReviewStyles.textBox}>
            <TextInput  style={AddEditReviewStyles.textInput} 
                        placeholder={placeholder}
                        onChangeText={(text) => SetRestaurantOrBrandName(text)}
                        value={restaurantOrBrandName}/>
        </View>
    );
}

function NotesInput({notes, setNotes}){
    return(
        <View style={{width: '95%'}}>
            <Text style={AddEditReviewStyles.notesText}>Notes: </Text>
                <ScrollView style={AddEditReviewStyles.notesTextBox}>
                    <TextInput style={AddEditReviewStyles.textInput}
                        placeholder="Enter Notes..."
                        onChangeText={(text) => setNotes(text)}
                        value={notes}
                        multiline // This allows multiline input for notes
                    />
                </ScrollView>
        </View>
    )
}

export {ItemInput, RestaurantOrBrandNameInput, NotesInput}