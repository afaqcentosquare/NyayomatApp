export type SignUpLocResModel = {
    status : boolean,
    locations : locObj[]

}

export type locObj = {
    id: number,
    name: string,
    deleted_at: null,
    created_at: string,
    updated_at: string
}
