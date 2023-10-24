import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function DisplayItemScreen({ navigation }){
    const StarEmpty = require('./assets/Star_Empty.png')
    const StarFull = require('./assets/star_full.png')

    const dinner = require('./assets/dinner_icon.png')
    const drink = require('./assets/drink_icon.png')
    const fast_food = require('./assets/fast_food_icon.png')
    const picture = [dinner, drink, fast_food]

    const [name, setValue] = useState("Nacho Fries")
    const [rating, setRating] = useState(5)
    const [restaurantOrBrand, setParent] = useState("Taco Bell")
    const [notes, setNotes] = useState('Sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text.')

    const CurrentRating = () =>{
        const [setMax, SetMaxRating] = useState([1,2,3,4,5])
        const allBoxColors = ['white','#ff0000','#ffa700','#fff400','#a3ff00','#2cba00']
        let backgroundColor = allBoxColors[rating]

        return(

            <View style={{flexDirection: 'row'}}>
                {
                    setMax.map((item, key) =>   
                        <Image style={styles.stars}
                            key={key.toString()}
                            source={item <= rating ? StarFull : StarEmpty}/>
                    )
                }
                <View style={[styles.ratingsBox, { backgroundColor }]}>
                    <Text style={styles.ratingNum}>{rating}</Text>
                </View>
            </View>
        );
    }

    return(
        <View style={styles.Container}>
            <View style={styles.pictureBackDrop}>
                <View style={{backgroundColor: 'white', width: 250, height: 250, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{height: 240, width: 240}} source={picture[2]}></Image>
                </View>
            </View>
            
            <View style={{width: '95%', flex: 1, paddingTop: 10}}>
                <Text style={{fontSize: 35, fontWeight: 'bold', }}>{name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('./assets/spoonfork.png')} style={styles.spoonfork}></Image>
                    <Text style={{fontSize: 20, paddingLeft: 5}}>{restaurantOrBrand}</Text>    
                </View>

                <View style={styles.displayRatings}>
                    <CurrentRating/>
                </View>

                <View style={{flex: 1, marginBottom: 12, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>- Notes -</Text>
                    <ScrollView style={styles.notes}>
                        <Text style={{fontSize: 16, paddingTop:3, paddingBottom: 10, paddingHorizontal: 7}}>{notes}</Text>
                    </ScrollView>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
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
        height: 100,
        borderWidth: 3,
        borderColor: 'black',
    }
})