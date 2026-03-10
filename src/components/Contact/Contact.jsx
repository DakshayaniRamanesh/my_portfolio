import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        // Replace these IDs with your actual EmailJS credentials
        // It's best to put these in a .env file later
        const SERVICE_ID = 'dak_Shelby954';
        const TEMPLATE_ID = 'template_sfn40sg';
        const PUBLIC_KEY = 'tEGl8dALoZQXaLLGl';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setIsSending(false);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactInfo}>
                        <h3>Let's build something together</h3>
                        <p>
                            Whether you're looking for a collaboration on an engineering
                            project, have a question about my work, or just want to say hi,
                            my inbox is always open.
                        </p>
                        <div className={styles.contactDetails}>
                            <p><span>Email:</span> dakshayaniramanesh@gmail.com</p>
                            <p><span>Location:</span> Colombo, Sri Lanka</p>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                        <input type="text" name="user_name" placeholder="Name" required />
                        <input type="email" name="user_email" placeholder="Email" required />
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

                        <button type="submit" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>

                        {status && (
                            <div className={`${styles.statusBlock} ${status === 'success' ? styles.success : styles.error}`}>
                                <div className={styles.statusHeader}>
                                    <span className={styles.statusLabel}>
                                        {status === 'success' ? 'SYSTEM_STATUS: OK' : 'SYSTEM_ERROR: FAIL'}
                                    </span>
                                </div>
                                <p className={styles.statusMessage}>
                                    {status === 'success'
                                        ? '>> Message transmitted successfully. Terminal stands by.'
                                        : '>> Transmission failed. Check connection parameters.'}
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
