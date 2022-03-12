export type TransactionDetailResModel = {
    status: boolean,
    total_paid: number,
    transactions_info : transDetailInfoObj[]
}

export type transDetailInfoObj = {
    id: number,
    order_id: number,
    asset_id: number,
    merchant_id: number,
    due_date: string,
    paid_on: string,
    type: string,
    amount: number,
    created_at: string,
    updated_at: string
}