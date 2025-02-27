import { Request, Response } from "express";
import { BaseController } from "./abstracts";

export class AppController extends BaseController {
  constructor() {
    super("/");
  }
  healthCheck(req: Request, res: Response) {
    res.json({
      status: true,
    });
  }

  onInit() {
    this.router.get("/health-check", this.healthCheck);
  }
}
