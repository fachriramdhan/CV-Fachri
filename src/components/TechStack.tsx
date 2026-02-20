import React from 'react';

// Helper component for tech items to avoid repetition
const TechItem: React.FC<{ name: string; icon?: string; invertDark?: boolean }> = ({ name, icon, invertDark }) => (
  <div className="flex flex-col items-center gap-1 flex-shrink-0 w-[50px] sm:w-[60px] group cursor-default snap-start relative">
    {/* Tooltip */}
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20 shadow-xl">
      {name}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-white"></div>
    </div>

    {icon ? (
      <img
        src={icon}
        alt={name}
        className={`w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform ${invertDark ? 'dark:invert' : ''}`}
        onError={(e) => {
           // Fallback if image missing
           e.currentTarget.style.display = 'none';
           e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
    ) : (
      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"></div>
    )}
    {/* Fallback icon placeholder if image fails */}
    <div className="hidden w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-[8px]">?</div>
    
    <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 text-center">
      {name}
    </span>
  </div>
);

const TechStack: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6 px-2">
      <h2 className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400 dark:text-slate-500">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="flex-shrink-0 w-full snap-start">
          <div className="glass-card bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col gap-3 hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5 text-[28px] sm:text-6xl font-extrabold uppercase text-slate-400 dark:text-white select-none pointer-events-none">
              Frontend
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
              <TechItem name="HTML" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <TechItem name="CSS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <TechItem name="JavaScript" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <TechItem name="ReactJS" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flex-shrink-0 w-full snap-start">
          <div className="glass-card relative bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col gap-3 hover:shadow-lg transition-all overflow-visible h-full">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5 text-4xl sm:text-6xl font-extrabold uppercase text-slate-400 dark:text-white select-none pointer-events-none">
              Backend
            </div>

            <div className="flex gap-3 overflow-x-auto px-2 sm:px-3 no-scrollbar snap-x snap-mandatory">
              <TechItem name="Python" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <TechItem name="Django" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
              <TechItem name="Flask" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" invertDark />
              <TechItem name="Laravel" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />
              <TechItem name="C#" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="flex-shrink-0 w-full snap-start">
          <div className="glass-card bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col gap-3 hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5 text-[28px] sm:text-6xl font-extrabold uppercase text-slate-400 dark:text-white select-none pointer-events-none">
              Database
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
              <TechItem name="MySQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
              <TechItem name="PostgreSQL" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="flex-shrink-0 w-full snap-start">
          <div className="glass-card bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col gap-3 hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5 text-[28px] sm:text-6xl font-extrabold uppercase text-slate-400 dark:text-white select-none pointer-events-none">
              Tools
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
              <TechItem name="Docker" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
              <TechItem name="Kubernetes" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
              <TechItem name="Git" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <TechItem name="GitHub" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" invertDark />
            </div>
          </div>
        </div>
      </div>

      {/* IoT */}
      <div className="flex-shrink-0 w-full snap-start">
        <div className="glass-card bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col gap-3 hover:shadow-lg transition-all relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5 text-[28px] sm:text-6xl font-extrabold uppercase text-slate-400 dark:text-white select-none pointer-events-none">
            Internet of Things
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            <TechItem name="Arduino" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
            <TechItem name="Raspberry Pi" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" />
            <TechItem name="MQTT" icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
