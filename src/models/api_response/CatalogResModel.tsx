export type CatalogResModel = {
    status : boolean,
    browse : browseResObj[],
    requested : requestResObj[],
    received : receivedResObj[]
}

export type browseResObj = {
    id: number,
    asset_provider_id: number,
    asset_name: string,
    units: number,
    unit_cost: number,
    holiday_provision: number,
    deposit_amount: number,
    installment: number,
    payment_frequency: string,
    payment_method: string,
    status: string,
    created_at: string,
    updated_at: string,
    image: string
}

export type requestResObj = {
    id: number,
    merchant_id: number,
    asset_provider_id: number,
    asset_id: number,
    units: number,
    unit_cost: number,
    holiday_provision: number,
    deposit_amount: number,
    installment: number,
    total_out_standing_amount: number,
    payment_frequency: string,
    payment_method: string,
    status: string,
    created_at: string,
    updated_at: string,
    shop_name: string,
    asset_name: string,
    image: string
}

export type receivedResObj = {
    id: number,
    merchant_id: number,
    asset_provider_id: number,
    asset_id: number,
    units: number,
    unit_cost: number,
    holiday_provision: number,
    deposit_amount: number,
    installment: number,
    total_out_standing_amount: number,
    payment_frequency: string,
    payment_method: string,
    status: string,
    created_at: string,
    updated_at: string,
    shop_name: string,
    asset_name: string,
    image: string
}