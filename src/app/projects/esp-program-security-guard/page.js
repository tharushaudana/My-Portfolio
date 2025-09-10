'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ESPProgramGuardProjectPage() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">ESP Program Security Guard</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">&gt; Protection system for ESP devices to prevent unauthorized copying and reflashing.</p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            Generates unique keys from chip ID and flash ID, stored in EEPROM. Blocks unauthorized devices and supports custom key generation. Includes example integrations for easy use in Arduino/ESP projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Arduino</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">ESP32/ESP8266</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">MD5</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Firmware Security</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Unique keys from chip & flash IDs</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Blocks execution on unauthorized devices</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Supports custom key generation</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Easy sample integrations for Arduino/ESP</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-12">
                        <a href="https://github.com/tharushaudana/esp-program-protector" className="btn-secondary font-bold rounded-md py-3 px-8 inline-block font-fira" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github mr-2"></i> GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
