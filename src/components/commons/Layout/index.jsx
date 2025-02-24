import { Outlet } from 'react-router-dom';
import ConfirmModal from '../Modal/ConfirmModal';
import styles from './index.module.css';

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Outlet />
        <ConfirmModal />
      </div>
    </div>
  );
};

export default Layout;
