import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <p>&copy; {new Date().getFullYear()} Dakshayani Ramanesh. All rights reserved.</p>
                    <div className={styles.socialLinks}>
                        <a href="https://www.linkedin.com/in/dakshayani-ramanesh-0949332b3/" target='_blank'>LinkedIn</a>
                        <a href="https://github.com/DakshayaniRamanesh" target='_blank'>GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;