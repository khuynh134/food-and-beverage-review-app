import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const HomeStyles = StyleSheet.create({
    input:{
      height: 40,
      margin:12,
      borderWidth:1, 
      padding:10,
    },
    title: {
      fontSize: 30,
      color: '#44ccb4',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderWidth: 4,
      borderColor: '#545f71',
      borderRadius: 6,
      backgroundColor: '#f3fafb',
      textAlign: 'center',
      fontWeight: 'bold',
      position: 'absolute',
      top: '4%',
      right: '2%',
      left: '30%',
    },
    itemTitle: {
      fontSize: 25,
      color: '#44ccb4',
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderWidth: 3,
      borderColor: '#545f71',
      borderRadius: 6,
      backgroundColor: 'aliceblue',
      textAlign: 'center',
      fontWeight: 'bold',
      position: 'absolute',
      top: '10%',
      right: '30%',
      left: '30%',
    },
    logostyle: {
      height: 100,
      width: '25%',
      position: 'absolute',
      top: '4%',
      left: '2%',
    },
    buttonContainer: {
      height: 100,
      marginHorizontal: '2%',
      backgroundColor: '#545f71',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:20,
    },
    buttonText:{
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: 22,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f0fbfa',
    },
  });

  const ListStyles = StyleSheet.create({
    listView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '4%',
      paddingRight: '3%',
      paddingTop: '2%',
    },
    listText: {
      fontSize: 20,
    }
  });

  const AddEditReviewStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    picBackdrop: {
      backgroundColor: '#545F71',
      width: '100%',
      height: 185,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      backgroundColor: 'white',
      width: 155,
      height: 155,
    },
    selectImage: {
      fontSize: 20
    },
    selectImageView: {
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center"
    },
    selectImageIndex: {
      backgroundColor: '#D9D9D9',
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      margin: 5,
      paddingHorizontal:12,
      paddingVertical: 5,
      borderColor: 'black',
      borderWidth: 2
    },
    itemNameText: {
      width: '95%',
      fontSize: 20,
      fontWeight: "bold"
    },
    textBox: {
      backgroundColor: "white",
      width: '95%',
      height: 35,
      borderColor: '#888888',
      borderWidth: 2,
      borderRadius: 5
    },
    textInput: {
      fontSize: 15,
      paddingHorizontal: 5
    },
    buttonsContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'row',
      width: '95%',
      marginTop: 10, 
      marginBottom: 5,
    },
    orText: {
      padding: 10,
      fontSize: 20,
      fontWeight: "bold"
    },
    buttons: {
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      width: 150,
      height: 50
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: "bold",
    },
    unselected: {
      backgroundColor: '#9CA3AF'
    },
    selected: {
      backgroundColor: '#545F71'
    },
    ratingContainer: {
      //backgroundColor: "red",
      width: '95%',
      marginTop: 10,
      flexDirection: "row",
    },
    YourRating: {
      //backgroundColor: 'red',
      textAlign: "center",
      paddingVertical: 4,
      fontSize: 20,
      fontWeight: "bold"
    },
    notesText: {
      width: '95%',
      fontSize: 20,
      fontWeight: 'bold',
    },
    notesTextBox: {
      backgroundColor: 'white',
      borderColor: '#9CA3AF',
      borderWidth: 2,
      borderRadius: 5,
      width: '100%',
      height: 100
    },
    SubmitContainer: {
      height: 70,
      width: '95%',
      justifyContent: "center",
      alignItems: 'center'
    },
    Submit: {
      height: '75%',
      width: '50%',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#545F71',
      borderRadius: 5
    },
    SubmitText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    }
  });

  const ratingStyle = StyleSheet.create({
    starStyling: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    starView: {
        marginLeft: 20,
        flexDirection: 'row'
    }
  });

  const reviewListStyles = StyleSheet.create({
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

  const displayReviewStyles = StyleSheet.create({
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
    },
    EditDeleteButtons: {
        backgroundColor: '#545f71',
        width: '35%',
        alignItems: 'center',
        paddingVertical: 5,
        margin: 15,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#424b59',
    }
});

  export {ListStyles, AddEditReviewStyles, ratingStyle, reviewListStyles, displayReviewStyles}
  export default HomeStyles;