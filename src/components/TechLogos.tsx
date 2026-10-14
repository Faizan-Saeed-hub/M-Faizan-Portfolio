import React from 'react';

interface LogoProps {
  className?: string;
}

export const Html5Logo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#E34F26"/>
    <path d="M12 3.8V20.2L16.8 18.8L18.3 3.8H12Z" fill="#EF652A"/>
    <path d="M8.2 7.2H15.8L15.6 9.4H10.6L10.8 11.6H15.4L15 15.6L12 16.4L9 15.6L8.8 13.2H6.6L7 17.6L12 19L17 17.6L17.7 7.2H8.2Z" fill="white"/>
  </svg>
);

export const Css3Logo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#1572B6"/>
    <path d="M12 3.8V20.2L16.8 18.8L18.3 3.8H12Z" fill="#33A9DC"/>
    <path d="M8.2 7.2H15.8L15.6 9.4H10.6L10.8 11.6H15.4L15 15.6L12 16.4L9 15.6L8.8 13.2H6.6L7 17.6L12 19L17 17.6L17.7 7.2H8.2Z" fill="white"/>
  </svg>
);

export const JavaScriptLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
    <path d="M7 17.5C7.8 18.2 8.7 18.5 9.8 18.5C11.3 18.5 12.3 17.6 12.3 16V10H10.3V16C10.3 16.6 10 16.9 9.5 16.9C9 16.9 8.5 16.6 8 16.2L7 17.5ZM13.8 18.3C14.8 18.8 16 19.1 17.3 19.1C19.7 19.1 21.2 17.8 21.2 15.7C21.2 13.9 20.1 13 18.5 12.3L17.8 12C16.9 11.6 16.4 11.2 16.4 10.6C16.4 10 17 9.5 17.8 9.5C18.6 9.5 19.3 9.8 19.9 10.3L20.8 9C19.9 8.3 18.9 8 17.7 8C15.6 8 14.3 9.3 14.3 11.1C14.3 12.8 15.3 13.7 17 14.4L17.7 14.7C18.7 15.2 19.2 15.6 19.2 16.3C19.2 17.1 18.4 17.7 17.3 17.7C16.2 17.7 15.2 17.2 14.6 16.6L13.8 18.3Z" fill="#000000"/>
  </svg>
);

export const TypeScriptLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="3" fill="#3178C6"/>
    <path d="M12.5 10H7.5V12H9V19H11V12H12.5V10ZM13.8 18.3C14.8 18.8 16 19.1 17.3 19.1C19.7 19.1 21.2 17.8 21.2 15.7C21.2 13.9 20.1 13 18.5 12.3L17.8 12C16.9 11.6 16.4 11.2 16.4 10.6C16.4 10 17 9.5 17.8 9.5C18.6 9.5 19.3 9.8 19.9 10.3L20.8 9C19.9 8.3 18.9 8 17.7 8C15.6 8 14.3 9.3 14.3 11.1C14.3 12.8 15.3 13.7 17 14.4L17.7 14.7C18.7 15.2 19.2 15.6 19.2 16.3C19.2 17.1 18.4 17.7 17.3 17.7C16.2 17.7 15.2 17.2 14.6 16.6L13.8 18.3Z" fill="white"/>
  </svg>
);

export const ReactLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const TailwindLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.16667 10.5 8.5C11.3333 8.70833 11.9167 9.33333 12.5833 10C13.6667 11.125 14.9167 12.5 18 12.5C20.6667 12.5 22.3333 11.1667 23 8.5C22 9.83333 20.8333 10.3333 19.5 10C18.6667 9.79167 18.0833 9.16667 17.4167 8.5C16.3333 7.375 15.0833 6 12 6ZM6 12.5C3.33333 12.5 1.66667 13.8333 1 16.5C2 15.1667 3.16667 14.6667 4.5 15C5.33333 15.2083 5.91667 15.8333 6.58333 16.5C7.66667 17.625 8.91667 19 12 19C14.6667 19 16.3333 17.6667 17 15C16 16.3333 14.8333 16.8333 13.5 16.5C12.6667 16.2917 12.0833 15.6667 11.4167 15C10.3333 13.875 9.08333 12.5 6 12.5Z" fill="#38BDF8"/>
  </svg>
);

export const NodeLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#539E43"/>
    <path d="M12 4.2L19.2 8.4V15.6L12 19.8L4.8 15.6V8.4L12 4.2Z" fill="#68A063"/>
    <path d="M12 7.5L16 9.8V14.2L12 16.5L8 14.2V9.8L12 7.5Z" fill="white"/>
  </svg>
);

export const ExpressLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#252525"/>
    <path d="M6 15L10 9M10 15L6 9M12 15V9H15C16.1 9 17 9.9 17 11C17 12.1 16.1 13 15 13H12M15 13L17.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const MySqlLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#00618A"/>
    <path d="M6 16.5C6 14 8 12 10.5 12C13 12 15 14 15 16.5H6Z" fill="#E48E00"/>
    <path d="M12 7.5C13.5 7.5 15 8.5 16 10C17 11.5 18 13.5 18 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const PythonLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M11.9 2C8.3 2 8.5 3.5 8.5 3.5V5.1H12.1V5.6H5.2C5.2 5.6 2 5.2 2 9.4C2 13.5 4.8 13.3 4.8 13.3H6.4V11.2C6.4 8.7 8.5 8.7 8.5 8.7H12.1C14.4 8.7 14.4 6.7 14.4 6.7V3.5C14.4 3.5 14.7 2 11.9 2ZM10.2 3.5C10.7 3.5 11.1 3.9 11.1 4.4C11.1 4.9 10.7 5.3 10.2 5.3C9.7 5.3 9.3 4.9 9.3 4.4C9.3 3.9 9.7 3.5 10.2 3.5Z" fill="#387EB8"/>
    <path d="M12.1 22C15.7 22 15.5 20.5 15.5 20.5V18.9H11.9V18.4H18.8C18.8 18.4 22 18.8 22 14.6C22 10.5 19.2 10.7 19.2 10.7H17.6V12.8C17.6 15.3 15.5 15.3 15.5 15.3H11.9C9.6 15.3 9.6 17.3 9.6 17.3V20.5C9.6 20.5 9.3 22 12.1 22ZM13.8 20.5C13.3 20.5 12.9 20.1 12.9 19.6C12.9 19.1 13.3 18.7 13.8 18.7C14.3 18.7 14.7 19.1 14.7 19.6C14.7 20.1 14.3 20.5 13.8 20.5Z" fill="#FFE052"/>
  </svg>
);

export const GitLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21.6 10.9L13.1 2.4C12.6 1.9 11.7 1.9 11.2 2.4L9.3 4.3L11.7 6.7C12.2 6.5 12.8 6.7 13.2 7.1C13.6 7.5 13.8 8.1 13.6 8.6L16 11C16.5 10.8 17.1 11 17.5 11.4C18 11.9 18 12.8 17.5 13.3C17 13.8 16.1 13.8 15.6 13.3C15.2 12.9 15.1 12.3 15.3 11.8L13 9.5V15.3C13.2 15.5 13.3 15.7 13.3 16C13.3 16.7 12.7 17.3 12 17.3C11.3 17.3 10.7 16.7 10.7 16C10.7 15.5 11 15.1 11.4 14.9V9.1C11 8.9 10.7 8.5 10.7 8C10.7 7.7 10.8 7.5 11 7.3L8.6 4.9L2.4 11.2C1.9 11.7 1.9 12.6 2.4 13.1L10.9 21.6C11.4 22.1 12.3 22.1 12.8 21.6L21.6 12.8C22.1 12.3 22.1 11.4 21.6 10.9Z" fill="#F05032"/>
  </svg>
);

export const GitHubLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const VsCodeLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M17.5 2L5.8 11.2L2 8.3L1 9.4L4.3 12L1 14.6L2 15.7L5.8 12.8L17.5 22L23 19.3V4.7L17.5 2ZM17.5 16.7L9.5 12L17.5 7.3V16.7Z" fill="#007ACC"/>
  </svg>
);

export const PostmanLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
    <path d="M7 13.5L10 10.5L17 12L15 14L12 13.5L10 15.5L7 13.5Z" fill="white"/>
  </svg>
);

export const VercelLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L23 21H1L12 2Z" fill="white"/>
  </svg>
);

export const NetlifyLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 12L12 22L21 12L12 2Z" fill="#00C7B7"/>
    <path d="M12 6L7 12L12 18L17 12L12 6Z" fill="#004C54"/>
  </svg>
);

export const ViteLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21.5 4.5L12.5 21.5L2.5 4.5L12 6.5L21.5 4.5Z" fill="url(#viteGrad)" />
    <path d="M13 3L7.5 13H12L11 20L17 10H12.5L13 3Z" fill="#FFD62E" />
    <defs>
      <linearGradient id="viteGrad" x1="2.5" y1="4.5" x2="21.5" y2="21.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

export const NumpyLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#013243"/>
    <path d="M6 17V7L12 17V7M18 7V17" stroke="#4DABCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PandasLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#150458"/>
    <path d="M8 6V18M12 9V18M16 6V18" stroke="#FFD43B" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const ScikitLearnLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F89939"/>
    <circle cx="8" cy="12" r="4" fill="#3499CD"/>
    <circle cx="16" cy="12" r="4" fill="#F89939" stroke="white" strokeWidth="1.5"/>
  </svg>
);

export const AiBrainLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    <circle cx="12" cy="12" r="3" fill="#A855F7" fillOpacity="0.4"/>
  </svg>
);

export const CppLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7.8V16.2L12 22L22 16.2V7.8L12 2Z" fill="#00599C"/>
    <path d="M14.5 9.5C13.8 8.6 12.8 8 11.5 8C9 8 7 10 7 12.5C7 15 9 17 11.5 17C12.8 17 13.8 16.4 14.5 15.5L16 16.5C14.9 17.9 13.3 18.8 11.5 18.8C8 18.8 5.2 16 5.2 12.5C5.2 9 8 6.2 11.5 6.2C13.3 6.2 14.9 7.1 16 8.5L14.5 9.5Z" fill="white"/>
    <path d="M17 11.5V9.5H18.5V11.5H20.5V13H18.5V15H17V13H15V11.5H17Z" fill="#004482"/>
  </svg>
);

export const RestApiLogo: React.FC<LogoProps> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#0284C7"/>
    <path d="M6 12H18M18 12L14 8M18 12L14 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="6" cy="12" r="2" fill="white"/>
  </svg>
);

