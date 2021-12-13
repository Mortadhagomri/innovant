import React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import styles from '../styles/layout.module.css'


const MainLayout = ({ children }) => {
    return (
        <div className={styles.grid_container}>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;