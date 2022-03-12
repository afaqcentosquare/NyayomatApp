import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import colors from '../../config/colors';

type Props = {}
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : 15;
export const StatusBars = React.memo<Props>((props) =>
{
    return(
        <View style={styles.statusBarMainCont}>
            <StatusBar
                barStyle="dark-content"
            />
        </View>
    )
})

const styles = StyleSheet.create({
    statusBarMainCont : {
        width: "100%",
        height: STATUS_BAR_HEIGHT,
        backgroundColor: colors.white
    }
})