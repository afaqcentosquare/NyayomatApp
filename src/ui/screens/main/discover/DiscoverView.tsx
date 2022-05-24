import React from "react";
import {SafeAreaView, ScrollView,StyleSheet,View} from 'react-native';
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
import UserInfoPreference from '../../../../utils/UserInfoPreference';
import {GILROY, Strings} from '../../../../config';

type Props = {}

type DiscoverNavProp = StackNavigationProp<AllScreenStackParamList>;

export const DiscoverView = React.memo<Props>(() =>
{
    const navigation = useNavigation<DiscoverNavProp>();
    const discoverTxt = Strings.discoverCardTxt;

    const signOutUser = () =>
    {
        UserInfoPreference.deleteAllData().then(r => r);
        navigation.navigate("SignIn");
    }

    return(
        <SafeAreaView style={styles.discoverMainCont}>
            <TextHeader
                style={styles.discoverMainHeadTitleTxt}
                signOutBtn={signOutUser}
                title={discoverTxt.disMainHeadTitleTxt}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.discoverMainSubCont}>
                    <View style={styles.discoverCardCont}>
                        <DiscoverCard
                            discoverName={discoverTxt.disMainCardProductCatTxt}
                            discoverImg={MakeAppIcon}
                            discoverClick={() => navigation.navigate('chooseAssets')}/>
                        <DiscoverCard
                            discoverName={discoverTxt.disMainCardMakePayTxt}
                            discoverImg={MakePaymentIcon}
                            discoverClick={() => navigation.navigate('MakePayment')}/>
                    </View>
                    <View style={styles.discoverCardCont}>
                        <DiscoverCard
                            discoverName={discoverTxt.disMainCardMyAssetTxt}
                            discoverImg={MyAssetIcon}
                            discoverClick={() => navigation.navigate('MyAssets')}/>
                        <DiscoverCard
                            discoverName={discoverTxt.disMainCardTransHisTxt}
                            discoverImg={TransactionHistoryIcon} discoverClick={() => navigation.navigate('transaction')}/>
                    </View>
                    <View style={styles.discoverCardCont}>
                        <DiscoverCard
                            discoverName={discoverTxt.disMainCardMyNotifyTxt}
                            discoverImg={MyNotifyIcon}
                            discoverClick={() => navigation.navigate('myNotify')}/>
                        <DiscoverCard
                            discoverName={discoverTxt.disMainCardMyAccountTxt}
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
    discoverMainHeadTitleTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:18
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
    },
})
