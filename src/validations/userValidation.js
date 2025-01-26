import { z } from "zod";
export default class UserValidation{
    static CREATE = z.object({
        fullname: z.string(),
        username: z.string(),
        password: z.string(),        
       
    })

    static UPDATE = z.object({
        id: z.string(),
        fullname: z.string(),        
    })
}