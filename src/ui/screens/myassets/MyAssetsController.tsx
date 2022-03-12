import React, {FC, useEffect, useState} from 'react';
import {MyAssetsView} from './MyAssetsView';
import {browseResObj} from '../../../models/api_response/CatalogResModel';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import {completeInfoObj, defaultInfoObj, myAssetObj} from '../../../models/api_response/MyAssetsResModel';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

const MyAssetsController : FC<Props> = () =>
{
    const [myAssetOutstandingData,setMyAssetOutstandingData] = useState<myAssetObj>();
    const [myAssetTotalDefaultData,setMyAssetTotalDefaultData] = useState<defaultInfoObj>();
    const [myAssetTotalPaidData,setMyAssetTotalPaidData] = useState<completeInfoObj>()

    const getMyAssetData = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getMyAssets(user_id.toString(),user_token.toString())
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setMyAssetOutstandingData(response.data.ongoing_info)
                        setMyAssetTotalDefaultData(response.data.defaulted_info)
                        setMyAssetTotalPaidData(response.data.completed_info)
                    }
                    else
                    {
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("BrowseException : " + e);
        }

    }

    useEffect(() =>
    {
        getMyAssetData().then(r => r);
    },[])

    return(
        <MyAssetsView
            myAssetOutstandingData={myAssetOutstandingData}
            myAssetTotalDefaultData={myAssetTotalDefaultData}
            myAssetTotalPaidData={myAssetTotalPaidData}/>
    )
}

export default MyAssetsController ;
