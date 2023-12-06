import React, {useState} from "react";
import {  
    View, 
    Text, 
    TouchableOpacity,
    Image,} from "react-native";
import { AddEditReviewStyles, reviewListStyles } from './style-sheet';
import Triangle from "react-native-triangle";

const images = [
    require('../assets/images/breakfast1.png'),
    require('../assets/images/breakfast2.png'),
    require('../assets/images/breakfast3.png'),
    require('../assets/images/lunch1.png'),
    require('../assets/images/lunch2.png'),
    require('../assets/images/lunch3.png'),
    require('../assets/images/dinner1.png'),
    require('../assets/images/dinner2.png'),
    require('../assets/images/dinner3.png'),
    require('../assets/images/drink1.png'),
    require('../assets/images/drink2.png'),
    require('../assets/images/drink3.png'),
    require('../assets/images/fastfood1.png'),
    require('../assets/images/fastfood2.png'),
    require('../assets/images/fastfood3.png'),
    require('../assets/images/healthy1.png'),
    require('../assets/images/healthy2.png'),
    require('../assets/images/healthy3.png'),
    require('../assets/images/desert1.png'),
    require('../assets/images/desert2.png'),
    require('../assets/images/desert3.png'),
]

function getIndex( index ) {
    let newIndex = index % images.length;
    if(newIndex > 0 && newIndex < images.length)
        return(newIndex)
    else if(newIndex < 0)
        return(images.length - 1)
    else
        return(0)
}

function ShowImage({index}){
    return(
        <View style={AddEditReviewStyles.picBackdrop}>
            <View style={{backgroundColor: 'white', width: 165, height: 165, justifyContent: "center", alignItems: "center"}}>
                <Image style={AddEditReviewStyles.image} source={images[index]}></Image>
            </View>
        </View>
    );
}

function ChangeImage({imgIndex, setImageIndex}){
    return(
        <View style={AddEditReviewStyles.selectImageView}>
            <TouchableOpacity onPress={() => setImageIndex(getIndex(imgIndex - 1))}>
                <Triangle width={45} height={45} color={'#545F71'} direction={'left'}/>
            </TouchableOpacity>
            <Text style={AddEditReviewStyles.selectImageIndex}>{imgIndex + 1}</Text>
            <TouchableOpacity onPress={() => setImageIndex(getIndex(imgIndex + 1))}>
                <Triangle width={45} height={45} color={'#545F71'} direction={'right'}/>
            </TouchableOpacity>
        </View>
    );
}

const ReviewListImage = ({index}) =>{
    return(
        <Image style={reviewListStyles.image} source={images[index]}></Image> 
    )
}

export {ShowImage, ChangeImage, ReviewListImage}

export default images;