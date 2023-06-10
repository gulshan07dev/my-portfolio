import React, { useState } from 'react';
import project1Image from '../assists/project-1.png';
import project2Image from '../assists/project-2.jpg';
import project3Image from '../assists/project-3.jpg';
import project4Image from '../assists/project-4.png';
import project5Image from '../assists/project-5.png';
import project6Image from '../assists/project-6.png';
import project7Image from '../assists/project-7.png';
import project8Image from '../assists/project-8.jpg';
import project9Image from '../assists/project-9.jpg';
import project10Image from '../assists/project-10.png';
import project11Image from '../assists/project-11.png';
import project12Image from '../assists/project-12.png';
import project13Image from '../assists/project-13.png';
import project14Image from '../assists/project-14.png';
import project15Image from '../assists/project-15.png';
import project16Image from '../assists/project-16.png';
import project17Image from '../assists/project-17.png';

console.log(project1Image);
const Projects = () => {
    const [category, setCategory] = useState('HTML+CSS');

    const projects = [
        {
            category: "HTML+CSS",
            technology: ["HTML", "CSS"],
            name: 'simple website layout',
            image: project1Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/responsive%20website',
                live: 'https://ichips.gulshan07dev.repl.co/'
            }
        },
        {
            category: "HTML+CSS",
            technology: ["HTML", "CSS"],
            name: 'profile card',
            image: project2Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/Profile%20Card',
                live: 'https://profile-card.gulshan07dev.repl.co'
            }
        },
        {
            category: "HTML+CSS",
            technology: ["HTML", "CSS"],
            name: 'photographer website',
            image: project3Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/photographer',
                live: 'https://photographer.gulshan07dev.repl.co'
            }
        },
        {
            category: "HTML+CSS",
            technology: ["HTML", "CSS"],
            name: 'shopping website',
            image: project4Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/shopkart',
                live: 'https://shopkart.gulshan07dev.repl.co'
            }
        },
        {
            category: "HTML+CSS",
            technology: ["HTML", "CSS"],
            name: 'beats landing page',
            image: project5Image,
            links: {
                source: 'https://github.com/gulshan07dev/Full-Stack-Web-Dev/tree/main/beats',
                live: 'https://beats-landing-page.gulshan07dev.repl.co'
            }
        },
        {
            category: "HTML+CSS",
            technology: ["HTML", "CSS"],
            name: 'real estate',
            image: project6Image,
            links: {
                source: '',
                live: 'https://real-estate.gulshan07dev.repl.co'
            }
        },
        {
            category: "HTML+CSS",
            technology: ["HTML", "CSS"],
            name: 'Youtube clone',
            image: project7Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/youtube%20clone',
                live: 'https://yt-clone.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'simple calculator',
            image: project8Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/calculator',
                live: 'https://calculator-app.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'blog website',
            image: project9Image,
            links: {
                source: '',
                live: 'https://apna-blogs.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'days calculator',
            image: project10Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/days%20calculator',
                live: 'https://days-calculator.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'Game - guess a number',
            image: project11Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/guess%20a%20number%20-%20game',
                live: 'https://guess-number-game.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'Quiz - App',
            image: project12Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/QUIZ%20APP2',
                live: 'https://quiz-app-2.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'Yt - thumbnail downloader',
            image: project13Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/yt%20thumbnail%20downloader',
                live: 'https://yt-thumbnail-downloader.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'Game - tik tak toe',
            image: project14Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/tik%20tak%20toe',
                live: 'https://tik-tak-toe.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'mini photo editor',
            image: project15Image,
            links: {
                source: 'https://github.com/gulshan07dev/My-Project-html-css-and-Javascript-/tree/main/photo%20editor',
                live: 'https://photo-editor.gulshan07dev.repl.co'
            }
        },
        {
            category: "Vanilla Js",
            technology: ["HTML", "CSS", "JS"],
            name: 'github profile sercher',
            image: project16Image,
            links: {
                source: 'https://github.com/gulshan07dev/github-profile-searcher',
                live: 'https://github-profile-search.gulshan07dev.repl.co'
            }
        },
        {
            category: "React Js",
            technology: ["HTML", "CSS", "JS", "ReactJs"],
            name: 'portfolio website',
            image: project17Image,
            links: {
                source: '',
                live: ''
            }
        }
    ];

    const renderProjects = () => {
        const filteredProjects = projects.filter(project => project.category === category);

        if (filteredProjects.length === 0) {
            return <p className="not-present">No projects available!</p>;
        }

        return filteredProjects.map((project, index) => (
            <div className="project item flex slide-left-right" key={index}>
                <header>{project.name}</header>
                <img src={project.image} alt={`project${index+1}Image`} />
                <ul className="flex technology">
                    {project.technology.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                    ))}
                </ul>
                <div className="btn-container flex">
                    <a href={project.links.source} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-beat" />
                    </a>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-eye fa-beat" />
                    </a>
                </div>
            </div>
        ));
    };

    const handleCategoryChange = selectedCategory => {
        setCategory(selectedCategory);
    };

    return (
        <section id="projects" className="flex projects section">
            <header className="section-heading">
                <span>my</span> - Projects
            </header>
            <div className="project-filter flex">
                <button
                    className={category === 'HTML+CSS' ? 'filter-active-btn' : ''}
                    onClick={() => handleCategoryChange('HTML+CSS')}
                >
                    HTML+CSS
                </button>
                <button
                    className={category === 'Vanilla Js' ? 'filter-active-btn' : ''}
                    onClick={() => handleCategoryChange('Vanilla Js')}
                >
                    Vanilla Js
                </button>
                <button
                    className={category === 'React Js' ? 'filter-active-btn' : ''}
                    onClick={() => handleCategoryChange('React Js')}
                >
                    React Js
                </button>
                <button
                    className={category === 'Full Stack' ? 'filter-active-btn' : ''}
                    onClick={() => handleCategoryChange('Full Stack')}
                >
                    Full Stack
                </button>
            </div>
            <div className="project-container container flex">{renderProjects()}</div>
        </section>
    );
};


export default Projects;
