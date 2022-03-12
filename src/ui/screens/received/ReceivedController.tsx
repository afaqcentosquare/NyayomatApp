import React, {FC} from 'react';
import {receivedResObj} from '../../../models/api_response/CatalogResModel';
import {ReceivedView} from './ReceivedView';

type Props = {
    receiveListsData : receivedResObj[],
    receiveProgress : boolean
    receiveNoDataTxt : boolean
}

const ReceivedController : FC<Props> = (props) =>
{

    return(
        <ReceivedView
            receiveListData={props.receiveListsData}
            receiveProgress={props.receiveProgress}
            receiveNoDataTxt={props.receiveNoDataTxt}/>
    )
}

export default ReceivedController;