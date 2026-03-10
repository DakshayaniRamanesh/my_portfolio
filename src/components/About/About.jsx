import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <h2 className={styles.sectionTitle}>
                    <span className="section-idx">[ 01 ]</span>
                    System.profile
                </h2>
                <div className={styles.terminalContainer}>
                    <div className={styles.terminalHeader}>
                        <div className={styles.dots}>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                        </div>
                        <div className={styles.terminalTitle}>bash — about.sh</div>
                    </div>
                    <div className={styles.terminalBody}>
                        <div className={styles.line}>
                            <span className={styles.prompt}>$</span>
                            <span className={styles.command}>cat bio.txt</span>
                        </div>
                        <div className={styles.output}>
                            <p>
                                I am an energetic, ambitious computer engineering undergraduate at the
                                University of Peradeniya. My approach to tasks is mature and responsible,
                                with a solid foundation in software development and hardware design.
                            </p>
                            <p>
                                Currently focusing on embedded systems, assembly language, and
                                scalable software architectures. Actively seeking opportunities to
                                engineer the future.
                            </p>
                        </div>
                        <div className={styles.line}>
                            <span className={styles.prompt}>$</span>
                            <span className={styles.command}>./get_stats.sh --detailed</span>
                        </div>
                        <div className={styles.output}>
                            <div className={styles.statsGrid}>
                                <div className={styles.statLine}>
                                    <span className={styles.label}>[Status]</span>
                                    <span className={styles.value}>2nd Year Undergraduate</span>
                                </div>
                                <div className={styles.statLine}>
                                    <span className={styles.label}>[Specialization]</span>
                                    <span className={styles.value}>Computer Engineering</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line}>
                            <span className={styles.prompt}>$</span>
                            <span className={styles.cursor}>█</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
