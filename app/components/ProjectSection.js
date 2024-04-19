'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_CONTENT } from './constants/Constants';
import ProjectButton from './ProjectButton';

const ProjectSection = () => {
    const [showBasedOnTag, setBasedOnTag] = useState('All');

    function handleSelectBasedOnTag(newTag) {
        setBasedOnTag(newTag);
    }
    const filterProjectsBasedOnName = PROJECT_CONTENT.filter((project) =>
        project.tags.includes(showBasedOnTag));


    return (
        <div id='projects' className=' mt-48 md:mt-28 sm:mt-36'>
            <h1 className='text-center text-lg md:text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h1>
            <div className='text-white flex mb-6 flex-row justify-center items-center gap-2 px-3 md:px-6 '>
                <ProjectButton onClick={handleSelectBasedOnTag}
                    name='All' isSelected={showBasedOnTag === 'All'} />
                <ProjectButton onClick={handleSelectBasedOnTag}
                    name='FullStack' isSelected={showBasedOnTag === 'FullStack'} />
                <ProjectButton onClick={handleSelectBasedOnTag}
                    name='React' isSelected={showBasedOnTag === 'React'} />
               
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filterProjectsBasedOnName.map((project) => {
                    return (

                        <ProjectCard key={project.id} title={project.title}
                            imageLink={project.imageLink}
                            description={project.description}
                            gitLink={project.gitLink}
                            previewLink={project.previewLink} />

                    )
                })}
            </div>
        </div>
    )
}

export default ProjectSection