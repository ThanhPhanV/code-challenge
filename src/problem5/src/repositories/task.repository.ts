import { Repository } from "typeorm";
import { AppDataSource } from "../connectors/db-connector";
import { Task } from "../entities/task.entity";

export class TaskRepository extends Repository<Task> {
  private static instance: TaskRepository;
  constructor() {
    super(Task, AppDataSource.manager);
  }

  /**
   * Make sure return only only instance of TaskRepository (Singleton)
   */
  public static getInstance(): TaskRepository {
    if (!TaskRepository.instance) {
      TaskRepository.instance = new TaskRepository();
    }
    return TaskRepository.instance;
  }
}
