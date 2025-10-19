import { Users, MessageCircle, Handshake, Heart } from 'lucide-react';

export default function Skills() {
  const topSkills = [
    {
      name: 'Leadership',
      icon: Users,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50'
    },
    {
      name: 'Communication',
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Teamwork',
      icon: Handshake,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Empathy',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50'
    }
  ];

  const additionalSkills = [
    'Event Coordination',
    'Problem Solving',
    'Adaptability',
    'Emotional Intelligence',
    'Community Engagement',
    'Collaboration',
    'Creativity',
    'Active Listening',
    'Organization',
    'Conflict Resolution',
    'Time Management'
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Strengths
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Developed through volunteering experiences and community engagement
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {topSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`${skill.bgColor} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-white rounded-full text-slate-700 font-medium text-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
