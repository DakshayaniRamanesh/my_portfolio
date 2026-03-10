import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Hardware & Low-Level",
            skills: ["C", "ARM Architecture", "Embedded Systems"]
        },
        {
            title: "AI & Data Science",
            skills: ["Machine Learning", "Python", "Deep Learning"]
        },
        {
            title: "Full-Stack Development",
            skills: ["React", "Node.js", "FastAPI"]
        }
    ];

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Technical Expertise</h2>
                <div className={styles.skillGrid}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className={styles.skillCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.headerDot}></span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, i) => (
                                    <div key={i} className={styles.skillBadge}>
                                        <code>{skill}</code>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
