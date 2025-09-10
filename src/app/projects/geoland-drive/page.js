'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import img01 from './01.jpg';
import img03 from './03.jpg';
import img04 from './04.jpg';
import img05 from './05.jpg';
import img06 from './06.jpg';

export default function GeoLandDriveProjectPage() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">GeoLand Drive</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">&gt; Web app for land measurement and project management using KML files.</p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Image src={img01} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img03} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img04} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img05} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img06} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            Client-side tool for measuring land areas (Acres, Roods, Perches) with interactive mapping. Offline-first, privacy-focused, multi-project and multi-land management with Leaflet.js and Vue.js.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Vue.js</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Leaflet.js</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">LocalStorage</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Real-time area calculations (Acres, Roods, Perches)</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Multi-project and multi-land support</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Offline access with privacy-focused storage</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Interactive maps using Leaflet.js</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-12">
                        <a href="https://github.com/tharushaudana/geolanddrive" className="btn-secondary font-bold rounded-md py-3 px-8 inline-block font-fira" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github mr-2"></i> GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}