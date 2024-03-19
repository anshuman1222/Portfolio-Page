import './AboutPage.css'
import React from 'react'
import { SectionWrapper } from "../hoc";
import { Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { styles } from "../styles";
const About = () => {

  return (
    <>


      <motion.div variants={zoomIn(0.1, 2)} class="min100vh yasio container-fluid about">
        <div class="row align-self-top w-100 align-items-start justify-content-center">
          <div class="pt-0 offseted col-sm-9 col-md-9 offset-sm-2 col-10 offset-1">
            <small class="section-title bullet-title alt">About /&gt;</small>
            <div class="mt-3"><div class="code-wrp">
              <div data-line-nr="01" class="code-l">
                <div class="methods">class</div>
                <span class="propname">Anshuman Behera</span>
                &#123;
              </div>
              <div data-line-nr="02" class="code-l">
                <div class="dot">··</div>
                <div class="comment">// My vast variety of skills is continuously expanding.
                </div>
              </div>
              <div data-line-nr="03" class="code-l"><div class="dot">··</div><div class="methods">constructor</div>() &#123;</div>
              <div data-line-nr="04" class="code-l"><div class="dot">····</div><span class="scope">this</span>.<span class="prop2">name</span> <span class="scope">=</span> <span class="string">'Anshuman Behera'</span></div>
              <div data-line-nr="05" class="code-l"><div class="dot">····</div><span class="scope">this</span>.<span class="prop2">dayOfBirth</span> <span class="scope">=</span> <span class="number">12/01/2003</span></div>
              <div data-line-nr="06" class="code-l"><div class="dot">····</div><span class="scope">this</span>.<span class="prop2">email</span> <span class="scope">=</span> <span class="string">'anshumanbehera9999@gmail.com'</span></div>
              <div data-line-nr="07" class="code-l"><div class="dot">··</div>&#125;</div>
              <div data-line-nr="08" class="code-l"><div class="dot">··</div><span class="propname">workExperience/projects</span>() &#123;</div>
              <div data-line-nr="09" class="code-l"><div class="dot">····</div><div class="methods">return</div> [ </div>
              <div data-line-nr="10" class="code-l"><div class="dot">······</div>&#123; <span class="string">'2023-now'</span> :<span class="string"> 'Expense Tracker'</span> &#125;</div>
              <div data-line-nr="11" class="code-l"><div class="dot">······</div>&#123; <span class="string">'2023-now'</span> :<span class="string"> 'Online Complaint Forum'</span> &#125;</div>
              <div data-line-nr="12" class="code-l"><div class="dot">····</div>]</div>
              <div data-line-nr="13" class="code-l"><div class="dot">··</div>&#125;</div>
              <div data-line-nr="14" class="code-l"><div class="dot">··</div><span class="propname">education</span>() &#123;</div>
              <div data-line-nr="15" class="code-l"><div class="dot">····</div><div class="methods">return</div> [ </div>
              <div data-line-nr="16" class="code-l"><div class="dot">······</div>&#123; <span class="string">'2019-2021'</span>:<span class="string"> 'Vikash Residential School - Intermediate Schooling, Science'</span> &#125;,</div>
              <div data-line-nr="17" class="code-l"><div class="dot">······</div>&#123; <span class="string">'2021-2025'</span>:<span class="string"> 'National Institute Of Technology Rourkela - Bachelor of Technology, Electrical Engineering'</span> &#125;</div>
              <div data-line-nr="18" class="code-l"><div class="dot">····</div>]</div>
              <div data-line-nr="19" class="code-l"><div class="dot">··</div>&#125;</div>
              <div data-line-nr="20" class="code-l"><div class="dot">··</div><span class="propname">skills</span>() &#123;</div>
              <div data-line-nr="21" class="code-l"><div class="dot">····</div><div class="methods">return</div> [ <span class="string">'HTML/CSS/JS , C++ , React.JS , Node.JS' </span> <Cursor /> ]</div>
              <div data-line-nr="22" class="code-l"><div class="dot">··</div>&#125;</div>
              <div data-line-nr="23" class="code-l">&#125;</div>
            </div>
            </div>
          </div>
        </div>
      </motion.div>

      <br className='sm:block hidden' />
      <br className='sm:block hidden' />
      <br className='sm:block hidden' />


      <motion.div variants={textVariant()}>

        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.3, 3)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        My name is Anshuman Behera. Pre-final year EE student of <a href="https://www.nitrkl.ac.in/" target='_blank' className='text-[#915EFF]'>NIT ROURKELA</a>. I am an aspiring software engineer. I specialise in C/C++ and Javascript. I am a full stack web developer. I am interested in Competitive Programming. <br className='sm:block hidden' />  <br className='sm:block hidden' /> Spend my time exploring tech, Competetive programming, participating in hackathons and coding contests. If you wish to know more about my technical background and achievements, please find my resume here. <br className='sm:block hidden' /> <br className='sm:block hidden' />
        <h3 variants={textVariant()} className='text-white font-bold text-[24px]'>Competitive Programming / Problem Solving</h3>
        <br className='sm:block hidden' />
        Questions solved in verious coding platforms. (leetcode, HackerRank, Codeforces, codechef, etc)
        <br className='sm:block hidden' />
        Link to all my coding profiles in various online coding sites can be found <a href="https://linktr.ee/anshu123456789" target='_blank' className='text-[#915EFF]'>here.</a>
      </motion.p>




    </>
  )
}

export default SectionWrapper(About, "about");