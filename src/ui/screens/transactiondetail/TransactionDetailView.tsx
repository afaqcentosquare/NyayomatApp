import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {TransactionDetailItem} from './TransactionDetailItem';
import {transDetailInfoObj} from '../../../models/api_response/TransactionDetailResModel';
import {TransactionListHeader} from '../transactions/TransactionListHeader';
import {TransactionDetailListHeader} from './TransactionDetailListHeader';
import {myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import {assetInfoObj} from '../../../models/api_response/TransactionResModel';
import {ProgressBar} from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';

type Props = {
    transDetailListData : transDetailInfoObj[],
    transDetailData : assetInfoObj,
    noDataVisible : boolean,
    progressVisible : boolean,
    totalAmount : number
}

export const TransactionDetailView = React.memo<Props>((props) =>
{
    return(
        <SafeAreaView style={styles.transDetailMainCont}>
            <BackBtnHeader backBtnVisible={true} title={"Transaction Details"}/>
            <View style={styles.transDetailSubCont}>
                {props.transDetailListData.length > 0 ? <FlatList
                    data={props.transDetailListData}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={() => <TransactionDetailListHeader totalAmount={props.totalAmount} transDetailData={props.transDetailData}/>}
                    renderItem={({item, index}) => <TransactionDetailItem item={item} length={props.transDetailListData.length} index={index}/>}
                    keyExtractor={(item, index) => index.toString()}/> : null}
                {props.progressVisible ? <ProgressBar/> : null}
                {props.noDataVisible ? <NoDataTxt/> : null}
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    transDetailMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    transDetailSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        paddingStart:15,
        paddingEnd:15
    }
})
