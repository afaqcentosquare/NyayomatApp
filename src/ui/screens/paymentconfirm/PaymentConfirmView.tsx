import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {PaymentConfirmItem} from './PaymentConfirmItem';
import {paymentConfirmResObj} from '../../../models/api_response/PaymentConfirmResModel';
import Strings from '../../../config/strings';
import {ProgressBar} from '../../components/ProgressBar';
import {AppText} from '../../components/AppText';
import {NoDataTxt} from '../../components/NoDataTxt';

type Props = {
    paymentConfirmListData : paymentConfirmResObj[],
    paymentConfirmNoDataTxt : boolean,
    paymentConfirmProgress : boolean,
    updatePayConfirmList : () => void
}

type PaymentConfirmNavProp = StackNavigationProp<AllScreenStackParamList>;

export const PaymentConfirmView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<PaymentConfirmNavProp>();

    return(
        <SafeAreaView style={styles.paymentConfirmMainCont}>
            <BackBtnHeader
                backBtnVisible={true}
                title={Strings.paymentConfirm.paymentConfirmHeaderTxt}/>
            <View style={styles.paymentConfirmSubCont}>
                {props.paymentConfirmListData.length > 0 ? <View>
                    <FlatList
                        data={props.paymentConfirmListData}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) =>
                            <PaymentConfirmItem
                                item={item}
                                index={index}
                                updatePayConfirmList={() => props.updatePayConfirmList()}
                                length={props.paymentConfirmListData.length}/>}
                        keyExtractor={(item, index) => index.toString()}/>
                </View> : null}
                {props.paymentConfirmProgress ? <ProgressBar/> : null}
                {props.paymentConfirmNoDataTxt ? <NoDataTxt/> : null}
                {/*<View style={{flex:1}}>
                    <ViewLine style={{marginTop:20}}/>
                    <View style={{paddingTop:15}}>
                        <MakeAppCard title={"Total To Pay"} price={"9,000.00"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:20,fontWeight:'600'}}/>
                    </View>
                    <View style={{marginTop:20,marginBottom:20}}>
                        <AppButton text={"CHECKOUT"} onPress={() => navigation.navigate('checkout')}/>
                    </View>
                </View>*/}
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    paymentConfirmMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    paymentConfirmSubCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15
    }
})
