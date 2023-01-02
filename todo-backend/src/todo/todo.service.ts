import { Injectable } from '@nestjs/common';
import { CreateAndUpdateTodo } from './create-and-update.dto';

export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(createTodoDto: Todo): Todo {
    this.todos.push(createTodoDto);
    return createTodoDto;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo | null {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, updateTodoDto: CreateAndUpdateTodo) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (!index) {
      console.warn(`No TODO with id ${id} found, nothing to update`);
      return updateTodoDto;
    }
    this.todos[index] = { id, ...updateTodoDto };
    return updateTodoDto;
  }

  remove(id: number): Todo {
    const todoToDelete = this.todos.find((todo) => todo.id === id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return todoToDelete;
  }
}
