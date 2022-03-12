import React, {FC} from 'react';
import {ThankYouView} from './ThankYouView';
import {StackNavigationProp} from '@react-navigation/stack';
import {AllScreenStackParamList} from '../../../routes/allroutes/AllScreenStack';

type Props = {}

const ThankYouController : FC<Props> = () =>
{
    return(
        <ThankYouView/>
    )
}

export default ThankYouController;
