import React from 'react';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
// @ts-ignore
import LessIcon from '../../../assets/images/less_icon.svg';
// @ts-ignore
import MoreIcon from '../../../assets/images/more_icon.svg';
import {AppButton} from '../../components/AppButton';
import {ViewLine} from '../../components/ViewLine';
import {MakeAppCard} from '../../components/MakeAppCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {StatusBars} from '../../components/StatusBars';

type Props = {}

type defaultAssetDetailAppNavProp = StackNavigationProp<AllScreenStackParamList>;

export const DefaultAssetDetailView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<defaultAssetDetailAppNavProp>();

    const numberFormat = (value : number) =>
    {
        const re = '\\d(?=(\\d{' + 3 + '})+' + '\\D' + ')';
        // @ts-ignore
        const num = value.toFixed(Math.max(0, ~~2));
        const str = num.replace(new RegExp(re, 'g'), '$&' + ',');
        return str;
    }

    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.backgroundColor}}>
            <BackBtnHeader backBtnVisible={true} title={"Assets Detail"}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{flex:1,paddingStart:15,paddingEnd:15}}>
                    <View style={{borderRadius:80,paddingTop:20}}>
                        <Image style={{width:'100%',borderRadius:15,height:160,resizeMode:'cover'}} source={require('../../../assets/images/peas_img.jpg')}/>
                    </View>
                    <View style={{marginTop:15,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex:1}}>
                            <AppText text={"Peas"} style={{fontFamily:GILROY.semi_bold,fontSize:18,fontWeight:'600'}}/>
                        </View>
                        <View style={{flex:1}}>
                            <AppText text={"Missed Payments : 14"} style={{fontFamily:GILROY.semi_bold,fontSize:16,fontWeight:'600'}}/>
                        </View>
                    </View>
                    <ViewLine style={{marginTop:20,height:2}}/>
                    <View style={{paddingTop:20}}>
                        <AppText style={{fontFamily:GILROY.semi_bold,fontSize:18,fontWeight:'400'}} text={"Details"}/>
                    </View>
                    <View style={{paddingTop:15}}>
                        <View>
                            <MakeAppCard title={"Outstanding Value"} price={"2000.00"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:20,fontWeight:'600'}}/>
                        </View>
                        <View style={{marginTop:5}}>
                            <MakeAppCard title={"Unit Cost"} price={"120.00"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:20,fontWeight:'600'}}/>
                        </View>
                    </View>
                    <ViewLine style={{marginTop:20,height:2}}/>
                    <View style={{paddingTop:15}}>
                        <View>
                            <MakeAppCard title={"Installment Amount"} price={"500.00"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:16,fontWeight:'400'}}/>
                        </View>
                        <View style={{paddingTop:5}}>
                            <MakeAppCard title={"Payment Level"} price={"6 month"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:16,fontWeight:'400'}}/>
                        </View>
                    </View>
                    <ViewLine style={{marginTop:20,height:2}}/>
                    <View style={{paddingTop:15}}>
                        <MakeAppCard title={"Total To Pay"} price={"500.00"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:24,fontWeight:'600'}}/>
                    </View>
                    <View style={{paddingTop:20,paddingBottom:20}}>
                        <AppButton text={"CHECKOUT"} onPress={() => navigation.navigate('checkout')}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
})
