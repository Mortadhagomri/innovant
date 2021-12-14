import styles from "../../styles/form.module.css"
const Button = ({ textBtn }) => {
    return (
        <button className={styles.button}>{textBtn}</button>
    );
}

export default Button;