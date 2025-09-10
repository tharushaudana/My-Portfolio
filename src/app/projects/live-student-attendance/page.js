"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import img01 from './01.png';
import img02 from './02.png';
import img03 from './03.png';
import img04 from './04.png';

export default function FaceAttendanceProjectPage() {
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

            {/* Project Details Section */}
            <section id="project-details">
                <div className="glass-section max-w-7xl mx-auto py-12 px-8 rounded-lg">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">Live Student Attendance by Face Recognition</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">
                        &gt; Real-time attendance management system powered by face recognition.
                    </p>

                    {/* Project Images */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Assumes 01.png is in public/projects/face-attendance/ */}
                            <Image
                                className="w-full h-auto rounded-lg glowing-border"
                                src={img01}
                                width={800}
                                height={600}
                            />
                            <Image
                                className="w-full h-auto rounded-lg glowing-border"
                                src={img02}
                                width={800}
                                height={600}
                            />
                            <Image
                                className="w-full h-auto rounded-lg glowing-border"
                                src={img03}
                                width={800}
                                height={600}
                            />
                            <Image
                                className="w-full h-auto rounded-lg glowing-border"
                                src={img04}
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>

                    {/* Project Overview */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            This project is a real-time attendance management system for educational institutions. It leverages the <code>face_recognition</code> library with the <code>dlib</code> backend to detect and identify students accurately. A GUI was built for ease of use, allowing administrators to manage attendance records effortlessly. The system automatically generates attendance sheets in Excel using <code>pandas</code>, providing a reliable and low-effort solution for schools and universities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        {/* Technologies */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Python</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Pandas</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Face Recognition (dlib)</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Excel Export</span>
                            </div>
                        </div>
                        {/* Key Features */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Live face recognition for student identification</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Automated attendance record generation in Excel</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> GUI for visualization and user-friendly operation</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Reliable and efficient for educational institutions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-6 mt-12">
                        <a href="https://github.com/tharushaudana/python-student-attendance-by-face-recognition" className="btn-secondary font-bold rounded-md py-3 px-8 inline-block font-fira" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github mr-2"></i> GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}