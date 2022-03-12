import { createStackNavigator } from '@react-navigation/stack';
import {browseResObj} from '../../models/api_response/CatalogResModel';
import {completeInfoObj, defaultInfoObj, myAssetObj} from '../../models/api_response/MyAssetsResModel';
import {assetInfoObj} from '../../models/api_response/TransactionResModel';
import {completeAssetObj} from '../../models/api_response/CompleteAssetResModel';

export type AllScreenStackParamList = {
    Splash : undefined,
    SignIn : undefined,
    /*MainView : undefined,*/
    MakeApp : {item : browseResObj},
    Discover : undefined,
    MakePayment : undefined,
    MyAssets : undefined,
    chooseAssets : undefined,
    paymentConfirm : { item : string },
    checkout : undefined,
    thankYou : undefined,
    onGoingAssets : { item : myAssetObj},
    defaultedAssets : { item : defaultInfoObj},
    completedAsset : { item : completeInfoObj },
    onGoingAssetDetail : undefined,
    defaultAssetDetail : undefined,
    completeAssetDetail : { item : completeAssetObj },
    transaction : undefined,
    myNotify : undefined,
    transactionDetail : { item : assetInfoObj },
    myAccount : undefined
}

export const AllScreenStack = createStackNavigator<AllScreenStackParamList>();

