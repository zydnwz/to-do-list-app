import Head from 'next/head';
import styles from './styles.module.css';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo List App</title>
        <meta name="description" content="A simple todo list app using Next.js and MongoDB. Add, edit, and delete tasks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}