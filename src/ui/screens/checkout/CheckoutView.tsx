import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import { AppText } from '../../components/AppText';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import colors from '../../../config/colors';
import {GILROY} from '../../../config';
import {MakeAppCard} from '../../components/MakeAppCard';
import {ViewLine} from '../../components/ViewLine';
import {AppButton} from '../../components/AppButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {StatusBars} from '../../components/StatusBars';
import strings from '../../../config/strings';
import Strings from '../../../config/strings';

type Props = {}

type checkOutNavProp = StackNavigationProp<AllScreenStackParamList>;

export const CheckoutView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<checkOutNavProp>();

    return(
        <SafeAreaView style={styles.checkOutMainCont}>
            <BackBtnHeader
                backBtnVisible={false}
                title={strings.checkOut.checkOutHeadTxt}/>
            <View style={styles.checkOutSubCont}>
                <View style={{flex:8}}>
                    <View style={{paddingTop:15}}>
                        <MakeAppCard
                            title={Strings.checkOut.checkOutAmountPayTxt}
                            price={"9,000.00"}
                            priceStyle={styles.checkOutCardTxt}/>
                    </View>
                    <ViewLine style={{marginTop:15}}/>
                    <View style={{paddingTop:15}}>
                        <MakeAppCard
                            title={Strings.checkOut.checkOutPineappleTxt}
                            price={"6,000.00"}
                            priceStyle={styles.checkOutCardTxt}/>
                    </View>
                    <View style={{paddingTop:5}}>
                        <MakeAppCard
                            title={"Peas"}
                            price={"3,000.00"}
                            priceStyle={styles.checkOutCardTxt}/>
                    </View>
                    <ViewLine style={{marginTop:20}}/>
                    <View style={{paddingTop:15}}>
                        <MakeAppCard
                            title={"Wallet Balance"}
                            price={"250,000.00"}
                            priceStyle={styles.checkOutCardTxt}/>
                    </View>
                </View>
                <View style={styles.checkOutBtnMainCont}>
                    <View style={styles.checkOutBtnSubCont}>
                        <AppButton
                            onPress={() => navigation.goBack()}
                            btnContStyle={{backgroundColor:'#393939'}}
                            text={"CANCEL"}/>
                    </View>
                    <View style={{flex:1,marginStart:5}}>
                        <AppButton
                            text={"PAY"}
                            onPress={() => navigation.navigate('thankYou')}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    checkOutMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    checkOutSubCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15
    },
    checkOutCardTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:20,
        fontWeight:'600'
    },
    checkOutBtnMainCont : {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    checkOutBtnSubCont : {
        flex:1,
        marginEnd:5
    }
})
