import React from 'react' ;
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {SafeAreaView, ScrollView,StyleSheet, View} from 'react-native';
import {MakePaymentCard} from '../../components/MakePaymentCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {makePaymentResObj} from '../../../models/api_response/MakePaymentResModel';
import Strings from '../../../config/strings';
import {ProgressBar} from '../../components/ProgressBar';
import NumberFormat from '../../../utils/NumberFormat';

type Props = {
    makePayment : makePaymentResObj | any,
    makePaymentBtn : (pay : string) => void
}

type MakePaymentNavProp = StackNavigationProp<AllScreenStackParamList>;

export const MakePaymentView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<MakePaymentNavProp>();

    return(
        <SafeAreaView
            style={styles.makePaymentMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={Strings.makePayment.makePaymentHeaderTxt}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {props.makePayment !== undefined ? <View style={styles.makePaymentSubCont}>
                    <MakePaymentCard
                        dayTxt={Strings.makePayment.makePaymentDueTxt}
                        paymentTxt={NumberFormat.numberFormat(props.makePayment?.due_today).toString()}
                        color={colors.dueToday}
                        onPress={() => props.makePaymentBtn("today")}
                        viewDetail={() => navigation.navigate('paymentConfirm',{item : "today"})}/>
                    <MakePaymentCard
                        dayTxt={Strings.makePayment.makePaymentPendingTxt}
                        paymentTxt={NumberFormat.numberFormat(props.makePayment?.pending).toString()}
                        color={colors.pending}
                        onPress={() => props.makePaymentBtn("pending")}
                        viewDetail={() => navigation.navigate('paymentConfirm',{item : "pending"})}/>
                    <MakePaymentCard
                        dayTxt={Strings.makePayment.makePaymentOverDueTxt}
                        paymentTxt={NumberFormat.numberFormat(props.makePayment?.over_due).toString()}
                        color={colors.overdue}
                        onPress={() => props.makePaymentBtn("over_due")}
                        viewDetail={() => navigation.navigate('paymentConfirm',{item : "over_due"})}/>
                    <MakePaymentCard
                        dayTxt={Strings.makePayment.makePaymentPastOverDueTxt}
                        paymentTxt={NumberFormat.numberFormat(props.makePayment?.past_over_due).toString()}
                        color={colors.pastOverdue}
                        onPress={() => props.makePaymentBtn("past_over_due")}
                        viewDetail={() => navigation.navigate('paymentConfirm',{item : "past_over_due"})}/>
                    <MakePaymentCard
                        dayTxt={Strings.makePayment.makePaymentDefaultedTxt}
                        paymentTxt={NumberFormat.numberFormat(props.makePayment?.defaulted).toString()}
                        color={colors.defaulted}
                        onPress={() => props.makePaymentBtn("defaulted")}
                        viewDetail={() => navigation.navigate('paymentConfirm',{item : "defaulted"})}/>
                </View> : null}
                {props.makePayment === undefined ? <ProgressBar/> : null}
            </ScrollView>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    makePaymentMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    makePaymentSubCont : {
        flex: 1,
        paddingStart: 15,
        paddingEnd: 15,
        paddingBottom: 20
    }
})
