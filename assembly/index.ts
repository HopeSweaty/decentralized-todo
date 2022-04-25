// contract/assembly/index.ts
import { Todo, PartialTodo } from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.
export function createTodo(task: string): Todo {
  // use the Todo class to persist the todo data
  return Todo.insert(task);
}

export function getByIdTodo(id: u32): Todo {
  return Todo.findById(id);
}

export function getTodo(offset: u32, limit: u32 = 10): Todo[] {
  return Todo.find(offset, limit);
}

export function updateTodo(id: u32, updates: PartialTodo): Todo {
  return Todo.findByIdAndUpdate(id, updates);
}

export function deleteTodo(id: u32): void {
  Todo.findByIdAndDelete(id);
}
