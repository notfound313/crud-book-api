import { z } from "zod";
export default class BookValidation{
    static CREATE = z.object({
        title: z.string(),
        author: z.string(),
        published_year: z.number(),
        stock: z.number(),
        isbn: z.string()
    })

    static UPDATE = z.object({
        id: z.string(),
        title: z.string(),
        author: z.string()
    })
}