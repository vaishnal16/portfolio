import { Award, Code, Trophy, Star } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: '2nd Runner up - Open Hack\'25',
      organization: 'Indian Institute of Science (IISC), Bangalore',
      year: '2025',
      description: 'Secured 2nd Runner up position in the prestigious hackathon conducted by IISC Bangalore, competing against top talent nationwide.',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: '2nd Runner up - IEEE MEGA PROJECT 7.0',
      organization: 'BIT Mesra, Ranchi',
      year: '2024',
      description: 'Achieved 2nd Runner up position in the IEEE MEGA PROJECT 7.0 hackathon, showcasing innovative project development skills.',
      icon: Award,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Competitive Programming Excellence',
      organization: 'LeetCode & GeeksforGeeks',
      year: '2024',
      description: 'Solved 350+ problems across platforms with 1360+ rating on LeetCode, demonstrating consistent problem-solving excellence.',
      icon: Code,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Academic Excellence',
      organization: 'VESIT, Mumbai',
      year: '2024',
      description: 'Maintaining CGPA of 9.20 in Bachelor of Engineering, showcasing consistent academic performance and dedication.',
      icon: Star,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const stats = [
    {
      value: '350+',
      label: 'Problems Solved',
      color: 'text-blue-600'
    },
    {
      value: '1360+',
      label: 'LeetCode Rating',
      color: 'text-green-600'
    },
    {
      value: '9.20',
      label: 'CGPA',
      color: 'text-purple-600'
    },
    {
      value: '2',
      label: 'Hackathon Wins',
      color: 'text-orange-600'
    }
  ];

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Icon */}
                <div className={`p-3 sm:p-4 bg-gradient-to-r ${achievement.color} rounded-full group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <achievement.icon className="text-white" size={20} />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                    {achievement.title}
                  </h3>
                  
                  {/* Organization and Year */}
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-2 mb-3">
                    <span className="text-blue-600 font-medium text-sm sm:text-base leading-tight">
                      {achievement.organization}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded-full self-start">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} mb-1 sm:mb-2 group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;