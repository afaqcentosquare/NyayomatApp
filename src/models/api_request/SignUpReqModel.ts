export type SignUpReqModel = {
    email:string,
    mobile:string,
    password:string,
    shop_name:string,
    city:number | undefined,
    region:number | undefined,
    locations:null,
    agree: number | undefined
}
