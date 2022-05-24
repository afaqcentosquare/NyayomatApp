import React from 'react' ;
import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import colors from '../../../config/colors';
import {GILROY} from '../../../config';
// @ts-ignore
import TransIcon1 from '../../../assets/images/trans_icon_1.svg';
// @ts-ignore
import TransIcon2 from '../../../assets/images/trans_icon_2.svg';
import {TransactionObj} from '../../../models/TransactionModel';
import {DefaultAssetItem} from '../defaultassets/DefaultAssetItem';
import {TransactionItem} from './TransactionItem';
import {StatusBars} from '../../components/StatusBars';
import {assetInfoObj, totalReceiptObj} from '../../../models/api_response/TransactionResModel';
import Strings from '../../../config/strings';
import {TransactionListHeader} from './TransactionListHeader';
import {ProgressBar} from '../../components/ProgressBar';
import {NoDataTxt} from '../../components/NoDataTxt';

type Props = {
    transListData : assetInfoObj[],
    transCardData : totalReceiptObj | any,
    transPaidData : number,
    noDataVisible : boolean,
    progressVisible : boolean
}

export const TransactionView = React.memo<Props>((props) =>
{

    return(
        <SafeAreaView
            style={styles.transMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={Strings.transaction.transHeaderTxt}/>
            <View style={styles.transSubCont}>
                {props.transListData.length > 0 ? <FlatList
                    data={props.transListData}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={() => <TransactionListHeader transCardData={props.transCardData} transPaidData={props.transPaidData}/>}
                    renderItem={({item, index}) => <TransactionItem index={index} length={props.transListData.length} item={item}/>}
                    keyExtractor={(item, index) => index.toString()}/> : null}
                {props.progressVisible ? <ProgressBar/> : null}
                {props.noDataVisible ? <NoDataTxt/> : null}
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    transMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    transSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        paddingStart:15,
        paddingEnd:15
    }
})
