import React, {FC} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from "../../config/colors";
import HomeController from "../../ui/screens/main/home/HomeController";
import SearchController from "../../ui/screens/main/search/SearchController";
import DiscoverController from "../../ui/screens/main/discover/DiscoverController";
import CartController from "../../ui/screens/main/cart/CartController";

// @ts-ignore
import HomeActiveNavIcon from '../../assets/images/home_active_icon.svg';
// @ts-ignore
import SearchActiveNavIcon from '../../assets/images/search_active_icon.svg';
// @ts-ignore
import DiscoverActiveNavIcon from '../../assets/images/discover_active_icon.svg';
// @ts-ignore
import CartActiveNavIcon from '../../assets/images/cart_active_icon.svg';
// @ts-ignore
import HomeInActiveNavIcon from '../../assets/images/home_in_active_icon.svg';
// @ts-ignore
import SearchInActiveNavIcon from '../../assets/images/search_in_active_icon.svg';
// @ts-ignore
import DiscoverInActiveNavIcon from '../../assets/images/discover_in_active_icon.svg';
// @ts-ignore
import CartInActiveNavIcon from '../../assets/images/cart_in_active_icon.svg';
import {GILROY} from "../../config";

const Tab = createBottomTabNavigator();

type Props = {}

export const BottomNavRoutes : FC<Props> = ({}) =>
{
    return (
        <Tab.Navigator
            screenOptions={{
                    tabBarActiveTintColor: colors.white,
                    tabBarInactiveTintColor: colors.tabInActiveColor,
                    tabBarIconStyle:{marginTop:5},
                    tabBarLabelStyle:{fontFamily:GILROY.semi_bold,fontSize:13,marginBottom:5,fontWeight:"600"},
                    tabBarStyle: {backgroundColor:colors.commonBtn,borderTopRightRadius:18,borderTopLeftRadius:18,height:55}
            }}
            initialRouteName="Home">

            <Tab.Screen
                name="Home"
                component={ HomeController }
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused, color}) =>  (focused ? <HomeActiveNavIcon /> : <HomeInActiveNavIcon/>)}}/>

            <Tab.Screen
                name="Search"
                component={ SearchController }
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused, color}) =>  (focused ? <SearchActiveNavIcon /> : <SearchInActiveNavIcon/>)}}/>

            <Tab.Screen
                name="Discover"
                component={ DiscoverController }
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused, color}) =>  (focused ? <DiscoverActiveNavIcon /> : <DiscoverInActiveNavIcon/>)}}/>

            <Tab.Screen
                name="Cart"
                component={ CartController }
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused, color}) =>  (focused ? <CartActiveNavIcon /> : <CartInActiveNavIcon/>)}}/>

        </Tab.Navigator>
    )

}
