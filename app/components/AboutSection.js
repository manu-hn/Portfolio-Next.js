"use client"
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import CardButton from './CardButton';
import { CARD_CONTENT } from './constants/Constants';

const AboutSection = () => {
    const [card, setCard] = useState('skills');
    const [isPending, startTransition] = useTransition();


    function handleCardChange(id) {
        startTransition(() => {
            setCard(id)
        })
    }

    return (
        <div id='about' className='text-white h-[180vh] md:h-[150vh] 2xl:h-[90vh]  mt-8 '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16 '>
                <Image src={'/images/About.png'} height={500} width={500} className='' alt='About Image' />

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-justify text-base lg:text-lg'>
                        I&apos;m a full-stack web developer passionate about crafting interactive and responsive applications. My hands-on experience includes JavaScript, React, Java, Redux, Node.js, Tailwind CSS, Next.js, MySQL, MongoDB, HTML, CSS, and Git. A quick learner, I thrive on expanding my knowledge and skill set. A dedicated team player, I&apos;m excited to collaborate and contribute to creating amazing applications.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <CardButton selectCard={() => handleCardChange('skills')} active={card === 'skills'}>{" "}Skills{" "}</CardButton>
                        <CardButton selectCard={() => handleCardChange('education')} active={card === 'education'}>{" "}Education{" "}</CardButton>
                        <CardButton selectCard={() => handleCardChange('certifications')} active={card === 'certifications'}>{" "}Certifications{" "}</CardButton>

                    </div>
                    <div className='mt-8'>
                        {CARD_CONTENT.find((data) => data.id === card).content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection