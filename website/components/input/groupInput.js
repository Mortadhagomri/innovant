import styles from '../../styles/input.module.css'

const GroupInput = ({ children }) => {
    return (
        <div className={styles.group_input}>
            {children}
        </div>
    );
}

export default GroupInput;