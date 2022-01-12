import { Adress } from "./Adress"

export abstract class User{
    id: number
    password : string
    username : string
    adress : Adress[]
    gsmNumber : number
    telNumber : number
    roles : string[]
    token : string
}