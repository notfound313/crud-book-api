import { z } from "zod";
export default class TokenValidator{
    static CREATE = z.object({       
        token: z.string(),        
       
    })

    static UPDATE = z.object({
        token: z.string(),        
    })
}