import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const projects = [
        {
            title: "Signal Intelligence Dashboard",
            description: "Developed an automated open-source intelligence system for Sri Lankan news, featuring real-time ETL pipelines, Flask backend, NLP (NER, Sentence-BERT embeddings, TF-IDF, sentiment analysis), unsupervised clustering, and statistical event detection for actionable socio-economic insights.",
            tags: ["Machine Learning", "Data Engineering", "System Architecture"],
            link: "https://github.com/DakshayaniRamanesh/news_SIGNALS"
        },
        {
            title: "Dementia risk prediction",
            description: "Developed a Dementia Prediction System using a real-world dataset by implementing a Logistic Regression model from scratch with NumPy, applying data preprocessing and gradient descent training, with an interactive prediction module and model serialization using Pickle for deployment-ready inference.",
            tags: ["Machine learning", "Logistic regression", "Model training"],
            link: "https://github.com/ShathuCodes/ModelX_Hackathon"
        },
        {
            title: "Libtiny3d ",
            description: "Co-developed a 3D graphics engine featuring anti-aliased line rendering, circular clipping, and perspective projection.Implemented Lambertian lighting models and a cubic Bézier curve animation system for dynamic object movement.",
            tags: ["Computer Graphics fundamentals", "C"],
            link: "https://github.com/DakshayaniRamanesh/libtiny3d"
        },
        {
            title: "Line Following Robot",
            description: "Designed and built an autonomous robot capable of detecting and following a predefined path using infrared sensors and an Arduino microcontroller. Implemented sensor-based feedback to control motor direction and speed for accurate line tracking.",
            tags: ["Embedded systems", "Basic Robotics", "Testing"],
            link: "#"
        }
    ];

    // Handle responsive items to show
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsToShow(1);
            } else if (window.innerWidth <= 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset index if it exceeds the new bounds after resize
    useEffect(() => {
        if (currentIndex > projects.length - itemsToShow) {
            setCurrentIndex(Math.max(0, projects.length - itemsToShow));
        }
    }, [itemsToShow, projects.length, currentIndex]);

    const nextSlide = () => {
        if (currentIndex < projects.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance in pixels
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section id="projects" className={styles.projects}>
            <div className={`container ${styles.projectsContainer}`}>
                <h2 className={styles.sectionTitle}>
                    <span className="section-idx">[ 03 ]</span>
                    Featured Projects
                </h2>
                <div className={styles.sliderWrapper}>
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        aria-label="Previous projects"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>

                    <div
                        className={styles.sliderContainer}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className={styles.projectGrid}
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    <div className="hud-bracket bracket-tl"></div>
                                    <div className="hud-bracket bracket-tr"></div>
                                    <div className="hud-bracket bracket-bl"></div>
                                    <div className="hud-bracket bracket-br"></div>
                                    <div className="scanline"></div>
                                    <div className={styles.projectInfo}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className={styles.tags}>
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewLink}>View Project on GitHub →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={nextSlide}
                        disabled={currentIndex >= projects.length - itemsToShow}
                        aria-label="Next projects"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
