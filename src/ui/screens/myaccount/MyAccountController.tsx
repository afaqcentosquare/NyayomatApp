import React, {FC, useEffect, useState} from 'react';
import {MyAccountView} from './MyAccountView';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import MainApis from '../../../repo/main/MainApis';
import {ToastAndroid} from 'react-native';
import {userResObj} from '../../../models/api_response/MyAccountResModel';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';

type Props = {}

type myAccountNavProp = StackNavigationProp<AllScreenStackParamList>;

const MyAccountController : FC<Props> = () =>
{
    const navigation = useNavigation<myAccountNavProp>();
    const [myAccountData,setMyAccountData] = useState<userResObj>();
    const [depositEdtTxt,setDepositEdtTxt] = useState("");


    const getAccountBalance = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getAccountBalance(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setMyAccountData(response.data.user)
                    }
                    else if(response.status === 204)
                    {
                        ToastAndroid.show("data not found",ToastAndroid.LONG);
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

    const postAccountBalance = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            const accountBalanceObj = {
                'Amount' : depositEdtTxt,
                'PhoneNumber' : myAccountData?.mobile,
                'TransactionDesc' : 'deposit'
            }

            // @ts-ignore
            MainApis.postBalanceData(accountBalanceObj,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        if(response.data.ResponseCode === "0")
                        {
                            setDepositEdtTxt('');
                            ToastAndroid.show("Once you authorize payment, then you are able to see the updated balance",ToastAndroid.LONG);
                            navigation.navigate('Discover');
                        }
                        else
                        {
                            ToastAndroid.show("Kindly try again after 2 min",ToastAndroid.LONG);
                        }
                    }
                    else
                    {
                        ToastAndroid.show("Kindly try again after 2 min",ToastAndroid.LONG);
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
        getAccountBalance().then(r => r);
    },[])


    return(
        <MyAccountView
            myAccountData={myAccountData}
            depositEdtTxt={(e) => setDepositEdtTxt(e)}
            depositEdtVal={depositEdtTxt}
            topUpAccountBalance={postAccountBalance}/>
    )
}

export default MyAccountController
