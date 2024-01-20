import styles from './Header.module.scss';
import NotesIcon from '../../assets/notes.png';
import Search from '../Search';
import XIcon from '../Icons/XIcon';
import Button from '../Button';

const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={NotesIcon} alt="Two yellow notes holded by a pin on the top" />
      <span className={styles.CoreNotes}>CoreNotes</span>
      <Search />
      <div>
        <Button title="Close" onClick={() => window.close()}>
          <XIcon />
        </Button>
      </div>
    </header>
  );
};

export default Header;
