'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeaderSection = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-8 place-self-center text-center sm:text-left'>
                    <h1 className='font-extrabold my-4 text-white text-2xl sm:text-2xl md:text-4xl lg:text-5xl '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-l  lg:text-4xl xl:text-5xl from-pink-500 to-purple-400 my-16 text-5xl'> Hello there, I&apos;m {" "}</span>
                       
                      <div className=' my-4 sm:text-sm xl:text-5xl'>
                      <TypeAnimation
                            sequence={[
                                
                                'Manu H N',
                                1000, 
                                'Frontend Developer',
                                1000,
                                'React Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'Java Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.5em' }}
                            repeat={Infinity}
                        />
                      </div>
                    </h1>

                    <p className='text-justify mb-4 text-xl sm:text-xs md:text-xs  xl:text-xl'>I am ManuHN, the wizard of MERN Stack Development. I specialize in making cool websites with React.js and Next.js. I speak the language of JavaScript and Java, dance with Node.js, and style things up using Tailwind CSS. I handle data with Git, MySQL, Postman, and MongoDB. Let&apos;s build something awesome together!</p>
                    
                    <div className='mt-10'>
                        <button className=' px-7 py-3 rounded-full w-full sm:w-fit mr-5 bg-transparent border-2 border-pink-500 hover:bg-pink-600 text-white'>Hire Me</button>
                        <button className=' px-7 py-3 rounded-full w-full sm:w-fit bg-transparent border-2 border-pink-500 hover:bg-pink-700 text-white mt-4 '>Download CV</button>
                    </div>
                </div>
                <div className="col-span-4 place-self-center ml-4">
                    <div className='rounded-full bg-gray-900 my-4 w-96 h-96 flex items-center justify-center overflow-hidden sm:w-36 sm:h-36 md:w-64 md:h-64 lg:w-96 lg:h-96'>
                        <Image src={'/images/ManuHN.jpg'} className='sm:w-36 sm:h-36' alt='Profile Photo' width={400} height={200} layout='responsive' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection