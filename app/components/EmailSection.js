'use client';
import React, {useState} from 'react';
import SocialsIcons from './SocialsIcons';

const EmailSection = () => {
    // const [emailSubmitted, setEmailSubmitted] = useState(false);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value
    //     }
    //     const jsonData = JSON.stringify(data);
    //     const endpoint = `/api/send`;

    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: jsonData,
    //     }

    //     const response = await fetch(endpoint, options);
    //     const statusData = await response.json();
    //     if (response.status === 'success') {
    //         setEmailSubmitted(false)
    //         console.log(statusData)
    //         console.log('Message Sent Successfully')
    //     }
    // }

    return (
        <div id='hire-me' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative ' >
            <SocialsIcons />
            <div>
                <form className='flex flex-col ' >
                    <q className='mb-4 text-gray-500 font-extralight'>/At the moment, please connect directly via email to <b>connectwith.manu05@gmail.com</b></q>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                        <input type="email"
                            placeholder='example@xyz.com'
                            id="email"
                            name='email'
                            required
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2C9]
                         text-gray-200 text-sm rounded-lg block w-full p-2.5' />

                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input type="text"
                            placeholder='Just Wanna Say Hi !'
                            id="subject"
                            name='subject'
                            required
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2C9]
                         text-gray-200 text-sm rounded-lg block w-full p-2.5' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Got Any Message !</label>
                        <textarea name="message" id="message" type="text"
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2C9]
                        text-gray-200 text-sm rounded-lg block w-full p-2.5' placeholder="Let's Chat About.....!"></textarea>
                    </div>
                    <button type='submit'
                        className='bg-teal-500 hover:bg-teal-600 font-medium text-white py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    {/* {emailSubmitted && <p>Email Sent Successfully!</p>} */}
                </form>
            </div>
        </div>
    )
}

export default EmailSection;