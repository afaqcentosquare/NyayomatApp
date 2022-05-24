import React from 'react';
import {NativeModules, Platform, StatusBar, StatusBarProps, StyleProp, StyleSheet,View} from 'react-native';
import colors from '../../config/colors';
const {StatusBarManager} = NativeModules;

type Props = {
    style? : StyleProp<StatusBarProps> | undefined,
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? StatusBarManager.HEIGHT: StatusBarManager.HEIGHT;
export const StatusBars = React.memo<Props>((props) =>
{
    return(
        <View style={[styles.statusBarMainCont,props.style]}>
            <StatusBar
                translucent
                backgroundColor={colors.white}
                barStyle="dark-content"/>
        </View>
    )
})

const styles = StyleSheet.create({
    statusBarMainCont : {
        width: "100%",
        height: APPBAR_HEIGHT,
    }
})
