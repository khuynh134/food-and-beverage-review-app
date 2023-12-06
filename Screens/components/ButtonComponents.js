import React from "react";
import {  
    View,
    TouchableOpacity,
    Text } from "react-native";
import { AddEditReviewStyles } from './style-sheet';
import { CommonActions } from '@react-navigation/native';
import { addReview,
         addBrand,
         addRestaurant,
         deleteBrand,
         deleteRestaurant,
         deleteReview,
         numberOfBrandsByName,
         numberOfRestaurantsByName,
         numberOfReviewsByTypeName,
         doesReviewExist} from "./Database";

function ChooseBrandorRestaurantButtons({setRestaurantOrBrand, RestaurantOrBrand, setPlaceholder}) {
    
    const selectButton = (option) => {
        setRestaurantOrBrand(option)
        let newPlaceholder = "Enter " + option + " Name..."
        setPlaceholder(newPlaceholder)
    }

    return(
        <View style={AddEditReviewStyles.buttonsContainer}>
            <TouchableOpacity   style={[AddEditReviewStyles.buttons,
                                        RestaurantOrBrand === "Restaurant" ? AddEditReviewStyles.selected : AddEditReviewStyles.unselected]} 
                                onPress={() => selectButton('Restaurant')}>
                <Text style={AddEditReviewStyles.buttonText}>Restaurant</Text>
            </TouchableOpacity>
            <Text style={AddEditReviewStyles.orText}>OR</Text>
            <TouchableOpacity   style={[AddEditReviewStyles.buttons, 
                                        RestaurantOrBrand === "Brand" ? AddEditReviewStyles.selected : AddEditReviewStyles.unselected]} 
                                onPress={() => selectButton('Brand')}>
                <Text style={AddEditReviewStyles.buttonText}>Brand</Text>
            </TouchableOpacity>
        </View>
    )
}

function submission(reviewProperties, navigation, oldReview){
    if(reviewProperties[0] != '' && reviewProperties[1] != '' && reviewProperties[2] != ''){
        if(doesReviewExist(reviewProperties[1], reviewProperties[2], reviewProperties[0]) == false) {
            if(oldReview != null) {
                //delete old Brand/Restaurant if needed
                if(oldReview.Type == 'Brand'){
                    //check if any more reviews for that Brand
                    if(numberOfReviewsByTypeName(oldReview.TypeName, oldReview.Type) == 1) {
                        deleteBrand(oldReview.TypeName) //delete if none
                }}
                else { //if review.Type != 'Brand' ( == 'Restaurant')
                    //check if any more reviews for that Restaurant
                    if(numberOfReviewsByTypeName(oldReview.TypeName, oldReview.Type) == 1) {
                        deleteRestaurant(oldReview.TypeName) //delete if none
                }}

                deleteReview(oldReview.Type, oldReview.TypeName, oldReview.ItemName)
            }
            
            addReview(reviewProperties[0], reviewProperties[1], reviewProperties[2], reviewProperties[3], reviewProperties[4], reviewProperties[5])
            //add new Brand/Restaurant if needed
            if(reviewProperties[1] == 'Brand'){
                //check if brand already in Brands
                if(numberOfBrandsByName(reviewProperties[2]) == 0) {
                    addBrand(reviewProperties[2]) //add if not found
            }}
            else if(reviewProperties[1] == 'Restaurant'){
                //check if restaurant already in Restaurants
                if(numberOfRestaurantsByName(reviewProperties[2]) == 0) {
                    addRestaurant(reviewProperties[2]) //add if not found
            }}
            //navigate out of page to home then displayreview
            navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [
                    { name: 'Home' },
                    { name: 'Display Review',
                      params: { EntityName: reviewProperties[2], Item: reviewProperties[0] },
                    },
                  ],
                })
            );
        }
        else { alert("Review already exists!") }
    }
    else { alert("Missing inputs detected!") }
}

function SubmitReviewButton({reviewProperties, navigation, oldReview = null}){
    return(
        <View style={AddEditReviewStyles.SubmitContainer}>
            <TouchableOpacity   style={AddEditReviewStyles.Submit}
                                onPress={() =>  submission(reviewProperties, navigation, oldReview)}>
                <Text style={AddEditReviewStyles.SubmitText}>Submit</Text>
            </TouchableOpacity>
        </View> 
    )
}

export {ChooseBrandorRestaurantButtons, SubmitReviewButton}