export type MakePaymentResModel = {
    data : makePaymentResObj ,
}

export type makePaymentResObj = {
    status: boolean,
    due_today: number,
    pending: number,
    over_due: number,
    past_over_due: number,
    defaulted: number
}
