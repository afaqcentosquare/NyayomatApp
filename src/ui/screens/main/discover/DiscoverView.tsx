import React from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, ToastAndroid, View} from 'react-native';
import colors from "../../../../config/colors";
import {TextHeader} from "../../../components/headers/TextHeader";

// @ts-ignore
import MakeAppIcon from '../../../../assets/images/make_app_icon.svg';
// @ts-ignore
import MakePaymentIcon from '../../../../assets/images/make_payment_icon.svg';
// @ts-ignore
import MyAssetIcon from '../../../../assets/images/make_assets_icon.svg';
// @ts-ignore
import TransactionHistoryIcon from '../../../../assets/images/transactions_history_icon.svg';
// @ts-ignore
import MyNotifyIcon from '../../../../assets/images/adjust_notify_icon.svg';
// @ts-ignore
import ArrowIcon from '../../../../assets/images/arrows_icon.svg';
import {StackNavigationProp} from "@react-navigation/stack";
import {AllScreenStackParamList} from "../../../../routes/allroutes/AllScreenStack";
import {useNavigation} from "@react-navigation/native";
import {DiscoverCard} from '../../../components/DiscoverCard';
import {StatusBars} from '../../../components/StatusBars';
import Common from '../../../../utils/Common';
import UserInfoPreference from '../../../../utils/UserInfoPreference';
import {GILROY} from '../../../../config';

type Props = {}

type DiscoverNavProp = StackNavigationProp<AllScreenStackParamList>;

export const DiscoverView = React.memo<Props>(() =>
{
    const navigation = useNavigation<DiscoverNavProp>()

    const signOutUser = () =>
    {
        UserInfoPreference.deleteAllData().then(r => r);
        navigation.navigate("SignIn");
    }

    return(
        <SafeAreaView style={styles.discoverMainCont}>
            <TextHeader style={{fontFamily:GILROY.semi_bold,fontSize:18}} signOutBtn={signOutUser} title={"BOOST"}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.discoverMainSubCont}>
                    <View style={styles.discoverCardCont}>
                        <DiscoverCard
                            discoverName={"Product\nCatalog"}
                            discoverImg={MakeAppIcon}
                            discoverClick={() => navigation.navigate('chooseAssets')}/>
                        <DiscoverCard
                            discoverName={"Make\nPayment"}
                            discoverImg={MakePaymentIcon}
                            discoverClick={() => navigation.navigate('MakePayment')}/>
                    </View>
                    <View style={styles.discoverCardCont}>
                        <DiscoverCard
                            discoverName={"My\nAssets"}
                            discoverImg={MyAssetIcon}
                            discoverClick={() => navigation.navigate('MyAssets')}/>
                        <DiscoverCard
                            discoverName={"Transaction\nHistory"}
                            discoverImg={TransactionHistoryIcon} discoverClick={() => navigation.navigate('transaction')}/>
                    </View>
                    <View style={styles.discoverCardCont}>
                        <DiscoverCard
                            discoverName={"My\nNotifications"}
                            discoverImg={MyNotifyIcon}
                            discoverClick={() => navigation.navigate('myNotify')}/>
                        <DiscoverCard
                            discoverName={"My\nAccount"}
                            discoverImg={MyNotifyIcon}
                            discoverClick={() => navigation.navigate('myAccount')}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    discoverMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    discoverMainSubCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    discoverCardCont : {
        flexDirection:'row',
        paddingStart:10,
        paddingEnd:10,
        paddingTop:10
    },
    discoverCardEmptyCont : {
        flex:1,
        borderRadius:8,
        backgroundColor:'transparent',
        marginStart:5
    }
})
