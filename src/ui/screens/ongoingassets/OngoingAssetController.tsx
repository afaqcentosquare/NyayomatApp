import React, {FC, useEffect, useState} from 'react';
import {OngoingAssetsView} from './OngoingAssetsView';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useRoute} from '@react-navigation/native';
import {myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import {onGoingAssetObj} from '../../../models/api_response/OngoingAssetResModel';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

type onGoingNavProp = StackNavigationProp<AllScreenStackParamList>;

const OngoingAssetController : FC<Props> = () =>
{
    // @ts-ignore
    const route = useRoute<onGoingNavProp['item']>();
    const onGoingAssetData = route.params.item as myAssetObj ;
    const [onGoingAssetListData,setOnGoingAssetListData] = useState<Array<onGoingAssetObj>>([]);
    const [noDataVisible,setNoDataVisible] = useState(false);
    const [progressVisible,setProgressVisible] = useState(true);

    const getOnGoingAsset = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getOnGoingAsset(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setProgressVisible(false)
                        setNoDataVisible(false);
                        setOnGoingAssetListData(response.data.data);
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
        getOnGoingAsset().then(r => r);
    },[])


    return(
        <OngoingAssetsView
            onGoingAssetListData={onGoingAssetListData}
            onGoingAssetData={onGoingAssetData}
            noDataVisible={noDataVisible}
            progressVisible={progressVisible}/>
    )
}

export default OngoingAssetController ;
