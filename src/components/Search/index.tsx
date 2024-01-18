import { SearchIcon } from '../Icons';
import styles from './Search.module.scss';

type SearchTypes = {
  placeholder: string;
  value?: string;
  onChange: () => void;
};

const Search = ({ placeholder, value }: SearchTypes) => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder={placeholder} value={value || ''} />
      <SearchIcon />
    </div>
  );
};

export default Search;
