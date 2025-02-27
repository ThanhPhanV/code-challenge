import { Request, Response } from "express";
export abstract class TaskServiceAbstract {
  abstract getTasks(req: Request, res: Response): Response;
}
