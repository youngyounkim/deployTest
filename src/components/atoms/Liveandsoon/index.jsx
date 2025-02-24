import styles from './index.module.css'
import PropTypes from 'prop-types';

const Liveandsoon = ({ type }) => {
    return (
      <div className={styles.statusContainer}>
        {type === 'live' ? (
          <div className={styles.liveContainer}>실시간</div>
        ) : (
          <div className={styles.ComingContainer}>진행 예정</div>
        )}
      </div>
    );
  };
  
  Liveandsoon.propTypes = {
    type: PropTypes.oneOf(['live', 'coming']).isRequired,
  };
  
  export default Liveandsoon;


