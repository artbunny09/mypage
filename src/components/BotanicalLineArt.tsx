import type { FC } from 'react';

interface BotanicalProps {
  className?: string;
  size?: number;
}

export const BotanicalBranch: FC<BotanicalProps> = ({ className = '', size = 280 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main central stem */}
      <path
        d="M20 180 Q 90 120, 150 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Delicate leaves */}
      <path
        d="M60 145 C 55 125, 30 130, 35 150 C 42 152, 54 148, 60 145 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M80 125 C 100 115, 105 135, 85 140 C 78 135, 78 128, 80 125 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M95 105 C 80 85, 60 95, 75 112 C 85 110, 92 108, 95 105 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M115 80 C 138 70, 140 92, 120 95 C 112 90, 113 84, 115 80 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M130 55 C 120 35, 100 45, 115 63 C 122 61, 128 58, 130 55 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M150 30 C 165 20, 170 38, 155 42 C 148 38, 148 33, 150 30 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Subtle nodes */}
      <circle cx="60" cy="145" r="1.5" fill="currentColor" />
      <circle cx="85" cy="125" r="1.5" fill="currentColor" />
      <circle cx="95" cy="105" r="1.5" fill="currentColor" />
      <circle cx="120" cy="80" r="1.5" fill="currentColor" />
      <circle cx="130" cy="55" r="1.5" fill="currentColor" />
    </svg>
  );
};

export const BotanicalLeafBadge: FC<BotanicalProps> = ({ className = '', size = 64 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 52 C 12 52, 24 20, 52 12 C 52 12, 44 44, 12 52 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M14 50 L 46 18"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
};
