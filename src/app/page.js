'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

    const projectsData = [
        {
            detailsUrl: '/projects/face-attendance',
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=Face+Attendance',
            title: 'Live Student Attendance',
            description: 'Real-time attendance system with face recognition and automated Excel report generation.',
            tags: 'Python, Pandas, Face Recognition',
            githubUrl: 'https://github.com/tharushaudana/python-student-attendance-by-face-recognition',
        },
        {
            detailsUrl: null, // Add a URL when the page is created
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=Flutter+Face+Auth',
            title: 'Flutter Face Auth',
            description: 'Mobile face authentication app with FaceNet512 encoding, cosine similarity, and Firebase integration.',
            tags: 'Flutter, TFLite, Firebase',
            githubUrl: 'https://github.com/tharushaudana/flutter_face_auth_2',
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=Gemly',
            title: 'Gemly',
            description: 'Jewellery e-commerce platform with payment gateway, product recommendations, and admin dashboard.',
            tags: 'React, Node.js, MySQL',
            githubUrl: 'https://github.com/tharushaudana/Gemly',
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=GeoLand+Drive',
            title: 'GeoLand Drive',
            description: 'Web tool for land measurement using KML files with offline access, interactive maps, and area calculations.',
            tags: 'Vue.js, Leaflet.js',
            githubUrl: 'https://github.com/tharushaudana/geolanddrive',
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=Wuusu+Shop',
            title: 'Wuusu Shop',
            description: 'Shop management system with Flutter desktop client and Laravel + React web admin panel.',
            tags: 'Flutter, Laravel, React, MySQL',
            githubUrl: null,
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=IoT+Net',
            title: 'IoT Net',
            description: 'Real-time IoT platform for ESP8266/ESP32 with device monitoring, automation, and secure backend API.',
            tags: 'Laravel, Vue.js, Firebase, ESP32',
            githubUrl: null,
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=SMS+Voting+App',
            title: 'SMS Voting App',
            description: 'Cross-platform Flutter app for automated bulk SMS voting in TV competitions.',
            tags: 'Flutter',
            githubUrl: 'https://github.com/tharushaudana/multi_sms_sender_flutter',
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=Firebase+ESP-IDF',
            title: 'Firebase ESP-IDF Library',
            description: 'Non-blocking Firebase client for ESP32 with real-time streaming and JSON CRUD support.',
            tags: 'C, ESP32, ESP-IDF, Firebase',
            githubUrl: 'https://github.com/tharushaudana/esp-idf-firebase-with-stream',
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=ESP+Security',
            title: 'ESP Program Security Guard',
            description: 'Firmware protection system for ESP devices preventing unauthorized copying and reflashing.',
            tags: 'Arduino, ESP32, Firmware Security',
            githubUrl: 'https://github.com/tharushaudana/esp-program-protector',
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=GitCCPy',
            title: 'GitCCPy',
            description: 'Python CLI utility to deploy via FTP by copying only files changed between Git commits.',
            tags: 'Python, Git',
            githubUrl: 'https://github.com/tharushaudana/git-change-copy-python',
        },
        {
            detailsUrl: null,
            imageSrc: 'https://placehold.co/600x400/0d1117/29c53d?text=InfinityFree+Bypasser',
            title: 'InfinityFree Bypasser',
            description: 'Flutter app that bypasses InfinityFree.com free-plan HTTP restrictions using dynamic cookies.',
            tags: 'Flutter, Dio, AES',
            githubUrl: 'https://github.com/tharushaudana/infinityfree-dio-bypass-flutter',
        },
    ];

export default function PortfolioPage() {
    // All your animation JavaScript goes inside this useEffect hook
    useEffect(() => {
        const typeWriter = (element, text, i = 0, callback = () => {}) => {
            if (!element) return;
            if (i === 0) {
                element.innerHTML = '';
                const textNode = document.createTextNode('');
                const cursorSpan = document.createElement('span');
                cursorSpan.className = 'cursor';
                element.appendChild(textNode);
                element.appendChild(cursorSpan);
            }
            const textNode = element.firstChild;
            if (i < text.length) {
                textNode.nodeValue += text[i];
                setTimeout(() => typeWriter(element, text, i + 1, callback), 60);
            } else {
                if(callback) callback();
            }
        };

        const observerOptions = { threshold: 0.1 };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'hero') {
                        document.querySelectorAll('#hero .animated-element').forEach(el => el.classList.add('visible'));
                        const heroNameEl = document.getElementById('hero-name-glitch');
                        setTimeout(() => {
                            heroNameEl.classList.add('glitch-active');
                            setTimeout(() => heroNameEl.classList.remove('glitch-active'), 1000);
                        }, 500);
                        const textToType = "A passionate Developer building AI systems, backend solutions, and embedded projects.";
                        const typewriterElement = document.getElementById('typewriter-container');
                        if (typewriterElement) {
                            setTimeout(() => typeWriter(typewriterElement, textToType), 1200);
                        }
                    } else {
                        entry.target.classList.add('visible');
                    }
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const animationObserver = new IntersectionObserver(observerCallback, observerOptions);
        
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            animationObserver.observe(heroSection);
        }

        document.querySelectorAll('.animated-element:not(#hero .animated-element)').forEach(el => {
            animationObserver.observe(el);
        });

        const titleObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const titleWrapper = entry.target;
                    const titleEl = titleWrapper.querySelector('.section-title');
                    const text = titleEl.getAttribute('data-text');
                    titleWrapper.classList.add('visible');
                    typeWriter(titleEl, text, 0, () => {
                        setTimeout(() => {
                            const cursor = titleEl.querySelector('.cursor');
                            if (cursor) cursor.style.display = 'none';
                            titleEl.classList.add('animated');
                        }, 500);
                    });
                    observer.unobserve(titleWrapper);
                }
            });
        }, { threshold: 0.6 });

        document.querySelectorAll('.section-title-wrapper').forEach(el => {
            titleObserver.observe(el);
        });

        return () => {
            animationObserver.disconnect();
            titleObserver.disconnect();
        };

    }, []);

    // Your entire page JSX (HTML) goes here
    return (
        <>
            <div className="scanlines"></div>

            <header className="fixed w-full z-30 top-0 glass-card">
                <div className="max-w-7xl mx-auto px-5 sm:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div className="flex-shrink-0 mr-4">
                            <a className="text-2xl font-bold tracking-wider text-white font-fira" href="#hero">TU.</a>
                        </div>
                        <nav className="hidden md:flex md:grow font-fira">
                            <ul className="flex grow justify-end flex-wrap items-center">
                                <li><a href="#about" className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out">./about</a></li>
                                <li><a href="#skills" className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out">./skills</a></li>
                                <li><a href="#experience" className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out">./experience</a></li>
                                <li><a href="#projects" className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out">./projects</a></li>
                                <li><a href="#contact" className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out">./contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent z-0"></div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
                        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
                            <div className="md:w-2/3 text-center md:text-left md:pr-10 -mt-4 md:mt-0">
                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-white animated-element font-fira">
                                    Hi, I&apos;m <span id="hero-name-glitch" className="glitch-text" data-text="Tharusha Udana">Tharusha Udana</span>
                                </h1>
                                <div className="text-xl text-gray-400 mb-8 animated-element font-fira" style={{ transitionDelay: '200ms' }}>
                                    <p className="prompt mb-2">&gt; <span>user@portfolio</span>:~$ </p>
                                    <p id="typewriter-container" className="typewriter-text min-h-[3rem]"></p>
                                </div>
                                <div className="animated-element" style={{ transitionDelay: '400ms' }}>
                                    <a className="btn-primary font-bold rounded-md py-3 px-6 inline-block font-fira" href="#contact">contact_me</a>
                                </div>
                            </div>
                            <div className="md:w-1/3 flex justify-center mb-12 md:mb-0">
                                <div className="relative">
                                    <Image
                                        id="hero-img"
                                        className="mx-auto rounded-full border-4 border-[--matrix-green] shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover"
                                        src="/assets/me.jpg"
                                        alt="Profile Picture of Tharusha Udana"
                                        width={320}
                                        height={320}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="section-title-wrapper"><h2 className="section-title" data-text="About Me"></h2></div>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="animated-element">
                                <p className="text-lg mb-4">
                                    Hello! I&apos;m Tharusha, an undergraduate at the University of Moratuwa pursuing a BSc Hons in Artificial Intelligence. My journey into tech started with exploring programming and embedded systems, which sparked a passion for AI, machine learning, intelligent automation, and backend development.
                                </p>
                                <p className="text-lg mb-4">
                                    I enjoy building AI models, working on backend systems, and developing microcontroller projects with STM boards, ESP32, and Raspberry Pi. I focus on creating efficient, scalable, and intelligent solutions that integrate software and hardware seamlessly.
                                </p>
                                <p className="text-lg">
                                    Outside of coding, I love experimenting with new technologies, contributing to open-source projects, and exploring creative AI applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="py-20 bg-[#161b22]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="section-title-wrapper"><h2 className="section-title" data-text="My Skills"></h2></div>
                        <div className="text-center">
                            <div className="flex flex-wrap justify-center gap-4 animated-element font-fira">
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">Python</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">C / C++</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">Node.js</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">Express</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">Laravel</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">AI / ML</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">STM</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">ESP32</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">Raspberry Pi</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">SQL</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">PostgreSQL</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">MongoDB</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">REST APIs</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">Docker</span>
                                <span className="skill-tag text-lg px-6 py-3 rounded-md">Git</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" className="py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="section-title-wrapper mb-12"><h2 className="section-title" data-text="Career & Education"></h2></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="animated-element">
                                <h3 className="text-2xl font-bold mb-6 text-white"><i className="fas fa-briefcase mr-3 text-green-400"></i>Experience</h3>
                                <div className="relative timeline">
                                    <div className="timeline-item ml-8 pb-8">
                                        <h4 className="font-bold text-lg text-white">Backend Developer</h4>
                                        <p className="text-sm text-green-400 mb-2">Moraspirit | 2024 - 2025</p>
                                        <p className="text-gray-400">Maintained and optimized the Moraspirit official website and sports.moraspirit.com, managing APIs and server-side enhancements to improve performance, security, and scalability while supporting IT operations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="animated-element" style={{ transitionDelay: '200ms' }}>
                                <h3 className="text-2xl font-bold mb-6 text-white"><i className="fas fa-graduation-cap mr-3 text-green-400"></i>Education</h3>
                                <div className="relative timeline">
                                    <div className="timeline-item ml-8 pb-8">
                                        <h4 className="font-bold text-lg text-white">B.Sc. (Hons) in Artificial Intelligence</h4>
                                        <p className="text-sm text-green-400 mb-2">University of Moratuwa | 2023 - Present</p>
                                        <p className="text-gray-400">Undergraduate studies with a focus on Artificial Intelligence, backend development, and embedded systems (STM, ESP32, Raspberry Pi).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="animated-element" style={{ transitionDelay: '400ms' }}>
                                <h3 className="text-2xl font-bold mb-6 text-white"><i className="fas fa-award mr-3 text-green-400"></i>Awards & Recognition</h3>
                                <div className="relative timeline">
                                    <div className="timeline-item ml-8 pb-8">
                                        <h4 className="font-bold text-lg text-white">Finalist – IESL RoboGames 2024 (University Category)</h4>
                                        <p className="text-sm text-green-400 mb-2">University of Moratuwa | 2024</p>
                                        <p className="text-gray-400">
                                            Awarded the title of Finalist in the University Category of IESL RoboGames 2024, organized by the Department of Computer Science and Engineering of the University of Moratuwa, in collaboration with SLT-Mobitel and the Institution of Engineers, Sri Lanka (IESL).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="py-20 bg-[#161b22]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="section-title-wrapper"><h2 className="section-title" data-text="My Projects"></h2></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <div 
                                key={project.title} 
                                className="project-card project-card-bg rounded-lg overflow-hidden animated-element" 
                                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                            >
                                <img className="w-full h-48 object-cover" src={project.imageSrc} alt={project.title}/>
                                <div className="p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                        <p className="text-gray-400 mb-4">{project.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-auto pt-4">
                                        <span className="text-sm font-semibold text-green-400">{project.tags}</span>
                                        <div className="flex items-center gap-4">
                                            {/* Conditionally render "View Details" link */}
                                            {project.detailsUrl && (
                                                <Link href={project.detailsUrl} className="text-sm text-gray-400 hover:text-white font-fira transition-colors">
                                                    Details
                                                </Link>
                                            )}
                                            {/* Conditionally render GitHub link */}
                                            {project.githubUrl && (
                                                <a 
                                                    href={project.githubUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-gray-400 hover:text-white" 
                                                    aria-label="GitHub"
                                                >
                                                    <i className="fab fa-github fa-lg"></i>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                <section id="visuals" className="py-20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="section-title-wrapper"><h2 className="section-title" data-text="Visual Showcase"></h2></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animated-element">
                             {/* Remember to replace width/height with your actual image dimensions for best performance */}
                            <div className="grid gap-4">
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/14.png" alt="UI Screenshot 14" width={800} height={600}/></div>
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/13.png" alt="UI Screenshot 13" width={800} height={600}/></div>
                            </div>
                            <div className="grid gap-4">
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/12.png" alt="UI Screenshot 12" width={800} height={600}/></div>
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/11.png" alt="UI Screenshot 11" width={800} height={600}/></div>
                            </div>
                            <div className="grid gap-4">
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/10.png" alt="UI Screenshot 10" width={800} height={600}/></div>
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/09.png" alt="UI Screenshot 9" width={800} height={600}/></div>
                            </div>
                            <div className="grid gap-4">
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/08.png" alt="UI Screenshot 8" width={800} height={600}/></div>
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/07.png" alt="UI Screenshot 7" width={800} height={600}/></div>
                            </div>
                            <div className="grid gap-4">
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/06.png" alt="UI Screenshot 6" width={800} height={600}/></div>
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/05.png" alt="UI Screenshot 5" width={800} height={600}/></div>
                            </div>
                            <div className="grid gap-4">
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/03.png" alt="UI Screenshot 3" width={800} height={600}/></div>
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/04.png" alt="UI Screenshot 4" width={800} height={600}/></div>
                            </div>
                            <div className="grid gap-4">
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/01.png" alt="UI Screenshot 1" width={800} height={600}/></div>
                                <div><Image className="h-auto max-w-full rounded-lg glowing-border" src="/assets/visuals/02.png" alt="UI Screenshot 2" width={800} height={600}/></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 bg-[#161b22]">
                    <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
                        <div className="section-title-wrapper"><h2 className="section-title" data-text="Get In Touch"></h2></div>
                        <p className="text-lg text-gray-400 mb-8 animated-element">
                            I&apos;m currently open to new opportunities and collaborations. Feel free to reach out via any of the platforms below.
                        </p>
                        <div className="flex justify-center gap-10 animated-element" style={{ transitionDelay: '200ms' }}>
                            <a href="https://www.github.com/tharushaudana" className="text-gray-400 hover:text-white text-4xl" aria-label="GitHub Profile"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/tharushaudana" className="text-gray-400 hover:text-white text-4xl" aria-label="LinkedIn Profile"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:tharushaudana@gmail.com" className="text-gray-400 hover:text-white text-4xl" aria-label="Email"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-500">
                    <p className="font-fira">&copy; 2025 Tharusha Udana. All rights reserved. Designed with passion.</p>
                </div>
            </footer>
        </>
    );
}