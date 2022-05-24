import React, {useState} from 'react';
import colors from '../../../config/colors';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import {DialogComponent} from '../../components/DialogComponent';
// @ts-ignore
import SignInImg from '../../../assets/images/sign_in_img.svg';
// @ts-ignore
import SignInLogo from '../../../assets/images/sign_in_logo.svg';
import {AppText} from '../../components/AppText';
import {InputText} from '../../components/InputText';
import {AppButton} from '../../components/AppButton';
import {GILROY} from '../../../config';
import {FONT_SIZE} from '../../../config/Dimens';
import Strings from '../../../config/strings';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {EdtErrorMsg} from '../../components/EdtErrorMsg';
import {SelectCityDialog} from '../../components/SelectCityDialog';
import {ErrorSnackBar} from '../../components/ErrorSnackBar';
import {SelectRegionDialog} from '../../components/SelectRegionDialog';
import {SelectLocDialog} from '../../components/SelectLocDialog';
import {regionObj} from '../../../models/api_response/SignUpRegionResModel';
import MainApis from '../../../repo/main/MainApis';
import {locObj} from '../../../models/api_response/SignUpLocResModel';
import {cityObj} from '../../../models/api_response/SignUpCityResModel';

type Props = {
    //edt change
    emailOnChangeTxt : (e : string) => void,
    numberOnChangeTxt : (e : string) => void,
    passwordOnChangeTxt : (e : string) => void,
    confirmPassOnChangeTxt : (e : string) => void,
    shopNameOnChangeTxt : (e : string) => void,
    cityOnChangeTxt : (e : string) => void,
    regionOnChangeTxt : (e : string) => void,
    locOnChangeTxt : (e : string) => void,

    //edt values
    emailVal : string,
    numberVal : string,
    passVal : string,
    confirmPassVal : string,
    shopVal : string,
    cityVal : string,
    regionVal : string,
    locVal : string,

    //error txt
    errorEmail : boolean,
    errorNumber : boolean,
    errorPass : boolean,
    errorConfirmPass : boolean,
    errorShop : boolean,
    errorCity : boolean,
    errorRegion : boolean,
    errorLoc : boolean,

    dialogVisible : boolean,
    signUpBtnClick : () => void,
    errorSnackVisible : boolean,
    errorSnackTxt : string,

    cityId : (cityId : number) => void,
    regionId : (regionId : number) => void,
}

type signInNavProp = StackNavigationProp<AllScreenStackParamList>;

export const SignUpView = React.memo<Props>((props) =>
{
    const signUpTxt = Strings.signUp ;
    const navigation = useNavigation<signInNavProp>();
    const [cityDialog,setCityDialog] = useState(false);
    const [regionDialog,setRegionDialog] = useState(false);
    const [locDialog,setLocDialog] = useState(false);

    const [regionId,setRegionId] = useState<number>(0);
    const [locId,setLocId] = useState<number>(0);
    const [cityList,setCityList] = useState<Array<cityObj>>([]);
    const [regionList,setRegionList] = useState<Array<regionObj>>([]);
    const [locList,setLocList] = useState<Array<locObj>>([]);

    const [cityDataProgress,setCityDataProgress] = useState(true);
    const [cityDataTxt,setCityDataTxt] = useState(false);

    const [regionDataProgress,setRegionDataProgress] = useState(true);
    const [regionDataTxt,setRegionDataTxt] = useState(false);

    const [locDataProgress,setLocDataProgress] = useState(true);
    const [locDataTxt,setLocDataTxt] = useState(false);


    async function getCityData()
    {
        try
        {
            await MainApis.getSignUpCity().then((response) =>
            {
                if(response.status === 200)
                {
                    console.log("city 200 call")
                    setCityList(response.data.cities);
                    setCityDataProgress(false);
                    setCityDataTxt(false);
                }
                else if(response.status === 204)
                {
                    console.log("city 204 call")
                    setCityDataProgress(false);
                    setCityDataTxt(true);
                }

            })
        }
        catch (e)
        {
            console.log("CITY_DIALOG_ERROR" + e);
        }
    }

    async function getRegionData()
    {
        try
        {
            await MainApis.getSignUpRegion(regionId)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setRegionList(response.data.regions);
                        setRegionDataProgress(false);
                        setRegionDataTxt(false);
                    }
                    else if(response.status === 204)
                    {
                        setRegionDataProgress(false);
                        setRegionDataTxt(true);
                    }
                })
        }
        catch (e)
        {
            console.log("REGION : " + e);
        }
    }

    async function getLocationData()
    {
        try
        {
            await MainApis.getSignUpLoc(locId)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setLocList(response.data.locations);
                        setLocDataProgress(false);
                        setLocDataTxt(false);
                    }
                    else if(response.status === 204)
                    {
                        setLocDataProgress(false);
                        setLocDataTxt(true);
                    }
                })
        }
        catch (e)
        {
            console.log("REGION : " + e);
        }
    }

    return(
        <SafeAreaView style={styles.signUpContainer}>
            <ErrorSnackBar
                snackBarVisible={props.errorSnackVisible}
                snackBarTxt={props.errorSnackTxt}/>
            <SelectCityDialog
                cityList={cityList}
                cityDataProgress={cityDataProgress}
                cityDataTxt={cityDataTxt}
                selectCityId={(cityId) => {
                    props.cityId(cityId)
                    setRegionId(cityId)
                }}
                selectCityTxt={(cityTxt) => props.cityOnChangeTxt(cityTxt)}
                closeDialog={() => setCityDialog(false)}
                dialogVisible={cityDialog}/>
            <SelectRegionDialog
                regionId={regionId}
                selectRegionId={(locId) => {
                    props.regionId(locId)
                    setLocId(locId)
                }}
                regionList={regionList}
                regionDataProgress={regionDataProgress}
                regionDataTxt={regionDataTxt}
                selectRegionTxt={(cityTxt) => props.regionOnChangeTxt(cityTxt)}
                closeDialog={() => setRegionDialog(false)}
                dialogVisible={regionDialog}/>
            <SelectLocDialog
                locDialogList={locList}
                locDataProgress={locDataProgress}
                locDataTxt={locDataTxt}
                selectLocTxt={(cityTxt) => props.locOnChangeTxt(cityTxt)}
                closeDialog={() => setLocDialog(false)}
                dialogVisible={locDialog}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.signUpSubCont}>
                    <DialogComponent dialogVisible={props.dialogVisible}/>
                    <View style={styles.signUpImgCont}>
                        <SignInImg/>
                    </View>
                    <View style={styles.signUpLogoCont}>
                        <SignInLogo/>
                    </View>
                    <View style={styles.signUpTitleTxtCont}>
                        <AppText
                            style={styles.signUpTitleTxt}
                            text={signUpTxt.signUpTitleTxt}/>
                    </View>
                    <View style={styles.signUpNameCont}>
                        <InputText
                            visible={false}
                            secureTxtEntry={false}
                            errorIconVisible={props.emailVal === '' && props.errorEmail}
                            style={styles.signUpNameInput}
                            hint={signUpTxt.signUpEmailHint}
                            valueToShowAtStart={props.emailVal}
                            onChangeText={(email) => props.emailOnChangeTxt(email)}/>
                            {props.emailVal === '' && props.errorEmail ?
                            <EdtErrorMsg edtErrorTxt={signUpTxt.signUpAppErrorTxt}/> : null}
                    </View>
                    <View style={styles.signUpPassCont}>
                        <InputText
                            visible={false}
                            secureTxtEntry={false}
                            errorIconVisible={props.numberVal === '' && props.errorNumber}
                            style={styles.signUpNameInput}
                            hint={signUpTxt.signUpNumberHint}
                            valueToShowAtStart={props.numberVal}
                            onChangeText={(number) => props.numberOnChangeTxt(number)}/>
                            {props.numberVal === '' && props.errorNumber ?
                            <EdtErrorMsg edtErrorTxt={signUpTxt.signUpShopErrorTxt}/> : null}
                    </View>
                    <View style={styles.signUpPassCont}>
                        <InputText
                            visible={false}
                            secureTxtEntry={true}
                            errorIconVisible={props.passVal === '' && props.errorPass}
                            style={styles.signUpPassInput}
                            hint={signUpTxt.signUpPasswordHint}
                            valueToShowAtStart={props.passVal}
                            onChangeText={(pass) => props.passwordOnChangeTxt(pass)}/>
                            {props.passVal === '' && props.errorPass ?
                            <EdtErrorMsg edtErrorTxt={signUpTxt.signUpPhoneErrorTxt}/> : null}
                    </View>
                    <View style={styles.signUpPassCont}>
                        <InputText
                            visible={false}
                            secureTxtEntry={true}
                            errorIconVisible={props.confirmPassVal === '' && props.errorConfirmPass}
                            style={styles.signUpPassInput}
                            hint={signUpTxt.signUpConfirmPasswordHint}
                            valueToShowAtStart={props.confirmPassVal}
                            onChangeText={(confirmPass) => props.confirmPassOnChangeTxt(confirmPass)}/>
                        {props.confirmPassVal === '' && props.errorConfirmPass ?
                            <EdtErrorMsg edtErrorTxt={signUpTxt.signUpPhoneErrorTxt}/> : null}
                    </View>
                    <View style={styles.signUpPassCont}>
                        <InputText
                            visible={false}
                            secureTxtEntry={false}
                            errorIconVisible={props.shopVal === '' && props.errorShop}
                            style={styles.signUpPassInput}
                            hint={signUpTxt.signUpShopNameHint}
                            valueToShowAtStart={props.shopVal}
                            onChangeText={(shopName) => props.shopNameOnChangeTxt(shopName)}/>
                            {props.shopVal === '' && props.errorShop ?
                            <EdtErrorMsg edtErrorTxt={signUpTxt.signUpEmailErrorTxt}/> : null}
                    </View>
                     <TouchableOpacity
                         activeOpacity={0.6}
                         onPress={() => {
                             setCityDataProgress(true)
                             setCityList([])
                             getCityData().then(r => r)
                             setCityDialog(true)
                         }}
                         style={styles.signUpPassCont}>
                         <InputText
                             visible={false}
                             editable={false}
                             focusable={true}
                             dropDownIconVisible={true}
                             valueToShowAtStart={props.cityVal}
                             style={styles.signUpPassInput}
                             hint={signUpTxt.signUpCityHint}
                             secureTxtEntry={false}/>
                         {props.cityVal === '' && props.errorCity ?
                             <EdtErrorMsg edtErrorTxt={signUpTxt.signUpCountryErrorTxt}/> : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            setRegionDataProgress(true)
                            setRegionList([])
                            setRegionDialog(true);
                            getRegionData().then(r => r)
                        }}
                        style={styles.signUpPassCont}>
                        <InputText
                            visible={false}
                            editable={false}
                            focusable={true}
                            dropDownIconVisible={true}
                            valueToShowAtStart={props.regionVal}
                            style={styles.signUpPassInput}
                            hint={signUpTxt.signUpRegionHint}
                            secureTxtEntry={false}/>
                        {props.regionVal === '' && props.errorRegion ?
                            <EdtErrorMsg edtErrorTxt={signUpTxt.signUpCountryErrorTxt}/> : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            setLocDataProgress(true)
                            setLocDataTxt(false)
                            setLocList([])
                            setLocDialog(true);
                            getLocationData().then(r => r)
                        }}
                        style={styles.signUpPassCont}>
                        <InputText
                            visible={false}
                            editable={false}
                            focusable={true}
                            dropDownIconVisible={true}
                            valueToShowAtStart={props.locVal}
                            style={styles.signUpPassInput}
                            hint={signUpTxt.signUpLocationHint}
                            secureTxtEntry={false}/>
                        {props.locVal === '' && props.errorLoc ?
                            <EdtErrorMsg edtErrorTxt={signUpTxt.signUpCountryErrorTxt}/> : null}
                    </TouchableOpacity>
                    <View style={styles.signUpBtnCont}>
                        <AppButton
                            btnContStyle={styles.signUpBtnSubCont}
                            btnTxtStyle={styles.signUpBtnTxt}
                            onPress={() => props.signUpBtnClick()}
                            text={signUpTxt.signUpBtnTxt}/>
                    </View>
                    <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View>
                            <AppText
                                style={{fontFamily:GILROY.semi_bold,fontSize:FONT_SIZE.lg}}
                                text={"Already have an account? "}/>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.navigate('SignIn')}
                            style={styles.signUpTitleTxtCont}>
                            <AppText
                                style={{fontFamily:GILROY.semi_bold,fontSize:FONT_SIZE.lg,color:colors.blue}}
                                text={"Signin"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
   signUpContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:colors.white
    },
    signUpSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        justifyContent:'center',
        paddingTop:20,
        paddingBottom:20
    },
    signUpImgCont : {
        justifyContent:'center',
        alignItems:'center'
    },
    signUpLogoCont : {
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20
    },
    signUpTitleTxtCont : {
        justifyContent:'center',
        alignItems:'center',
    },
    signUpTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:FONT_SIZE._2xl,
        fontWeight:"400"
    },
    signUpNameCont : {
        paddingTop:20,
        paddingStart:20,
        paddingEnd:20
    },
    signUpNameInput : {
        backgroundColor:colors.editTxt,
        fontFamily:GILROY.semi_bold,
    },
    signUpPassCont : {
        paddingTop:20,
        paddingStart:20,
        paddingEnd:20
    },
    signUpPassInput : {
        height:50,
        backgroundColor:colors.editTxt
    },
    signUpBtnCont : {
        paddingTop:20,
        paddingStart:20,
        paddingEnd:20
    },
    signUpBtnSubCont : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    signUpBtnTxt : {
        fontFamily:GILROY.semi_bold,
        includeFontPadding:false,
        lineHeight:18
    }
})
