import styles from './index.module.css';

const TextField = ({ ...rest }) => {
  return <textarea {...rest} className={styles.wrap}></textarea>;
};

export default TextField;
