import data from '../models/dummy_response/CountryListResModel.json';
import {CountryResModel} from '../models/api_response/CountryResModel';

export const getCartItems = () => {
    return data as CountryResModel;
};
