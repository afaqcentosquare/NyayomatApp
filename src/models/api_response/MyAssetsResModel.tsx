export type MyAssetsResModel = {
    status : true,
    ongoing_info : myAssetObj,
    defaulted_info : defaultInfoObj,
    completed_info : completeInfoObj
}

export type myAssetObj = {
    amount : number,
    payments_left : number,
    next_payment : string
}

export type defaultInfoObj = {
    amount : number,
    missed_payments : number,
    next_payment : string
}

export type completeInfoObj = {
    amount : number,
    total_payments : number,
    next_payment : string
}