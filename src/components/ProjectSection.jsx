import { Github, ExternalLink, Star, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Bhoomi Mitra',
      description: 'An AI-powered agricultural platform that empowers farmers through data-driven decisions. Features include real-time disease detection, market analytics, weather insights, and subsidy assistance using cutting-edge machine learning and NLP technologies.',
      image: 'bg-gradient-to-br from-green-400 to-emerald-600',
      technologies: ['AI/ML', 'NLP', 'React', 'Python', 'MongoDB', 'Node.js', 'Express.js'],
      liveLink: 'https://bhoomi-mitra.onrender.com',
      githubLink: 'https://github.com/vaishnal16/bhoomi-mitra',
      featured: true
    },
    {
      title: 'Prep-Wise',
      description: 'An AI-driven platform for exam preparation, resume building, and interview practice. Offers personalized solutions for competitive exams, MCQs, and professional growth with intelligent recommendations.',
      image: 'bg-gradient-to-br from-blue-400 to-indigo-600',
      technologies: ['AI', 'React', 'Typescript', 'Node.js', 'Express.js', 'MongoDB', 'NLP'],
      liveLink: null, // Changed from '#' to null for better handling
      githubLink: 'https://github.com/vaishnal16/prep-wise',
      featured: true
    }
  ];

  const handleLiveDemoClick = (e, liveLink) => {
    if (!liveLink || liveLink === '#') {
      e.preventDefault();
      alert('Live demo is not available yet.');
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div> 
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-[1.02] relative ${
                project.featured ? 'ring-2 ring-blue-200 hover:ring-blue-300' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1">
                  <Star size={12} className="sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Featured</span>
                  <span className="xs:hidden">★</span>
                </div>
              )}
              
              <div className={`h-40 sm:h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm opacity-90">
                    <Zap size={14} className="sm:w-4 sm:h-4" />
                    <span>AI Powered</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-4">
                  <button
                    onClick={(e) => handleLiveDemoClick(e, project.liveLink)}
                    className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 ${
                      project.liveLink && project.liveLink !== '#'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-400 text-white cursor-not-allowed hover:scale-100'
                    }`}
                    disabled={!project.liveLink || project.liveLink === '#'}
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                    Live Demo
                  </button>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 text-sm sm:text-base font-medium"
                  >
                    <Github size={14} className="sm:w-4 sm:h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;