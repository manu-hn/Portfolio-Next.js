import React from 'react'

const ProjectButton = ({name, onClick, isSelected}) => {
  const isButtonSelected=isSelected ? `text-white border-teal-500`
  :`text-gray-600 border-slate-600 hover:border-white`;
  
  return (
    <>
      <button className={`${isButtonSelected} rounded-full border-2 
      px-6 md:px-8 py-2 text-sm md:text-xl cursor-pointer`}
      onClick={()=>onClick(name)}>
       {name}</button>

    </>
  )
}

export default ProjectButton;