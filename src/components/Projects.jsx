import './ProjectsPage.css'
import React, { useState, useEffect } from 'react'
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';



const Projects = () => {
  
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    work. Each project is described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies
                    .
                </motion.p>
            </div>

            
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="mt-20 flex flex-wrap gap-14"
                variants={zoomIn(0.1, 2)}
            >
                {projects.map((work) => (
                    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full " key={work.name}>
                        <div
                            className="app__work-img app__flex"
                        >
                            <img src={work.image} alt={work.name} className='w-full h-full object-cover rounded-2xl' />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href={work.project_link} target="_blank" rel="noreferrer">

                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={work.source_code_link} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            
                            <h4 className='text-white font-bold text-[24px] bold_text '>{work.name}</h4>
                            <p className="p-text  text-secondary text-[14px]" style={{ marginTop: 10 }}>{work.description}</p>

                           
                            <div className="app__work-tag app__flex bg-tertiary flex flex-wrap gap-2 ">
                                {work.tags.map((tag) => (
                                    <p
                                        
                                        className={`text-[14px] ${tag.color}`}
                                    >
                                        #{tag.name}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Projects, "work");