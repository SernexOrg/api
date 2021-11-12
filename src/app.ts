import "reflect-metadata"

import { createExpressServer } from "routing-controllers";

let base_dir = __dirname;

const app = createExpressServer({
    cors: true,
    controllers: [base_dir + '/modules/**/controllers/*{.js,.ts}'],
    middlewares: [base_dir + '/modules/**/middlewares/*{.js,.ts}'],
})


app.listen(3000);
console.log("server is up");


