import { ZodError } from "zod";
import NotFoundException from "../exceptions/NotFoundError.js";
import AuthorizationError from "../exceptions/AuthorizationError.js";

const errorMiddleware = (error, request, response, nextFunction) => {
  if (error instanceof NotFoundException) response.status(error.code).json({ message: error.message })  
  else if(error instanceof AuthorizationError) response.status(error.code).json({ message: error.message })  
  else if(error instanceof ZodError) response.status(400).json({ message: error.errors })
  else response.status(500).json({ message: error.message })
};
export default errorMiddleware