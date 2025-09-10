'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import img01 from './01.jpg';
import img02 from './02.jpg';
import img03 from './03.jpg';
import img04 from './04.jpg';
import img05 from './05.jpg';
import img06 from './06.jpg';

export default function IoTNetProjectPage() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">IoT Net</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">&gt; Real-time IoT platform for ESP8266/ESP32 device communication.</p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Image src={img01} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img02} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img03} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img04} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img05} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                            <Image src={img06} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            Real-time web dashboard with Vue.js, backend API with Laravel, Firebase Realtime Database for live updates, and MySQL for static data. Supports inter-device automation (“Output Connections”) and scalable IoT architecture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Laravel</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Vue.js</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Firebase RTDB</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">MySQL</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">ESP8266/ESP32</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">REST API</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Real-time device monitoring and management</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Secure backend API with Laravel</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Firebase RTDB for instant updates</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Inter-device automation and scalable architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
