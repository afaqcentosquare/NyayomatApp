import React from 'react';
import colors from '../../../config/colors';
import Strings from '../../../config/strings';
import {InputText} from '../../components/InputText';
import {StyleSheet} from 'react-native';

type Props = {
    search : string,
    searchTxt : (e : string) => void
}

export const BrowseListHeader = React.memo<Props>((props) =>
{
    return(
        <InputText
            visible={true}
            valueToShowAtStart={props.search}
            onChangeText={(e) => props.searchTxt(e)}
            style={styles.browseListHeaderEdtCont}
            hint={Strings.catalogue.catalogueSearchTxt}/>
    )
})

const styles = StyleSheet.create({
    browseListHeaderEdtCont : {
        backgroundColor:colors.white,
        marginTop:15,
        marginBottom:15
    }
})