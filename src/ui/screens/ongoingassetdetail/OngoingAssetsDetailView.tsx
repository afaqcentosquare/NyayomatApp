import React from 'react';
import {Image, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View} from 'react-native';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {AppText} from '../../components/AppText';
import {GILROY} from '../../../config';
// @ts-ignore
import LessIcon from '../../../assets/images/less_icon.svg';
// @ts-ignore
import MoreIcon from '../../../assets/images/more_icon.svg';
import {ViewLine} from '../../components/ViewLine';
import {MakeAppCard} from '../../components/MakeAppCard';
import {AppButton} from '../../components/AppButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import {StatusBars} from '../../components/StatusBars';

type Props = {}

type onGoingDetailAppNavProp = StackNavigationProp<AllScreenStackParamList>;

export const OngoingAssetDetailView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<onGoingDetailAppNavProp>()

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
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity style={{borderWidth:2,borderBottomStartRadius:30,borderTopStartRadius:30,borderColor:'#cbd6ee',padding:12}}>
                                <LessIcon/>
                            </TouchableOpacity>
                            <View style={{borderTopWidth:2,borderBottomWidth:2,borderColor:'#cbd6ee',paddingStart:20,paddingEnd:20,paddingTop:3,paddingBottom:3}}>
                                <AppText style={{fontFamily:GILROY.semi_bold,fontWeight:'400'}} text={"0"}/>
                            </View>
                            <TouchableOpacity style={{borderWidth:2,borderBottomEndRadius:30,borderTopEndRadius:30,borderColor:'#cbd6ee',paddingTop:7.5,paddingBottom:7.5,paddingStart:13,paddingEnd:13}}>
                                <MoreIcon/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <AppButton btnContStyle={{height:30,marginStart:10}} text={"ADD"}/>
                        </View>
                    </View>
                    <ViewLine style={{marginTop:20,height:2}}/>
                    <View style={{paddingTop:20}}>
                        <AppText style={{fontFamily:GILROY.semi_bold,fontSize:18,fontWeight:'400'}} text={"Application Details"}/>
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
                        <AppButton text={"CHECKOUT"}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
})
