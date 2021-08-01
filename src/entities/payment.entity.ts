import {Column, Entity, Generated, PrimaryColumn} from "typeorm";

@Entity({name:'payment'})
export class PaymentEntity{

    @PrimaryColumn()
    @Generated("increment")
    id:number;

    @Column()
    currency: string;

    @Column()
    value:number;

}