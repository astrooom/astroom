'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Hook to detect screen size categories
function useScreenSize() {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setScreenSize('mobile');
      } else if (width < 768) {
        setScreenSize('small-tablet');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1200) {
        setScreenSize('small-desktop');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenSize;
}

export default function Home() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState('/home/olle');
  const [hasLoaded, setHasLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const screenSize = useScreenSize();

  useEffect(() => {
    // Keep terminal clean - no initial commands since we clear on each command
    setHasLoaded(true); // Mark as loaded to prevent re-runs
  }, [hasLoaded]);

  // Remove auto-scroll to allow free interaction and text copying

  const companies = {
    ultraservers: { logo: '/ultraservers_logo_transparent.png', name: 'UltraServers' },
    buddleja: { logo: '/ab-buddleja.png', name: 'AB Buddleja' },
    '365hosts': { logo: '/365hosts.png', name: '365Hosts' },
    pinehosting: { logo: '/pine-hosting-logo.png', name: 'Pine Hosting' },
    dokibird: { logo: '/dokibird-logo.jpg', name: 'Dokibird' },
    popuply: { logo: '/popuply.png', name: 'Popuply' }
  };

  const CompanyLogo = ({ company, size = 16 }: { company: keyof typeof companies, size?: number }) => (
    <span className="inline-flex items-center gap-2">
      <Image
        src={companies[company].logo}
        alt={companies[company].name}
        width={size}
        height={size}
        className="rounded-sm opacity-80"
      />
      <span>{companies[company].name}</span>
    </span>
  );

  // Responsive about text based on screen size
  const getResponsiveAboutText = (screenSize: string) => {
    switch (screenSize) {
      case 'mobile':
        return [
          '═══════════════════════════════════════',
          '               astroom               ',
          '     DevOps Engineer & Full-Stack      ',
          '           Gothenburg, Sweden          ',
          '═══════════════════════════════════════',
          '',
          '🎯 EXPERTISE',
          '   Results-driven DevOps Engineer with',
          '   experience in scalable infrastructure.',
          '',
          '🛠️ CORE COMPETENCIES',
          '   • Automation & Containerization',
          '   • System Optimization',
          '   • Reliable Deployments',
          '   • Technical Leadership',
          '',
          '📈 TRACK RECORD',
          '   Leading technical operations from',
          '   ground up in high-demand environments.',
          '',
          '🎓 PHILOSOPHY',
          '   Passionate about continuous learning',
          '   and exploring new technologies.',
          '',
          '📧 olle.ljung@gmail.com',
          '📱 +46707228827',
          '🌐 https://astroom.dev',
          '',
          '💡 Use "cat experience.txt" for work history',
          '🚀 Use "cat projects.txt" for projects',
          '🔧 Use "cat skills.txt" for technical skills'
        ];

      case 'small-tablet':
        return [
          '═══════════════════════════════════════════════════',
          '                    astroom                     ',
          '          DevOps Engineer & Full-Stack Developer   ',
          '                Gothenburg, Sweden                 ',
          '═══════════════════════════════════════════════════',
          '',
          '🎯 EXPERTISE',
          '   Results-driven DevOps Engineer and Full-Stack Developer',
          '   with deep experience in building and maintaining scalable',
          '   infrastructure for web applications and game hosting.',
          '',
          '🛠️ CORE COMPETENCIES',
          '   • Automation & Containerization',
          '   • System Optimization & Performance Tuning',
          '   • Reliable, Efficient & Secure Deployments',
          '   • Technical Operations Leadership',
          '',
          '📈 TRACK RECORD',
          '   Proven history of leading technical operations from',
          '   the ground up, ensuring stability in fast-paced,',
          '   high-demand environments. Built systems supporting',
          '   thousands of concurrent users.',
          '',
          '🎓 PHILOSOPHY',
          '   Passionate about continuous learning and exploring',
          '   new tools, technologies, and best practices within',
          '   the DevOps and infrastructure domain.',
          '',
          '📧 Contact: olle.ljung@gmail.com | 📱 +46707228827',
          '🌐 Portfolio: https://astroom.dev',
          '',
          '💡 Use "cat experience.txt" to explore work history',
          '🚀 Use "cat projects.txt" to see current projects',
          '🔧 Use "cat skills.txt" for technical expertise'
        ];

      case 'tablet':
      case 'small-desktop':
        return [
          '═══════════════════════════════════════════════════════════════════════',
          '                                astroom                            ',
          '                   DevOps Engineer & Full-Stack Developer             ',
          '                             Gothenburg, Sweden                       ',
          '═══════════════════════════════════════════════════════════════════════',
          '',
          '┌─ PROFESSIONAL SUMMARY ─────────────────────────────────────────────┐',
          '│                                                                     │',
          '│  🎯 EXPERTISE                                                       │',
          '│     Results-driven DevOps Engineer and Full-Stack Developer        │',
          '│     with deep experience in building and maintaining scalable,     │',
          '│     high-performance infrastructure for web applications.          │',
          '│                                                                     │',
          '│  🛠️  CORE COMPETENCIES                                              │',
          '│     • Automation & Containerization                                │',
          '│     • System Optimization & Performance Tuning                    │',
          '│     • Reliable, Efficient & Secure Deployments                    │',
          '│     • Technical Operations Leadership                              │',
          '│                                                                     │',
          '│  📈 TRACK RECORD                                                    │',
          '│     Proven history of leading technical operations from the        │',
          '│     ground up, ensuring stability in fast-paced, high-demand      │',
          '│     environments. Successfully built systems supporting thousands  │',
          '│     of concurrent users.                                           │',
          '│                                                                     │',
          '│  🎓 PHILOSOPHY                                                      │',
          '│     Passionate about continuous learning and always excited to     │',
          '│     explore new tools, technologies, and best practices within     │',
          '│     the DevOps and infrastructure domain.                          │',
          '│                                                                     │',
          '└─────────────────────────────────────────────────────────────────────┘',
          '',
          '  📧 Contact: olle.ljung@gmail.com | 📱 +46707228827',
          '  🌐 Portfolio: https://astroom.dev',
          '',
          '  💡 Use "cat experience.txt" to explore work history',
          '  🚀 Use "cat projects.txt" to see current projects',
          '  🔧 Use "cat skills.txt" for technical expertise'
        ];

      default: // desktop
        return [
          '╔════════════════════════════════════════════════════════════════════════════════════════╗',
          '║                                      astroom                                       ║',
          '║                         DevOps Engineer & Full-Stack Developer                        ║',
          '║                                 Gothenburg, Sweden                                    ║',
          '╚════════════════════════════════════════════════════════════════════════════════════════╝',
          '',
          '┌─ PROFESSIONAL SUMMARY ─────────────────────────────────────────────────────────────────┐',
          '│                                                                                        │',
          '│  🎯 EXPERTISE                                                                          │',
          '│     Results-driven DevOps Engineer and Full-Stack Developer with deep experience     │',
          '│     in building and maintaining scalable, high-performance infrastructure for web    │',
          '│     applications and game hosting platforms.                                          │',
          '│                                                                                        │',
          '│  🛠️  CORE COMPETENCIES                                                                  │',
          '│     • Automation & Containerization                                                   │',
          '│     • System Optimization & Performance Tuning                                       │',
          '│     • Reliable, Efficient & Secure Deployments                                       │',
          '│     • Technical Operations Leadership                                                 │',
          '│                                                                                        │',
          '│  📈 TRACK RECORD                                                                       │',
          '│     Proven history of leading technical operations from the ground up, ensuring      │',
          '│     stability in fast-paced, high-demand environments. Successfully built systems    │',
          '│     supporting thousands of concurrent users.                                         │',
          '│                                                                                        │',
          '│  🎓 PHILOSOPHY                                                                         │',
          '│     Passionate about continuous learning and always excited to explore new tools,    │',
          '│     technologies, and best practices within the DevOps and infrastructure domain.    │',
          '│                                                                                        │',
          '└────────────────────────────────────────────────────────────────────────────────────────┘',
          '',
          '  📧 Contact: olle.ljung@gmail.com | 📱 +46707228827',
          '  🌐 Portfolio: https://astroom.dev',
          '',
          '  💡 Use "cat experience.txt" to explore work history',
          '  🚀 Use "cat projects.txt" to see current projects',
          '  🔧 Use "cat skills.txt" for technical expertise'
        ];
    }
  };

  // Responsive projects text based on screen size
  const getResponsiveProjectsText = (screenSize: string) => {
    switch (screenSize) {
      case 'mobile':
        return [
          '═══════════════════════════════════════',
          '            PROJECTS & WORK            ',
          '═══════════════════════════════════════',
          '',
          '─ CURRENT PROJECTS ────────────────────',
          '',
          '🚀 UltraServers',
          '   Founding Lead Architect',
          '   July 2022 - Present',
          '   High-performance game hosting',
          '',
          '🏢 AB Buddleja',
          '   CEO & Technical Consultant',
          '   October 2022 - Present',
          '   Technical operations services',
          '',
          '🎮 Dokibird Operations',
          '   Technical Operations Manager',
          '   June 2025 - Present',
          '   Infrastructure for 85M+ views creator',
          '',
          '🌐 Popuply',
          '   Side Project | 2024',
          '   Web engagement platform',
          '',
          '─ PREVIOUS EXPERIENCE ─────────────────',
          '',
          '🔧 365Hosts',
          '   Lead Game Server Engineer',
          '   June 2021 - August 2023',
          '',
          '🌲 Pine Hosting',
          '   Full-Stack Developer',
          '   April 2022 - January 2023',
          '',
          '─ ACHIEVEMENTS ────────────────────────',
          '',
          '⚡ Infrastructure Excellence',
          '   • Scalable systems for thousands',
          '   • 99.9% uptime in high-demand envs',
          '',
          '🛠️ Technology Leadership',
          '   • Technical operations from ground up',
          '   • Automated CI/CD pipelines',
          '',
          '📈 Business Impact',
          '   • Company growth contributions',
          '   • Successful consultancy',
          '',
          '💡 "cat experience.txt" for details',
          '🔍 "cat skills.txt" for tech expertise'
        ];

      case 'small-tablet':
        return [
          '═══════════════════════════════════════════════════════',
          '                    PROJECTS & WORK                   ',
          '═══════════════════════════════════════════════════════',
          '',
          '─ CURRENT PROJECTS ────────────────────────────────────',
          '',
          '🚀 UltraServers (Founding Lead Architect)',
          '   Period: July 2022 - Present',
          '   Role: Founding Lead Architect & Developer',
          '   Impact: Pioneered high-performance game hosting',
          '           service to thousands of users',
          '',
          '🏢 AB Buddleja (CEO)',
          '   Period: October 2022 - Present',
          '   Role: CEO & Technical Operations Consultant',
          '   Impact: Providing specialized technical services',
          '',
          '🎮 Dokibird Technical Operations',
          '   Period: June 2025 - Present',
          '   Role: Technical Operations Manager',
          '   Impact: Managing infrastructure for content creator',
          '           with 85M+ YouTube views',
          '',
          '🌐 Popuply',
          '   Period: 2024 | Type: Side Project',
          '   Tech: Next.js, WebSockets, Postgres',
          '   Purpose: Web engagement platform',
          '',
          '─ PREVIOUS EXPERIENCE ─────────────────────────────────',
          '',
          '🔧 365Hosts (Lead Game Server Engineer)',
          '   Period: June 2021 - August 2023',
          '   Achievement: Engineered complete game server',
          '                hosting division lifecycle',
          '',
          '🌲 Pine Hosting (Full-Stack Developer)',
          '   Period: April 2022 - January 2023 (part-time)',
          '   Achievement: Enhanced game panel UX during growth',
          '',
          '─ TECHNICAL ACHIEVEMENTS ──────────────────────────────',
          '',
          '⚡ Infrastructure Excellence',
          '   • Built scalable systems exceeding standards',
          '   • Designed for thousands of concurrent users',
          '   • 99.9% uptime in high-demand environments',
          '',
          '🛠️ Technology Leadership',
          '   • Led technical operations from ground up',
          '   • Automated deployment and monitoring systems',
          '   • Implemented CI/CD pipelines and DevOps practices',
          '',
          '📈 Business Impact',
          '   • Contributed to notable company growth phases',
          '   • Established successful consultancy serving clients',
          '   • Delivered solutions for globally recognized creator',
          '',
          '💡 Use "cat experience.txt" for detailed work history',
          '🔍 Use "cat skills.txt" to explore technical expertise'
        ];

      case 'tablet':
      case 'small-desktop':
        return [
          '═══════════════════════════════════════════════════════════════════════',
          '                             PROJECTS & WORK                           ',
          '═══════════════════════════════════════════════════════════════════════',
          '',
          '┌─ CURRENT PROJECTS ─────────────────────────────────────────────────┐',
          '│                                                                     │',
          '│  🚀 UltraServers (Founding Lead Architect)                         │',
          '│     ├─ Period: July 2022 - Present                                 │',
          '│     ├─ Role: Founding Lead Architect & Developer                   │',
          '│     └─ Impact: Pioneered high-performance game hosting service     │',
          '│               from inception to thousands of users                 │',
          '│                                                                     │',
          '│  🏢 AB Buddleja (CEO)                                               │',
          '│     ├─ Period: October 2022 - Present                              │',
          '│     ├─ Role: CEO & Technical Operations Consultant                 │',
          '│     └─ Impact: Providing specialized technical operations          │',
          '│               services to diverse client portfolio                 │',
          '│                                                                     │',
          '│  🎮 Dokibird Technical Operations                                   │',
          '│     ├─ Period: June 2025 - Present                                 │',
          '│     ├─ Role: Technical Operations Manager                          │',
          '│     └─ Impact: Managing infrastructure for content creator         │',
          '│               with 85M+ YouTube views, 200K+ Twitch followers     │',
          '│                                                                     │',
          '│  🌐 Popuply                                                         │',
          '│     ├─ Period: 2024 | Type: Side Project                          │',
          '│     ├─ Tech: Next.js, Vanilla JS, WebSockets, Postgres            │',
          '│     └─ Purpose: Web engagement platform with popup toasts         │',
          '│                                                                     │',
          '└─────────────────────────────────────────────────────────────────────┘',
          '',
          '┌─ PREVIOUS EXPERIENCE ──────────────────────────────────────────────┐',
          '│                                                                     │',
          '│  🔧 365Hosts (Lead Game Server Engineer)                           │',
          '│     ├─ Period: June 2021 - August 2023                            │',
          '│     └─ Achievement: Engineered complete game server hosting        │',
          '│                     division lifecycle                             │',
          '│                                                                     │',
          '│  🌲 Pine Hosting (Full-Stack Developer)                            │',
          '│     ├─ Period: April 2022 - January 2023 (part-time)              │',
          '│     └─ Achievement: Enhanced game panel UX during key growth phase │',
          '│                                                                     │',
          '└─────────────────────────────────────────────────────────────────────┘',
          '',
          '┌─ TECHNICAL ACHIEVEMENTS ───────────────────────────────────────────┐',
          '│                                                                     │',
          '│  ⚡ Infrastructure Excellence                                        │',
          '│     • Built scalable systems exceeding industry standards         │',
          '│     • Designed for thousands of concurrent users                   │',
          '│     • 99.9% uptime in high-demand environments                    │',
          '│                                                                     │',
          '│  🛠️ Technology Leadership                                           │',
          '│     • Led technical operations from ground up                      │',
          '│     • Automated deployment and monitoring systems                  │',
          '│     • Implemented CI/CD pipelines and DevOps practices            │',
          '│                                                                     │',
          '│  📈 Business Impact                                                 │',
          '│     • Contributed to notable company growth phases                 │',
          '│     • Established successful consultancy serving clients           │',
          '│     • Delivered solutions for globally recognized creator          │',
          '│                                                                     │',
          '└─────────────────────────────────────────────────────────────────────┘',
          '',
          '  💡 Use "cat experience.txt" for detailed work history',
          '  🔍 Use "cat skills.txt" to explore technical expertise'
        ];

      default: // desktop
        return [
          '╔════════════════════════════════════════════════════════════════════════════════════════╗',
          '║                                   PROJECTS & WORK                                     ║',
          '╚════════════════════════════════════════════════════════════════════════════════════════╝',
          '',
          '┌─ CURRENT PROJECTS ─────────────────────────────────────────────────────────────────────┐',
          '│                                                                                        │',
          '│  🚀 UltraServers (Founding Lead Architect)                                            │',
          '│     ├─ Period: July 2022 - Present                                                    │',
          '│     ├─ Role: Founding Lead Architect & Developer                                       │',
          '│     └─ Impact: Pioneered high-performance game hosting service from inception         │',
          '│               to thousands of users                                                    │',
          '│                                                                                        │',
          '│  🏢 AB Buddleja (CEO)                                                                  │',
          '│     ├─ Period: October 2022 - Present                                                 │',
          '│     ├─ Role: CEO & Technical Operations Consultant                                    │',
          '│     └─ Impact: Providing specialized technical operations services to diverse         │',
          '│               client portfolio                                                         │',
          '│                                                                                        │',
          '│  🎮 Dokibird Technical Operations                                                      │',
          '│     ├─ Period: June 2025 - Present                                                    │',
          '│     ├─ Role: Technical Operations Manager                                              │',
          '│     └─ Impact: Managing infrastructure for content creator with 85M+ YouTube         │',
          '│               views, 200K+ Twitch followers                                            │',
          '│                                                                                        │',
          '│  🌐 Popuply                                                                            │',
          '│     ├─ Period: 2024                                                                    │',
          '│     ├─ Type: Side Project                                                              │',
          '│     ├─ Tech: Next.js, Vanilla JS, WebSockets, Postgres                               │',
          '│     └─ Purpose: Web engagement platform with popup toasts                            │',
          '│                                                                                        │',
          '└────────────────────────────────────────────────────────────────────────────────────────┘',
          '',
          '┌─ PREVIOUS EXPERIENCE ──────────────────────────────────────────────────────────────────┐',
          '│                                                                                        │',
          '│  🔧 365Hosts (Lead Game Server Engineer)                                               │',
          '│     ├─ Period: June 2021 - August 2023                                                │',
          '│     └─ Achievement: Engineered complete game server hosting division lifecycle        │',
          '│                                                                                        │',
          '│  🌲 Pine Hosting (Full-Stack Developer)                                                │',
          '│     ├─ Period: April 2022 - January 2023 (part-time)                                  │',
          '│     └─ Achievement: Enhanced game panel UX during key growth phase                    │',
          '│                                                                                        │',
          '└────────────────────────────────────────────────────────────────────────────────────────┘',
          '',
          '┌─ TECHNICAL ACHIEVEMENTS ───────────────────────────────────────────────────────────────┐',
          '│                                                                                        │',
          '│  ⚡ Infrastructure Excellence                                                           │',
          '│     • Built scalable systems exceeding industry standards                             │',
          '│     • Designed for thousands of concurrent users                                      │',
          '│     • 99.9% uptime in high-demand environments                                       │',
          '│                                                                                        │',
          '│  🛠️  Technology Leadership                                                              │',
          '│     • Led technical operations from ground up                                         │',
          '│     • Automated deployment and monitoring systems                                     │',
          '│     • Implemented CI/CD pipelines and DevOps practices                               │',
          '│                                                                                        │',
          '│  📈 Business Impact                                                                    │',
          '│     • Contributed to notable company growth phases                                    │',
          '│     • Established successful consultancy serving clients                              │',
          '│     • Delivered solutions for globally recognized creator                             │',
          '│                                                                                        │',
          '└────────────────────────────────────────────────────────────────────────────────────────┘',
          '',
          '  💡 Use "cat experience.txt" for detailed work history',
          '  🔍 Use "cat skills.txt" to explore technical expertise'
        ];
    }
  };

  const executeCommand = (cmd: string, addToHistory = true) => {
    const command = cmd.trim().toLowerCase();
    let output: string[] = [];

    // Clear terminal and show current command (except for 'clear' command)
    if (addToHistory && command !== 'clear') {
      setHistory([`$ ${cmd}`]);
    }

    switch (command) {
      case 'help':
      case 'ls --help':
        output = [
          'Available commands:',
          '  ls              - list files and directories',
          '  cat <file>      - display file contents',
          '  pwd             - show current directory',
          '  whoami          - show current user',
          '  clear           - clear terminal',
          '  contact         - show contact information',
          '  github          - open GitHub profile',
          '  help            - show this help message',
          '',
          'Available files:',
          '  about.txt       - personal summary',
          '  experience.txt  - work experience',
          '  projects.txt    - current and past projects',
          '  skills.txt      - technical skills',
          '  education.txt   - educational background',
          '  contact.txt     - contact information'
        ];
        break;

      case 'ls':
      case 'ls -la':
        output = [
          'total 42',
          'drwxr-xr-x  5 olle olle 4096 Jan  1 12:00 .',
          'drwxr-xr-x  3 root root 4096 Jan  1 12:00 ..',
          '-rw-r--r--  1 olle olle 2048 Jan  1 12:00 about.txt',
          '-rw-r--r--  1 olle olle 1024 Jan  1 12:00 contact.txt',
          '-rw-r--r--  1 olle olle 3072 Jan  1 12:00 experience.txt',
          '-rw-r--r--  1 olle olle 1536 Jan  1 12:00 projects.txt',
          '-rw-r--r--  1 olle olle  512 Jan  1 12:00 skills.txt',
          '-rw-r--r--  1 olle olle  256 Jan  1 12:00 education.txt',
          'drwxr-xr-x  2 olle olle 4096 Jan  1 12:00 logos/'
        ];
        break;

      case 'pwd':
        output = [currentPath];
        break;

      case 'whoami':
        output = ['olle'];
        break;

      case 'cat about.txt':
        output = getResponsiveAboutText(screenSize);
        break;

      case 'cat experience.txt':
        output = [
          '# WORK EXPERIENCE',
          '',
          '## Founding Lead Architect & Developer @ UltraServers',
          '   July 2022 - Present',
          '   As a foundational member from UltraServers\' inception, pioneered',
          '   the development of a high-performance game hosting service.',
          '',
          '## CEO @ AB Buddleja',
          '   October 2022 - Present',
          '   Self-employed professional providing specialized technical',
          '   operations services to a diverse portfolio of clients.',
          '',
          '## Technical Operations Manager @ Dokibird',
          '   June 2025 - Present',
          '   Managing end-to-end technical infrastructure for globally',
          '   recognized content creator (85M+ YouTube views, 200K+ Twitch).',
          '',
          '## Lead Game Server Engineer @ 365Hosts',
          '   June 2021 - August 2023',
          '   Engineered and oversaw complete lifecycle of game server',
          '   hosting division from initial development to ongoing management.',
          '',
          '## Full-Stack Developer @ Pine Hosting (part-time)',
          '   April 2022 - January 2023',
          '   Drove new feature development during key growth phase.'
        ];
        break;

      case 'cat projects.txt':
        output = getResponsiveProjectsText(screenSize);
        break;

      case 'cat skills.txt':
        output = [
          '# TECHNICAL SKILLS',
          '',
          '## Programming Languages',
          '   HTML, JavaScript, TypeScript, Python, PHP, SQL, Go, Bash',
          '',
          '## Frameworks',
          '   React, Next.js, Laravel, Flask, Vue.js, Nuxt.js, Flutter, jQuery',
          '',
          '## Tools / Software',
          '   Docker, Ansible, Redis, Traefik, Git, GitHub Actions,',
          '   Nginx, Tailwind, Gunicorn, Celery, WebSockets',
          '',
          '## Techniques / Solutions',
          '   Load Balancing, CI/CD Pipelines, Scrum',
          '',
          '## Cloud / Platforms',
          '   GitHub, Vercel, OpenAI API'
        ];
        break;

      case 'cat education.txt':
        output = [
          '# EDUCATION',
          '',
          '## Bachelor of Science in Informatics',
          '   University of Gothenburg',
          '   August 2020 - June 2023',
          '',
          '   Program combined technical depth with organizational and',
          '   systems thinking, covering software engineering, user-centered',
          '   design, information systems, and organizational knowledge.',
          '',
          '# LANGUAGES',
          '   English, Swedish, Spanish'
        ];
        break;

      case 'cat contact.txt':
      case 'contact':
        output = [
          '# CONTACT INFORMATION',
          '',
          '📧 Email:    olle.ljung@gmail.com',
          '📱 Phone:    +46707228827',
          '📍 Location: Gothenburg, Sweden',
          '🌐 Website:  https://astroom.dev',
          '💼 GitHub:   https://github.com/astrooom',
          '',
          '# COMPANY',
          '🏢 AB Buddleja - Technical Operations Consultancy'
        ];
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'github':
        output = ['Opening GitHub profile...'];
        window.open('https://github.com/astrooom', '_blank');
        break;

      case 'cat about.txt && cat experience.txt':
        executeCommand('cat about.txt', false);
        setTimeout(() => {
          setHistory(prev => [...prev, '', '$ cat experience.txt']);
          executeCommand('cat experience.txt', false);
        }, 500);
        return;

      default:
        if (command.startsWith('cat ')) {
          const filename = command.split(' ')[1];
          output = [`cat: ${filename}: No such file or directory`];
        } else if (command === '') {
          return;
        } else {
          output = [`Command not found: ${cmd}`, 'Type "help" for available commands.'];
        }
    }

    setTimeout(() => {
      if (command === 'clear') {
        // For clear command, just empty the history
        setHistory([]);
      } else {
        // For other commands, replace history with current command and output
        setHistory(prev => [...prev, '', ...output, '']);
      }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] text-[var(--terminal-text)] font-mono">
      <div className="max-w-5xl mx-auto p-3 sm:p-6">
        {/* Welcome Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--terminal-green)] mb-2">
            Welcome to astroom's Interactive CV
          </h1>
          <p className="text-[var(--terminal-gray)] text-sm sm:text-base mb-4">
            System Administrator & Full-Stack Developer | Gothenburg, Sweden
          </p>
        </header>

        {/* Quick Actions - Front and Center */}
        <nav aria-label="CV Navigation" className="mb-6 bg-[var(--terminal-surface)] border border-[var(--terminal-border)] rounded-lg p-4">
          <div className="text-center mb-3">
            <h2 className="text-lg font-bold text-[var(--terminal-blue)] mb-1">🚀 Explore My CV</h2>
            <p className="text-xs text-[var(--terminal-yellow)]">
              Click sections below or use terminal commands
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            <button
              onClick={() => executeCommand('cat about.txt')}
              className="terminal-button primary text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
              aria-label="View About section - Personal background and overview"
            >
              <span className="text-base" aria-hidden="true">📋</span>
              <span>About</span>
            </button>

            <button
              onClick={() => executeCommand('cat experience.txt')}
              className="terminal-button primary text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
              aria-label="View Work Experience - Professional employment history"
            >
              <span className="text-base" aria-hidden="true">💼</span>
              <span>Work</span>
            </button>

            <button
              onClick={() => executeCommand('cat projects.txt')}
              className="terminal-button primary text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
            >
              <span className="text-base">🚀</span>
              <span>Projects</span>
            </button>

            <button
              onClick={() => executeCommand('cat skills.txt')}
              className="terminal-button primary text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
            >
              <span className="text-base">🛠️</span>
              <span>Skills</span>
            </button>

            <button
              onClick={() => executeCommand('cat education.txt')}
              className="terminal-button primary text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
            >
              <span className="text-base">🎓</span>
              <span>Education</span>
            </button>

            <button
              onClick={() => executeCommand('contact')}
              className="terminal-button primary text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
            >
              <span className="text-base">📧</span>
              <span>Contact</span>
            </button>

            <button
              onClick={() => executeCommand('github')}
              className="terminal-button text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
            >
              <span className="text-base">💾</span>
              <span>GitHub</span>
            </button>

            <button
              onClick={() => executeCommand('help')}
              className="terminal-button text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
            >
              <span className="text-base">❓</span>
              <span>Help</span>
            </button>

            <button
              onClick={() => executeCommand('clear')}
              className="terminal-button text-xs px-2 py-2 flex flex-col items-center gap-1 hover:scale-105 transition-transform"
            >
              <span className="text-base">🗑️</span>
              <span>Clear</span>
            </button>
          </div>
        </nav>

        {/* Terminal Interface */}
        <section aria-label="Interactive Terminal" className="terminal-container">
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <div className="flex gap-1" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs">astroom@cv-terminal:~</span>
            </div>
          </div>

          <div
            ref={terminalRef}
            className="terminal-content h-[60vh] sm:h-[60vh] overflow-y-auto cursor-text"
          >
            <div className="mb-4">
              <div className="text-[var(--terminal-green)] font-bold">
                Interactive Terminal Interface
              </div>
              <div className="text-[var(--terminal-gray)] text-sm">
                Type commands like "cat about.txt" or "help" to explore. Use buttons above for easier navigation.
              </div>
              <div className="border-b border-[var(--terminal-border)] my-2"></div>
            </div>

            <div className="space-y-1">
              {history.map((line, index) => (
                <div key={index} className="text-sm">
                  {line.startsWith('$ ') ? (
                    <div className="text-[var(--terminal-green)]">{line}</div>
                  ) : line.startsWith('#') ? (
                    <div className="text-[var(--terminal-blue)] font-semibold">{line}</div>
                  ) : line.startsWith('##') ? (
                    <div className="text-[var(--terminal-yellow)] font-semibold">{line}</div>
                  ) : line.startsWith('cat:') || line.startsWith('Command not found:') ? (
                    <div className="text-[var(--terminal-red)]">{line}</div>
                  ) : line.includes('@') && (line.includes('UltraServers') || line.includes('Buddleja') || line.includes('365Hosts') || line.includes('Pine Hosting') || line.includes('Dokibird')) ? (
                    <div className="text-[var(--terminal-text)] flex items-center gap-2">
                      {line.includes('UltraServers') && <CompanyLogo company="ultraservers" />}
                      {line.includes('Buddleja') && <CompanyLogo company="buddleja" />}
                      {line.includes('365Hosts') && <CompanyLogo company="365hosts" />}
                      {line.includes('Pine Hosting') && <CompanyLogo company="pinehosting" />}
                      {line.includes('Dokibird') && <CompanyLogo company="dokibird" />}
                      <span className="ml-2">{line}</span>
                    </div>
                  ) : (
                    <div className="text-[var(--terminal-text)]">{line}</div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center mt-2" role="search">
              <span className="text-[var(--terminal-green)] mr-2" aria-hidden="true">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[var(--terminal-text)]"
                placeholder="Type a command..."
                aria-label="Terminal command input - Type commands like 'cat about.txt' or 'help'"
                autoFocus
              />
            </form>
          </div>
        </section>

        <footer className="mt-4 text-xs text-[var(--terminal-gray)] text-center">
          💡 Try commands: <kbd className="text-[var(--terminal-blue)]">ls</kbd>, <kbd className="text-[var(--terminal-blue)]">cat experience.txt</kbd>, <kbd className="text-[var(--terminal-blue)]">cat projects.txt</kbd>, <kbd className="text-[var(--terminal-blue)]">help</kbd>
        </footer>
      </div>
    </div>
  );
}
