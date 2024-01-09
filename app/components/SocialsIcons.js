import React from 'react';
import GitHub from '../../public/images/github-icon.svg';
import LinkedIn from '../../public/images/linkedin-icon.svg';
import Instagram from '../../public/images/instagram-white-icon.webp';
import Link from 'next/link';
import Image from 'next/image';


const SocialsIcons = () => {
    return (
        <>

            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-gray-400 mb-4 max-w-md'>{'  '}
                    I&apos;m exploring new opportunities and would love to connect with you! Feel free to drop me a message if you have any questions or just want to say hello. I&apos;ll do my best to respond!
                </p>
                <div className='socials flex flex-row gap-2 items-center'>
                    <Link href={`https://github.com/manu-hn`} className='text-white'>
                        <Image src={GitHub} alt='GitHub Icon' className='text-white' />
                    </Link>
                    <Link href={`https://www.linkedin.com/in/manu-hn/`}>
                        <Image src={LinkedIn} alt='LinkedIn Icon' />
                    </Link>
                    <Link href={`https://www.instagram.com/black_droid_05/`}>
                        <Image src={Instagram} alt='Instagram Icon' className='w-10' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SocialsIcons