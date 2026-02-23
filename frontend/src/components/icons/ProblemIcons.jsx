import { motion } from "framer-motion";

const iconTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
};

export const InvisibleIcon = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    whileHover="hover"
  >
    {/* Isometric Base Grid/Platform */}
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" opacity="0.1" fill="currentColor" stroke="none"/>
    
    {/* Ghost/Invisible Website Wireframe */}
    <motion.g
        animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -2, 0] }}
        transition={iconTransition}
    >
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeDasharray="4 2" />
        <line x1="6" y1="10" x2="10" y2="10" stroke="currentColor" strokeDasharray="2 2" />
        <line x1="6" y1="14" x2="18" y2="14" stroke="currentColor" strokeDasharray="2 2" />
    </motion.g>

    {/* Search Glass searching */}
    <motion.g
        animate={{ x: [-2, 2, -2], y: [-1, 1, -1], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
        <circle cx="16" cy="16" r="4" stroke="currentColor" />
        <path d="m19 19 3 3" stroke="currentColor" />
    </motion.g>
  </motion.svg>
);

export const OutdatedIcon = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    whileHover="hover"
  >
    {/* 3D CRT Monitor */}
    <path d="M3 5h18v12H3z" stroke="currentColor" /> {/* Screen Face */}
    <path d="M3 5l2-2h14l2 2" stroke="currentColor" /> {/* Top Side */}
    <path d="M21 5l2-2v12l-2 2" stroke="currentColor" /> {/* Right Side */}
    
    {/* Stand */}
    <path d="M8 21h8" stroke="currentColor" />
    <path d="M12 17v4" stroke="currentColor" />
    <path d="M7 21l1-4h8l1 4" stroke="currentColor" opacity="0.5"/> 

    {/* Pixelated/Loading Content */}
    <motion.path
        d="M10 10h4v2h-4z"
        fill="currentColor"
        stroke="none"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
    />
     <motion.path
        d="M12 12V8"
        stroke="currentColor"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        originX="12" originY="12" // Center of hour glass / clock
    />
  </motion.svg>
);

export const BrokenIcon = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    whileHover="hover"
  >
    {/* Isometric Phone Body */}
    <path d="M7 4h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" />
    
    {/* Cracks */}
    <motion.path 
        d="M16 6l-6 6 4 2-2 4" 
        stroke="currentColor" 
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
    />
    
    {/* Disconnected Signal */}
    <motion.path
        d="M12 2v2"
        stroke="currentColor"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
    />
    <motion.path d="M15 3l1 1" opacity="0.5"/>
    <motion.path d="M9 3l-1 1" opacity="0.5"/>
    
    {/* Shaking Animation */}
    <motion.g
       animate={{ rotate: [-1, 1, -1] }}
       transition={{ duration: 0.2, repeat: Infinity }}
    >
       <path d="M12 17h.01" strokeWidth="2" stroke="currentColor"/>
    </motion.g>
  </motion.svg>
);

export const NoInquiriesIcon = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    whileHover="hover"
  >
    {/* 3D Funnel Shape */}
    <motion.path 
        d="M22 3L2 3" 
        stroke="currentColor" 
    />
    <motion.path
        d="M2 3L10 13V21L14 21V13L22 3"
        stroke="currentColor"
        variants={{ hover: { y: 1 } }}
        transition={iconTransition}
    />
    <path d="M22 3c0 1.1-4.48 2-10 2S2 4.1 2 3" stroke="currentColor" />

    {/* Particles entering but disappearing (Ghost leads) */}
    <motion.circle
        cx="12" cy="1" r="1" fill="currentColor" opacity="0.5" stroke="none"
        animate={{ y: [0, 10], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
    />
    <motion.circle
        cx="16" cy="0" r="1" fill="currentColor" opacity="0.3" stroke="none"
        animate={{ y: [0, 12], x: [-2, -4], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, delay: 1, repeat: Infinity, ease: "easeIn" }}
    />
     <motion.circle
        cx="8" cy="2" r="1" fill="currentColor" opacity="0.4" stroke="none"
        animate={{ y: [0, 11], x: [2, 4], opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, delay: 0.5, repeat: Infinity, ease: "easeIn" }}
    />
    
    {/* Empty Drop at bottom */}
    {/* Nothing appearing at the bottom to signify "Not Receiving" */}
  </motion.svg>
);
