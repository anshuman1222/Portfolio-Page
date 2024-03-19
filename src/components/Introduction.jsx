import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { styles } from "../styles"
const Introduction = () => {
    
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Anshuman</span>
                    </h1>
                    <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I'm a  <br className='sm:block hidden' />
                        <span className='text-[#915EFF]'>
                            <Typewriter
                                words={["Student","Developer","Competitive Programmer"]}
                                loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Introduction;