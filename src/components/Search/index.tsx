import { SearchIcon } from '../Icons';
import styles from './Search.module.scss';

interface ISearch {
  value?: string;
}

const Search = ({ value }: ISearch) => {
  const handleSubmit = () => {};

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input type="text" placeholder="Pesquisar notas" />
      <SearchIcon />
    </form>
  );
};

export default Search;
