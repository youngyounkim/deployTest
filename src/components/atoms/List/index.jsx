import styles from './index.module.css'

const List = ({ children, ...rest }) => {
    return (
        <li {...rest} className={styles.wrap}>
            {children}
        </li>
    )
}

export default List
