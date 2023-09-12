import React from 'react'; 
import {
  StyleSheet, 
  Button,
  View,
  Text 
} from 'react-native';

const App = () => {
  return (
    <View        // Roughly where the searchbar will go 
      style={{
       width: 200,
       height: 550,
       padding: 40,
      }}>
        <Text>HomeScreen</Text>
      </View>

       <Button
          title="Brands"
       />

  );
};

export default App; 
 
