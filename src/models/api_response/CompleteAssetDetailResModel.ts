export type CompleteAssetDetailResModel = {
    status : boolean,
    asset_info : assetInfo,
    transactions : transactionsDetailObj[]
}

export type assetInfo = {
    asset_id: number,
    order_id: number,
    asset_name: string,
    image: string,
    total_out_standing_amount: number,
    deposit_amount: number,
    units: number,
    unit_cost: number,
    installment: number,
    payment_frequency: string,
    amount: number,
    total_payments: number
}

export type transactionsDetailObj = {
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