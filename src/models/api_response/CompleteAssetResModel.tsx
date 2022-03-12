export type CompleteAssetResModel = {
    status : true,
    data : completeAssetObj[]
}

export type completeAssetObj = {
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