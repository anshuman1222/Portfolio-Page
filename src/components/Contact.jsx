import React, { useRef, useState } from "react";
import {motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaMailBulk, FaWhatsapp , FaLocationArrow} from "react-icons/fa";
import { toast } from 'react-toastify';
import { contact } from "../assets";


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!form.email || !form.name || !form.message) {
            toast.error('Please Fill Out All Fields');
            setLoading(false);
            setForm({
                name: "",
                email: "",
                message: "",
            });
            return;
        }
        emailjs
            .send(
                'service_75c4pfe',
                'template_qy7h446',
                {
                    from_name: form.name,
                    to_name: "Anshuman",
                    from_email: form.email,
                    to_email: "anshumanbehera9999@gmail.com",
                    message: form.message,
                },
                'YxfQgSSd7vAQGzG-t'
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    toast.error("Ahh, something went wrong. Please try again.");
                }
            );
        
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex md:flex-row flex-col gap-6 bg-black-100 p-8 rounded-2xl'
            >
                

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className=' flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                            
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                        
                    </label>
                    
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row text-left gap-4 flex-wrap items-centre">
                        <FaMailBulk />  
                        <p className=' text-secondary text-[17px] '>anshumanbehera9999@gmail.com</p>
                    </div>
                    <div className="flex flex-row text-left gap-4 flex-wrap items-centre">
                        <FaWhatsapp />
                        <p className=' text-secondary text-[17px] '>+91 7749072268</p>
                    </div>
                    <div className="flex flex-row text-left gap-4 flex-wrap items-centre">
                        <FaLocationArrow />
                        <p className=' text-secondary text-[17px] '>NIT Rourkela, Rourkela, Odisha 769008</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-auto max-w-full'
            >
                <div className="relative h-auto max-w-full overflow-hidden pointer-events-auto touch-none">
                    <div className="h-auto max-w-full">
                       
                            <img className="object-scale-down rounded-full opacity-100 block h-auto max-w-full" src={contact} alt="contact-animation" />
                       
                    </div>
                </div>

                
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");

