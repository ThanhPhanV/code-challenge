import { Router } from "express";

export abstract class BaseController {
  protected path: string = "/";
  protected router: Router;
  constructor(path: string) {
    this.path = path;
    this.router = Router();
    this.onInit();
  }

  getRouter(): Router {
    return this.router;
  }

  getPath(): string {
    return this.path;
  }

  abstract onInit(): void;
}
