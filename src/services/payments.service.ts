import {Service} from 'typedi'
import {PaymentsRepository} from "../repositories/payments.repository";
import {InjectRepository} from "typeorm-typedi-extensions";
import {PaymentEntity} from "../entities/payment.entity";

const payments = []

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
}