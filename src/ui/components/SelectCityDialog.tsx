import React from 'react';
import {FlatList, View, Modal, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {AppText} from './AppText';
import colors from '../../config/colors';
import {GILROY} from '../../config';
import {FONT_SIZE} from '../../config/Dimens';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import strings from '../../config/strings';
import {cityObj} from '../../models/api_response/SignUpCityResModel';
import {ViewLine} from './ViewLine';
import {ProgressBar} from './ProgressBar';
import {NoDataTxt} from './NoDataTxt';

type Props = {
    dialogVisible : boolean,
    closeDialog : ()  => void,
    selectCityTxt : (txt : string) => void,
    selectCityId : (cityId : number) => void,
    cityList : cityObj[],
    cityDataProgress : boolean,
    cityDataTxt : boolean
}

export const SelectCityDialog = React.memo<Props>((props) =>
{
    const countryTxt = strings.countryListTitle;

    const cityListItem = (item : cityObj) =>
    {
        return(
            <TouchableOpacity
                onPress={() => {
                    props.selectCityTxt(item.name)
                    props.closeDialog()
                    props.selectCityId(item.id)
                }}
                style={styles.dialogCountListItemCont}>
                <View style={styles.dialogCountListItemNameCont}>
                    <View style={styles.dialogCountListTxtCont}>
                        <AppText
                            style={styles.dialogCountListTxt}
                            text={item.name}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <Modal
            visible={props.dialogVisible}
            transparent
            animationType={"fade"}
            hardwareAccelerated>
            <View style={styles.dialogMainContainer}>
                <View style={styles.dialogSubContainer}>
                    <View style={styles.dialogHeadCont}>
                        <View style={styles.dialogHeadTitleCont}>
                            <AppText
                                style={styles.dialogHeadTitleTxt}
                                text={countryTxt.countryListHeadTitle}/>
                        </View>
                        <TouchableOpacity
                            onPress={() => props.closeDialog()}
                            activeOpacity={0.6}
                            style={styles.dialogHeadCloseIconCont}>
                            <Ionicons
                                name={"ios-close"}
                                size={18}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:15}}>
                        <ViewLine/>
                    </View>
                    {props.cityList !== null ? <View style={{width: Dimensions.get('window').width / 1.2}}>
                        <FlatList
                            style={{marginTop: 20}}
                            data={props.cityList}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => cityListItem(item)}
                            keyExtractor={(item, index) => index.toString()}/>
                    </View> : null}
                    {props.cityDataProgress ? <View style={{flex:1,justifyContent:'center',width: Dimensions.get('window').width / 1.2 }}>
                        <ProgressBar/>
                    </View> : null}
                    {props.cityDataTxt ? <View style={{flex:1,width: Dimensions.get('window').width / 1.2 }}>
                        <NoDataTxt/>
                    </View> : null}
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
            marginStart:30,
            marginEnd:30,
            marginTop:20,
            marginBottom:20
        },
    dialogSubContainer:
        {
            height: Dimensions.get('window').height / 1.4,
            backgroundColor:colors.white,
            borderRadius:12,
            paddingTop:15,

        },
    dialogHeadCont : {
        flexDirection:'row',
        marginTop:3
    },
    dialogHeadTitleCont : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    dialogHeadTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:FONT_SIZE.lg
    },
    dialogHeadCloseIconCont : {
        right:0,
        position:'absolute',
        paddingEnd:15,
        paddingStart:15
    },
    dialogHeadSearchInput : {
        backgroundColor:colors.editTxt,
        height:40,
        marginTop:15,
        marginStart:15,
        marginEnd: 15
    },
    dialogCountListItemCont : {
        width:Dimensions.get('window').width,
        paddingStart:15,
        paddingEnd:15,
        paddingTop:5,
        paddingBottom:5,
    },
    dialogCountListItemNameCont : {
        flexDirection:'row',
        alignItems:'center'
    },
    dialogCountListItemImgCont : {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:120,
        backgroundColor:colors.backgroundColor,
        height:30,
        width:30
    },
    dialogCountListTxtCont : {
        flex:1,
        justifyContent:'center',
        paddingStart:10,
        paddingEnd:10
    },
    dialogCountListTxt : {
        color:colors.black,
        fontFamily:GILROY.semi_bold,
        fontSize:FONT_SIZE.lg,
    }
})
