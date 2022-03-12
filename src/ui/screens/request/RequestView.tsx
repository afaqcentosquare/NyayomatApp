import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, ToastAndroid, View} from 'react-native';
import {ProgressBar} from '../../components/ProgressBar';
import {requestResObj} from '../../../models/api_response/CatalogResModel';
import {RequestItem} from './RequestItem';
import {NoDataTxt} from '../../components/NoDataTxt';

type Props = {
    requestListData : requestResObj[],
    updateList : () => void,
    reqProgress : boolean,
    reqNoDataTxt : boolean
}

export const RequestView = React.memo<Props>((props) =>
{
    return(
        <View style={styles.requestSubCont}>
            {props.requestListData.length > 0 ?
                <FlatList
                    data={props.requestListData}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => <RequestItem update={props.updateList} item={item} index={index} length={props.requestListData.length}/>}
                    keyExtractor={(item, index) => index.toString()}/> : null}
            {props.reqProgress  ? <ProgressBar/> : null}
            {props.reqNoDataTxt ? <NoDataTxt/> : null}
        </View>
    )
})

const styles = StyleSheet.create({
    requestSubCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15,
    },
})