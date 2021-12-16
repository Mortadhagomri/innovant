import React from 'react';
import Image from 'next/image';
import styles from '../../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
                <p>© All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;