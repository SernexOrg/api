import { Get, JsonController } from "routing-controllers";


@JsonController()
export class HomeController {

    @Get("/")
    getHome() {
      return "welcome to the api. To see how to use it, head over to sernex.tech/docs"
    }
}