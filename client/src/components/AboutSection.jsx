export default function AboutSection() {
  const frontendSkills = ['React.js', 'Vue.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS'];
  const backendSkills = ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL'];
  const toolsSkills = ['AWS', 'Git & GitHub', 'Docker', 'Webpack', 'Jest'];

  return (
    <section id="about" className="py-20 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 4 years of hands-on experience in full-stack development, I specialize in building 
              scalable web applications that solve real-world problems. My expertise spans across modern 
              JavaScript frameworks and cloud technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              During my time at FirstCry.com, I've built comprehensive CRM dashboards, integrated complex 
              REST APIs, and optimized frontend performance. I'm passionate about clean code, user experience, 
              and continuous learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, crafting delicious meals, 
              or perfecting my coffee brewing art ☕.
            </p>
          </div>
          
          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <span key={skill} className="skill-tag px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <span key={skill} className="skill-tag px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-white mb-3">Cloud & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((skill) => (
                    <span key={skill} className="skill-tag px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
