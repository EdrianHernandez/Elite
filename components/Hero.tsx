
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 rounded-bl-[200px]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with subtle animation effect */}
          <div className="relative mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <img 
              src="https://picsum.photos/seed/alex/400/400" 
              alt="Profile" 
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl object-cover"
            />
            <div className="absolute bottom-1 right-1 md:bottom-3 md:right-3 w-6 h-6 md:w-8 md:h-8 bg-green-400 border-4 border-white rounded-full animate-pulse" />
          </div>

          <div className="max-w-3xl">
            <h2 className="text-indigo-600 font-extrabold text-lg uppercase tracking-widest mb-4">Senior Software Architect</h2>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              Engineering Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Experiences.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              I specialize in building scalable, human-centric web applications using modern technology stacks. From concept to deployment, I bridge the gap between complex logic and elegant design.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 text-center"
              >
                View Portfolio
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 border-2 border-indigo-100 font-bold rounded-2xl hover:bg-indigo-50 transition-all text-center"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
