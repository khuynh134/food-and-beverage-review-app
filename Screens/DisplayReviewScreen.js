import React from 'react';
import {View, Text, Image, ScrollView } from 'react-native';
import { displayReviewStyles } from './components/style-sheet';
import { getReviewsByTypeNameAndItemName } from './components/Database';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DisplayRating } from './components/RatingsComponents';
import { ShowImage } from './components/ImageComponents';
import { DeleteReviewButton, EditButton } from './components/ButtonComponents';

export default function DisplayReviewScreen({ route, navigation }){

    const entityName = route.params.EntityName.toString();
    const item = route.params.Item.toString();

    const review = getReviewsByTypeNameAndItemName(entityName, item)[0];

    return(
        <SafeAreaView style={displayReviewStyles.Container}>
          <ScrollView style={displayReviewStyles.scrollView}>

            <ShowImage index={review.ImageIndex} backdropHeight={275} imageHtWd={250}/>
            
            <View style={{width: '95%', flex: 1, paddingTop: 10}}>
                
                <Text style={{fontSize: 35, fontWeight: 'bold', }}>{review.ItemName}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('./assets/spoonfork.png')} style={displayReviewStyles.spoonfork}></Image>
                    <Text style={{fontSize: 20, paddingLeft: 5}}>{review.TypeName}</Text>    
                </View>

                <View style={displayReviewStyles.displayRatings}>
                    <DisplayRating rating={review.Rating}/>
                </View>
                
                <View style={{flex: 1, marginBottom: 12, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Notes -</Text>
                    <View style={displayReviewStyles.notes}>
                        <Text style={{fontSize: 16, paddingTop:3, paddingBottom: 10, paddingHorizontal: 7}}>{review.Notes}</Text>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <EditButton review={review} navigation={navigation}/>
                    <DeleteReviewButton review={review} navigation={navigation}/>
                </View>

            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

