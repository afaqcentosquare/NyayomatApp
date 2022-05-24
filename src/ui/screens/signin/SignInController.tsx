import React, {FC, useState} from 'react';
import {SignInView} from "./SignInView";
import MainApis from '../../../repo/main/MainApis';
import {SignInResModel} from '../../../models/api_response/SignInResModel';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import {Strings} from '../../../config';

type Props = {}

type SignInNavProp = StackNavigationProp<AllScreenStackParamList>;

const SignInController : FC<Props> = () =>
{
    const navigation = useNavigation<SignInNavProp>()
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [emailError,setEmailError] = useState(false);
    const [passError,setPassError] = useState(false);
    const [dialogVisible,setDialogVisible] = useState(false);
    const [errorSnackVisible,setErrorSnackVisible] = useState(false);
    const [errorSnackTxt,setErrorSnackTxt] = useState("");
    const signInTxt = Strings.errorMessage;


    const signInEdtEmptyCheck = () =>
    {
        if(email !== '')
        {
            if(pass !== '')
            {
                signInUser().then(r => r)
            }
            else
            {
                setPassError(true)
            }
        }
        else
        {
            setEmailError(true)
        }
    }

    const signInUser = async () =>
    {
        try
        {
            const values = {
                'email' : email,
                'password' : pass
            }
            setErrorSnackVisible(false)
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
                        }
                        else
                        {
                            setDialogVisible(false);
                        }
                    }
                    else if(response.status === 204)
                    {
                        setErrorSnackTxt(signInTxt.invalidEmail);
                        setErrorSnackVisible(true)
                        setDialogVisible(false);
                    }
                    else
                    {
                        setErrorSnackTxt(signInTxt.somethingWentWrongTxt);
                        setErrorSnackVisible(true)
                        setDialogVisible(false);
                    }
                })
        }
        catch (e)
        {
            setErrorSnackTxt(signInTxt.somethingWentWrongTxt);
            setErrorSnackVisible(true)
            setDialogVisible(false);
        }

    }

    return(
        <SignInView
            emailOnChangeTxt={(email) => setEmail(email)}
            passOnChangeTxt={(pass) => setPass(pass)}
            dialogVisible={dialogVisible}
            emailVal={email}
            passVal={pass}
            errorEmail={emailError}
            errorPass={passError}
            signInBtnClick={() => signInEdtEmptyCheck()}
            errorSnackVisible={errorSnackVisible}
            errorSnackTxt={errorSnackTxt}/>
    )
}

export default SignInController;
