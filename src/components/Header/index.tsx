import styles from './Header.module.scss';
import NotesIcon from '../../assets/notes.png';
import Search from '../Search';
import XIcon from '../Icons/XIcon';

const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={NotesIcon} alt="Two yellow notes holded by a pin on the top" />
      <span className={styles.CoreNotes}>CoreNotes</span>
      <Search />
      <XIcon />
    </header>
  );
};

export default Header;
