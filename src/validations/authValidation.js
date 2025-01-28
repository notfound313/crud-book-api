import { z } from "zod";

export default class AuthValidator{
    static POST = z.object({       
        username: z.string(),        
        password: z.string(),        
       
    })
}
 