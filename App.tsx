import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AllScreenRoutes} from './src/routes/allroutes/AllScreenRoutes';

const App = () =>
{

  return (
    <NavigationContainer>
      <AllScreenRoutes/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
