import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BrowseListHeader} from './BrowseListHeader';
import {browseResObj} from '../../../models/api_response/CatalogResModel';
import {BrowseItem} from './BrowseItem';
import { ProgressBar } from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';

type Props = {
    browseListData : browseResObj[],
    searchTxt : (e : string) => void,
    search : string,
    browseProgress : boolean,
    browseNoDataTxt : boolean
}


export const BrowseView = React.memo<Props>((props) =>
{
    return(
            <View style={[styles.browseMainCont]}>
                <View>
                    <BrowseListHeader search={props.search} searchTxt={(e) => props.searchTxt(e)}/>
                </View>
                {props.browseListData.length > 0 ? <View style={{flex:1}}>
                    <FlatList
                        data={props.browseListData}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item, index}) =>
                            <BrowseItem
                                item={item}
                                index={index}
                                length={props.browseListData.length}/>}
                        keyExtractor={(item, index) => index.toString()}/>
                </View> : null}
                {props.browseProgress ? <ProgressBar/> : null}
                {props.browseNoDataTxt ? <NoDataTxt/> : null}
            </View>
    )
})

const styles = StyleSheet.create({
    browseMainCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15,
    },
})