import React, { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  color?: string;
}

const projects: Project[] = [
  {
    title: "Cattle Eye Disease Detection",
    description: "Detects bovine pink eye (IBK) in real-time using YOLOv4. Provides visual bounding boxes and actionable medical advice for farmers.",
    tags: ["Python", "YOLOv4", "Flask"],
    githubUrl: "https://github.com/fachriramdhan/BovineEye-YOLOv4-Flask"
  },
  {
    title: "Smart Home Dashboard",
    description: "A comprehensive IoT dashboard for monitoring and controlling smart home devices. Features real-time data visualization, device management, and automation rules engine.",
    tags: ["React", "Node.js", "MQTT", "InfluxDB"],
    githubUrl: "#"
  },
  {
    title: "E-Commerce API",
    description: "Scalable RESTful API for an e-commerce platform. Handles user authentication, product catalog, shopping cart, and payment processing with Stripe integration.",
    tags: ["C#", ".NET Core", "SQL Server", "Docker"],
    githubUrl: "#"
  },
  {
    title: "Weather Station Logger",
    description: "Embedded system project using ESP32 to log weather data (temperature, humidity, pressure) to a cloud server. Includes a low-power mode for battery operation.",
    tags: ["C++", "Arduino", "ESP32", "AWS IoT"],
    githubUrl: "#"
  }
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 py-2 relative">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400 dark:text-slate-500">
          Featured Projects
        </h2>
        
        {/* Mobile Swipe Hint */}
        <div className="flex items-center gap-2 lg:hidden animate-pulse">
          <span className="text-[10px] font-bold text-slate-400">SWIPE</span>
          <div className="flex space-x-1">
            <i className="fas fa-chevron-right text-slate-400 text-[10px] opacity-50"></i>
            <i className="fas fa-chevron-right text-slate-400 text-[10px] opacity-75"></i>
            <i className="fas fa-chevron-right text-slate-400 text-[10px]"></i>
          </div>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className="hidden lg:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left text-xs"></i>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 px-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[380px] snap-center">
            <div className="relative h-full group">
              <div className="absolute -inset-0.5 bg-slate-200 dark:bg-slate-800 rounded-[28px] transition-all group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/20"></div>

              <div className="relative bg-white dark:bg-slate-900 rounded-[26px] p-6 h-full flex flex-col transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                <div className="flex flex-col flex-grow relative z-10">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2.5 py-1 text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 uppercase tracking-wider hover:underline"
                    >
                      <i className="fab fa-github"></i>
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
