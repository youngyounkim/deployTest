import styles from './index.module.css';

const Title = ({ children, type = 'Title01', ...rest }) => {
  if (type === 'Title01') {
    return (
      <h2 {...rest} className={styles.Title_01_Regular}>
        {children}
      </h2>
    );
  } else if (type === 'Title02') {
    return (
      <h2 {...rest} className={styles.Title_02_Regular}>
        {children}
      </h2>
    );
  } else if (type === 'SubTitle02') {
    return (
      <h2 {...rest} className={styles.SubTitle_02_Regular}>
        {children}
      </h2>
    );
  } else if (type === 'Body01') {
    return (
      <h2 {...rest} className={styles.Body_01_Regular}>
        {children}
      </h2>
    );
  } else if (type === 'Body02') {
    return (
      <h2 {...rest} className={styles.Body_02_Regular}>
        {children}
      </h2>
    );
  } else if (type === 'Caption01') {
    return (
      <h2 {...rest} className={styles.Caption_01_Regular}>
        {children}
      </h2>
    );
  } else if (type === 'Caption02') {
    return (
      <h2 {...rest} className={styles.Caption_02_Regular}>
        {children}
      </h2>
    );
  }
};

export default Title;
