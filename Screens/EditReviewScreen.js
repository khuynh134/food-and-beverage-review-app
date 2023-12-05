import React, {useState} from "react";
import {
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView } from "react-native";
import { useRoute, CommonActions } from '@react-navigation/native';
import KeyboardAvoidingWrapper from "./components/KeyboardAvoidingView";
import { SafeAreaView } from "react-native-safe-area-context";
import Triangle from "react-native-triangle";
import {AddEditReviewStyles, ratingStyle} from './components/style-sheet';
import realm, { addReview, deleteReview, getReviewsByTypeNameAndItemName, numberOfReviewsByTypeName, addBrand, deleteBrand, numberOfBrandsByName, addRestaurant, numberOfRestaurantsByName, deleteRestaurant} from "./components/Database";

const starRatings = [1,2,3,4,5];

function submission(review, itemName, RestaurantOrBrand, restaurantOrBrandName, defaultRating, notes, imgIndex, navigation){
    if(itemName != '' && RestaurantOrBrand != '' && restaurantOrBrandName != ''){
        //delete old Brand/Restaurant if needed
        if(review.Type == 'Brand'){
            //check if any more reviews for that Brand
            if(numberOfReviewsByTypeName(review.TypeName, review.Type) == 1) {
                deleteBrand(review.TypeName) //delete if none
        }}
        else { //if review.Type != 'Brand' ( == 'Restaurant')
            //check if any more reviews for that Restaurant
            if(numberOfReviewsByTypeName(review.TypeName, review.Type) == 1) {
                deleteRestaurant(review.TypeName) //delete if none
        }}

        deleteReview(review.Type, review.TypeName, review.ItemName)

        addReview(itemName, RestaurantOrBrand, restaurantOrBrandName, defaultRating, notes, imgIndex)
        
        //add new Brand/Restaurant if needed
        if(RestaurantOrBrand == 'Brand'){
            //check if brand already in Brands
            if(numberOfBrandsByName(restaurantOrBrandName) == 0) {
                addBrand(restaurantOrBrandName) //add if not found
        }}
        else {
            //check if restaurant already in Restaurants
            if(numberOfRestaurantsByName(restaurantOrBrandName) == 0) {
                addRestaurant(restaurantOrBrandName) //add if not found
        }}

        //navigate out of page to home then displayreview
        navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Home' },
                { name: 'Display Review',
                  params: { EntityName: restaurantOrBrandName, Item: itemName },
                },
              ],
            })
          );
    }
    else {
        alert("Missing inputs detected!")
    }
}

export default function EditReviewScreen({ route, navigation }){

    const entityName = route.params.EntityName.toString();
    const item = route.params.Item.toString();

    const review = getReviewsByTypeNameAndItemName(entityName, item)[0];

    const [defaultRating, SetDefault] = useState(starRatings[review.Rating - 1])
    const [setMax, SetMaxRating] = useState(starRatings)

    const StarEmpty = require('./assets/Star_Empty.png')
    const StarFull = require('./assets/star_full.png')

    const RatingBar = () =>{
        return(
            <View style={ratingStyle.container}>
                <View style={ratingStyle.starView}>
                {
                    setMax.map((item, key) =>
                        <TouchableOpacity activeOpacity={0.7}
                            key={item}
                            onPress={() => SetDefault(item)}>
                            <Image style={ratingStyle.starStyling}
                                source={item <= defaultRating ? StarFull : StarEmpty}/>
                        </TouchableOpacity>
                    )
                }
                </View>
            </View>
            
        );
    }

    const [itemName, setItemName] = useState(review.ItemName);
    const [restaurantOrBrandName, SetRestaurantOrBrandName] = useState(review.TypeName);
    const [notes, setNotes] = useState(review.Notes);

    const [placeholder, setPlaceholder] = useState("Enter ___________ Name...")
    const [RestaurantOrBrand, setRestaurantOrBrand] = useState(review.Type)
    const [selectedButton, setSelectedButton] = useState(review.Type);
    const selectButton = ( option ) => {
        setRestaurantOrBrand(option)
        setSelectedButton(option)
        let placeholder = "Enter " + option + " Name..."
        setPlaceholder(placeholder)

    }

    const images = [
        require('./assets/images/breakfast1.png'),
        require('./assets/images/breakfast2.png'),
        require('./assets/images/breakfast3.png'),
        require('./assets/images/lunch1.png'),
        require('./assets/images/lunch2.png'),
        require('./assets/images/lunch3.png'),
        require('./assets/images/dinner1.png'),
        require('./assets/images/dinner2.png'),
        require('./assets/images/dinner3.png'),
        require('./assets/images/drink1.png'),
        require('./assets/images/drink2.png'),
        require('./assets/images/drink3.png'),
        require('./assets/images/fastfood1.png'),
        require('./assets/images/fastfood2.png'),
        require('./assets/images/fastfood3.png'),
        require('./assets/images/healthy1.png'),
        require('./assets/images/healthy2.png'),
        require('./assets/images/healthy3.png'),
        require('./assets/images/desert1.png'),
        require('./assets/images/desert2.png'),
        require('./assets/images/desert3.png'),
    ]

    const [imgIndex, setImageIndex] = useState(review.ImageIndex)
    const setImgIndex = ( index ) => {
        let newIndex = index % images.length;
        if(newIndex > 0 && newIndex < images.length)
            setImageIndex(newIndex)
        else if(newIndex < 0)
            setImageIndex(images.length - 1)
        else
            setImageIndex(0)
    }

    return(
        <KeyboardAvoidingWrapper>
        <View style={AddEditReviewStyles.container}>

            <View style={AddEditReviewStyles.picBackdrop}>
                <View style={{backgroundColor: 'white', width: 165, height: 165, justifyContent: "center", alignItems: "center"}}>
                    <Image style={AddEditReviewStyles.image} source={images[imgIndex]}></Image>
                </View>
            </View>

            <Text style={AddEditReviewStyles.selectImage}>Select Image:</Text>
            <View style={AddEditReviewStyles.selectImageView}>
                <TouchableOpacity onPress={() => setImgIndex(imgIndex - 1)}>
                    <Triangle width={45} height={45} color={'#545F71'} direction={'left'}/>
                </TouchableOpacity>
                <Text style={AddEditReviewStyles.selectImageIndex}>{imgIndex + 1}</Text>
                <TouchableOpacity onPress={() => setImgIndex(imgIndex + 1)}>
                    <Triangle width={45} height={45} color={'#545F71'} direction={'right'}/>
                </TouchableOpacity>
            </View>

            <Text style={AddEditReviewStyles.itemNameText}>Item Name: </Text>
            <View style={AddEditReviewStyles.textBox}>
                <TextInput  style={AddEditReviewStyles.textInput} 
                            placeholder="Enter Item Name..."
                            onChangeText={(text) => setItemName(text)}
                            value={itemName}/>
            </View>

            <View style={AddEditReviewStyles.buttonsContainer}>
                <TouchableOpacity   style={[AddEditReviewStyles.buttons,
                                            selectedButton === "Restaurant" ? AddEditReviewStyles.selected : AddEditReviewStyles.unselected]} 
                                    onPress={() => selectButton('Restaurant')}>
                    <Text style={AddEditReviewStyles.buttonText}>Restaurant</Text>
                </TouchableOpacity>
                <Text style={AddEditReviewStyles.orText}>OR</Text>
                <TouchableOpacity   style={[AddEditReviewStyles.buttons, 
                                            selectedButton === "Brand" ? AddEditReviewStyles.selected : AddEditReviewStyles.unselected]} 
                                    onPress={() => selectButton('Brand')}>
                    <Text style={AddEditReviewStyles.buttonText}>Brand</Text>
                </TouchableOpacity>
            </View>

            <Text style={AddEditReviewStyles.itemNameText} >{RestaurantOrBrand} Name: </Text>
            <View style={AddEditReviewStyles.textBox}>
                <TextInput  style={AddEditReviewStyles.textInput} 
                            placeholder={placeholder}
                            onChangeText={(text) => SetRestaurantOrBrandName(text)}
                            value={restaurantOrBrandName}/>
            </View>

            <View style={AddEditReviewStyles.ratingContainer}>
                <Text style={AddEditReviewStyles.YourRating}>Your Rating:</Text>
                <RatingBar/>
            </View>

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

            <View style={AddEditReviewStyles.SubmitContainer}>
                <TouchableOpacity   style={AddEditReviewStyles.Submit}
                                    onPress={() =>  submission(review, itemName, RestaurantOrBrand, restaurantOrBrandName, defaultRating, notes, imgIndex, navigation)}>
                    <Text style={AddEditReviewStyles.SubmitText}>Submit</Text>
                </TouchableOpacity>
            </View>    
            
        </View>
        </KeyboardAvoidingWrapper>

    );
}
