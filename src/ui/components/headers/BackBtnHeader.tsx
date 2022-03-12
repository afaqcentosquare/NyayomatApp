import React from 'react';
import {Image, StyleProp, StyleSheet, TextStyle, TouchableOpacity, View} from 'react-native';
import colors from "../../../config/colors";
import {AppText} from "../AppText";
import {GILROY, MONTSERRAT, POPPINS} from '../../../config';
import {StackNavigationProp} from "@react-navigation/stack";
import {AllScreenStackParamList} from "../../../routes/allroutes/AllScreenStack";
import {useNavigation} from "@react-navigation/native";
// @ts-ignore
import BackBtn from '../../../assets/images/back_arrow_icon.svg';

type Props = {
    title : string,
    backBtnVisible? : boolean,
    backBtnHeaderCont? : StyleProp<TextStyle>
}

type HomeFlashNavProp = StackNavigationProp<AllScreenStackParamList>;

export const BackBtnHeader = React.memo<Props>((props) =>
{
    const navigation = useNavigation<HomeFlashNavProp>();

    return(
        <View style={[styles.backBtnHeaderCont,props.backBtnHeaderCont]}>
            <View style={styles.backBtnHeaderNameCont}>
                {props.backBtnVisible ? <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.4}>
                    <View style={styles.backBtnImgCont}>
                        <BackBtn/>
                    </View>
                </TouchableOpacity> : null}
                <View style={styles.backBtnHeaderTxtCont}>
                    <AppText
                        style={styles.backBtnHeaderNameTxt}
                        text={props.title}/>
                </View>
            </View>
        </View>
    )
});

const styles = StyleSheet.create({
    backBtnHeaderCont :
        {
            backgroundColor:colors.white,
            paddingStart:13,
            height:55,
            justifyContent:'center',
            flexDirection:'row',
            alignItems:'center',
            borderBottomLeftRadius:18,
            borderBottomRightRadius:18
        },
    backBtnImgCont : {
        marginEnd:15
    },
    backBtnHeaderImg :
        {
            height:40,
            width:40,
            borderRadius:80
        },

    backBtnHeaderNameCont :
        {
            flex:1,
            flexDirection:'row',
            alignItems:'center'
        },

    backBtnHeaderTxtCont :
        {
            alignItems:'center',
            justifyContent:'center'
        },

    backBtnHeaderNameTxt :
        {
            fontFamily:GILROY.semi_bold,
            color:colors.black,
            fontWeight:"400",
            fontSize:18
        },

    backBtnHeaderIconCont :
        {
            flexDirection:'row'
        }
})
