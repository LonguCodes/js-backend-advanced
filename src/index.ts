import 'reflect-metadata'

import {createKoaServer, useContainer as useRoutingContainer} from "routing-controllers";
import { useContainer as useTypeormContainer, createConnection } from "typeorm"
import {Container} from 'typeorm-typedi-extensions'



async function main(){
    useRoutingContainer(Container);
    useTypeormContainer(Container)


    await createConnection({
        host:'localhost',
        port:3306,
        database:'advanced',
        type:'mysql',
        username:'root',
        password:'root',
        synchronize:true,
        entities:[__dirname + "/entities/*.entity.ts"]
    })

    const app = createKoaServer({
        controllers:[__dirname + "/controllers/*.controller.ts"],
        validation:{
            whitelist:true,
            forbidNonWhitelisted: true
        }
    })

    app.listen(3001,()=>console.log('Application started on port 3001'))
}

main()