import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {AppText} from '../../components/AppText';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../config/colors';
import {GILROY} from '../../../config';
// @ts-ignore
import CompleteIcon from '../../../assets/images/complete_icon.svg';
import {MakeAppCard} from '../../components/MakeAppCard';
import {AppButton} from '../../components/AppButton';
import {StatusBars} from '../../components/StatusBars';

type Props = {}

type thankYouNavProp = StackNavigationProp<AllScreenStackParamList>;

export const ThankYouView = React.memo<Props>((props) =>
{
    const navigation = useNavigation<thankYouNavProp>();

    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.backgroundColor}}>
            <View style={{flex:1,backgroundColor:colors.backgroundColor,paddingStart:15,paddingEnd:15}}>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                    <AppText style={{fontFamily:GILROY.semi_bold,fontSize:28,fontWeight:'400'}} text={"Thank You"}/>
                </View>
                <View style={{flex:2,backgroundColor:colors.white,borderRadius:15,marginTop:30,padding:15}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <View>
                            <CompleteIcon/>
                        </View>
                        <View style={{marginStart:10}}>
                            <AppText style={{fontFamily:GILROY.semi_bold}} text={"Order was completed"}/>
                        </View>
                    </View>
                    <View>
                        <View style={{marginTop:10}}>
                            <AppText style={{fontFamily:GILROY.medium,color:'#AFB2B6',fontSize:14}} text={"TOTAL PAID"}/>
                        </View>
                        <View>
                            <AppText style={{fontFamily:GILROY.semi_bold,fontWeight:'600',color:colors.black,fontSize:22}} text={"9,000.00 KSH"}/>
                        </View>
                    </View>
                    <View style={{marginTop:10}}>
                        <AppText style={{fontFamily:GILROY.medium,fontSize:14,color:'#AFB2B6'}} text={"FOR ASSETS : "}/>
                    </View>
                    <View>
                        <MakeAppCard title={"Peas"} price={"3,000.00"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:20,fontWeight:'600'}}/>
                    </View>
                    <View>
                        <MakeAppCard title={"Pineapple"} price={"6,000.00"} priceStyle={{fontFamily:GILROY.semi_bold,fontSize:20,fontWeight:'600'}}/>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <View style={{marginTop:10}}>
                        <AppButton onPress={() => navigation.navigate('MakePayment')} text={"MAKE ANOTHER PAYMENT"}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <AppButton onPress={() => navigation.navigate('Discover')} btnTxtStyle={{color:colors.black}} btnContStyle={{backgroundColor:colors.white}} text={"RETURN TO HOME"}/>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
})
