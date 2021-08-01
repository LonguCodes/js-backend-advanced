import {IsDefined, IsNumber, IsString} from "class-validator";

export class CreatePaymentSchema{

    @IsDefined()
    @IsNumber()
    value:number;

    @IsDefined()
    @IsString()
    currency:string;
}