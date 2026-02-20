import React from 'react';

const socialLinks = [
  {
    href: "https://github.com/fachriramdhan",
    icon: "fab fa-github",
    label: "GitHub",
    hoverColor: "group-hover:text-blue-600",
  },
  {
    href: "https://instagram.com/fachriramdhano",
    icon: "fab fa-instagram",
    label: "Instagram",
    hoverColor: "group-hover:text-pink-500",
  },
  {
    href: "https://medium.com/@username",
    icon: "fab fa-medium",
    label: "Medium",
    hoverColor: "group-hover:text-emerald-500",
  },
  {
    href: "https://twitter.com/R4mdhana",
    icon: "fab fa-x-twitter",
    label: "Twitter",
    hoverColor: "group-hover:text-sky-400",
  },
  {
    href: "https://tiktok.com/@fachriramdhan",
    icon: "fab fa-tiktok",
    label: "TikTok",
    hoverColor: "group-hover:text-cyan-400",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-3 sm:gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 shadow-sm group transition-all"
        >
          <div className={`text-lg sm:text-xl text-slate-800 dark:text-white ${link.hoverColor} transition-colors`}>
            <i className={link.icon}></i>
          </div>
          <span className={`text-[8px] sm:text-[10px] uppercase font-bold text-slate-800 dark:text-white tracking-tight ${link.hoverColor}`}>
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
