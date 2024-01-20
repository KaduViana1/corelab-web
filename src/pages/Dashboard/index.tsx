import styles from './Dashboard.module.scss';
import { Header } from '../../components';
import Note from '../../components/Note';
import NoteCreationForm from '../../components/NoteCreationForm';
import { useEffect } from 'react';
import { useTodoStore } from '../../store';

const Dashboard = () => {
  const todos = useTodoStore(state => state.todos);
  const fetchTodos = useTodoStore(state => state.getTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <Header />
      <main className={styles.Main}>
        <section className={styles.sections}>
          <NoteCreationForm />
          <span>Favoritas</span>
          <div className={styles.gridContainer}>
            {todos &&
              todos.map(
                todo =>
                  todo.is_favorite && (
                    <Note
                      title={todo.title}
                      content={todo.content}
                      color={todo.color}
                      id={todo.id}
                      key={todo.id}
                      is_favorite={todo.is_favorite}
                    />
                  )
              )}
          </div>
        </section>
        <section className={styles.sections}>
          <span>Outras</span>
          <div className={styles.gridContainer}>
            {todos &&
              todos.map(
                todo =>
                  !todo.is_favorite && (
                    <Note
                      title={todo.title}
                      content={todo.content}
                      color={todo.color}
                      id={todo.id}
                      key={todo.id}
                      is_favorite={todo.is_favorite}
                    />
                  )
              )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
