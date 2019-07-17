export class User {
    public id?:number;
    public role?:string;

    public email:string;
    public password:string;

    public connected?:boolean = false;
}