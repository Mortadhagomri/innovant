import Link from 'next/link'
import styles from '../../styles/navbar.module.css';


const NavLink = ({ currentPath, href, children }) => {
    return (
        <Link href={href}>
            <a className={[styles.navbar_item, currentPath === href && styles.navbar_item_active].join(" ")}> {children}</a>
        </Link>
    );
}

export default NavLink;