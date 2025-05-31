import  { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'Problem Solver', 'AI Enthusiast', 'Tech Innovator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-800">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Vaishnal Mali
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-600 mb-8 h-12">
                <span className="transition-all duration-500">
                  {roles[currentRole]}
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Passionate Computer Engineering student specializing in full-stack development, 
                AI-powered solutions, and creating innovative applications that solve real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
                <a 
                  href="https://drive.google.com/file/d/1Gf-8a75l0XYvesBhyu6Lvonn2m4LrE26/view"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-pulse group-hover:animate-none transition-all duration-300"></div>
              <div className="absolute top-4 left-4 w-72 h-72 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
              <img src="/Profile-Photo.jpg" alt="profile photo" className="w-full h-full object-cover rounded-full"/>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;