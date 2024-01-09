'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeaderSection = () => {
    return (
        <div className='mt-14'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='font-extrabold my-4 text-white text-2xl sm:text-2xl md:text-4xl lg:text-5xl '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-l  lg:text-4xl xl:text-5xl from-orange-500 to-green-400 my-16 text-5xl'> Hello there, I&apos;m {" "}</span>

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
                                style={{ fontSize: '1.4em' }}
                                repeat={Infinity}
                            />
                        </div>
                    </h1>

                    <p className='text-xs sm:text-sm md:text-base xl:text-xl text-justify mb-6'>I&apos;m ManuHN, a MERN Stack wizard specializing in React.js, Next.js, and Java. I weave magic with JavaScript, style using Tailwind CSS, and bring creations to life with Git. Let&apos;s build something awesome together! 🚀</p>


                    <div className='mt-10'>
                        <button className=' px-7 py-3 rounded-full w-full sm:w-fit mr-5 bg-transparent border-2 border-green-500 hover:bg-green-400 text-white hover:text-black'>Hire Me</button>
                        <button className=' px-7 py-3 rounded-full w-full sm:w-fit bg-transparent border-2 border-green-500 hover:bg-green-400 text-white mt-4 hover:text-black'>Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className='rounded-full bg-gray-900 w-[15.625rem] h-[15.625rem] lg:h-[25rem] lg:w-[25rem] relative overflow-hidden' >
                        <Image
                            src='/images/ManuHN.jpg'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            alt='Profile Photo'
                            width={300}
                            height={300}
                            layout='responsive'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection