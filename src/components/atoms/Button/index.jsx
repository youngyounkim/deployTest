import styles from './index.module.css'

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.wrap}>
      {children}
    </button>
  )
}

export default Button
