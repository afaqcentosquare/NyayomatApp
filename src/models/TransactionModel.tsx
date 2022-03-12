export type TransactionModel = {
    data : TransactionObj[]
}

export type TransactionObj = {
    id : number,
    transId : string,
    transDate : string,
    transPrice : string
}
