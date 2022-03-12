import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {receivedResObj} from '../../../models/api_response/CatalogResModel';
import {ReceivedItem} from './ReceivedItem';
import {ProgressBar} from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';

type Props = {
    receiveListData : receivedResObj[],
    receiveProgress : boolean
    receiveNoDataTxt : boolean
}

export const ReceivedView = React.memo<Props>((props) =>
{
    return(
        <View style={[styles.receiveSubCont]}>
            {props.receiveListData.length > 0 ? <FlatList
                data={props.receiveListData}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) =>
                    <ReceivedItem item={item} index={index} length={props.receiveListData.length}/>}
                keyExtractor={(item, index) => index.toString()}/> : null}
            {props.receiveProgress ? <ProgressBar/> : null}
            {props.receiveNoDataTxt ? <NoDataTxt/> : null}
        </View>
    )
})

const styles = StyleSheet.create({
    receiveSubCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15,
    },
})