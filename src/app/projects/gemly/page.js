'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import img01 from './01.jpg';
import img02 from './02.jpg';
import img03 from './03.jpg';
import img04 from './04.jpg';

export default function GemlyProjectPage() {
    const router = useRouter();
    return (
        <main className="flex-grow py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto mb-10">
                <button onClick={() => router.back()} className="inline-flex items-center text-gray-400 hover:text-white font-fira">
                    <i className="fas fa-arrow-left mr-2"></i> go back
                </button>
            </div>

            <section id="project-details">
                <div className="glass-section max-w-7xl mx-auto py-12 px-8 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">Gemly</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">&gt; Full-featured jewellery e-commerce platform with secure payments.</p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Image src={img01} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img02} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img03} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img04} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            E-commerce web app for jewellery shops with responsive React frontend, Node.js backend, MySQL Prisma ORM, PayHere integration, and a product recommendation engine.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">React</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Node.js</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Express</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">MySQL</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Prisma</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Responsive frontend and RESTful backend</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> PayHere payment gateway integration</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Product recommendation engine with TF-IDF</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Admin panel for inventory and orders</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-12">
                        <a href="https://github.com/tharushaudana/Gemly" className="btn-secondary font-bold rounded-md py-3 px-8 inline-block font-fira" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github mr-2"></i> GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
