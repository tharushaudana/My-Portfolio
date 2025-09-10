'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import img01 from './01.jpg';
import img02 from './02.jpg';
import img03 from './03.jpg';
import img04 from './04.jpg';
import img05 from './05.jpg';
import img06 from './06.jpg';
import img07 from './07.jpg';
import img08 from './08.jpg';
import img09 from './09.jpg';

export default function WuusuShopProjectPage() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">Wuusu Shop</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">&gt; Cross-platform shop management system for small businesses.</p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Image src={img01} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img02} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img03} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img04} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img05} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img06} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img07} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img08} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                            <Image src={img09} className="w-full h-auto rounded-lg glowing-border" width={800} height={600} />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            Desktop app with Flutter for stock, sales tracking, quotations, and PDF generation. Web admin panel with Laravel, React, and MySQL for role-based permissions and monitoring. Focused on cross-platform usability and intuitive design.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Flutter</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Laravel</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">React</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">MySQL</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">REST API</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Stock management and sales tracking</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Quotation and PDF invoice generation</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Web admin panel with role-based access</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Cross-platform and intuitive UI</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
