// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vaishnal Mali
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Computer Engineering student passionate about creating innovative solutions 
              and contributing to the tech community through code and creativity.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#achievements" className="block text-gray-400 hover:text-white transition-colors">Achievements</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Platforms</h4>
            <div className="space-y-2">
              <a href="https://leetcode.com/u/vaishnal16305/" className="block text-gray-400 hover:text-white transition-colors">LeetCode</a>
              <a href="https://github.com/vaishnal16/prep-wise" className="block text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/vaishnal-mali-46028425a/" className="block text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            © 2025 Vaishnal Mali. Built with React & Tailwind CSS. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;