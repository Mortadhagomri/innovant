import { useState } from "react";
import { useRouter } from "next/router"
import Cookies from "js-cookie";
import nextCookie from "next-cookies"
import BoxChoice from "../components/boxChoice";
import Button from "../components/button";
import { GroupInput, Input } from "../components/input";
import MainLayout from "../layout/mainLayout";
import { api } from "../services/user"
import styles from "../styles/form.module.css";


const Register = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatpass: ""
    })

    const [errors, setErrors] = useState({
        email: false
    })

    const changeField = (name, value) => {
        setUser({ ...user, [name]: value })
        if (name === "email") setErrors({ email: false })
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (user.password !== user.repeatpass) {
            return
        }
        api(user, "/register")
            .then((result) => {
                if (result.code) {
                    if (result.code === 403) setErrors({ ...errors, email: true })
                    return
                }
                Cookies.set("user", result);
                router.push('/home')
            })

    }



    return (
        <MainLayout>
            <BoxChoice page="register" />
            <form className={styles.form} onSubmit={submitForm}>
                <GroupInput>
                    <Input type="text" placeholder="First Name*" name="firstname" required changeField={changeField} />
                    <Input type="text" placeholder="Last Name*" name="lastname" required changeField={changeField} />
                </GroupInput>
                <Input type="email" placeholder="Email*" name="email" required changeField={changeField} error={errors.email} />
                <Input type="password" placeholder="Password*" name="password" required changeField={changeField} />
                <Input type="password" placeholder="Repeat Password*" name="repeatpass" required changeField={changeField} error={user.password !== user.repeatpass} />
                <Button textBtn="Submit" />
            </form>
        </MainLayout>
    );
}

export default Register;
export const getServerSideProps = (ctx) => {

    const { user } = nextCookie(ctx);
    if (user) {
        return {
            props: {},
            redirect: {
                destination: "/home",
                permanent: false,
            },
        };
    }

    return { props: {} };
}