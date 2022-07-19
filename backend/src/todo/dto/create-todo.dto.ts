export class CreateTodoDto {
  description: string;
  status: 'PENDING' | 'PROGRESS' | 'DONE';
}
