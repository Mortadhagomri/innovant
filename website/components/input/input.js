import styles from '../../styles/input.module.css'

const Input = ({ error, changeField, ...rest }) => {
    return (
        <input className={[styles.input, error && styles.input_error].join(" ")}
            {...rest}
            onChange={e => changeField(e.currentTarget.name, e.currentTarget.value)} />
    );
}

export default Input;