import React from "react";
import {Text, View} from "react-native";
import {AppText} from "../../../components/AppText";
import {GILROY} from "../../../../config";

type Props = {}

export const CartView = React.memo<Props>(() =>
{
    return(
        <View>
            <AppText style={{fontFamily:GILROY.semi_bold,fontSize:22}} text={"Cart"}/>
        </View>
    )
})
