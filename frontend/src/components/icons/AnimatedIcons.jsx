import { motion } from "framer-motion";

const iconTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

export const AnimatedWebDev = (props) => (
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
    {/* Browser Frame */}
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" />
    <path d="M2 7h20" stroke="currentColor" />

    {/* Content - Hero Box (Left) */}
    <motion.rect
      x="5"
      y="10"
      width="8"
      height="4"
      rx="1"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="none"
      variants={{
        hover: { scale: 1.1, x: 1 },
      }}
      transition={iconTransition}
    />
    <motion.rect
      x="5"
      y="10"
      width="8"
      height="4"
      rx="1"
      stroke="currentColor"
      variants={{
        hover: { scale: 1.1, x: 1 },
      }}
      transition={iconTransition}
    />

    {/* Content - Sidebar (Right) */}
    <motion.rect
      x="16"
      y="10"
      width="3"
      height="3"
      rx="1"
      stroke="currentColor"
      variants={{
        hover: { y: -2 },
      }}
      transition={{ ...iconTransition, delay: 0.1 }}
    />
    <motion.rect
      x="16"
      y="15"
      width="3"
      height="3"
      rx="1"
      stroke="currentColor"
      variants={{
        hover: { y: 2 },
      }}
      transition={{ ...iconTransition, delay: 0.2 }}
    />

    {/* Lines */}
    <motion.line
      x1="5"
      y1="16"
      x2="13"
      y2="16"
      stroke="currentColor"
      variants={{
        hover: { pathLength: [0, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
    />
    <motion.line
      x1="5"
      y1="18"
      x2="11"
      y2="18"
      stroke="currentColor"
      variants={{
        hover: { pathLength: [0, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 1 }}
    />
  </motion.svg>
);

export const AnimatedMarketing = (props) => (
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <motion.polyline
      points="17 6 23 6 23 12"
      variants={{
        hover: { scale: 1.2, translateX: 2, translateY: -2 },
      }}
      transition={iconTransition}
    />
    {/* Animated Bar Chart Bars */}
    <motion.rect
        x="2" y="20" width="4" height="0" fill="currentColor" fillOpacity="0.2" stroke="none"
        animate={{ height: [4, 10, 4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
     <motion.rect
        x="8" y="20" width="4" height="0" fill="currentColor" fillOpacity="0.2" stroke="none"
        animate={{ height: [8, 14, 8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
     <motion.rect
        x="14" y="20" width="4" height="0" fill="currentColor" fillOpacity="0.2" stroke="none"
        animate={{ height: [6, 12, 6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
    />
  </motion.svg>
);

export const AnimatedApp = (props) => (
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
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />

    {/* Notification Bubble Pop */}
    <motion.circle
      cx="16"
      cy="5"
      r="0"
      fill="currentColor"
      stroke="none"
      variants={{
        hover: { r: 2, y: -2 },
      }}
      transition={{ type: "spring", stiffness: 300 }}
    />

    {/* Screen Content Lines */}
     <motion.line
      x1="8"
      y1="8"
      x2="16"
      y2="8"
      variants={{
        hover: { scaleX: 1.1 },
      }}
      transition={iconTransition}
    />
    <motion.line
      x1="8"
      y1="12"
      x2="13"
      y2="12"
       variants={{
        hover: { scaleX: 1.1 },
      }}
      transition={{ ...iconTransition, delay: 0.1 }}
    />
  </motion.svg>
);

export const AnimatedERP = (props) => (
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
    <motion.path
      d="M3 5c0-1.1 4-2 9-2s9 .9 9 2"
      variants={{ hover: { y: -2 } }}
      transition={iconTransition}
    />
    <motion.ellipse
       cx="12" cy="5" rx="9" ry="2"
        variants={{ hover: { ry: 2.5 } }}
        transition={iconTransition}
    />

    <path d="M21 5v4c0 1.1-4 2-9 2s-9-.9-9-2V5" />
    
    <motion.path
      d="M21 9v4c0 1.1-4 2-9 2s-9-.9-9-2V9"
       variants={{ hover: { opacity: 0.5 } }}
       transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    />
     <path d="M21 13v4c0 1.1-4 2-9 2s-9-.9-9-2v-4" />


  </motion.svg>
);

export const AnimatedAI = (props) => (
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
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <motion.circle
        cx="12" cy="5" r="2"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
    
    {/* Blinking Eyes */}
    <motion.circle 
        cx="9" cy="16" r="1" fill="currentColor" stroke="none"
        variants={{ hover: { scaleY: [1, 0.1, 1] }}}
        transition={{ duration: 0.3, repeat: 3 }}
    />
     <motion.circle 
        cx="15" cy="16" r="1" fill="currentColor" stroke="none"
        variants={{ hover: { scaleY: [1, 0.1, 1] }}}
        transition={{ duration: 0.3, repeat: 3 }}
    />

  </motion.svg>
);

export const Animated3D = (props) => (
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
    <motion.path
       d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
       variants={{ hover: { rotate: 360 } }}
       transition={{ duration: 2, ease: "linear", repeat: Infinity }}
    />
    <path d="M3.27 6.96 12 12.01l8.73-5.05" />
    <path d="M12 22.08V12" />
  </motion.svg>
);

export const AnimatedAIDev = (props) => (
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
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 2.5 2.5 0 0 1-.3-4.5 2.5 2.5 0 0 1 1.13-4.66 2.5 2.5 0 0 1 4.6-2.13A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 2.5 2.5 0 0 0 .3-4.5 2.5 2.5 0 0 0-1.13-4.66 2.5 2.5 0 0 0-4.6-2.13A2.5 2.5 0 0 0 14.5 2Z" />
    <motion.path
      d="M12 4.5v15"
      stroke="currentColor"
      variants={{
        hover: { pathLength: [0, 1], opacity: [0.5, 1, 0.5] }
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.svg>
);
