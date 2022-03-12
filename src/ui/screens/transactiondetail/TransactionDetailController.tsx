import React, {FC, useEffect, useState} from 'react';
import {TransactionView} from '../transactions/TransactionView';
import {TransactionDetailView} from './TransactionDetailView';
import {ChooseAssetsObj} from '../../../models/ChooseAssetsModel';
import {assetInfoObj, totalReceiptObj} from '../../../models/api_response/TransactionResModel';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import {transDetailInfoObj} from '../../../models/api_response/TransactionDetailResModel';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useRoute} from '@react-navigation/native';
import {myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

type transDetailNavProp = StackNavigationProp<AllScreenStackParamList>;

const TransactionDetailController : FC<Props> = () =>
{
    // @ts-ignore
    const route = useRoute<transDetailNavProp['item']>();
    const transDetailData = route.params.item as assetInfoObj ;
    const [transDetailListData,setTransDetailListData] = useState<Array<transDetailInfoObj>>([]);
    const [noDataVisible,setNoDataVisible] = useState(false);
    const [progressVisible,setProgressVisible] = useState(true);
    const [totalAmount,setTotalAmount] = useState(0);

    const getTransactionDetail = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getTransactionDetail(transDetailData.order_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setProgressVisible(false)
                        setNoDataVisible(false);
                        setTransDetailListData(response.data.transactions_info);
                        setTotalAmount(response.data.total_paid);
                    }
                    else if(response.status === 204)
                    {
                        setProgressVisible(false)
                        setNoDataVisible(true);
                    }
                    else
                    {
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("TransactionDetailException : " + e);
        }
    }

    useEffect(() =>
    {
        getTransactionDetail().then(r => r)
    },[])

    return(
        <TransactionDetailView
            transDetailListData={transDetailListData}
            transDetailData={transDetailData}
            noDataVisible={noDataVisible}
            progressVisible={progressVisible}
            totalAmount={totalAmount}/>
    )
}

export default TransactionDetailController;
