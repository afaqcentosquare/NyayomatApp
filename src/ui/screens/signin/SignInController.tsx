import React, {FC, useState} from 'react';
import {SignInView} from "./SignInView";
import MainApis from '../../../repo/main/MainApis';
import {SignInReqModel} from '../../../models/api_request/SignInReqModel';
import {SignInResModel} from '../../../models/api_response/SignInResModel';
import {Platform, ToastAndroid,} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

type SignInNavProp = StackNavigationProp<AllScreenStackParamList>;

const SignInController : FC<Props> = () =>
{
    const navigation = useNavigation<SignInNavProp>()
    const [dialogVisible,setDialogVisible] = useState(false);

    const signInUser = async (values : SignInReqModel) =>
    {
        try
        {
            setDialogVisible(true);
            await MainApis.signIn(values)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        const data : SignInResModel = response.data
                        if(data.status)
                        {
                            UserInfoPreference.storeData(Common.LOGIN_ID,data.user.id.toString());
                            UserInfoPreference.storeData(Common.ACCESS_TOKEN,data.token);
                            navigation.navigate('Discover')
                            setDialogVisible(false)
                            /*if (Platform.OS === 'android') {
                                ToastAndroid.show("msg", ToastAndroid.SHORT)
                            } else {
                                AlertIOS.alert("Successfully Login");
                            }*/
                        }
                        else
                        {
                            setDialogVisible(false);
                            console.log("status false");
                            /*if (Platform.OS === 'android') {
                                ToastAndroid.show("msg", ToastAndroid.SHORT)
                            } else {
                                AlertIOS.alert("msg");
                            }*/
                        }
                    }
                    else if(response.status === 204)
                    {
                        /*if (Platform.OS === 'android') {
                            ToastAndroid.show("msg", ToastAndroid.SHORT)
                        } else {
                            AlertIOS.alert("msg");
                        }*/
                        setDialogVisible(false);
                        console.log("Incorrect email and password");
                    }
                    else
                    {
                        /*if (Platform.OS === 'android') {
                            ToastAndroid.show("msg", ToastAndroid.SHORT)
                        } else {
                            AlertIOS.alert("msg");
                        }*/
                        setDialogVisible(false);
                        //ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                        console.log("something went wrong");
                    }
                })
        }
        catch (e)
        {
            /*if (Platform.OS === 'android') {
                ToastAndroid.show("msg", ToastAndroid.SHORT)
            } else {
                AlertIOS.alert("msg");
            }*/
            //ToastAndroid.show("Incorrect email or password",ToastAndroid.LONG);
            setDialogVisible(false);
            console.log("SignIn Exception" + e);
        }

    }

    return(
        <SignInView
            signIn={(values =>
            {
                signInUser(values).then(r => r)
            })}
            dialogVisible={dialogVisible}/>
    )
}

export default SignInController;
