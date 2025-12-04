import weddingGif from './assets/weddinggif.gif';
import skg from './assets/website.gif';
import cvsite from './assets/cvsite.gif';

export const PROJECTS = {
    wedding: {
        title:'Wedding Invitation',
        image: weddingGif,
        description: 'This project is a digital single-page wedding invitation designed to share key details such as the ceremony time, church location, venue information, photos, and maps. It is optimized primarily for mobile devices but remains fully responsive across larger screens as well.',
        techt: 'Tech stack',
        tech: 'HTML , CSS, JavaScript, Bootstrap.'
    },
    OurGymSKG: {
        title:'OurGymSKG',
        image: skg,
        description: 'OurGymSKG is a simple, responsive website for a local gym, featuring a Home and Register page. The project was developed as part of a Masters level course exercise.',
        techt: 'Tech stack',
        tech: 'HTML , CSS, JavaScript, Bootstrap.'
    },
        CV: {
        title:'Anastasios Giannoulidis CV',
        image: cvsite,
        description: 'This is my personal portfolio site, built with React and CSS, showcasing who I am, what I’m learning, and the projects I’ve built so far. The site is fully component-based, clean, and simple — designed to highlight my journey as a developer.',
        techt: 'Tech stack',
        tech: 'React , CSS, JavaScript, Vite.'
    }
}
    