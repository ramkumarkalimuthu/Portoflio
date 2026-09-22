import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-10 h-10" }) => {
  switch (name.toLowerCase()) {
    case 'html5':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <polygon points="15,90 8,10 92,10 85,90 50,100" fill="#E44D26"/>
          <polygon points="50,92 78,84 84,18 50,18" fill="#F16529"/>
          <polygon points="50,32 50,46 68,46 67,58 50,58 50,72 65,68 66,54 66,54 70,32" fill="#EBEBEB"/>
          <polygon points="50,32 30,32 32,46 50,46" fill="#FFFFFF"/>
          <polygon points="50,58 33,58 34,70 50,74 50,88 31,82 28,46 28,46 26,20 50,20" fill="#FFFFFF"/>
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <polygon points="15,90 8,10 92,10 85,90 50,100" fill="#1572B6"/>
          <polygon points="50,92 78,84 84,18 50,18" fill="#33A9DC"/>
          <polygon points="50,32 68,32 67,46 50,46 50,58 66,58 64,74 50,78 50,91 73,85 76,46 76,32 77,19 50,19" fill="#EBEBEB"/>
          <polygon points="50,32 50,19 23,19 26,46 50,46" fill="#FFFFFF"/>
          <polygon points="50,58 35,58 36,73 50,77 50,91 29,85 27,65 27,58" fill="#FFFFFF"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="16" fill="#F7DF1E"/>
          <path d="M28 42 V70 Q28 82 40 82 Q46 82 50 78 L47 70 Q44 73 40 73 Q36 73 36 67 V42 Z" fill="#000000"/>
          <path d="M56 68 Q58 74 65 74 Q71 74 71 69 Q71 63 60 59 Q51 55 51 46 Q51 36 64 36 Q71 36 76 41 L71 49 Q67 44 63 44 Q58 44 58 48 Q58 52 68 56 Q78 60 78 69 Q78 82 65 82 Q55 82 50 72 Z" fill="#000000"/>
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 100 60" className={className} fill="none">
          <ellipse cx="50" cy="30" rx="48" ry="26" fill="#777BB4"/>
          <text x="50" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="800" fontFamily="sans-serif">php</text>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="45" fill="#F8FAFC"/>
          <path d="M30 65 C25 50 35 35 50 30 C65 25 80 40 70 65 C60 55 45 60 30 65 Z" fill="#00758F"/>
          <path d="M68 62 C73 55 75 45 70 38 C60 48 55 60 68 62 Z" fill="#F29111"/>
          <text x="50" y="80" textAnchor="middle" fill="#00758F" fontSize="12" fontWeight="700">MySQL</text>
        </svg>
      );
    case 'wordpress':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="45" fill="#21759B"/>
          <circle cx="50" cy="50" r="41" stroke="#FFFFFF" strokeWidth="3" fill="none"/>
          <path d="M23 50 C23 37 32 26 44 23 L28 67 C25 62 23 56 23 50 Z" fill="#FFFFFF"/>
          <path d="M69 48 C69 43 67 40 65 37 C62 33 60 31 60 27 C60 23 62 20 66 20 C67 20 68 20 69 21 C64 16 57 14 50 14 C42 14 35 17 30 22 C32 22 34 22 36 24 C38 26 40 30 40 33 L45 54 L53 28 C54 25 54 22 53 20 C59 20 64 20 69 20 L58 54 L68 49 Z" fill="#FFFFFF"/>
          <path d="M50 86 C55 86 59 85 64 82 L53 50 L42 81 C45 84 47 86 50 86 Z" fill="#FFFFFF"/>
          <path d="M72 67 L78 50 C78 50 78 51 78 52 C78 57 76 62 72 67 Z" fill="#FFFFFF"/>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(30 50 50)"/>
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(90 50 50)"/>
          <ellipse cx="50" cy="50" rx="38" ry="14" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(150 50 50)"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect x="15" y="15" width="70" height="70" rx="14" fill="#F05032" transform="rotate(45 50 50)"/>
          <circle cx="38" cy="50" r="6" fill="#FFFFFF"/>
          <circle cx="62" cy="38" r="6" fill="#FFFFFF"/>
          <circle cx="62" cy="62" r="6" fill="#FFFFFF"/>
          <line x1="38" y1="50" x2="62" y2="38" stroke="#FFFFFF" strokeWidth="4"/>
          <line x1="38" y1="50" x2="62" y2="62" stroke="#FFFFFF" strokeWidth="4"/>
        </svg>
      );
    case 'vmz':
      return (
        <div className={`${className} bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center font-bold text-sky-400 text-xs tracking-wider shadow-sm`}>
          VMZ
        </div>
      );
    case 'litmus':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <circle cx="50" cy="50" r="45" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2"/>
          <circle cx="50" cy="30" r="10" fill="#E23E57"/>
          <circle cx="67" cy="40" r="10" fill="#F78888"/>
          <circle cx="67" cy="60" r="10" fill="#F7DC6F"/>
          <circle cx="50" cy="70" r="10" fill="#58D68D"/>
          <circle cx="33" cy="60" r="10" fill="#5DADE2"/>
          <circle cx="33" cy="40" r="10" fill="#AF7AC5"/>
        </svg>
      );
    case 'emailonacid':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect width="100" height="100" rx="20" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2"/>
          <circle cx="50" cy="50" r="28" fill="#6BBF43" opacity="0.15"/>
          <path d="M50 25 C45 25 40 40 32 55 C26 66 34 76 50 76 C66 76 74 66 68 55 C60 40 55 25 50 25 Z" fill="#6BBF43"/>
          <circle cx="44" cy="58" r="4" fill="#FFFFFF"/>
          <circle cx="56" cy="58" r="4" fill="#FFFFFF"/>
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
          <rect x="25" y="15" width="25" height="24" rx="12" fill="#F24E1E"/>
          <rect x="50" y="15" width="25" height="24" rx="12" fill="#FF7262"/>
          <rect x="50" y="39" width="25" height="24" rx="12" fill="#1ABCFE"/>
          <rect x="25" y="39" width="25" height="24" rx="12" fill="#A259FF"/>
          <rect x="25" y="63" width="25" height="24" rx="12" fill="#0ACF83"/>
        </svg>
      );
    default:
      return (
        <div className={`${className} bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-300 font-bold`}>
          {name.slice(0, 3)}
        </div>
      );
  }
};
