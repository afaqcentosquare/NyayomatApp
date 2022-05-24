import React, {useState} from 'react' ;
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from "../../../config/colors";
import {AppText} from "../../components/AppText";
import {InputText} from "../../components/InputText";
import {AppButton} from "../../components/AppButton";
import {GILROY} from "../../../config";
import Strings from '../../../config/strings';
import {DialogComponent} from '../../components/DialogComponent';
import {FONT_SIZE} from '../../../config/Dimens';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {ErrorSnackBar} from '../../components/ErrorSnackBar';
import {EdtErrorMsg} from '../../components/EdtErrorMsg';
// @ts-ignore
import SignInImg from "../../../assets/images/sign_in_img.svg";
// @ts-ignore
import SignInLogo from "../../../assets/images/sign_in_logo.svg";


type Props = {
    dialogVisible : boolean,
    emailOnChangeTxt : (e : string) => void,
    passOnChangeTxt : (e : string) => void,
    emailVal : string,
    passVal : string,
    signInBtnClick : () => void,
    errorEmail : boolean,
    errorPass : boolean,
    errorSnackVisible : boolean,
    errorSnackTxt : string
}

type signInNavProp = StackNavigationProp<AllScreenStackParamList>;

export const SignInView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<signInNavProp>();
    const signInTxt = Strings.signIn ;
    const [passVisible,setPassVisible] = useState(true);
    const eye = () =>
    {
        if(passVisible)
        {
            setPassVisible(false)
        }
        else
        {
            setPassVisible(true)
        }
    }

    return(
        <SafeAreaView style={styles.signInContainer}>
            <ErrorSnackBar
                snackBarVisible={props.errorSnackVisible}
                snackBarTxt={props.errorSnackTxt}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.signInSubCont}>
                    <DialogComponent dialogVisible={props.dialogVisible}/>
                    <View style={styles.signInImgCont}>
                        <SignInImg/>
                    </View>
                    <View style={styles.signInLogoCont}>
                        <SignInLogo/>
                    </View>
                    <View style={styles.signInTitleTxtCont}>
                        <AppText
                            style={styles.signInTitleTxt}
                            text={signInTxt.signInTitleTxt}/>
                    </View>
                    <View style={styles.signInNameCont}>
                        <InputText
                            visible={false}
                            secureTxtEntry={false}
                            errorIconVisible={props.emailVal === '' && props.errorEmail}
                            style={styles.signInNameInput}
                            hint={signInTxt.signInNameHint}
                            valueToShowAtStart={props.emailVal}
                            onChangeText={(email) => props.emailOnChangeTxt(email)}/>
                            {props.emailVal === '' && props.errorEmail ?
                            <EdtErrorMsg edtErrorTxt={signInTxt.signInEdtEmailErrorTxt}/> : null}
                    </View>
                    <View style={styles.signInPassCont}>
                        <InputText
                            visible={false}
                            style={styles.signInPassInput}
                            hint={signInTxt.signInPassHint}
                            secureTxtEntry={passVisible}
                            eyeChange={() => eye()}
                            eyeVisible={true}
                            errorIconVisible={props.passVal === '' && props.errorPass}
                            valueToShowAtStart={props.passVal}
                            onChangeText={(pass) => props.passOnChangeTxt(pass)}/>
                            {props.passVal === '' && props.errorPass ?
                            <EdtErrorMsg edtErrorTxt={signInTxt.signInEdtPassErrorTxt}/> : null}
                    </View>
                    <View style={styles.signInBtnCont}>
                        <AppButton
                            btnContStyle={styles.signInBtnSubCont}
                            btnTxtStyle={styles.signInBtnTxt}
                            onPress={() => props.signInBtnClick()}
                            text={signInTxt.signInBtnTxt}/>
                    </View>
                    <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View>
                            <AppText
                                style={{fontFamily:GILROY.semi_bold,fontSize:FONT_SIZE.lg}}
                                text={"Don't have an account? "}/>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.navigate('SignUp')}
                            style={styles.signInTitleTxtCont}>
                            <AppText
                                style={{fontFamily:GILROY.semi_bold,fontSize:FONT_SIZE.lg,color:colors.blue}}
                                text={"Signup"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    signInContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:colors.white
    },
    signInSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor,
        justifyContent:'center',
        paddingTop:20,
        paddingBottom:20
    },
    signInImgCont : {
        justifyContent:'center',
        alignItems:'center'
    },
    signInLogoCont : {
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20
    },
    signInTitleTxtCont : {
        justifyContent:'center',
        alignItems:'center',
    },
    signInTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:FONT_SIZE._2xl,
        fontWeight:"400"
    },
    signInNameCont : {
        paddingTop:20,
        paddingStart:20,
        paddingEnd:20
    },
    signInNameInput : {
        backgroundColor:colors.editTxt,
        fontFamily:GILROY.semi_bold,
    },
    signInPassCont : {
        paddingTop:20,
        paddingStart:20,
        paddingEnd:20
    },
    signInPassInput : {
        backgroundColor:colors.editTxt
    },
    signInBtnCont : {
        paddingTop:20,
        paddingStart:20,
        paddingEnd:20
    },
    signInBtnSubCont : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    signInBtnTxt : {
        fontFamily:GILROY.semi_bold,
        includeFontPadding:false,
        lineHeight:18
    }
})
