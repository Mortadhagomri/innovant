import MainLayout from '../layout/mainLayout';
import nextCookie from "next-cookies"
import styles from '../styles/Home.module.css';



const Home = () => {
    return (
        <MainLayout>
            <div className={styles.container_home}>
                <div className={styles.logo_container}>
                    <div className={styles.left}></div>
                    <div className={styles.right}></div>
                </div>
                <p className={styles.text_home}>The Logo Above is Made in Pure CSS</p>
            </div>
        </MainLayout>
    );
}

export default Home;
export const getServerSideProps = (ctx) => {

    const { user } = nextCookie(ctx);
    if (!user) {
        return {
            props: {},
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return { props: {} };
}