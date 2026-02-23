import React from 'react';

const WebDevIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Browser Window Frame */}
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" />
      
      {/* Header Bar */}
      <path d="M2 7h20" stroke="currentColor" />
      
      {/* Content Layout */}
      {/* Hero Section Box (Left) */}
      <rect x="5" y="10" width="8" height="4" rx="1" fill="currentColor" fillOpacity="0.2" stroke="none" />
      <rect x="5" y="10" width="8" height="4" rx="1" stroke="currentColor" />
      
      {/* Sidebar/Widgets (Right) */}
      <rect x="16" y="10" width="3" height="3" rx="1" fill="currentColor" fillOpacity="0.2" stroke="none" />
      <rect x="16" y="10" width="3" height="3" rx="1" stroke="currentColor" />
      
      <rect x="16" y="15" width="3" height="3" rx="1" fill="currentColor" fillOpacity="0.2" stroke="none" />
      <rect x="16" y="15" width="3" height="3" rx="1" stroke="currentColor" />
      
      {/* Text Lines */}
      <line x1="5" y1="16" x2="13" y2="16" stroke="currentColor" />
      <line x1="5" y1="18" x2="11" y2="18" stroke="currentColor" />
    </svg>
  );
};

export default WebDevIcon;
