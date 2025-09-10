'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import img01 from './01.png';

export default function SMSVotingAppProjectPage() {
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-fira mb-2">SMS Voting App</h1>
                    <p className="text-gray-500 mb-8 text-lg font-fira">&gt; Bulk SMS voting app for television competitions using Flutter.</p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Image src={img01} className="w-full h-auto rounded-lg glowing-border" width={800} height={600}/>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
                        <p className="text-lg text-gray-400">
                            Flutter mobile app to send automated bulk SMS. Users can enter numbers, message content, and repetition counts for seamless multiple SMS dispatches. Inspired by real-world TV voting competitions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">Flutter</span>
                                <span className="skill-tag px-4 py-2 rounded-md font-fira">easy_send_sms</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
                            <ul className="text-lg text-gray-400 space-y-2 list-inside">
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Automated bulk SMS dispatch</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> User-friendly UI for number entry and message</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Supports multiple SMS deliveries in one session</li>
                                <li><i className="fas fa-check-circle text-green-400 mr-2"></i> Practical real-world solution for competitions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-12">
                        <a href="https://github.com/tharushaudana/multi_sms_sender_flutter" className="btn-secondary font-bold rounded-md py-3 px-8 inline-block font-fira" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github mr-2"></i> GitHub Repo
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
