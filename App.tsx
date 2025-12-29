
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section - Brief Intro */}
        <section id="about" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">The Developer</h3>
                <h2 className="text-4xl font-extrabold mb-8">Crafting experiences with logic and creativity.</h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    With over 10 years of experience in full-stack development, I focus on building products that are not only powerful but also intuitive to use.
                  </p>
                  <p>
                    I've worked with startups and Fortune 500 companies to deliver high-performance applications, from real-time trading dashboards to complex SaaS platforms.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <div className="text-3xl font-black text-white mb-2">120+</div>
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white mb-2">10+</div>
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Years Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
                    <h4 className="text-white font-bold mb-2">Frontend</h4>
                    <p className="text-slate-400 text-sm">React, Next.js, TypeScript, Tailwind, Three.js</p>
                  </div>
                  <div className="bg-indigo-600 p-8 rounded-[2rem] text-white">
                    <h4 className="font-bold mb-2">Backend</h4>
                    <p className="text-indigo-100 text-sm">Node.js, GraphQL, PostgreSQL, Redis</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
                    <h4 className="text-white font-bold mb-2">Tools</h4>
                    <p className="text-slate-400 text-sm">Docker, Kubernetes, AWS, Terraform</p>
                  </div>
                  <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
                    <h4 className="text-white font-bold mb-2">Design</h4>
                    <p className="text-slate-400 text-sm">Figma, Adobe CC, UI/UX Strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <span className="text-2xl font-black tracking-tighter text-indigo-600">ELITE.</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-indigo-600">Dribbble</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-indigo-600">LinkedIn</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-indigo-600">Twitter</a>
            </div>
            <p className="text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Elite Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
