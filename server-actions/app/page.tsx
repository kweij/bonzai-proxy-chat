import {getTodos, getTodoCount} from '@/server-actions/todos';
import Todos from '@/app/Todos';

export default async function Home() {
  const todos = await getTodos();
  const todoCount = await getTodoCount();

  return (
    <main className="max-w-xl mx-auto mt-8 bg-white dark:bg-black">
      <Todos todos={todos} todoCount={todoCount}/>
    </main>
  );
}
