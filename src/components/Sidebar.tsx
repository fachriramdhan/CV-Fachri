import React from 'react';

interface SidebarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleTheme, isDark }) => {
  return (
    <aside className="w-full lg:w-[380px] flex-shrink-0 lg:h-auto">
      <div className="relative flex justify-center z-20 -mb-12 lg:mb-0">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-tr from-blue-400 to-blue-900 rounded-[35px] sm:rounded-[45px] flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] border-4 border-white dark:border-black/20 pointer-events-auto">
          <img
            src="https://picsum.photos/seed/fachri/400/400"
            className="w-full h-full object-cover object-top scale-100"
            alt="Avatar Fachri"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="glass-card bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 rounded-[35px] sm:rounded-[45px] lg:-mt-20 lg:pt-28 pt-16 pb-8 sm:pb-10 px-4 sm:px-8 text-center shadow-xl dark:shadow-2xl relative">
        <button
          onClick={toggleTheme}
          className="absolute z-50 top-4 lg:top-20 right-4 lg:right-5 w-12 h-12 flex items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-yellow-400 transition-all hover:scale-110 active:scale-90 pointer-events-auto cursor-pointer"
        >
          <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}></i>
        </button>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Fachri Ramdhan
        </h1>
        <p className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mt-1 tracking-wide">
          IoT Engineer & Software Engineer
        </p>

        <p className="hidden lg:block text-[11px] sm:text-sm text-slate-600 dark:text-slate-400 mt-4 sm:mt-5 leading-relaxed px-2 text-justify">
          Passionate about building scalable web applications and solving
          complex problems with clean, efficient code. Specialized in
          full-stack development with modern technologies.
        </p>

        <div className="mt-6 sm:mt-7 flex flex-row lg:flex-col items-center justify-center lg:items-stretch gap-1 sm:gap-4 w-full border-t border-slate-200 dark:border-white/5 pt-6 lg:border-none lg:pt-0">
          <div className="flex flex-row items-center justify-center gap-1.5 flex-1 min-w-0">
            <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-slate-200 dark:bg-white/10 rounded-full shrink-0">
              <i className="fas fa-user-graduate text-blue-500 text-[10px] sm:text-xs"></i>
            </span>
            <span className="font-medium text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-tight text-left">
              S1 Teknologi Informasi
            </span>
          </div>

          <div className="w-[1px] h-6 bg-slate-200 dark:bg-white/10 lg:hidden"></div>

          <div className="flex flex-row items-center justify-center gap-1.5 flex-1 min-w-0">
            <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-slate-200 dark:bg-white/10 rounded-full shrink-0">
              <i className="fas fa-map-marker-alt text-red-500 text-[10px] sm:text-xs"></i>
            </span>
            <span className="font-medium text-[9px] sm:text-xs lg:text-sm text-slate-600 dark:text-slate-300 leading-tight text-left">
              Jakarta, Indonesia
            </span>
          </div>

          <div className="w-[1px] h-6 bg-slate-200 dark:bg-white/10 lg:hidden"></div>

          <div className="flex flex-row items-center justify-center gap-1.5 flex-1 min-w-0">
            <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-slate-200 dark:bg-white/10 rounded-full shrink-0">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            </span>
            <span className="font-semibold text-green-600 dark:text-green-400 text-[9px] sm:text-xs lg:text-sm leading-tight text-left">
              Available for Hire
            </span>
          </div>
        </div>

        <a
          href="#"
          className="mt-6 sm:mt-7 w-full inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-2xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl cursor-pointer"
        >
          <i className="fas fa-download"></i>
          <span>Download CV</span>
        </a>
      </div>

      <p className="hidden lg:block text-[12px] text-slate-500 text-center mt-2 dark:text-slate-400">
        © 2026 Fachri Ramdhan. All rights reserved.
      </p>
    </aside>
  );
};

export default Sidebar;
