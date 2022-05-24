import data from '../models/dummy_response/CountyListResModel.json';
import {CountyResModel} from '../models/api_response/CountyResModel';

export const getCountyItems = () => {
    return data as CountyResModel;
};
