import Image from 'next/image';
import Link from 'next/link'
import styles from "../../styles/box.module.css"

const BoxChoice = ({ page }) => {
    return (
        <div className={styles.box_container}>
            <span className={styles.check_icon} style={{ left: page === "login" ? "90%" : "2%" }}>
                <Image src="/check.png" alt="Logo" width={20} height={20} />

            </span>
            <Link href="/register">
                <a className={styles.left_choice}>
                    <Image src="/register.png" alt="Logo" width={27} height={27} />
                    <p className={styles.box_title}>Register</p>
                    <p className={styles.box_subtitle}>Browse and find what you need.</p>
                </a>
            </Link>
            <Link href="/login">
                <a className={styles.right_choice}>
                    <Image src="/signin.png" alt="Logo" width={27} height={27} />
                    <p className={styles.box_title}>Sign in</p>
                    <p className={styles.box_subtitle}>Already have an account, then welcome back.</p>
                </a>
            </Link>

        </div>
    );
}

export default BoxChoice;