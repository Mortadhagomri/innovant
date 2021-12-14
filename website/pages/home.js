import MainLayout from '../layout/mainLayout';
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