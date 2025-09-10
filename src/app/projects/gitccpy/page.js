'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GitCCPyProjectPage() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">GitCCPy</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">&gt; Python CLI utility to deploy only files changed between Git commits.</p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            Command-line Python tool for deploying only changed files between commits. Reads Git diff, supports remote path deployment, optimizes CI/CD pipelines by reducing unnecessary transfers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Python</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Git</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">CLI</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Deploy only changed files between commits</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Optimizes CI/CD pipeline</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Supports remote paths and FTP/SFTP deployment</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Simple CLI usage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-12">
                        <a href="https://github.com/tharushaudana/GitCCPy" className="btn-secondary font-bold rounded-md py-3 px-8 inline-block font-fira" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github mr-2"></i> GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
