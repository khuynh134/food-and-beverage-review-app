
import React, { useState } from 'react'; 
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native'; 
import { useRoute } from '@react-navigation/native'; 
import styles from './style-sheet';
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
                        <Image style={styles2.stars}
                            key={key.toString()}
                            source={item <= rating ? StarFull : StarEmpty}/>
                    )
                }
                <View style={[styles2.ratingsBox, { backgroundColor }]}>
                    <Text style={styles2.ratingNum}>{rating}</Text>
                </View>
            </View>
        );
    }

    const ReviewImage = ({index}) =>{
        return(
            <Image style={styles2.image} source={images[index]}></Image> 
        )
    }

    const [imgIndex, setImageIndex] = useState(0)
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
            ListHeaderComponent={ <Text style={styles2.entityNameHeader}>{entityName}</Text>}
            data={getReviewsByTypeName(entityName, entity)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
                return( 
                    <View style={styles2.cardView}>
                        <ReviewImage index={item.ImageIndex}/>
                        <TouchableOpacity style={styles2.displayReviewButton}
                            title='Display Review'
                            onPress={() => {
                                navigation.navigate('Display Review', {
                                  EntityName : item.TypeName,
                                  Item: item.ItemName
                                })
                            }}>
                            <Text style={{fontSize: 12, color: "white"}}>Display{'\n'}Review</Text>
                        </TouchableOpacity>
                        <Text style={styles2.cardText}>{item.ItemName}</Text>
                        <View style={styles2.displayRatings}>
                            <CurrentRating rating={item.Rating}/>
                        </View>
                        <Text style={styles2.cardNotes}>{item.Notes}</Text>
                    </View>
                )
        }}/>
      );
}; 

const styles2 = StyleSheet.create({
    entityNameHeader:{
        fontSize: 25,
        color: '#545f71',
        width: Dimensions.get('window').width - 125,
        position: 'relative',
        top: 5,
        left: 5,
    },
    cardView:{
        borderWidth: 3,
        borderColor: '#63d4c0',
        borderRadius: 6,
        margin: 5,
        backgroundColor: '#e0f6f2',
        padding: 5,
    },
    cardText:{
        fontSize: 25,
        color: '#545f71',
        width: Dimensions.get('window').width - 125,
        position: 'relative',
        top: -35,
        left: 95,
    },
    cardNotes:{
        fontSize: 12,
        color: '#545f71',
        width: Dimensions.get('window').width - 125,
        position: 'relative',
        top: -35,
        left: 95
    },
    displayRatings: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        position: 'relative',
        top: -35,
        left: 95
    },
    stars: {
        width: 35,
        height: 35
    },
    ratingsBox: {
        height: 35,
        width: 35,
        alignSelf: 'center',
        marginLeft: 6,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 1, 
        shadowRadius: 2, 
        elevation: 10
    },
    ratingNum: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        backgroundColor: 'white',
        width: 80,
        height: 80,
        position: 'absolute',
        top: 5,
        left: 5,
    },
    displayReviewButton: {
        backgroundColor: '#545f71',
        width: '20%',
        fontSize: 14,
        alignItems: 'center',
        paddingVertical: 4,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#424b59',
        position: 'relative',
        top: 90,
        left: 5,
    }
  });

export default DetailScreen; 

