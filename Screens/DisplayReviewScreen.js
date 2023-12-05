import React, { useState } from 'react';
import { useRoute, StackActions } from '@react-navigation/native';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { displayReviewStyles } from './components/style-sheet';
import realm, {getReviewsByTypeNameAndItemName, numberOfReviewsByTypeName, deleteReview, deleteBrand, deleteRestaurant} from './components/Database';
import { SafeAreaView } from 'react-native-safe-area-context';

function deleteThisReview(review, navigation) {
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

    navigation.dispatch(StackActions.popToTop()); //go back to home
}

export default function DisplayReviewScreen({ route, navigation }){

    const entityName = route.params.EntityName.toString();
    const item = route.params.Item.toString();

    const review = getReviewsByTypeNameAndItemName(entityName, item)[0];

    const StarEmpty = require('./assets/Star_Empty.png')
    const StarFull = require('./assets/star_full.png')

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

    const CurrentRating = () =>{
        const [setMax, SetMaxRating] = useState([1,2,3,4,5])
        const allBoxColors = ['white','#ff0000','#ffa700','#fff400','#a3ff00','#2cba00']
        let backgroundColor = allBoxColors[review.Rating]

        return(

            <View style={{flexDirection: 'row'}}>
                {
                    setMax.map((item, key) =>   
                        <Image style={displayReviewStyles.stars}
                            key={key.toString()}
                            source={item <= review.Rating ? StarFull : StarEmpty}/>
                    )
                }
                <View style={[displayReviewStyles.ratingsBox, { backgroundColor }]}>
                    <Text style={displayReviewStyles.ratingNum}>{review.Rating}</Text>
                </View>
            </View>
        );
    }

    return(
        <SafeAreaView style={displayReviewStyles.Container}>
          <ScrollView style={displayReviewStyles.scrollView}>
            <View style={displayReviewStyles.pictureBackDrop}>
                <View style={{backgroundColor: 'white', width: 250, height: 250, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{height: 240, width: 240}} source={images[review.ImageIndex]}></Image>
                </View>
            </View>
            
            <View style={{width: '95%', flex: 1, paddingTop: 10}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', }}>{review.ItemName}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('./assets/spoonfork.png')} style={displayReviewStyles.spoonfork}></Image>
                    <Text style={{fontSize: 20, paddingLeft: 5}}>{review.TypeName}</Text>    
                </View>

                <View style={displayReviewStyles.displayRatings}>
                    <CurrentRating/>
                </View>
                
                <View style={{flex: 1, marginBottom: 12, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Notes -</Text>
                    <View style={displayReviewStyles.notes}>
                        <Text style={{fontSize: 16, paddingTop:3, paddingBottom: 10, paddingHorizontal: 7}}>{review.Notes}</Text>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={displayReviewStyles.EditDeleteButtons}
                        onPress={() => {
                            navigation.navigate('Edit Review', {
                              EntityName : review.TypeName,
                              Item: review.ItemName
                            })
                    }}>
                        <Text style={{fontSize: 30, color: "white"}}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={displayReviewStyles.EditDeleteButtons}
                        onPress={() => { deleteThisReview(review, navigation)
                    }}>
                        <Text style={{fontSize: 30, color: "white"}}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

