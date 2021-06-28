import projSrc1 from '../assets/rick-morty-search.png'
import projSrc2 from '../assets/pumbigram.png'
import projSrc3 from '../assets/djkloos.png'
import projSrc4 from '../assets/restaurant.png'
import projSrc5 from '../assets/inmovalls.png'
import projSrc6 from '../assets/lolboard.png'
import { technologies } from './technologies'

const { bootstrap, javascript, sass, svelte, react, redux, } = technologies


export const projectsEng = [
    {
        src: projSrc1,
        alt: 'rick and morty project',
        title: 'Ricks and Morty Searcher',
        body: 'App to search anything about a Rick and Mortys characters and done as a practice tool for fetching data, filter data and improve skills in React and Bootstrap',
        technologies: [react, bootstrap],
        link: 'https://rick-morty-search.netlify.app/',
        githubLink: 'https://github.com/eddyvy/rick-morty-search'
    },
    {
        src: projSrc2,
        alt: 'pumbigram project',
        title: 'Pumbigram',
        body: 'A copied instagram app to load and see pictures of my pet. It needs authorization to access. It was made to practice and to enjoy the pictures everywhere',
        technologies: [react, redux, bootstrap],
        link: 'https://pumbigram.netlify.app/',
        githubLink: 'https://github.com/eddyvy/pumbigram'
    },
    {
        src: projSrc3,
        alt: 'dj kloos project',
        title: 'DJ Kloos',
        body: 'Static web done with React for a friend. His hobby is being DJ and the thematic wants to fit with it.',
        technologies: [react, sass],
        link: 'https://dj-kloos.netlify.app/',
        githubLink: 'https://github.com/eddyvy/dj-kloos-web'
    },
    {
        src: projSrc4,
        alt: 'restaurant project',
        title: 'Risto Restaurant',
        body: 'Is a project to practice React with a restaurant as example',
        technologies: [react, sass],
        link: 'https://eddyvy-restaurant.netlify.app/',
        githubLink: 'https://github.com/eddyvy/restaurant-web'
    },
    {
        src: projSrc5,
        alt: 'inmovalls project',
        title: 'Inmo Valls',
        body: 'Web done with vanilla javascript for my families componany, it is a web to show information about what this real state offers. The backend is managed by strapi and mongoDB',
        technologies: [javascript, sass],
        link: 'https://inmovalls.github.io/inmobiliariavalls/dist/',
        githubLink: 'https://github.com/inmovalls/inmobiliariavalls'
    },
    {
        src: projSrc6,
        alt: 'lol board project',
        title: 'LoL Board',
        body: 'A little app done with Svelte to move different characters in a board. The characters and map come from League of Legends, a game I love.',
        technologies: [svelte],
        link: 'https://eddyvy.github.io/lolCompsBoard/',
        githubLink: 'https://github.com/eddyvy/lolCompsBoard'
    },
]

export const projectsSpa = [
    {
        src: projSrc1,
        alt: 'proyecto rick and morty',
        title: 'Buscador Ricks and Morty',
        body: 'App para buscar cualquier cosa sobre los personajes de Rick y Morty. Hecho para practicar las peticiones de APIs, filtrar datos y mejorar en React y Bootstrap.',
        technologies: [react, bootstrap],
        link: 'https://rick-morty-search.netlify.app/',
        githubLink: 'https://github.com/eddyvy/rick-morty-search'
    },
    {
        src: projSrc2,
        alt: 'Proyecto pumbigram',
        title: 'Pumbigram',
        body: 'Copia de instagram para cargar, subir imágenes y videos de mi mascota. Requiere autenticación para entrar. Fue realizado para practicar y disfrutar de las imágenes allá donde vaya.',
        technologies: [react, redux, bootstrap],
        link: 'https://pumbigram.netlify.app/',
        githubLink: 'https://github.com/eddyvy/pumbigram'
    },
    {
        src: projSrc3,
        alt: 'Proyecto dj kloos',
        title: 'DJ Kloos',
        body: 'Web estática hecho con React para un amigo. Su hobby es ser DJ y la temática quiere encajar con ello.',
        technologies: [react, sass],
        link: 'https://dj-kloos.netlify.app/',
        githubLink: 'https://github.com/eddyvy/dj-kloos-web'
    },
    {
        src: projSrc4,
        alt: 'Proyecto restaurant',
        title: 'Restaurante Risto',
        body: 'Proyecto hecho para practicar React de un restaurante como ejemplo.',
        technologies: [react, sass],
        link: 'https://eddyvy-restaurant.netlify.app/',
        githubLink: 'https://github.com/eddyvy/restaurant-web'
    },
    {
        src: projSrc5,
        alt: 'Proyecto inmovalls',
        title: 'Inmo Valls',
        body: 'Web hecha con vanilla javascript para la empresa de mi familia. Esta web muestra información sobre las ofertas de la inmobiliaria. El backend se gestiona a través de Strapi y MongoDB',
        technologies: [javascript, sass],
        link: 'https://inmovalls.github.io/inmobiliariavalls/dist/',
        githubLink: 'https://github.com/inmovalls/inmobiliariavalls'
    },
    {
        src: projSrc6,
        alt: 'Proyecto lol board',
        title: 'LoL Board',
        body: 'Pequeña aplicación realizada con Svelte para mover a personajes por una pizarra. Los personajes y el mapa vienen de League of Legends, un juego que me encanta.',
        technologies: [svelte],
        link: 'https://eddyvy.github.io/lolCompsBoard/',
        githubLink: 'https://github.com/eddyvy/lolCompsBoard'
    },
]