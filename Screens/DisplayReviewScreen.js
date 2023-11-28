import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import realm, {getReviewsByTypeNameAndItemName} from './components/Database';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DisplayReviewScreen({ route }){

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
                        <Image style={styles.stars}
                            key={key.toString()}
                            source={item <= review.Rating ? StarFull : StarEmpty}/>
                    )
                }
                <View style={[styles.ratingsBox, { backgroundColor }]}>
                    <Text style={styles.ratingNum}>{review.Rating}</Text>
                </View>
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.Container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.pictureBackDrop}>
                <View style={{backgroundColor: 'white', width: 250, height: 250, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{height: 240, width: 240}} source={images[review.ImageIndex]}></Image>
                </View>
            </View>
            
            <View style={{width: '95%', flex: 1, paddingTop: 10}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', }}>{review.ItemName}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('./assets/spoonfork.png')} style={styles.spoonfork}></Image>
                    <Text style={{fontSize: 20, paddingLeft: 5}}>{review.TypeName}</Text>    
                </View>

                <View style={styles.displayRatings}>
                    <CurrentRating/>
                </View>

                <View style={{flex: 1, marginBottom: 12, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Notes -</Text>
                    <View style={styles.notes}>
                        <Text style={{fontSize: 16, paddingTop:3, paddingBottom: 10, paddingHorizontal: 7}}>{review.Notes}</Text>
                    </View>
                </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    scrollView: {

        backgroundColor: '#f0fbfa',
    },
    pictureBackDrop: {
        width: '100%', 
        height: 275, 
        backgroundColor: '#545F71', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    spoonfork: {
        width: 20,
        height: 20
    },

    displayRatings: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
    },
    stars: {
        width: 60,
        height: 60
    },
    ratingsBox: {
        height: 55,
        width: 55,
        alignSelf: 'center',
        marginLeft: 12,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 1, 
        shadowRadius: 2, 
        elevation: 20
    },
    ratingNum: {
        fontSize: 35,
        fontWeight: 'bold',
    },

    notes: {
        backgroundColor: 'white',
        width: '100%',
        borderWidth: 3,
        borderColor: 'black',
    }
})