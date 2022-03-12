export type TransactionResModel = {
    status : boolean,
    total_receipt : totalReceiptObj,
    total_paid : number,
    assets_info : assetInfoObj[]
}

export type totalReceiptObj = {
    total : number
}

export type assetInfoObj = {
    asset_id : number,
    order_id : number,
    asset_name : string,
    image : string,
    amount : number
}