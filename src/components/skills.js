import React, { useEffect } from 'react';
import skill1 from "../assists/skills-img/c.png";
import skill2 from "../assists/skills-img/cpp.png";
import skill3 from "../assists/skills-img/python.svg";
import skill5 from "../assists/skills-img/html5.svg";
import skill6 from "../assists/skills-img/css.svg";
import skill7 from "../assists/skills-img/js.svg";
import skill8 from "../assists/skills-img/node.svg";
import skill9 from "../assists/skills-img/react.svg";
import skill10 from "../assists/skills-img/git.svg";
import skill11 from "../assists/skills-img/github.svg";
import skill12 from "../assists/skills-img/mysql logo.png";
import skill13 from "../assists/skills-img/mongodb logo.png";

const Skills = () => {
    useEffect(() => {
        const progress = document.querySelectorAll('.skill');
        const skillPercent = document.querySelectorAll('.skill-percent');

        let progressEnd = [
            { C: 90 },
            { Cpp: 85 },
            { Py: 45 },
            { Dsa: 65 },
            { Html: 75 },
            { Css: 75 },
            { Js: 75 },
            { NodeJs: 50 },
            { ReactJs: 50 },
            { Git: 80 },
            { Github: 85 },
            { Mysql: 95 },
            { Mongodb: 90 },
        ];

        function progressBar() {
            progress.forEach((el, i) => {
                let progressValue = 0;
                let progressSpeed = 0.8;
                let progressEndValue = Object.values(progressEnd[i])[0];
                let progressInterval = null;

                function animateProgress() {
                    progressValue += 1;
                    el.style.background = `conic-gradient(#00e600 ${progressValue * 3.6}deg, #cadcff ${progressValue * 3.6}deg)`;
                    skillPercent[i].innerHTML = `${progressValue}%`;

                    if (progressValue >= progressEndValue) {
                        clearInterval(progressInterval);
                    }
                }

                progressInterval = setInterval(animateProgress, progressSpeed);
            });
        }

        progressBar();
    }, []);

    return (
        <section id="skills" className="flex section">
            <header className="section-heading">
                <span>my</span> - coding Skills
            </header>
            <div className="skills-container container flex">
                {/* skill 1 */}
                <div className="skill item flex">
                    <header>C</header>
                    <div className="skill-percent"></div>
                    <img src={skill1} alt="C-Programming-Language-Image" />
                </div>
                {/* skill 2 */}
                <div className="skill item flex">
                    <header>C++</header>
                    <div className="skill-percent"></div>
                    <img src={skill2} alt="C++-Programming-Language-Image" />
                </div>
                {/* skill 3 */}
                <div className="skill item flex">
                    <header>Python</header>
                    <div className="skill-percent"></div>
                    <img src={skill3} alt="Python-Programming-Language-Image" />
                </div>
                {/* skill 4 */}
                <div className="skill item flex DSA">
                    <header>DSA</header>
                    <div className="skill-percent"></div>
                    <h3>(Data Structure And Algorithm)</h3>
                </div>
                {/* skill 5 */}
                <div className="skill item flex">
                    <header>HTML</header>
                    <div className="skill-percent"></div>
                    <img src={skill5} alt="HTML-Image" />
                </div>
                {/* skill 6 */}
                <div className="skill item flex">
                    <header>CSS</header>
                    <div className="skill-percent"></div>
                    <img src={skill6} alt="CSS-Image" />
                </div>
                {/* skill 7 */}
                <div className="skill item flex">
                    <header>Javascript</header>
                    <div className="skill-percent"></div>
                    <img src={skill7} alt="Javascript-Programming-Language-Image" />
                </div>
                {/* skill 8 */}
                <div className="skill item flex">
                    <header>Node js</header>
                    <div className="skill-percent"></div>
                    <img src={skill8} alt="node-js-Image" />
                </div>
                {/* skill 9 - */}
                <div className="skill item flex">
                    <header>React JS</header>
                    <div className="skill-percent"></div>
                    <img src={skill9} alt="react-js-Image" />
                </div>
                {/* skill 10 */}
                <div className="skill item flex">
                    <header>Git</header>
                    <div className="skill-percent"></div>
                    <img src={skill10} alt="git-Image" />
                </div>
                {/* skill 11 */}
                <div className="skill item flex">
                    <header>Github</header>
                    <div className="skill-percent"></div>
                    <img src={skill11} alt="github-Image" />
                </div>
                {/* skill 12 */}
                <div className="skill item flex">
                    <header>Mysql</header>
                    <div className="skill-percent"></div>
                    <img src={skill12} alt="mysql-Image" />
                </div>
                {/* skill 13 */}
                <div className="skill item flex">
                    <header>MongoDB</header>
                    <div className="skill-percent"></div>
                    <img src={skill13} alt="mongodb-Image" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
