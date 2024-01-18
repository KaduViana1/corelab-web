import Card from '../Card';
import styles from './Note.module.scss';
import Button from '../Button';
import { ChooseColorIcon, EditIcon, XIcon } from '../Icons';
import ColorPallete from '../ColorPallete';
import { useEffect, useState } from 'react';

interface INote {
  title?: string;
  backgroundColor?: string;
  isFavorite?: boolean;
}

const Note = ({ backgroundColor, title, isFavorite }: INote) => {
  const [showPallete, setShowPallete] = useState(false);

  const togglePallete = (e: MouseEvent) => {
    e.stopPropagation();
    setShowPallete(prev => !prev);
  };

  useEffect(() => {
    const closePallete = () => {
      setShowPallete(false);
    };

    document.body.addEventListener('click', closePallete);

    return () => document.body.removeEventListener('click', closePallete);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Card
          title={title}
          isFavorite={isFavorite}
          backgroundColor={backgroundColor}
        >
          <p>Clique ou arraste o arquivo para esta área para fazer upload</p>
          <footer className={styles.Footer}>
            <Button onClick={() => {}}>
              <EditIcon />
            </Button>

            <Button onClick={togglePallete}>
              <ChooseColorIcon />
            </Button>
            {showPallete && <ColorPallete />}
            <button className={styles.delete} onClick={() => {}}>
              <XIcon />
            </button>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default Note;
