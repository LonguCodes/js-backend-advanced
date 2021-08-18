import {BadRequestError, Body, Controller, Get, Post, Delete, Param} from "routing-controllers";
import {PaymentsService} from "../services/payments.service";
import {Service} from "typedi";
import {CreatePaymentSchema} from "../schemas/createPayment.schema";


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
    deletePayment(@Param('id') id:number){
        return this.paymentsService.delete(id)
    }
}
