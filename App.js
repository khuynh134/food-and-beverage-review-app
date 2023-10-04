import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import Screens here
import HomeScreen from './Screens/HomeScreen';
import AddItemScreen from './Screens/AddItemScreen';
import BrandsScreen from './Screens/BrandsScreen';
import RestaurantScreen from './Screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [text, onChangeText] = React.useState('Search');
  console.log(logo);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Restaurants"  component={RestaurantScreen}/>
        <Stack.Screen name="Brands"       component={BrandsScreen}    />
        <Stack.Screen name="Add Item"     component={AddItemScreen}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
