import { Input, GroupInput } from "../input";
import styles from "../../styles/form.module.css"
import Button from "../button";


const Form = ({ action }) => {
    return (
        <form className={styles.form} action={action} method="POST">
            <GroupInput >
                <Input type="text" placeholder="First Name" name="firstname" />
                <Input type="text" placeholder="Last Name" name="lastname" />
            </GroupInput>
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <Input type="password" placeholder="Repeat Password" />
            <Button textBtn="Submit" />
        </form>
    );
}

export default Form;