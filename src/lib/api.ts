import type { ICreateTodo, ITodo } from '../types/Todo';

const API = 'http://localhost:3333';

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<ITodo[]> => {
  return fetch(endpoint(path)).then(res => res.json());
};

const post = async (path: string, todo: ICreateTodo): Promise<ITodo> => {
  return fetch(endpoint(path), {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    return res.json();
  });
};

const put = async (path: string, todo: ICreateTodo): Promise<ITodo> => {
  return fetch(endpoint(path), {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    return res.json();
  });
};

const patch = async (
  path: string,
  data: { is_favorite: boolean }
): Promise<ITodo> => {
  return fetch(endpoint(path), {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    return res.json();
  });
};

const destroy = async (path: string): Promise<void> => {
  return fetch(endpoint(path), { method: 'DELETE' }).then(res => {});
};

export const getVehicles = async () => {
  return get('/todos');
};

export const getTodos = async () => {
  return get('/todos');
};

export const createTodo = async (data: ICreateTodo) => {
  return post('/todos', data);
};

export const updateTodos = async (
  data: ICreateTodo,
  id: number
): Promise<ITodo> => {
  return put(`/todos/${id}`, data);
};

export const favoriteUnfavoriteTodo = async (
  id: number,
  favorite: { is_favorite: boolean }
) => {
  return await patch(`/todos/${id}`, favorite);
};

export const deleteTodo = async (id: number) => {
  return await destroy(`/todos/${id}`);
};
