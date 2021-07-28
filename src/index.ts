import 'reflect-metadata'

import {createKoaServer} from "routing-controllers";

const app = createKoaServer({
    controllers:[__dirname + "/controllers/*.controller.ts"]
})


app.listen(3000,()=>console.log('Application started on port 3000'))