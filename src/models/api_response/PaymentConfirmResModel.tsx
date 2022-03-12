export type PaymentConfirmResModel = {
    status : boolean,
    total : number,
    data : paymentConfirmResObj[]
}

export type paymentConfirmResObj = {
    id : number,
    asset_name : string,
    image : string,
    amount : number,
    units : number,
    unit_cost : number
}