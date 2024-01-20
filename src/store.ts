import { create } from 'zustand';
import { ITodo } from './types/Todo';
import {
  createTodo,
  deleteTodo,
  favoriteUnfavoriteTodo,
  getTodos,
} from './lib/api';

type TodoStore = {
  todos: ITodo[];
  getTodos: () => Promise<void>;
  addTodo: (todo: ITodo) => Promise<void>;
  changeColor: (id: number, newColor: string) => void;
  deleteTodo: (id: number) => Promise<void>;
  favoriteTodo: (id: number, is_favorite: { is_favorite: boolean }) => void;
};

export const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  getTodos: async () => {
    const fetchedTodos = await getTodos();
    set({ todos: fetchedTodos });
  },
  addTodo: async todo => {
    const newTodo = await createTodo(todo);
    set(state => ({ todos: [newTodo, ...state.todos] }));
  },
  changeColor: (id, newColor) => {
    set(state => {
      return {
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, color: newColor } : todo
        ),
      };
    });
  },
  deleteTodo: async (id: number) => {
    await deleteTodo(id);
    set(state => ({ todos: state.todos.filter(todo => todo.id !== id) }));
  },
  favoriteTodo: async (id: number, is_favorite) => {
    const updatedTodo = await favoriteUnfavoriteTodo(id, is_favorite);

    set(state => ({
      todos: state.todos.map(todo => (todo.id === id ? updatedTodo : todo)),
    }));
  },
}));
