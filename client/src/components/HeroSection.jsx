import { Github, Linkedin, Mail, Twitter, Download, Code } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Hello, I'm 👋<br />
                <span className="text-gradient">Jatin Kumar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-gray-300">
                Full-Stack JavaScript Developer
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              I craft scalable web applications with 4+ years of hands-on experience across the entire development stack. 
              Previously at FirstCry.com, I build CRM dashboards and integrate frontend interfaces with REST APIs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="gradient-bg text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
              >
                View My Work
              </button>
              <a 
                href="https://jatinkmr-dev.netlify.app/resume/jatin-kumar-kamboj-cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.github.com/jatinkmr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jatinkumarkamboj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:kumar.jatin873@gmail.com"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/jatinkrkamboj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://jatinkmr-dev.netlify.app/images/mine.jpg" 
                  alt="Jatin Kumar - Full-Stack Developer" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 gradient-bg rounded-full flex items-center justify-center animate-bounce-slow">
                <Code className="text-white text-2xl w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
