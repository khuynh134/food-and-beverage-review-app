
import React, { useState } from 'react'; 
import { Text, View, FlatList, Image, TouchableOpacity} from 'react-native'; 
import { useRoute } from '@react-navigation/native'; 
import {reviewListStyles} from './components/style-sheet';
import realm, {getReviewsByTypeName} from './components/Database';

const DetailScreen = ({route, navigation}) => {
    
    const entityName = route.params.EntityName.toString();
    const entity = route.params.Entity.toString();

    const StarEmpty = require('./assets/Star_Empty.png')
    const StarFull = require('./assets/star_full.png')

    const starRatings = [1,2,3,4,5];
    const [setMax, SetMaxRating] = useState(starRatings)

    const CurrentRating = ({rating}) =>{
        const allBoxColors = ['white','#ff0000','#ffa700','#fff400','#a3ff00','#2cba00']
        let backgroundColor = allBoxColors[rating]

        return(
            <View style={{flexDirection: 'row'}}>
                {
                    setMax.map((item, key) =>   
                        <Image style={reviewListStyles.stars}
                            key={key.toString()}
                            source={item <= rating ? StarFull : StarEmpty}/>
                    )
                }
                <View style={[reviewListStyles.ratingsBox, { backgroundColor }]}>
                    <Text style={reviewListStyles.ratingNum}>{rating}</Text>
                </View>
            </View>
        );
    }

    const ReviewImage = ({index}) =>{
        return(
            <Image style={reviewListStyles.image} source={images[index]}></Image> 
        )
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

    return(
        <FlatList
            ListHeaderComponent={ <Text style={reviewListStyles.entityNameHeader}>{entityName}</Text>}
            data={getReviewsByTypeName(entityName, entity)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return( 
                    <View style={reviewListStyles.cardView}>
                        <ReviewImage index={item.ImageIndex}/>
                        <TouchableOpacity style={reviewListStyles.displayReviewButton}
                            title='Display Review'
                            onPress={() => {
                                navigation.navigate('Display Review', {
                                  EntityName : item.TypeName,
                                  Item: item.ItemName
                                })
                            }}>
                            <Text style={{fontSize: 12, color: "white"}}>Display{'\n'}Review</Text>
                        </TouchableOpacity>
                        <Text style={reviewListStyles.cardText}>{item.ItemName}</Text>
                        <View style={reviewListStyles.displayRatings}>
                            <CurrentRating rating={item.Rating}/>
                        </View>
                        <Text style={reviewListStyles.cardNotes}>{item.Notes}</Text>
                    </View>
                )
        }}/>
      );
}; 

export default DetailScreen; 

