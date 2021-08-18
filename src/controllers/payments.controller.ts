import {BadRequestError, Body, Controller, Get, Post, Delete, Param, NotFoundError} from "routing-controllers";
import {PaymentsService} from "../services/payments.service";
import {Service} from "typedi";
import {CreatePaymentSchema} from "../schemas/createPayment.schema";
import {PaymentNotFoundError} from "../errors/payment-not-found.error";


@Controller()
@Service()
export class PaymentsController {
    constructor(private paymentsService:PaymentsService){

    }

    @Get('/payments')
    getPayments(){
        return this.paymentsService.getAll()
    }

    @Post('/payments')
    createPayment(@Body({validate:true}) payment: CreatePaymentSchema){
        return this.paymentsService.create(payment)
    }

    @Delete('/payments/:id')
    async deletePayment(@Param('id') id:number){
        try {
            return await this.paymentsService.delete(id)
        }
        catch (e) {
            if(e instanceof PaymentNotFoundError)
                throw new NotFoundError()
            throw e;
        }
    }
}
