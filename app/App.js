/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView,Text} from 'react-native';
import { Login,Singup,Quiz } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import AppContext from './AppContext';

const App = () => {
  
  
  return (
    <AppContext>
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Singup" component={Singup} options={{ headerShown: false }} />
          <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
         
        </Stack.Navigator>
      </NavigationContainer>
      </AppContext>
      
  );
};


export default App;
