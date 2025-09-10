'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import img01 from './01.jpg';
import img02 from './02.jpg';
import img03 from './03.jpg';
import img04 from './04.jpg';

export default function FlutterFaceAuthProjectPage() {
    const router = useRouter();

    return (
        <main className="flex-grow py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto mb-10">
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center text-gray-400 hover:text-white transition duration-150 ease-in-out font-fira"
                >
                    <i className="fas fa-arrow-left mr-2"></i> go back
                </button>
            </div>

            <section id="project-details">
                <div className="glass-section max-w-7xl mx-auto py-12 px-8 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">Flutter Face Auth</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">
                        &gt; Mobile face authentication using on-device deep learning and cloud integration.
                    </p>

                    {/* Project Images */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Image className="w-full h-auto rounded-lg glowing-border" src={img01} width={800} height={600} />
                            <Image className="w-full h-auto rounded-lg glowing-border" src={img02} width={800} height={600} />
                            <Image className="w-full h-auto rounded-lg glowing-border" src={img03} width={800} height={600} />
                            <Image className="w-full h-auto rounded-lg glowing-border" src={img04} width={800} height={600} />
                        </div>
                    </div>

                    {/* Project Overview */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            Flutter Face Auth is a mobile application for secure face authentication. It uses Google ML Kit for face detection, FaceNet512 for on-device face encoding, and cosine similarity for matching live faces with stored encodings. User data is securely stored in Firebase Firestore, delivering a scalable solution for identity verification on mobile devices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        {/* Technologies */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Flutter</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">TFLite</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">FaceNet512</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Firebase Firestore</span>
                            </div>
                        </div>
                        {/* Key Features */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> On-device face detection and encoding</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Secure face matching with cosine similarity</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Firebase Firestore integration for storing face data</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Scalable and mobile-friendly authentication</li>
                            </ul>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-6 mt-12">
                        <a href="https://github.com/tharushaudana/flutter_face_auth_2" className="btn-secondary font-bold rounded-md py-3 px-8 inline-block font-fira" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github mr-2"></i> GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
