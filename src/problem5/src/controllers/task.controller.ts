import { Request, Response } from "express";
import { BaseController } from "./abstracts";
import { Repository } from "typeorm";
import { Task } from "../entities/task.entity";
import { TaskRepository } from "../repositories/task.repository";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { CreateTaskDto } from "../dto/tasks/create-task.dto";
import { GetTaskById } from "../dto/tasks/get-task-by-id.dto";
import { UpdateTaskDto } from "../dto/tasks/update-task.dto";
import { AppError } from "../common/errors/error-code";

export class TaskController extends BaseController {
  taskRepository: Repository<Task>;
  constructor() {
    super("/task");
    this.taskRepository = TaskRepository.getInstance();
  }

  async getAllTask(req: Request, res: Response) {
    const tasks = await this.taskRepository.find();
    res.json(tasks);
  }

  async createTask(req: Request, res: Response) {
    const tasks = this.taskRepository.create(req.body);
    await this.taskRepository.save(tasks);
    res.json(tasks);
  }

  async getTaskById(req: Request, res: Response) {
    console.log(req.params);
    const { id } = req.params as unknown as GetTaskById;
    const task = await this.taskRepository.findOne({
      where: { id },
    });
    res.json(task);
  }

  async updateTask(req: Request, res: Response) {
    const { id } = req.params as unknown as GetTaskById;
    const task = await this.taskRepository.findOne({
      where: { id },
    });
    if (!task) {
      //@TODO: define error.
      res.status(404).json({
        code: AppError.TASK_NOT_FOUND,
        message: AppError.getErrorMessage(AppError.TASK_NOT_FOUND),
      });
      return;
    }

    const newTask = await this.taskRepository.save({
      ...task,
      ...req.body,
    });

    res.json(newTask);
  }

  async deleteTask(req: Request, res: Response) {
    const { id } = req.params as unknown as GetTaskById;
    const task = await this.taskRepository.findOne({
      where: { id },
    });
    if (!task) {
      res.status(404).json({
        code: AppError.TASK_NOT_FOUND,
        message: AppError.getErrorMessage(AppError.TASK_NOT_FOUND),
      });
      return;
    }
    await this.taskRepository.delete({ id });
    res.json({
      status: true,
    });
  }

  onInit() {
    this.router.get("/", this.getAllTask.bind(this));
    this.router.get(
      "/:id",
      validationMiddleware(GetTaskById, "params"),
      this.getTaskById.bind(this)
    );
    this.router.post(
      "/",
      validationMiddleware(CreateTaskDto),
      this.createTask.bind(this)
    );
    this.router.put(
      "/:id",
      validationMiddleware(GetTaskById),
      validationMiddleware(UpdateTaskDto),
      this.updateTask.bind(this)
    );
    this.router.delete(
      "/:id",
      validationMiddleware(GetTaskById),
      this.deleteTask.bind(this)
    );
  }
}
