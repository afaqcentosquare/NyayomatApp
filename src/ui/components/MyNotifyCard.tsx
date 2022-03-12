import React from 'react';
import {Image, ImageProps, ImageSourcePropType, StyleSheet, TouchableOpacity, View} from 'react-native';
import { AppText } from './AppText';
// @ts-ignore
import NotifyIcon from '../../assets/images/notify_check_icon.svg';
import colors from '../../config/colors';
// @ts-ignore
import NotifyMoreIcon from '../../assets/images/notify_more_icon.svg';
import {GILROY} from '../../config';

type Props = {
    title : string,
    icon : any
}

export const MyNotifyCard = React.memo<Props>((props) =>
{
    return(
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.myNotifyCardMainCont}>
            <View style={styles.myNotifyCardNameCont}>
                <View>
                    <props.icon/>
                </View>
                <View style={{marginStart:10}}>
                    <AppText
                        style={styles.myNotifyCardNameTxt}
                        text={props.title}/>
                </View>
            </View>
            <View>
                <NotifyMoreIcon/>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    myNotifyCardMainCont : {
        backgroundColor:colors.white,
        borderRadius:12,
        padding:12,
        marginStart:15,
        marginEnd:15,
        flexDirection:'row',
        alignItems:'center',
        marginTop:6,marginBottom:6
    },
    myNotifyCardNameCont : {
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    myNotifyCardNameTxt : {
        fontFamily:GILROY.semi_bold
    }
})
