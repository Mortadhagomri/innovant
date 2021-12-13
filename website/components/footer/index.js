import React from 'react';
import style from '../../styles/Home.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.logo}>
                <Image src="/logo.png" alt="Logo" width={100} height={100} />
                <p>© All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;