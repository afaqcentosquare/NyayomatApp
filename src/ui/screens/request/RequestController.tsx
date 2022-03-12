import React, {FC, } from 'react';
import {RequestView} from './RequestView';
import {requestResObj} from '../../../models/api_response/CatalogResModel';

type Props = {
    requestListsData : requestResObj[],
    updateList : () => void,
    reqProgress : boolean,
    reqNoDataTxt : boolean
}

const RequestController : FC<Props> = (props) =>
{

    return(
        <RequestView
            requestListData={props.requestListsData}
            updateList={props.updateList}
            reqProgress={props.reqProgress}
            reqNoDataTxt={props.reqNoDataTxt}/>
    )
}

export default RequestController;