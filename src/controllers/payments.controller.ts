import {Body, Controller, Get, Post} from "routing-controllers";

const payments = []

@Controller()
export class PaymentsController {

    @Get('/payments')
    getPayments(){
        return payments;
    }

    @Post('/payments')
    createPayment(@Body() payment:any){
        payments.push(payment)
    }
}

