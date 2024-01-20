import { useState } from 'react';
import { FavoriteIcon, SaveIcon } from '../Icons';
import styles from './NoteCreationForm.module.scss';
import Button from '../Button';
import { useTodoStore } from '../../store';
import { ITodo } from '../../types/Todo';

const NoteCreationForm = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('Criar nota...');
  const addTodo = useTodoStore(state => state.addTodo);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formValues = { title, content, is_favorite: isFavorite };
      await addTodo(formValues as ITodo);

      setTitle('');
      setContent('Criar nota...');
      setIsFavorite(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stateToChange: React.Dispatch<React.SetStateAction<string>>
  ) => {
    stateToChange(event.target.value);
  };

  return (
    <>
      <div className={styles.Card}>
        <form onSubmit={e => handleSubmit(e)}>
          <div className={styles.heading}>
            <input
              value={title}
              placeholder="Titulo"
              onChange={e => handleChange(e, setTitle)}
              maxLength={80}
            />
            <div className={styles.icons}>
              <Button title="Favoritar" onClick={toggleFavorite}>
                <FavoriteIcon isFavorite={isFavorite} />
              </Button>
              <Button title="Salvar" onClick={handleSubmit}>
                <SaveIcon />
              </Button>
            </div>
          </div>
          <textarea value={content} onChange={e => handleChange(e, setContent)}>
            Criar
          </textarea>
        </form>
      </div>
    </>
  );
};

export default NoteCreationForm;
