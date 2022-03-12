import React, {FC, useEffect, useState} from 'react' ;
import {DefaultAssetsView} from './DefaultAssetsView';
import {ChooseAssetsObj} from '../../../models/ChooseAssetsModel';
import {useRoute} from '@react-navigation/native';
import {defaultInfoObj} from '../../../models/api_response/MyAssetsResModel';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import {defaultAssetResObj} from '../../../models/api_response/DefaultAssetResModel';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

type defaultAssetNavProp = StackNavigationProp<AllScreenStackParamList>;

const DefaultAssetsController : FC<Props> = () =>
{
    // @ts-ignore
    const route = useRoute<defaultAssetNavProp['item']>();
    const defaultAssetData = route.params.item as defaultInfoObj ;
    const [defaultAsseListData,setDefaultAssetListData] = useState<Array<defaultAssetResObj>>([]);
    const [noDataVisible,setNoDataVisible] = useState(false);
    const [progressVisible,setProgressVisible] = useState(true);

    const getDefaultAsset = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getDefaultAsset(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setProgressVisible(false)
                        setNoDataVisible(false);
                        setDefaultAssetListData(response.data.data);
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
            console.log("DefaultAssetException : " + e);
        }

    }

    useEffect(() =>
    {
        getDefaultAsset().then(r => r);
    },[])


    return(
        <DefaultAssetsView
            defaultAssetListData={defaultAsseListData}
            defaultAssetData={defaultAssetData}
            noDataVisible={noDataVisible}
            progressVisible={progressVisible}/>
    )
}

export default DefaultAssetsController ;
