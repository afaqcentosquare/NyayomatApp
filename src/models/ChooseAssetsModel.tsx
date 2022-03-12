import {ImageSourcePropType} from 'react-native';

export type ChooseAssetsModel = {
    data : ChooseAssetsObj[]
}

export type ChooseAssetsObj = {
    id : number,
    title : string,
    price : string,
    image : ImageSourcePropType
}
