import React from 'react';

const experiences = [
  {
    company: "PT. Mattel Indonesia",
    role: "IoT Technician System",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mattel_%282019%29.svg/960px-Mattel_%282019%29.svg.png"
  },
  {
    company: "PT. Brothersindo Saudara S",
    role: "HR Administration",
    bgImage: "https://brothersindo.co.id/v6/upin-ipin.png"
  },
  {
    company: "PT. Delta Tekno Perkasa",
    role: "Staff IT & Admin Operasional",
    bgImage: "https://deltatekno.co.id/wp-content/uploads/2021/10/WhatsApp-Image-2021-10-26-at-08.38.16-1024x1024-transformed.png"
  }
];

const WorkExperience: React.FC = () => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex justify-between items-center px-1 sm:px-2">
        <h2 className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400 dark:text-slate-500">
          Work Experience
        </h2>
        <span className="text-[9px] sm:text-[10px] text-slate-500 animate-pulse flex items-center gap-1 xl:hidden">
          GESER <i className="fas fa-arrow-right"></i>
        </span>
      </div>

      <div className="flex xl:grid xl:grid-cols-3 overflow-x-auto xl:overflow-visible gap-4 no-scrollbar pb-6 xl:pb-0 snap-x snap-mandatory xl:snap-none px-1 sm:px-2">
        {experiences.map((exp, index) => (
          <div key={index} className="flex-shrink-0 w-[240px] sm:w-[280px] xl:w-auto snap-start">
            <div className="glass-card bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-sm flex flex-col gap-2 hover:shadow-lg transition-all relative overflow-hidden h-full min-h-[120px]">
              <div
                className="absolute inset-0 opacity-10 dark:opacity-5 bg-no-repeat bg-right bg-contain pointer-events-none"
                style={{ backgroundImage: `url("${exp.bgImage}")` }}
              ></div>

              <h3 className="text-sm font-bold text-slate-800 dark:text-white truncate relative z-10">
                {exp.company}
              </h3>
              <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase font-semibold relative z-10">
                {exp.role}
              </span>
            </div>
          </div>
        ))}
        <div className="flex-shrink-0 w-4 xl:hidden"></div>
      </div>
    </div>
  );
};

export default WorkExperience;
