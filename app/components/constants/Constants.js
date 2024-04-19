//! For About Section
export const CARD_CONTENT = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li> BE - <q>Govt. Engg. College, Ramanagara</q></li>
                <li> MERN Stack Professional Course, <q>JSpiders</q></li>

            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li> Frontend Development Libraries - freeCodeCamp </li>
                <li> Responsive Web Design - freeCodeCamp </li>
                <li> Introduction to Software Engineering Job
                    Simulation - CommonWealth Bank </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li><span className="font-bold">Web Developer Intern</span> at CODSOFT from September 10, 2023, to October 10, 2023. </li>
                <li>Utilized HTML, CSS, and JavaScript to complete assigned UI tasks. </li>
                <li>Demonstrated strong communication and collaboration skills within the team environment.</li>
            </ul>
        )
    },
]


//! For Project Section

export const PROJECT_CONTENT = [
    {
        id: "project-1",
        title: "NetFlix - A Movie App",
        description: `Created a Netflix-like platform using React, Redux, Tailwind CSS, and Firebase, focusing on smooth user interaction and adaptability across different devices.`,
        imageLink: "/images/Netflix.png",
        tags: ['All', 'React'],
        gitLink: 'https://github.com/manu-hn/Netflix-Clone',
        previewLink: 'https://manu-net-clone.netlify.app/login'
    },
    {
        id: "project-2",
        title: "Easy Estate - A Real Estate Web App",
        description: `easyEstates is a secure, efficient MERN Stack web app utilizing TypeScript, Firebase, 
        JWT, and Google Auth for streamlined property listing, updating, and deletion, with backend deployed on 
        Render.com and frontend on Netlify.com`,
        imageLink: "/images/easyEstates.png",
        tags: ['All', 'FullStack'],
        gitLink: 'https://github.com/manu-hn/easyEstates',
        previewLink: 'https://github.com/manu-hn/easyEstates'
    },
    {
        id: "project-3",
        title: "FitFlex - A Gym App",
        description: `Designed FitFlex Gym App with React, TypeScript, Framer Motion, and Tailwind CSS, ensuring smooth user experiences on mobile devices for an effortless fitness journey.`,
        imageLink: "/images/FitFlex.png",
        tags: ['All', 'React'],
        gitLink: 'https://github.com/manu-hn/YouTubeClone',
        previewLink: 'https://youtube-manuhn.netlify.app/'
    },
    {
        id: "project-4",
        title: "SnapSnack - A Food App",
        description: `SnapSnack, inspired by Swiggy, offers a familiar ordering experience using React and Tailwind CSS, packaged efficiently with Parcel for seamless delivery.`,
        imageLink: "/images/SnapSnack.png",
        tags: ['All', 'Main'],
        gitLink: 'https://github.com/manu-hn/SnapSnack',
        previewLink: '/'
    },
    {
        id: "project-5",
        title: "YouTube Clone",
        description: `Created a YouTube Clone with React, Tailwind CSS, VITE, and the YouTube API, seamlessly fetching live data for an authentic viewing experience.`,
        imageLink: "/images/YouTube.png",
        tags: ['All', 'React'],
        gitLink: 'https://github.com/manu-hn/YouTubeClone',
        previewLink: 'https://youtube-manuhn.netlify.app/'
    },
    {
        id: "project-6",
        title: "ParkSync - Parking Management System",
        description: `ParkSync revolutionizes parking management systems with MongoDB, Express.js, React, and Node.js, ensuring efficient vehicle tracking and user-friendly interactions.`,
        imageLink: "/images/ParkSync.png",
        tags: ['All', 'FullStack'],
        gitLink: 'https://github.com/manu-hn/ParkingLot',
        previewLink: 'https://github.com/manu-hn/ParkingLot'
    },
    // {
    //     id: "project-7",
    //     title: "Quote Generator",
    //     description: "",
    //     imageLink: "/images/quotes.png",
    //     tags: ['All', 'React'],
    //     gitLink: '/',
    //     previewLink: '/'
    // }

    {
        id: "project-8",
        title: "Image Gallery",
        description: `Built a picture gallery using React, Tailwind CSS, and the Pixabay API, allowing users to search for images based on their input for a tailored browsing session.`,
        imageLink: "/images/gallery.png",
        tags: ['All', 'React'],
        gitLink: 'https://github.com/manu-hn/image-gallery',
        previewLink: 'https://github.com/manu-hn/image-gallery'
    }
    ,

]