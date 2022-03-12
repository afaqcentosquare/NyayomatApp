import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import colors from '../../../config/colors';
import {MyNotifyCard} from '../../components/MyNotifyCard';
// @ts-ignore
import NotifyIcon1 from '../../../assets/images/notify_check_icon.svg';
// @ts-ignore
import NotifyIcon2 from '../../../assets/images/notify_calendar_icon.svg';
// @ts-ignore
import NotifyIcon3 from '../../../assets/images/notify_more_icon.svg';
// @ts-ignore
import NotifyIcon4 from '../../../assets/images/notify_package_icon.svg';
// @ts-ignore
import NotifyIcon5 from '../../../assets/images/notify_prohibit_icon.svg';
// @ts-ignore
import NotifyIcon6 from '../../../assets/images/notify_spinner_icon.svg';
// @ts-ignore
import NotifyIcon7 from '../../../assets/images/notify_money_icon.svg';
import {StatusBars} from '../../components/StatusBars';

type Props = {}

export const MyNotifyView = React.memo<Props>((props) =>
{
    return(
        <SafeAreaView style={styles.myNotifyMainCont}>
            <BackBtnHeader backBtnVisible={true} title={"Notifications"}/>
            <View style={styles.myNotifyMainCont}>
                <View style={{marginTop:10,marginBottom:10}}>
                    <MyNotifyCard title={"Successful Applications"} icon={NotifyIcon1}/>
                    <MyNotifyCard title={"Declined Applications"} icon={NotifyIcon5}/>
                    <MyNotifyCard title={"Assets Received"} icon={NotifyIcon4}/>
                    <MyNotifyCard title={"Pending Payments"} icon={NotifyIcon6}/>
                    <MyNotifyCard title={"Overdue Payments"} icon={NotifyIcon2}/>
                    <MyNotifyCard title={"Completed Payments"} icon={NotifyIcon7}/>
                </View>
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    myNotifyMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    }
})
