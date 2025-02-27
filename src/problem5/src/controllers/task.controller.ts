import { Request, Response } from "express";
import { BaseController } from "./abstracts";

export class TaskController extends BaseController {
  constructor() {
    super("/task");
  }

  getAllTask(req: Request, res: Response) {
    res.json("XIN CHAO");
  }

  onInit() {
    this.router.get("/", this.getAllTask);
  }
}
