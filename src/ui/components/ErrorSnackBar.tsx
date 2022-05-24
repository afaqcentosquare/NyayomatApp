import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../config/colors';
// @ts-ignore
import SnackBar from 'react-native-snackbar-component'

type Props = {
    snackBarVisible : boolean,
    snackBarTxt : string
}

export const ErrorSnackBar = React.memo<Props>((props) =>
{
    return(
        <SnackBar
            position={"top"}
            visible={props.snackBarVisible}
            autoHidingTime={1500}
            textMessage={props.snackBarTxt}/>

    )
})

const styles = StyleSheet.create({
    signInMainCont : {
        flex:1,
        backgroundColor:colors.white
    }
})
