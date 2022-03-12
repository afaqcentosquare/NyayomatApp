import React from 'react' ;
import {createStackNavigator} from "@react-navigation/stack";

export type HomeStackParamList = {
    Home : undefined,
    Search : undefined,
    Discover : undefined,
    Cart : undefined,
}

export const BottomNavStack = createStackNavigator<HomeStackParamList>();
