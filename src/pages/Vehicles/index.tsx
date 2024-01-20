import { useEffect, useState } from 'react';
import { getVehicles } from '../../lib/api';
import styles from './Vehicles.module.scss';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      console.log(payload);
      setVehicles(null);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}></main>
    </div>
  );
};

export default VehiclesPage;
