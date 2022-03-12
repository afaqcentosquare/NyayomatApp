import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../config/colors';
import {AppText} from './AppText';
import {GILROY} from '../../config';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import ArrowIcon from '../../assets/images/arrows_icon.svg'

type Props = {
    discoverName : string,
    discoverImg : any,
    discoverClick? : () => void
}

type DiscoverNavProp = StackNavigationProp<AllScreenStackParamList>;

export const DiscoverCard = React.memo<Props>((props) =>
{
    const navigation = useNavigation<DiscoverNavProp>()

    return(
        <View style={styles.discoverCardMainCont}>
            <TouchableOpacity
                onPress={props.discoverClick}
                style={{margin:15}}>
                <View style={styles.discoverCardImg}>
                    <props.discoverImg/>
                </View>
                <View style={styles.discoverCardNameTxtCont}>
                    <View style={{flex:1}}>
                        <AppText
                            style={styles.discoverCardNameTxt}
                            text={props.discoverName}/>
                    </View>
                    <View style={styles.discoverCardIconCont}>
                        <ArrowIcon/>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    discoverCardMainCont : {
        flex:1,
        borderRadius:12,
        overflow:'hidden',
        backgroundColor:colors.white,
        marginEnd:5,
        marginStart:5,
        justifyContent:'center',
        alignItems:'center'
    },
    discoverCardImg : {
        justifyContent:'center',
        alignItems:'center'
    },
    discoverCardNameTxtCont : {
        marginTop:20,
        flexDirection:'row'
    },
    discoverCardNameTxt : {
        fontFamily:GILROY.semi_bold,
        fontSize:16,
        fontWeight:"600"
    },
    discoverCardIconCont : {
        flexDirection:'column-reverse'
    }
})
