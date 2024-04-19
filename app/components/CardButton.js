import React from 'react'

const CardButton = ({ active, selectCard, children }) => {

    const isButtonActive = active ?
        'text-white border-b border-pink-500'
        : "text-gray-400"

    return (
        <>
            <button onClick={selectCard}>
                <p className={`mr-3 font-semibold text-left  hover:text-white ${isButtonActive}`}>
                    {children}
                </p>
            </button>

        </>
    )
}

export default CardButton