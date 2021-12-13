import Image from 'next/image';
import { useRouter } from 'next/router';
import NavLink from './navLink';
import styles from '../../styles/navbar.module.css';

const Navbar = () => {
    const router = useRouter()
    console.log(router.pathname);

    return (
        <nav className={styles.navbar}>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <ul className={styles.navbar_list}>
                <NavLink href="/home" currentPath={router.pathname} >Home</NavLink>
                <NavLink href="/about" currentPath={router.pathname} >About</NavLink>
                <NavLink href="/contact-us" currentPath={router.pathname} >Contact us</NavLink>
            </ul>
            <div className={styles.user}>
                AR
            </div>
        </nav >

    );
};

export default Navbar;