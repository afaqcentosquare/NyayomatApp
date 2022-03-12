import React from 'react';
import {AppText} from './AppText';
import {StyleSheet, View} from 'react-native';
import {GILROY} from '../../config';
import Strings from '../../config/strings';

type Props = {}

export const NoDataTxt = React.memo<Props>((props) =>
{
    return(
        <View style={styles.noDataTxtCont}>
            <AppText
                style={styles.noDataTxt}
                text={Strings.noData.noDataTxt}/>
        </View>
    )
})

const styles = StyleSheet.create({
    noDataTxtCont : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    noDataTxt : {
        fontFamily : GILROY.semi_bold,
        fontSize : 22,
    }
})