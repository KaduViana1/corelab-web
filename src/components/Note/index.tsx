import styles from './Note.module.scss';
import Button from '../Button';
import {
  ChooseColorIcon,
  EditIcon,
  FavoriteIcon,
  SaveIcon,
  XIcon,
} from '../Icons';
import ColorPallete from '../ColorPallete';
import { useEffect, useState } from 'react';
import type { ITodo } from '../../types/Todo';
import { updateTodos } from '../../lib/api';
import { useTodoStore } from '../../store';

interface INote {
  title: string;
  content: string;
  color?: string;
  is_favorite: boolean;
  id: number;
}

const Note = ({ color, title, is_favorite, content, id }: INote) => {
  const [titleInput, setTitleInput] = useState(title);
  const [contentInput, setContentInput] = useState(content);
  const [showPallete, setShowPallete] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const favoriteTodo = useTodoStore(state => state.favoriteTodo);

  const toggleColorPallete = (e: MouseEvent) => {
    e.stopPropagation();
    setEditMode(true);
    setShowPallete(prev => !prev);
  };

  const toggleEditMode = () => {
    setEditMode(prev => !prev);
  };

  const favoriteToggle = async () => {
    favoriteTodo(id, { is_favorite: !is_favorite });
  };

  const saveChanges = async () => {
    const todo = {
      title: titleInput,
      content: contentInput,
      color,
      is_favorite,
    };

    try {
      await updateTodos(todo, id);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const closeColorPallete = () => {
      setShowPallete(false);
    };

    document.body.addEventListener('click', closeColorPallete);

    return () => document.body.removeEventListener('click', closeColorPallete);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div
          style={{
            backgroundColor: color ?? 'white',
            boxShadow: is_favorite
              ? '02px 2px 3px rgba(0, 0, 0, 0.25)'
              : 'none',
          }}
          className={styles.Card}
        >
          <div
            style={{
              borderBottom: color ? '1px solid #FFFFFF' : '1px solid #D9D9D9',
            }}
            className={styles.heading}
            title={titleInput}
          >
            <input
              title={title}
              readOnly={!editMode}
              value={titleInput}
              onChange={e => setTitleInput(e.target.value)}
              type="text"
            />

            <div>
              {editMode && (
                <Button title="Salvar" onClick={saveChanges}>
                  <SaveIcon />
                </Button>
              )}

              <Button title="Favoritar" onClick={favoriteToggle}>
                <FavoriteIcon isFavorite={is_favorite} />
              </Button>
            </div>
          </div>

          <div className={styles.content}>
            <textarea
              readOnly={!editMode}
              value={contentInput}
              onChange={e => setContentInput(e.target.value)}
            ></textarea>
            <footer className={styles.Footer}>
              <Button title="Editar" onClick={toggleEditMode}>
                <EditIcon />
              </Button>

              <Button title="Paleta de cores" onClick={toggleColorPallete}>
                <ChooseColorIcon />
              </Button>
              {showPallete && <ColorPallete id={id} />}
              <div className={styles.delete}>
                <Button title="Excluir" onClick={() => deleteTodo(id)}>
                  <XIcon />
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
