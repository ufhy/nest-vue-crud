import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo) private readonly todoModel: typeof Todo) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoModel.create({
      description: createTodoDto.description,
      status: createTodoDto.status,
    });
  }

  findAll() {
    return this.todoModel.findAll();
  }

  findOne(id: number) {
    return this.todoModel.findOne({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.update(
      {
        description: updateTodoDto.description,
        status: updateTodoDto.status,
      },
      { where: { id } },
    );
  }

  markAsDone(id: number) {
    return this.todoModel.update(
      {
        status: 'DONE',
      },
      { where: { id } },
    );
  }

  remove(id: number) {
    return this.todoModel.destroy({ where: { id } });
  }
}
