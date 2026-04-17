'use server';

import {cacheTag, updateTag} from 'next/cache';
import fs from 'node:fs/promises';
import path from 'node:path';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const todosFile = path.resolve(process.cwd(), 'data/todos.json');

async function getTodosFromFile() {
  const file = await fs.readFile(todosFile);
  return JSON.parse(file.toString()) as Todo[];
}

export async function getTodos() {
  'use cache';
  cacheTag('todos');

  return await getTodosFromFile();
}

export async function getTodoCount() {
  return (await getTodos()).length;
}

export async function completeTodo(id: string, completed: boolean) {
  const todos = await getTodos();
  todos.forEach(todo => {
    if (todo.id === id) {
      todo.completed = completed;
    }
  })
  await fs.writeFile(todosFile, JSON.stringify(todos, null, 2));

  updateTag('todos')
}

export async function addTodo(title: string) {
  const todos = await getTodos();
  const newTodo: Todo = {
    id: Math.random().toString(36).substring(9),
    title,
    completed: false,
  };
  todos.push(newTodo);
  await fs.writeFile(todosFile, JSON.stringify(todos, null, 2));

  updateTag('todos')
}

export async function removeTodo(id: string) {
  const todos = (await getTodos()).filter(todo => todo.id !== id);
  await fs.writeFile(todosFile, JSON.stringify(todos, null, 2));

  updateTag('todos')
}
