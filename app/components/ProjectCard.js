import Link from 'next/link';
import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';

const ProjectCard = ({ imageLink, title, description, gitLink, previewLink }) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative bg-contain group'
                style={{ background: `url(${imageLink})`}}>
                    <div className='overlay absolute top-0 left-0 w-full h-full justify-center items-center
                     bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000'>

                        <Link href={gitLink} className='h-14 w-14 border-2 relative mr-2  rounded-full border-gray-800 hover:border-white group/link'>
                            <CodeBracketIcon className='h-10 w-10 text-gray-500 absolute top-1/2 left-1/2
                            transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                        </Link>
                        
                        <Link href={previewLink} className='h-14 w-14 border-2 relative  rounded-full border-gray-800 hover:border-white group/link'>
                            <EyeIcon className='h-10 w-10 text-gray-500 absolute top-1/2 left-1/2
                            transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
                        </Link>
                     </div>
                
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h4 className='font-semibold text-xl mb-2'>{title}</h4>
                <p className='text-gray-200'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard