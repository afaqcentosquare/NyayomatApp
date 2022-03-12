import {SignInReqModel} from '../../models/api_request/SignInReqModel';
import axios from 'axios';
import Api from '../../config/Api';
import {PostAssetReqModel} from '../../models/api_request/PostAssetReqModel';

function signIn(signInModel : SignInReqModel)
{
    return axios.post(Api.BASE_URL + Api.LOGIN, signInModel);
}

function getCatalog(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.CATALOG + parseInt(user_id) , { headers });
}

function getBrowseCatalog(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.BROWSE_CATALOG + parseInt(user_id) , { headers });
}

function getReqCatalog(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.REQUEST_CATALOG + parseInt(user_id) , { headers });
}

function getReceiveCatalog(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.RECEIVE_CATALOG + parseInt(user_id) , { headers });
}

function getMakePayment(user_id: string, user_token: string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token,
    };

    return axios.get(Api.BASE_URL + Api.MAKE_PAYMENT + parseInt(user_id) , { headers });
}

function getPaymentConfirmation(user_id : string,user_token : string,paymentType : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.PAYMENT_CONFIRM + parseInt(user_id) + "/" + paymentType , { headers });
}

function getMyAssets(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.MY_ASSETS + parseInt(user_id) , { headers });
}

function getOnGoingAsset(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.ON_GOING_ASSETS + parseInt(user_id) , { headers });
}

function getDefaultAsset(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token};

    return axios.get(Api.BASE_URL + Api.DEFAULT_ASSETS + parseInt(user_id) , { headers });
}

function getCompleteAsset(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.COMPLETE_ASSETS + parseInt(user_id) , { headers });
}

function getTransaction(user_id : string,user_token: string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.TRANSACTION + parseInt(user_id) , { headers });
}

function getTransactionDetail(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.TRANSACTION_DETAIL + parseInt(user_id) , { headers });
}

function getPayNow(paymentId : number,user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.PAY_NOW + paymentId + "/" + parseInt(user_id) , { headers });
}

function getOrderAssetStatus(reqId : number,user_id : string,statusTxt : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.ORDER_ASSET_STATUS + reqId + "/" + parseInt(user_id) + "/" + statusTxt , { headers });
}

function postAssetData(postAssetReq : PostAssetReqModel,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.post(Api.BASE_URL + Api.ASSETS_REQUEST, postAssetReq,{ headers });
}

function getAccountBalance(user_id : string,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.ACCOUNT_BALANCE + parseInt(user_id),{ headers });
}

function postBalanceData(postBalanceReq : PostAssetReqModel,user_token : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.post(Api.ACCOUNT_BALANCE_URL + Api.POST_ACCOUNT_BALANCE, postBalanceReq,{ headers });
}

function getPayData(user_id : string,user_token : string,payData : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.PAY_DATA + user_id + "/" + payData , { headers });
}

function getCompleteTransDetail(user_id : string,user_token : string,order_id : string)
{
    const headers = {
        Authorization: 'Bearer ' + user_token
    };

    return axios.get(Api.BASE_URL + Api.COMPLETE_TRANS_DETAIL + parseInt(order_id) , { headers });
}

export default {
    signIn,
    getCatalog,
    getBrowseCatalog,
    getReqCatalog,
    getReceiveCatalog,
    getMakePayment,
    getPaymentConfirmation,
    getMyAssets,
    getOnGoingAsset,
    getDefaultAsset,
    getCompleteAsset,
    getTransaction,
    getTransactionDetail,
    getPayNow,
    getOrderAssetStatus,
    postAssetData,
    getAccountBalance,
    postBalanceData,
    getPayData,
    getCompleteTransDetail
}