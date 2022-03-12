import React, {FC, useEffect} from 'react';
import {SplashView} from './SplashView';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';

type Props = {}

type splashNavProp = StackNavigationProp<AllScreenStackParamList> ;

const SplashController : FC<Props> = () =>
{
    const navigation = useNavigation<splashNavProp>();

    const getUserData = async () =>
    {
        const user_id = await UserInfoPreference.getData(Common.LOGIN_ID)
        if(user_id != null)
        {
            navigation.navigate('Discover')
        }
        else
        {
            navigation.navigate('SignIn')
        }
    }

    useEffect(() =>
    {
        setTimeout(() =>
        {
            getUserData().then(r => r)
        },3000)
    },[])

    return(
        <SplashView/>
    )
}

export default SplashController;