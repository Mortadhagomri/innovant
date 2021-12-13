import styles from '../../styles/input.module.css'

const Input = ({ error, ...rest }) => {
    return (
        <input className={[styles.input, error && styles.input_error].join(" ")} {...rest} />
    );
}

export default Input;