import { Request, Response } from "express";
import { TaskServiceAbstract } from "./abstracts";

export class TaskService {
  getTasks(req: Request, res: Response): Response {
    return res.json("Get All Tasks");
  }
}
