import React from "react" ;
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import colors from "../../../config/colors";
// @ts-ignore
import SignInImg from "../../../assets/images/sign_in_img.svg";
// @ts-ignore
import SignInLogo from "../../../assets/images/sign_in_logo.svg";
import {AppText} from "../../components/AppText";
import {InputText} from "../../components/InputText";
import {AppButton} from "../../components/AppButton";
import {GILROY} from "../../../config";
import {StatusBars} from '../../components/StatusBars';
import Strings from '../../../config/strings';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {DialogComponent} from '../../components/DialogComponent';

type Props = {
    signIn? : (values: SignInFormValues) => void ;
    dialogVisible : boolean
}

export type  SignInFormValues = {
    email : string,
    password : string,
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email address is a required field.'),
    password: Yup.string()
        .required('Password is a required field.'),
});

export const  signInInitialFormValues : SignInFormValues = {
    email : '',
    password : '',
}

export const SignInView = React.memo<Props>((props) =>
{
    const formik = useFormik({
        initialValues: signInInitialFormValues,
        onSubmit: (values) =>
        {
            props.signIn?.(values);
        },
        validationSchema: validationSchema,
    });


    return(
        <SafeAreaView style={styles.signInContainer}>
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
                            text={Strings.signIn.signInTitleTxt}/>
                    </View>
                    <View style={styles.signInNameCont}>
                        <InputText
                            visible={false}
                            style={styles.signInNameInput}
                            hint={Strings.signIn.signInNameHint}
                            valueToShowAtStart={signInInitialFormValues.email}
                            onChangeText={formik.handleChange('email')}/>
                    </View>
                    <View style={styles.signInPassCont}>
                        <InputText
                            visible={false}
                            style={styles.signInPassInput}
                            hint={Strings.signIn.signInPassHint}
                            secureTxtEntry={true}
                            valueToShowAtStart={signInInitialFormValues.password}
                            onChangeText={formik.handleChange('password')}/>
                    </View>
                    <View style={styles.signInBtnCont}>
                        <AppButton
                            onPress={formik.handleSubmit}
                            /*onPress={() => navigation.navigate('Discover')}*/
                            text={Strings.signIn.signInBtnTxt}/>
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
        paddingTop:20
    },
    signInTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18,
        fontWeight:"400"
    },
    signInNameCont : {
        paddingTop:20,
        paddingStart:20,
        paddingEnd:20
    },
    signInNameInput : {
        backgroundColor:colors.editTxt,
        fontFamily:GILROY.semi_bold
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
    }
})
