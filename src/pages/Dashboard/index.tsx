import styles from './Dashboard.module.scss';
import { Card, Header } from '../../components';
import Note from '../../components/Note';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className={styles.Main}>
        <Card></Card>
        <section className={styles.sections}>
          <span>Favoritas</span>
          <div className={styles.gridContainer}>
            <Note title="Titulo"></Note>
            <Note title="Título" isFavorite backgroundColor="#9DD6FF"></Note>
          </div>
        </section>
        <section className={styles.sections}>
          <span>Outras</span>
          <div className={styles.gridContainer}>
            <Note title="Titulo"></Note>
            <Note title="Titulo" backgroundColor="#DAFF8B"></Note>
            <Note title="Titulo"></Note>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
