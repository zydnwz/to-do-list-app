import Head from 'next/head';
import TodoList from '../components/TodoList';
import AddTaskForm from '../components/AddTaskForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Simple Todo list app using Next.js and MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Todo List</h1>
      <AddTaskForm />
      <TodoList />
    </div>
  );
}
