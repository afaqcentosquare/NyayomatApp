import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {BottomNavRoutes} from "../../../routes/bottomnavroutes/BottomNavRoutes";
import colors from "../../../config/colors";
import {StatusBars} from '../../components/StatusBars';

type Props = {}

export const MainView = React.memo<Props>((props) =>
{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.mainScreenContainer}>
                <BottomNavRoutes/>
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    mainScreenContainer:
        {
            flex:1,
            backgroundColor:colors.white
        }
});
