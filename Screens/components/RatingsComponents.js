import React, {useState} from "react";
import {  
    View,
    TouchableOpacity,
    Image,} from "react-native";
import {AddEditReviewStyles, ratingStyle} from './style-sheet';

const RatingsConstants = {
    starRatings: [1,2,3,4,5],
    StarEmpty: require('../assets/Star_Empty.png'),
    StarFull: require('../assets/star_full.png'),
}

function RatingBar({setRating, currentRating}){
    return(
        <View style={ratingStyle.container}>
            <View style={ratingStyle.starView}>
            {
                RatingsConstants.starRatings.map((item, key) =>
                    <TouchableOpacity activeOpacity={0.7}
                        key={item}
                        onPress={() => setRating(item)}>
                        <Image style={ratingStyle.starStyling}
                            source={item <= currentRating ? RatingsConstants.StarFull : RatingsConstants.StarEmpty}/>
                    </TouchableOpacity>
                )
            }
            </View>
        </View>  
    );
}

export {};

export default RatingBar;