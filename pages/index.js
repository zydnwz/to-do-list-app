import Head from 'next/head';
import TodoList from '../components/TodoList';
import './styles.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo List App</title>
        <meta name="description" content="A simple todo list app using Next.js and MongoDB." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}