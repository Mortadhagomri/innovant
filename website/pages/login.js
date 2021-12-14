import BoxChoice from "../components/boxChoice";
import Button from "../components/button";
import { Input } from "../components/input";
import MainLayout from "../layout/mainLayout";

import styles from "../styles/form.module.css";

const Login = () => {
    return (
        <MainLayout>
            <BoxChoice page="login" />
            <form className={styles.form} action="/login" method="POST">
                <Input type="email" placeholder="Email*" name="email" required />
                <Input type="password" placeholder="Password*" name="password" required />
                <Button textBtn="Submit" />
            </form>
        </MainLayout>
    );
}

export default Login;