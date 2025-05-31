import React, { useState, useEffect } from 'react';
import { Code, Layers, Database, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animateSkills, setAnimateSkills] = useState(false);
  
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'Java', level: 82, icon: '☕' },
        { name: 'C++', level: 80, icon: '⚡' },
        { name: 'C', level: 78, icon: '🔧' },
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 92, icon: '⚛️' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Tailwind CSS', level: 90, icon: '💨' },
        { name: 'Bootstrap', level: 85, icon: '🅱️' },
        { name: 'HTML/CSS', level: 95, icon: '🎨' },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Express.js', level: 85, icon: '🚀' },
        { name: 'MongoDB', level: 82, icon: '🍃' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'MySQL', level: 78, icon: '🗄️' },
        { name: 'Firebase', level: 75, icon: '🔥' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 90, icon: '📋' },
        { name: 'GitHub', level: 88, icon: '🐱' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Jenkins', level: 68, icon: '🔧' },
        { name: 'Kubernetes', level: 65, icon: '⚓' },
      ]
    }
  ];

  // Trigger animation when category changes
  useEffect(() => {
    setAnimateSkills(false);
    const timer = setTimeout(() => setAnimateSkills(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Category Tabs - Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:text-gray-800 shadow-md hover:shadow-lg'
                }`}
              >
                <IconComponent size={16} className="sm:w-5 sm:h-5" />
                <span className="font-medium hidden xs:inline">{category.title}</span>
                <span className="font-medium xs:hidden">
                  {category.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Display - Responsive */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center text-gray-800 flex items-center justify-center gap-2 sm:gap-3">
              {React.createElement(skillCategories[activeCategory].icon, { size: 28 })}
              <span className="hidden sm:inline">{skillCategories[activeCategory].title}</span>
              <span className="sm:hidden">{skillCategories[activeCategory].title.split(' ')[0]}</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div 
                  key={`${activeCategory}-${index}`}
                  className="group hover:scale-105 transition-all duration-300 p-2 sm:p-0"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-lg sm:text-2xl group-hover:scale-125 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors text-sm sm:text-base">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-500 font-semibold group-hover:text-gray-700 transition-colors text-sm sm:text-base">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${skillCategories[activeCategory].color} h-2 sm:h-3 rounded-full transition-all duration-1000 group-hover:shadow-lg ${
                        animateSkills ? 'animate-skill-fill' : ''
                      }`}
                      style={{ 
                        width: animateSkills ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Summary - Mobile Friendly */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <h4 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
              Technical Proficiency Overview
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                const avgLevel = Math.round(
                  category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
                );
                return (
                  <div key={index} className="flex flex-col items-center p-2 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-2 sm:mb-3`}>
                      <IconComponent className="text-white w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 mb-1 text-center">
                      {category.title.split(' ')[0]}
                      <span className="hidden sm:inline"> {category.title.split(' ').slice(1).join(' ')}</span>
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-gray-800">{avgLevel}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skill-fill {
          from { width: 0%; }
          to { width: var(--skill-width); }
        }
        
        .animate-skill-fill {
          animation: skill-fill 1s ease-out forwards;
        }
        
        @media (max-width: 475px) {
          .xs\\:hidden { display: none; }
          .xs\\:inline { display: inline; }
        }
        
        @media (min-width: 476px) {
          .xs\\:hidden { display: inline; }
          .xs\\:inline { display: none; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;