import { Phone, MapPin, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* About Me Content Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="text-white text-lg font-bold">👨‍💻</div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Computer Engineering Student & Developer
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative pl-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-r-lg border-l-4 border-blue-500">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                        Currently pursuing Bachelor's in Engineering from Vivekanand Education Society Institute Of Technology with a CGPA of 9.20. I specialize in full-stack development with expertise in modern web technologies and AI-powered solutions.
                      </p>
                    </div>
                    
                    <div className="relative pl-6 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-r-lg border-l-4 border-purple-500">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-medium">
                        My journey includes hands-on experience as a Web Developer Intern at SaleProSys, where I worked on improving UI/UX, optimizing databases, and developing scalable applications. I'm passionate about competitive programming and have solved 350+ problems across various platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">8097716714</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm sm:text-base font-medium">Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Education & Experience */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Educational Background */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Educational Journey</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Bachelor of Engineering</h4>
                      <p className="text-gray-600">Computer Engineering</p>
                    </div>
                  </div>
                  <div className="text-gray-600 space-y-2 text-sm sm:text-base">
                    <p><strong>Institution:</strong> Vivekanand Education Society Institute Of Technology</p>
                    <p><strong>CGPA:</strong> 9.20</p>
                    <p><strong>Status:</strong> Currently Pursuing</p>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Professional Experience</h3>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">WD</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Web Developer Intern</h4>
                      <p className="text-gray-600">SaleProSys</p>
                    </div>
                  </div>
                  <div className="text-gray-600 space-y-2 text-sm sm:text-base">
                    <p><strong>Role:</strong> Web Developer Intern</p>
                    <p><strong>Responsibilities:</strong> Improved UI/UX, optimized databases, and developed scalable applications</p>
                    <p><strong>Technologies:</strong> Modern web technologies, database optimization, scalable application development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;