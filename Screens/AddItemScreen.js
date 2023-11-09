import React, {useState} from "react";
import { StyleSheet, 
    View, 
    Text, 
    TouchableOpacity,
    TextInput,
    Image } from "react-native";
import KeyboardAvoidingWrapper from "./components/KeyboardAvoidingView";
import { SafeAreaView } from "react-native-safe-area-context";
import realm, { addReview } from "./components/Database";


const starRatings = [1,2,3,4,5];

export default function AddItemScreen({ navigation }){

    const [defaultRating, SetDefault] = useState(starRatings[0])
    const [setMax, SetMaxRating] = useState(starRatings)

    const StarEmpty = require('./assets/Star_Empty.png')
    const StarFull = require('./assets/star_full.png')

    const RatingBar = () =>{
        return(
            <View style={ratingStyle.container}>
                <View style={{ height: '100%', marginLeft: 50, flexDirection: "row"}}>
                {
                    setMax.map((item, key) =>
                        <TouchableOpacity activeOpacity={0.7}
                            key={item}
                            onPress={() => SetDefault(item)}>
                            <Image style={ratingStyle.starStyling}
                                source={item <= defaultRating ? StarFull : StarEmpty}/>
                        </TouchableOpacity>
                    )
                }
                </View>
            </View>
            
        );
    }

    const [itemName, setItemName] = useState('');
    const parent = '';
    const [parentName, setParentName] = useState('');
    const [notes, setNotes] = useState('');
    
    return(
        <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.container}>
            <View style={{ display: 'flex', height: 190, width: '95%' }}>
                <View style={styles.picturePlaceHolder}></View>
                <View style={styles.NameContainer}>
                    <Text style={{ width: '90%', fontSize: 25 }}>Name:</Text>
                    <View style={styles.NameBar}>
                        <TextInput  style={{ fontSize: 17, marginLeft: 5 }}
                                    placeholder="Enter Name Here..."
                                    value={itemName}
                                    onChangeText={(text) => setItemName(text)}></TextInput>
                    </View>        
                </View>
            </View>

            <View style={{ width: '95%', height: 150 }}>
                <View style={{ height: '50%', width: '100%' }}>
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {parent = 'Restaurant'}}>
                            <Text style={{fontSize: 24, color: '#FFF' }}>Restaurants</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer2}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => {parent = 'Brand'}}>
                            <Text style={{fontSize: 24, color: '#FFF' }}>Brands</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View style={{ width: '100%', height: '50%', justifyContent: "center"}}>
                    <Text style={{width: '40%', fontSize: 22,  position: 'absolute'}}>Restaurants/Brands:</Text>
                    <View style={styles.restaurantsBrandsBar}>
                        <TextInput  style={{ fontSize: 16 ,marginLeft: 5, padding: 5}}
                                    placeholder="Enter Restraurant/Brand..."
                                    value={parentName}
                                    onChangeText={(text) => setParentName(text)}></TextInput>
                    </View>
                </View>
            </View>

            <View style={{ height: 325, width: '95%'}}>
                <View style={styles.Rating}>
                    <Text style={{fontSize: 22, position: "absolute"}}>Rating:</Text>
                    <RatingBar/>
                    <View style={{ width: '20%', height: '100%', alignSelf: 'flex-end', justifyContent: "center"}}>
                        <Text style={{fontSize: 22, paddingLeft: 10}}> 
                        {"   " + defaultRating + '/' + starRatings.length} 
                        </Text>
                    </View>
                </View>
                <View style={styles.notes}>
                    <Text style={{fontSize: 22}}>Notes: </Text>
                    <View style={styles.addNotes}>
                        <TextInput  style={styles.notesInput} placeholder="Enter notes..." multiline
                                    value={notes}
                                    onChangeText={(text) => setNotes(text)}></TextInput>
                    </View>
                </View>


                <View style={styles.submitContainer}>
                    <TouchableOpacity   style={styles.submitButton}
                                        onPress={() => {(itemName == '' || parent == '' || parentName == '') ? console.log("Invalid input") : addReview(itemName, parent, parentName, defaultRating, notes)}}>
                        <Text style={{fontSize: 22, color: '#FFF'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
        </KeyboardAvoidingWrapper>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fbfa',
        alignItems: 'center'
    },

    // add image, name, and buttons
    picturePlaceHolder: {
        backgroundColor: 'grey',
        height: 185,
        width: 185,
        position: 'absolute'
    },
    NameContainer: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: '50%',
        //backgroundColor: 'black'
    },
    NameBar: {
        backgroundColor: '#FFF',
        width: '95%',
        height: 45,
        marginLeft: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        paddingRight: 5
    },

    // Resturant/Brand name buttons and search bar
    buttonContainer1: {
        width: '50%',
        height: '100%', 
        position: 'absolute',
        justifyContent: 'center'
    },
    buttonContainer2: {
        width: '50%', 
        height: '100%', 
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#545f71',
        height: '90%',
        width: '90%',
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    restaurantsBrandsBar: {
        backgroundColor: '#fff',
        width: '60%',
        height: 45,
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: 'black',
        paddingRight: 5,
        justifyContent: "center"
    },

    // Rating, notes
    Rating: {
        width: '100%',
        height: 40,
        justifyContent: 'center'
    },
    notes: {
        height: 220,
        width: '100%'
    },
    addNotes: {
        width: '100%',
        height: 180,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1

    },
    notesInput: {
        fontSize: 17,
        marginLeft: 5,
        paddingRight: 5
    },
    submitContainer: {
        //backgroundColor: 'red',
        width: '100%',
        height: 65,
        justifyContent: "center",
        alignItems: "center"
    },
    submitButton: {
        backgroundColor: "#545f71",
        width: 100,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10

    }

})


const ratingStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    starStyling: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    }
})