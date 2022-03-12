import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {CompleteAssetDetailItem} from './CompleteAssetDetailItem';
import {CompleteAssetDetailListHead} from './CompleteAssetDetailListHead';
import {assetInfo, transactionsDetailObj} from '../../../models/api_response/CompleteAssetDetailResModel';
import {ProgressBar} from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';

type Props = {
    completeAssetDetailListData : transactionsDetailObj[],
    completeAssetDetailObj : assetInfo | any,
    noDataVisible : boolean,
    progressVisible : boolean
}

type completeAssetDetailNavProp = StackNavigationProp<AllScreenStackParamList>;

export const CompleteAssetDetailView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<completeAssetDetailNavProp>();

    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.backgroundColor}}>
            <BackBtnHeader backBtnVisible={true} title={"Complete Assets Detail"}/>
            <View style={{ flex:1,backgroundColor:colors.backgroundColor,paddingStart:15,paddingEnd:15}}>
                {props.completeAssetDetailListData.length > 1 ? <FlatList
                    data={props.completeAssetDetailListData}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={() => <CompleteAssetDetailListHead completeAssetDetailObj={props.completeAssetDetailObj}/>}
                    renderItem={({item, index}) => <CompleteAssetDetailItem item={item} index={index} length={props.completeAssetDetailListData.length}/>}
                    keyExtractor={(item, index) => index.toString()}/> : null}
                {props.progressVisible ? <ProgressBar/> : null}
                {props.noDataVisible ? <NoDataTxt/> : null}
            </View>
        </SafeAreaView>
    )
})
