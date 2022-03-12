import React, {FC, useEffect} from 'react';

import {DiscoverView} from "./DiscoverView";
import {BackHandler} from 'react-native';

type Props = {}

const DiscoverController : FC<Props> = () =>
{
    /*const backAction = () =>
    {
        BackHandler.exitApp();
        return true;
    }

    useEffect(() =>
    {
        BackHandler.addEventListener("hardwareBackPress",backAction);
    },[])*/

    return(
        <DiscoverView/>
    )
}

export default DiscoverController;
