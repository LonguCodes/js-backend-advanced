import {Service} from 'typedi'
import {PaymentsRepository} from "../repositories/payments.repository";
import {InjectRepository} from "typeorm-typedi-extensions";
import {PaymentEntity} from "../entities/payment.entity";
import {PaymentNotFoundError} from "../errors/payment-not-found.error";

@Service()
export class PaymentsService {

    constructor(
        @InjectRepository(PaymentEntity)
        private paymentsRepository: PaymentsRepository
    ) {
    }

    getAll(){
        return this.paymentsRepository.find();
    }

    create(payment:any){
        return this.paymentsRepository.save(payment)
    }

    async delete(id:number) {
        if(await this.paymentsRepository.findOne(id))
            return this.paymentsRepository.delete(id)
        throw new PaymentNotFoundError()
    }
}