import React, {FC, useEffect, useState} from 'react';
import {TransactionView} from './TransactionView';
import {TransactionModel, TransactionObj} from '../../../models/TransactionModel';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import {assetInfoObj, totalReceiptObj} from '../../../models/api_response/TransactionResModel';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

const TransactionController : FC<Props> = () =>
{
    const [transListData,setTransListData] = useState<Array<assetInfoObj>>([]);
    const [transCardData,setTransCardData] = useState<totalReceiptObj>();
    const [transPaidData,setTransPaidData] = useState(0);
    const [noDataVisible,setNoDataVisible] = useState(false);
    const [progressVisible,setProgressVisible] = useState(true);


    const getTransaction = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getTransaction(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setTransListData(response.data.assets_info);
                        setTransCardData(response.data.total_receipt);
                        setTransPaidData(response.data.total_paid);
                        setProgressVisible(false)
                        setNoDataVisible(false);
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
            console.log("TransactionException : " + e);
        }
    }

    useEffect(() =>
    {
        getTransaction().then(r => r)
    },[])

    return(
        <TransactionView
            transListData={transListData}
            transCardData={transCardData}
            transPaidData={transPaidData}
            noDataVisible={noDataVisible}
            progressVisible={progressVisible}/>
    )
}

export default TransactionController;
