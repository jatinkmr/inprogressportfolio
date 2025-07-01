import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "CRM Dashboard",
      description: "A comprehensive customer relationship management system built with React and Node.js, featuring real-time data visualization and advanced filtering.",
      technologies: ["React", "Node.js", "MongoDB"],
      gradient: "from-primary to-accent",
      textColor: "text-primary"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard built using Vue.js and Express.js.",
      technologies: ["Vue.js", "Express", "Stripe"],
      gradient: "from-accent to-primary",
      textColor: "text-accent"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React", "Socket.io", "AWS"],
      gradient: "from-secondary to-primary",
      textColor: "text-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`bg-primary/10 ${project.textColor} px-3 py-1 rounded-full text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:text-secondary transition-colors flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.github.com/jatinkmr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-bg text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-block"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
