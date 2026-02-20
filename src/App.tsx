import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import SocialLinks from './components/SocialLinks';
import Connect from './components/Connect';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const mainRef = React.useRef<HTMLElement>(null);
  const bgRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (mainRef.current && bgRef.current) {
      const scrollTop = mainRef.current.scrollTop;
      bgRef.current.style.transform = `translateY(${scrollTop * 0.5}px)`;
    }
  };

  return (
    <div className="min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden selection:bg-green-500/30">
      {/* Container Utama */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 h-full lg:h-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-auto lg:h-full overflow-y-auto lg:overflow-visible">
          
          <Sidebar toggleTheme={toggleTheme} isDark={isDark} />

          {/* MAIN CONTENT */}
          <main 
            ref={mainRef}
            onScroll={handleScroll}
            className="relative flex-1 overflow-y-auto lg:overflow-y-auto pr-2 no-scrollbar pb-8 lg:pb-0"
          >
            {/* Parallax Background */}
            <div 
              ref={bgRef}
              className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-100/40 via-purple-100/20 to-transparent dark:from-blue-900/20 dark:via-purple-900/10 pointer-events-none -z-10 rounded-3xl opacity-60"
            ></div>

            <div className="space-y-3 sm:space-y-4">
              <SocialLinks />
              <Connect />
              <div className="h-2 sm:h-3"></div>
              <WorkExperience />
              <Projects />
              <TechStack />
              
              {/* Footer Spacing */}
              <div className="h-4"></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
