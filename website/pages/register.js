import BoxChoice from "../components/boxChoice";
import Button from "../components/button";
import { GroupInput, Input } from "../components/input";
import MainLayout from "../layout/mainLayout";

import styles from "../styles/form.module.css";


const Register = () => {
    return (
        <MainLayout>
            <BoxChoice />
            <form className={styles.form} action="/register" method="POST">
                <GroupInput>
                    <Input type="text" placeholder="First Name" name="firstname" />
                    <Input type="text" placeholder="Last Name" name="lastname" />
                </GroupInput>
                <Input type="email" placeholder="Email" name="email" />
                <Input type="password" placeholder="Password" name="password" />
                <Input type="password" placeholder="Repeat Password" />
                <Button textBtn="Submit" />
            </form>
        </MainLayout>
    );
}

export default Register;