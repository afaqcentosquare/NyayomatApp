import React, {useEffect, useState} from 'react';
import {FlatList, View, Modal, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import {InputText} from './InputText';
import {AppText} from './AppText';
import colors from '../../config/colors';
import {countryListObj} from '../../models/api_response/CountryResModel';
import {getCartItems} from '../../repo/CountryList';
import {GILROY} from '../../config';
import {FONT_SIZE} from '../../config/Dimens';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import strings from '../../config/strings';

type Props = {
    dialogVisible : boolean,
    closeDialog : ()  => void,
    selectCountTxt : (txt : string) => void
}

export const SelectCountryDialog = React.memo<Props>((props) =>
{
    const [filterDataSource,setFilterDataSource] = useState<Array<countryListObj>>([]);
    const [masterDataSource, setMasterDataSource] = useState<Array<countryListObj>>([]);
    const [search,setSearch] = useState("");
    const countryTxt = strings.countryListTitle;

    const searchFilterFunction = (text : string) =>
    {
        if (text)
        {
            const newData = masterDataSource.filter(function (item)
            {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > - 1;
            });
            setFilterDataSource(newData);
            setSearch(text);
        }
        else
        {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilterDataSource(masterDataSource);
            setSearch(text);
        }
    };

    useEffect(() =>
    {
        setFilterDataSource(JSON.parse(JSON.stringify(getCartItems().data)));
        setMasterDataSource(JSON.parse(JSON.stringify(getCartItems().data)));
    },[])

    const countryListItem = (item : countryListObj) =>
    {
        return(
            <TouchableOpacity
                onPress={() => {
                    props.selectCountTxt(item.emoji + " " + item.name)
                    props.closeDialog()
                }}
                style={styles.dialogCountListItemCont}>
                <View style={styles.dialogCountListItemNameCont}>
                    <View style={styles.dialogCountListItemImgCont}>
                        <AppText text={item.emoji}/>
                    </View>
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
                    <InputText
                        visible={true}
                        valueToShowAtStart={search}
                        style={styles.dialogHeadSearchInput}
                        hint={countryTxt.countrySearchHint}
                        onChangeText={(e) => searchFilterFunction(e)}/>
                    <FlatList
                        style={{marginTop:20}}
                        data={filterDataSource}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) => countryListItem(item)}
                        keyExtractor={(item, index) => index.toString()}/>
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
            justifyContent:'center',
            alignItems:'center'
        },
    dialogHeadCont : {
        flexDirection:'row'
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
