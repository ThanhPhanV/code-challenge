export class AppError {
  static readonly TASK_NOT_FOUND = "TASK_NOT_FOUND:404";
  static errorMapper = new Map<string, string>([
    [AppError.TASK_NOT_FOUND, "Task not found"],
  ]);

  static getErrorMessage(errorCode: string) {
    return AppError.errorMapper.get(errorCode);
  }
}
