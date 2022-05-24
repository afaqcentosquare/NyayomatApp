import React, {FC, useState} from 'react';
import {SignUpView} from './SignUpView';
import MainApis from '../../../repo/main/MainApis';
import {Strings} from '../../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';

type Props = {}

type SignUpNavProp = StackNavigationProp<AllScreenStackParamList>;

const SignUpController : FC<Props> = () =>
{
    const navigation = useNavigation<SignUpNavProp>()
    const [edtEmail,setEdtEmail] = useState("");
    const [edtNumber,setEdtNumber] = useState("");
    const [edtPass,setEdtPass] = useState("");
    const [edtConfirmPass,setEdtConfirmPass] = useState("");
    const [edtShopName,setEdtShopName] = useState("");
    const [edtCity,setEdtCity] = useState("");
    const [edtRegion,setEdtRegion] = useState("");
    const [edtLoc,setEdtLoc] = useState("");

    const [edtEmailError,setEdtEmailError] = useState(false);
    const [edtNumberError,setEdtNumberError] = useState(false);
    const [edtPassError,setEdtPassError] = useState(false);
    const [edtConfirmPassError,setEdtConfirmPassError] = useState(false);
    const [edtShopNameError,setEdtShopNameError] = useState(false);
    const [edtCityError,setEdtCityError] = useState(false);
    const [edtRegionError,setEdtRegionError] = useState(false);
    const [edtLocError,setEdtLocError] = useState(false);

    const [errorSnackVisible,setErrorSnackVisible] = useState(false);
    const [errorSnackTxt,setErrorSnackTxt] = useState("");
    const [dialogVisible,setDialogVisible] = useState(false);
    const signInTxt = Strings.errorMessage;

    const [cityId,setCityId] = useState<number>();
    const [regionId,setRegionId] = useState<number>();

    const signUpEdtEmptyCheck = () =>
    {
        if(edtEmail !== '')
        {
            if(edtNumber !== '')
            {
                if(edtPass !== '')
                {
                    if(edtConfirmPass !== '')
                    {
                        if(edtShopName !== '')
                        {
                            if(edtCity !== '')
                            {
                                if(edtRegion !== '')
                                {
                                    if(edtLoc !== '')
                                    {
                                        signUpServer().then(r => r)
                                    }
                                    else
                                    {
                                        setEdtLocError(true)
                                    }
                                }
                                else
                                {
                                    setEdtRegionError(true)
                                }
                            }
                            else
                            {
                                setEdtCityError(true)
                            }
                        }
                        else
                        {
                            setEdtShopNameError(true)
                        }
                    }
                    else
                    {
                        setEdtConfirmPassError(true)
                    }
                }
                else
                {
                    setEdtPassError(true)
                }
            }
            else
            {
                setEdtNumberError(true)
            }
        }
        else
        {
            setEdtEmailError(true)
        }
    }

    const signUpServer = async () =>
    {
        try
        {
            setErrorSnackVisible(false)
            setDialogVisible(true);
            const values = {
                'email':edtEmail,
                'mobile':edtNumber,
                'password':edtPass,
                'shop_name':edtShopName,
                'city':cityId,
                'region':regionId,
                'locations' : null,
                'agree': 1,
            }
            await MainApis.signUp(values)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        console.log("if call")
                        setErrorSnackVisible(true)
                        setDialogVisible(false);
                        setErrorSnackTxt("Successfully Register");
                        navigation.navigate('SignIn')
                    }
                    else if (response.status === 404)
                    {
                        console.log("else call")
                        setErrorSnackVisible(true)
                        setDialogVisible(false);
                        setErrorSnackTxt("Something went wrong");
                    }
                })
        }
        catch (e)
        {
            console.log("Error : " + e);
            //ToastAndroid.show("something went wrong",ToastAndroid.LONG);
            setErrorSnackTxt("something went wrong");
            setErrorSnackVisible(true)
            setDialogVisible(false);
        }

    }



    return(
        <SignUpView
            emailOnChangeTxt={(email) => setEdtEmail(email)}
            numberOnChangeTxt={(number) => setEdtNumber(number)}
            passwordOnChangeTxt={(pass) => setEdtPass(pass)}
            confirmPassOnChangeTxt={(confirmPass) => setEdtConfirmPass(confirmPass)}
            shopNameOnChangeTxt={(shopName) => setEdtShopName(shopName)}
            cityOnChangeTxt={(city) => setEdtCity(city)}
            regionOnChangeTxt={(region) => setEdtRegion(region)}
            locOnChangeTxt={(loc) => setEdtLoc(loc)}

            emailVal={edtEmail}
            numberVal={edtNumber}
            passVal={edtPass}
            confirmPassVal={edtConfirmPass}
            shopVal={edtShopName}
            cityVal={edtCity}
            regionVal={edtRegion}
            locVal={edtLoc}

            errorEmail={edtEmailError}
            errorNumber={edtNumberError}
            errorPass={edtPassError}
            errorConfirmPass={edtConfirmPassError}
            errorShop={edtShopNameError}
            errorCity={edtCityError}
            errorRegion={edtRegionError}
            errorLoc={edtLocError}
            errorSnackVisible={errorSnackVisible}
            errorSnackTxt={errorSnackTxt}
            signUpBtnClick={() => signUpEdtEmptyCheck()}
            dialogVisible={dialogVisible}

            cityId={(cityId) => setCityId(cityId)}
            regionId={(regionId) => setRegionId(regionId)}/>
    )
}

export default SignUpController ;
