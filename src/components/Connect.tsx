import React from 'react';

const Connect: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <a
        href="mailto:fachriramdhan04@gmail.com"
        className="glass-card card-hover bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 flex items-center justify-between group shadow-sm transition-all"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 dark:bg-red-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0 transition-colors group-hover:bg-red-500">
            <i className="fas fa-envelope text-red-600 dark:text-red-400 text-lg sm:text-xl transition-colors group-hover:text-white"></i>
          </div>

          <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
            Email Me
          </span>
        </div>

        <i className="fas fa-arrow-right text-xs text-slate-400 group-hover:text-red-500 transition duration-300 group-hover:translate-x-1"></i>
      </a>

      <a
        href="https://linkedin.com/in/fachriramdhan"
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card card-hover bg-white/60 dark:bg-white/5 border border-white dark:border-white/10 rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 flex items-center justify-between group shadow-sm transition-all"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-[#0077b5]/20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0 transition-colors group-hover:bg-[#0077b5]">
            <i className="fab fa-linkedin-in text-[#0077b5] dark:text-blue-400 text-lg sm:text-xl transition-colors group-hover:text-white"></i>
          </div>

          <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
            LinkedIn
          </span>
        </div>

        <i className="fas fa-arrow-right text-xs text-slate-400 group-hover:text-blue-500 transition duration-300 group-hover:translate-x-1"></i>
      </a>
    </div>
  );
};

export default Connect;
