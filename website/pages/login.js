import { useState } from "react";
import { useRouter } from "next/router"
import Cookies from "js-cookie";
import nextCookie from "next-cookies";
import BoxChoice from "../components/boxChoice";
import Button from "../components/button";
import { Input } from "../components/input";
import MainLayout from "../layout/mainLayout";
import { api } from "../services/user"
import styles from "../styles/form.module.css";
import user from "../services/user";

const Login = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        email: false,
        password: false
    })

    const changeField = (name, value) => {
        setUser({ ...user, [name]: value })
        setErrors({ ...errors, [name]: false })
    }
    const submitForm = (e) => {
        e.preventDefault()
        api(user, "/login")
            .then((result) => {
                if (result.code) {
                    if (result.code === 404) setErrors({ ...errors, email: true })
                    else if (result.code === 401) setErrors({ ...errors, password: true })
                    return
                }
                Cookies.set("user", result)
                router.push('/')

            })

    }
    return (
        <MainLayout>
            <BoxChoice page="login" />
            <form className={styles.form} onSubmit={submitForm}>
                <Input type="email" placeholder="Email*" name="email" required changeField={changeField} error={errors.email} />
                <Input type="password" placeholder="Password*" name="password" required changeField={changeField} error={errors.password} />
                <Button textBtn="Submit" />
            </form>
        </MainLayout>
    );
}

export default Login;

export const getServerSideProps = (ctx) => {

    const { user } = nextCookie(ctx);
    if (user) {
        return {
            props: {},
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return { props: {} };
}
