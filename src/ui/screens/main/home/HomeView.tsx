import React from "react";
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import {AppText} from "../../../components/AppText";
import {GILROY} from "../../../../config";
import colors from "../../../../config/colors";
import {TextHeader} from "../../../components/headers/TextHeader";

type Props = {}

export const HomeView = React.memo<Props>(() =>
{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.backgroundColor}}>
            <TextHeader title={"Home"}/>
            <View>
                <AppText style={{fontFamily:GILROY.semi_bold,fontSize:22}} text={"Home"}/>
            </View>
        </SafeAreaView>
    )
})
