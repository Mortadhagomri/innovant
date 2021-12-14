import { useState } from "react";
import BoxChoice from "../components/boxChoice";
import Button from "../components/button";
import { GroupInput, Input } from "../components/input";
import MainLayout from "../layout/mainLayout";

import styles from "../styles/form.module.css";


const Register = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatpass: ""
    })

    const changeField = (name, value) => {
        setUser({ ...user, [name]: value })

    }

    const submitForm = e => {
        e.preventDefault()
        if (user.password !== user.repeatpass) {
            return
        }
        fetch("/register", { method: "POST", body: user })
    }

    return (
        <MainLayout>
            <BoxChoice page="register" />
            <form className={styles.form} onSubmit={submitForm}>
                <GroupInput>
                    <Input type="text" placeholder="First Name*" name="firstname" required changeField={changeField} />
                    <Input type="text" placeholder="Last Name*" name="lastname" required changeField={changeField} />
                </GroupInput>
                <Input type="email" placeholder="Email*" name="email" required changeField={changeField} />
                <Input type="password" placeholder="Password*" name="password" required changeField={changeField} />
                <Input type="password" placeholder="Repeat Password*" name="repeatpass" required changeField={changeField} error={user.password !== user.repeatpass} />
                <Button textBtn="Submit" />
            </form>
        </MainLayout>
    );
}

export default Register;