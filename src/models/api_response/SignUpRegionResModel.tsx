export type SignUpRegionResModel = {
    status : boolean,
    regions : regionObj[]

}

export type regionObj = {
    id: number,
    name: string,
    deleted_at: null,
    created_at: string,
    updated_at: string
}
