import styles from './Dashboard.module.scss';
import { Header } from '../../components';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className={styles.Main}></main>
    </>
  );
};

export default Dashboard;
