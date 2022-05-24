export type SignUpCityResModel = {
    status : boolean,
    cities : cityObj[]

}

export type cityObj = {
    id: number,
    name: string,
    deleted_at: null,
    created_at: string,
    updated_at: string
}
