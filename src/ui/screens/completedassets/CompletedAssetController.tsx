import React, {FC, useEffect, useState} from 'react';
import {CompletedAssetView} from './CompletedAssetView';
import {ChooseAssetsObj} from '../../../models/ChooseAssetsModel';
import {useRoute} from '@react-navigation/native';
import {completeInfoObj, myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import {completeAssetObj} from '../../../models/api_response/CompleteAssetResModel';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

type completeAssetNavProp = StackNavigationProp<AllScreenStackParamList>;

const CompletedAssetController : FC<Props> = () =>
{
    // @ts-ignore
    const route = useRoute<completeAssetNavProp['item']>();
    const completeAssetData = route.params.item as completeInfoObj ;
    const [completeAssetListData,setCompleteAssetListData] = useState<Array<completeAssetObj>>([]);
    const [noDataVisible,setNoDataVisible] = useState(false);
    const [progressVisible,setProgressVisible] = useState(true);

    const getCompleteAsset = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getCompleteAsset(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setProgressVisible(false)
                        setNoDataVisible(false);
                        setCompleteAssetListData(response.data.data);
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
            console.log("CompleteAssetException : " + e);
        }

    }

    useEffect(() =>
    {
        getCompleteAsset().then(r => r);
    },[])


    return(
        <CompletedAssetView
            completeAssetListData={completeAssetListData}
            completeAssetData={completeAssetData}
            noDataVisible={noDataVisible}
            progressVisible={progressVisible}/>
    )
}

export default CompletedAssetController;
