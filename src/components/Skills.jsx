import './SkillsPage.css'
import React from 'react'
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import {textVariant} from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";


const Skills = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {technologies.map((technology) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={technology.name}
            >
              <div
                className="app__flex"
              >
                <img src={technology.icon} alt={technology.name} />
              </div>
              <p className="p-text">{technology.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills");
