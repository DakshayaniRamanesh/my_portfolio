import React from 'react';
import styles from './Hero.module.css';
import profileImg from '../../assets/about/profile.jpg';

const Hero = () => {
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
    const containerRef = React.useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        // Calculate tilt (max 15 degrees)
        const rotateX = (0.5 - y) * 20;
        const rotateY = (x - 0.5) * 20;

        setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroContent}>
                <div className="hud-label" style={{ marginBottom: '1rem' }}>[ SYSTEM_STATUS: OPERATIONAL ]</div>
                <h1 className={styles.title}>Dakshayani Ramanesh</h1>
                <div className={styles.titlecontent}>
                    Computer Engineering Student
                </div>
                <p className={styles.description}>
                    Building robust, scalable <code>hardware</code> and <code>software</code> systems.
                    Passionate about <code>Machine learning</code>, <code>embedded systems</code>, and software-development.
                </p>
                <div className={styles.cta}>
                    <a href="#projects" className={styles.primaryBtn}>Explore Projects</a>
                    <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
                </div>
            </div>
            <div
                className={styles.heroImgContainer}
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={styles.heroImgWrapper}
                    style={{
                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                    }}
                >
                    <img className={styles.heroImg} src={profileImg} alt="Dakshayani Ramanesh Profile" />

                    {/* Technical HUD Overlays */}
                    <div className={styles.hudOverlay}>
                        <div className={styles.scanLine}></div>
                        <div className={`${styles.bracket} ${styles.topLeft}`}></div>
                        <div className={`${styles.bracket} ${styles.topRight}`}></div>
                        <div className={`${styles.bracket} ${styles.bottomLeft}`}></div>
                        <div className={`${styles.bracket} ${styles.bottomRight}`}></div>

                        <div className={styles.dataLabels}>
                            <span className={styles.labelX}>COORD_X: {tilt.y.toFixed(1)}</span>
                            <span className={styles.labelY}>COORD_Y: {tilt.x.toFixed(1)}</span>
                            <span className={styles.status}>BIO_ID: VERIFIED</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
