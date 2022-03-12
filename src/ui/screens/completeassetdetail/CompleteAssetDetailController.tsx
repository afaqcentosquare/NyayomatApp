import React, {FC, useEffect, useState} from 'react';
import {CompleteAssetDetailView} from './CompleteAssetDetailView';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import {ToastAndroid} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {completeAssetObj} from '../../../models/api_response/CompleteAssetResModel';
import MainApis from '../../../repo/main/MainApis';
import {assetInfo, transactionsDetailObj} from '../../../models/api_response/CompleteAssetDetailResModel';

type Props = {}

type completeAssetNavProp = StackNavigationProp<AllScreenStackParamList>;

const CompleteAssetDetailController : FC<Props> = () =>
{
    // @ts-ignore
    const route = useRoute<completeAssetNavProp['item']>();
    const completeDetailAssetData = route.params.item as completeAssetObj ;
    const [completeAssetDetailData,setCompleteAssetDetailData] = useState<Array<transactionsDetailObj>>([]);
    const [completeAssetDetailObj,setAssetDetailDetailObj] = useState<assetInfo>();
    const [noDataVisible,setNoDataVisible] = useState(false);
    const [progressVisible,setProgressVisible] = useState(true);


    const getCompleteAssetDetail = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getCompleteTransDetail(user_id,user_token,completeDetailAssetData.order_id.toString())
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setAssetDetailDetailObj(response.data.asset_info);
                        setCompleteAssetDetailData(response.data.transactions);
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
            console.log("OnGoingAssetException : " + e);
        }

    }

    useEffect(() =>
    {
        getCompleteAssetDetail().then(r => r);
    },[])

    return(
        <CompleteAssetDetailView
            completeAssetDetailListData={completeAssetDetailData}
            completeAssetDetailObj={completeAssetDetailObj}
            noDataVisible={noDataVisible}
            progressVisible={progressVisible}/>
    )
}

export default CompleteAssetDetailController;
