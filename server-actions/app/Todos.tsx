'use client';

import {useState} from "react";
import {addTodo, completeTodo, removeTodo, Todo} from "@/server-actions/todos"

export default function Todos(
  {
    todos,
    todoCount,
  }: {
    todos: Todo[],
    todoCount: number,
  }
) {
  const [newTodo, setNewTodo] = useState('');
  return (
    <>
      <h2 className="font-bold text-2xl mb-4">Todos ({todoCount})</h2>
      <ul className="flex flex-col gap-2 mb-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-2 justify-between">
            <span
              onClick={async () => await completeTodo(todo.id, !todo.completed)}
              className={`cursor-pointer rounded-full bg-neutral-800/50 px-3 py-1 grow ${todo.completed ? 'line-through' : ''}`}
            >
              <input type="checkbox" checked={todo.completed} readOnly={true} className="cursor-pointer mr-2" />
              {todo.title}
            </span>
            <button
              onClick={async() => await removeTodo(todo.id)}
              className="text-xs cursor-pointer rounded-full bg-neutral-800/50 size-8 hover:bg-neutral-800"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={async (e) => {
        e.preventDefault();
        await addTodo(newTodo);
        setNewTodo("");
      }} className="flex gap-2">
        <input
          type="text"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border border-neutral-700 rounded-lg p-2 bg-neutral-800/50"
        />
        <button
          className="border border-neutral-700 rounded-lg bg-neutral-800/50 p-2 cursor-pointer hover:bg-neutral-800"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  )
}
