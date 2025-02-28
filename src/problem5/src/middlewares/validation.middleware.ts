import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";

export function validationMiddleware<T>(
  type: any,
  where?: "body" | "params" | "query"
): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationObject = req[where || "body"];
    const input = plainToInstance(type, validationObject);
    validate(input).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const messages = Object.values(errors?.at(0)?.constraints || {});
        res.status(400).json({ message: messages.at(0) });
      } else {
        req[where || "body"] = input;
        next();
      }
    });
  };
}
