import React, {useState} from "react";
import {
    View, 
    Text } from "react-native";
import KeyboardAvoidingWrapper from "./components/KeyboardAvoidingView";
import { AddEditReviewStyles } from './components/style-sheet';
import { getReviewsByTypeNameAndItemName } from "./components/Database";
import RatingBar from "./components/RatingsComponents";
import { ShowImage, ChangeImage } from "./components/ImageComponents";
import { ItemInput, RestaurantOrBrandNameInput, NotesInput } from "./components/InputTextComponents";
import { ChooseBrandorRestaurantButtons, SubmitReviewButton } from "./components/ButtonComponents";

export default function EditReviewScreen({ route, navigation }){

    const entityName = route.params.EntityName.toString();
    const item = route.params.Item.toString();

    const review = getReviewsByTypeNameAndItemName(entityName, item)[0];

    const [itemName, setItemName] = useState(review.ItemName);
    const [RestaurantOrBrand, setRestaurantOrBrand] = useState(review.Type)
    const [restaurantOrBrandName, SetRestaurantOrBrandName] = useState(review.TypeName);
    const [defaultRating, SetDefault] = useState(review.Rating)
    const [notes, setNotes] = useState(review.Notes);
    const [imgIndex, setImageIndex] = useState(review.ImageIndex)
    const reviewProperties = [
        itemName,
        RestaurantOrBrand,
        restaurantOrBrandName,
        defaultRating,
        notes,
        imgIndex
    ]

    const [placeholder, setPlaceholder] = useState("Enter ___________ Name...")

    return(
        <KeyboardAvoidingWrapper>
        <View style={AddEditReviewStyles.container}>

            <ShowImage index={imgIndex} backdropHeight={185} imageHtWd={165}/>
            <Text style={AddEditReviewStyles.selectImage}>Select Image:</Text>
            <ChangeImage imgIndex={imgIndex} setImageIndex={setImageIndex}/>

            <Text style={AddEditReviewStyles.itemNameText}>Item Name: </Text>
            <ItemInput itemName={itemName} setItemName={setItemName}/>

            <ChooseBrandorRestaurantButtons setRestaurantOrBrand={setRestaurantOrBrand}
                                            RestaurantOrBrand={RestaurantOrBrand}
                                            setPlaceholder={setPlaceholder}/>

            <Text style={AddEditReviewStyles.itemNameText} >{RestaurantOrBrand} Name: </Text>
            <RestaurantOrBrandNameInput restaurantOrBrandName={restaurantOrBrandName}
                            SetRestaurantOrBrandName={SetRestaurantOrBrandName}
                            placeholder={placeholder}/>

            <View style={AddEditReviewStyles.ratingContainer}>
                <Text style={AddEditReviewStyles.YourRating}>Your Rating:</Text>
                <RatingBar setRating={SetDefault} currentRating={defaultRating}/>
            </View>

            <NotesInput notes={notes} setNotes={setNotes}/>

            <SubmitReviewButton reviewProperties={reviewProperties} navigation={navigation} oldReview={review}/>    
            
        </View>
        </KeyboardAvoidingWrapper>

    );
}
