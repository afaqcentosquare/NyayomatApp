import React, {FC, useEffect, useState} from 'react';
import {CatalogueView} from './CatalogueView';
import {ChooseAssetsObj} from '../../../models/ChooseAssetsModel';
import {BackHandler} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';
import {useNavigation} from '@react-navigation/native';

type Props = {}

type catalogNavProp = StackNavigationProp<AllScreenStackParamList>;

const CatalogueController : FC<Props> = () =>
{
    const navigation = useNavigation<catalogNavProp>();

   /* const backAction = () =>
    {
        navigation.goBack();
        return true;
    }

    useEffect(() =>
    {
        BackHandler.addEventListener("hardwareBackPress",backAction);
    },[])*/

    return(
        <CatalogueView/>
    )
}

export default CatalogueController;
