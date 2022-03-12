import React, {FC} from 'react';
import {BrowseView} from './BrowseView';
import {browseResObj} from '../../../models/api_response/CatalogResModel';

type Props = {
    updateState : browseResObj[],
    searchTxt : (e : string) => void,
    search : string,
    browseProgress : boolean,
    browseNoDataTxt : boolean
}

const BrowseController : FC<Props> = (props) =>
{

    return(
        <BrowseView
            browseListData={props.updateState}
            searchTxt={(e) => props.searchTxt(e)}
            search={props.search}
            browseProgress={props.browseProgress}
            browseNoDataTxt={props.browseNoDataTxt}/>
    )
}

export default BrowseController;
