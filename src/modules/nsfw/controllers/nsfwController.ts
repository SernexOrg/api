import { Body, Get, JsonController, Post, QueryParam } from "routing-controllers";
import nsfw from '../../../utils/nsfw';

interface INsfw {
  link: string;
  guesses: number;
}
@JsonController()
export class NsfwController {
    @Get("/nsfw")
     getStats(@QueryParam('link', { required: true, parse: true }) link: string, @QueryParam('guesses', { required: false, parse: true }) guesses?: number) {
       console.log(link);
       return this.createPromise(nsfw(link, guesses), 3000)
     }


     @Post("/nsfw")
     postStats(@Body() Insfw: INsfw) {
       return this.createPromise(nsfw(Insfw.link, Insfw.guesses), 3000)
     }
     private createPromise(data: any, timeout: number): Promise<any> {
        return new Promise<any>((ok, fail) => {
          setTimeout(() => ok(data), timeout);
        });
      }
}