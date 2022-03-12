export type DefaultAssetResModel = {
    status : true,
    data : defaultAssetResObj[]
}

export type defaultAssetResObj = {
    asset_id : number,
    asset_name : string,
    image : string,
    total_out_standing_amount : number,
    deposit_amount : number,
    units : number,
    unit_cost : number,
    installment : number,
    payment_frequency : string,
    amount : number,
    payments_left : number
}