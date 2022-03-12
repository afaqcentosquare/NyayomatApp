export type MyAccountResModel = {
    status : boolean,
    data : userResObj
}

export type userResObj = {
    id: number,
    shop_id: number,
    role_id: number,
    name: string,
    nice_name: string,
    email: string,
    account_balance: number,
    dob: string,
    sex: string,
    description: string,
    city: null,
    region: null,
    location: null,
    mobile: string,
    suspended: number,
    last_visited_at: null,
    last_visited_from: null,
    active: number,
    read_announcements_at: null,
    verification_token: null,
    email_verified_at: null,
    deleted_at: null,
    created_at: string,
    updated_at: string,
    service_merchant: number
}