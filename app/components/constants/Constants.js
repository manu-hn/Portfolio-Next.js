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
            <ul  className='list-disc pl-2'>
                <li> BE - <q>Govt. Engg. College, Ramanagara</q></li>
                <li> MERN Stack Professional Course, <q>JSpiders</q></li>

            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul  className='list-disc pl-2'>
                <li> Frontend Development Libraries - freeCodeCamp </li>
                <li> Responsive Web Design - freeCodeCamp </li>
                <li> Introduction to Software Engineering Job
                    Simulation - CommonWealth Bank </li>
            </ul>
        )
    },
]


//! For Project Section

export const PROJECT_CONTENT=[
    {
        id : 1,
        title : "SnapSnack - A Food App",
        description : "",
        imageLink : "/images/SnapSnack.png",
        tags : ['All', 'Main'],
        gitLink : 'https://github.com/manu-hn/SnapSnack',
        previewLink : '/'
    },
    {
        id : 2,
        title : "Easy Estate - A Real Estate Web App",
        description : "",
        imageLink : "/images/easyEstates.png",
        tags : ['All','FullStack'],
        gitLink : 'https://github.com/manu-hn/easyEstates',
        previewLink : 'https://github.com/manu-hn/easyEstates'
    },
    {
        id : 3,
        title : "NetFlix - A Movie App",
        description : "",
        imageLink : "/images/construction.jpg",
        tags : ['All', 'React'],
        gitLink : '/',
        previewLink : '/'
    },
    {
        id :4 ,
        title : "ParkSync - Parking Management System",
        description : "",
        imageLink : "/images/ParkSync.png",
        tags : ['All', 'FullStack'],
        gitLink : 'https://github.com/manu-hn/ParkingLot',
        previewLink : 'https://github.com/manu-hn/ParkingLot'
    },
    {
        id : 5,
        title : "Quote Generator",
        description : "",
        imageLink : "/images/quotes.png",
        tags : ['All', 'React'],
        gitLink : '/',
        previewLink : '/'
    }
,
    {
        id : 6,
        title : "Image Gallery",
        description : "",
        imageLink : "/images/gallery.png",
        tags : ['All', 'React'],
        gitLink : '/',
        previewLink : '/'
    }
    ,
   
]