import React, { useState } from 'react'; 
import { Text, View, FlatList, TouchableOpacity} from 'react-native'; 
import { useRoute } from '@react-navigation/native'; 
import { reviewListStyles } from './components/style-sheet';
import { getReviewsByTypeName } from './components/Database';
import { DisplayRating } from './components/RatingsComponents';
import { ReviewListImage } from './components/ImageComponents';
import { DisplayThisReviewButton } from './components/ButtonComponents';

const DetailScreen = ({route, navigation}) => {
    
    const entityName = route.params.EntityName.toString();
    const entity = route.params.Entity.toString();

    return(
        <FlatList
            ListHeaderComponent={ <Text style={reviewListStyles.entityNameHeader}>{entityName}</Text>}
            data={getReviewsByTypeName(entityName, entity)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return( 
                    <View style={reviewListStyles.cardView}>
                        <ReviewListImage index={item.ImageIndex}/>
                        <DisplayThisReviewButton item={item} navigation={navigation}/>
                        <Text style={reviewListStyles.cardText}>{item.ItemName}</Text>
                        <View style={reviewListStyles.displayRatings}>
                            <DisplayRating rating={item.Rating}/>
                        </View>
                        <Text style={reviewListStyles.cardNotes}>{item.Notes}</Text>
                    </View>
                )
        }}/>
      );
}; 

export default DetailScreen; 

