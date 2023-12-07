import React, {useState} from "react";
import {  
    View,
    TouchableOpacity,
    Image,
    Text } from "react-native";
import { ratingStyle, reviewListStyles } from './style-sheet';

const RatingsConstants = {
    starRatings: [1,2,3,4,5],
    StarEmpty: require('../assets/Star_Empty.png'),
    StarFull: require('../assets/star_full.png'),
    allBoxColors: ['white','#ff0000','#ffa700','#fff400','#a3ff00','#2cba00'],
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

function DisplayRating({rating}){
    let backgroundColor = RatingsConstants.allBoxColors[rating]

    return(
        <View style={{flexDirection: 'row'}}>
            {
                RatingsConstants.starRatings.map((item, key) =>   
                    <Image style={reviewListStyles.stars}
                        key={key.toString()}
                        source={item <= rating ? RatingsConstants.StarFull : RatingsConstants.StarEmpty}/>
                )
            }
            <View style={[reviewListStyles.ratingsBox, { backgroundColor }]}>
                <Text style={reviewListStyles.ratingNum}>{rating}</Text>
            </View>
        </View>
    );
}

export { DisplayRating };

export default RatingBar;