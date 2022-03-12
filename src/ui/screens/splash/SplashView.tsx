import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
// @ts-ignore
import SignInLogo from '../../../assets/images/sign_in_logo.svg';
import colors from '../../../config/colors';

type Props = {}

export const SplashView = React.memo<Props>((props) =>
{
    return(
        <SafeAreaView style={styles.splashMainCont}>
            <View
                style={styles.splashSubCont}>
                <SignInLogo/>
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    splashMainCont : {
        flex:1,
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center'
    },
    splashSubCont : {
        justifyContent:'center',
        alignItems:'center'
    }
})