import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import colors from '../../config/colors';
import {AppText} from './AppText';

type Props = {
    dialogVisible : boolean
}

export const DialogComponent = React.memo<Props>((props) =>
{
    return(
        <Modal
            visible={props.dialogVisible}
            transparent
            animationType='fade'
            hardwareAccelerated>
            <View style={styles.dialogMainContainer}>
                <View style={styles.dialogSubContainer}>
                    <AppText
                        style={styles.dialogTxt}
                        text={'Please Wait'}/>
                    <ActivityIndicator
                        animating={props.dialogVisible}
                        size="large"
                        color="red"
                        style={styles.dialogProgress}/>
                </View>
            </View>
        </Modal>
    )
})

const styles = StyleSheet.create({
    dialogMainContainer:
        {
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'transparent'
        },

    dialogSubContainer:
        {
            backgroundColor:colors.white,
            borderRadius:8,
            paddingStart:50,
            paddingEnd: 50,
            paddingTop:25,
            paddingBottom:25,
            justifyContent:'center',
            alignItems:'center'
        },

    dialogTxt:
        {
            fontFamily: 'Montserrat-Medium',
            fontSize: 16
        },

    dialogTxtContainer:
        {
            justifyContent:'center',
            alignItems:'center'
        },

    dialogProgress:
        {
            paddingTop: 25
        },
})