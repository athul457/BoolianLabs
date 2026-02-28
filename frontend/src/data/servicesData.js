// // import { Globe, Database, Bot, Share2, TrendingUp, Brain, Smartphone, Briefcase, Palette, Box, Layers, Monitor } from 'lucide-react';

// // export const services = [
// //   {
// //     icon: Monitor, // Changed from Globe to Monitor to represent the broader category
// //     title: "Website Development",
// //     description: "Complete web solutions from design to deployment.",
// //     subServices: [
// //       { 
// //         title: "Custom Development", 
// //         description: "High-performance websites built for speed, SEO, and conversions." 
// //       },
// //       { 
// //         title: "UI/UX Design", 
// //         description: "User-centered, conversion-focused interface and experience design." 
// //       },
// //       { 
// //         title: "Portfolio Websites", 
// //         description: "Professional personal and corporate portfolio websites." 
// //       }
// //     ]
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: "Digital Marketing",
// //     description: "Data-driven strategies to grow your brand and revenue.",
// //     subServices: [
// //       { 
// //         title: "Social Media Marketing", 
// //         description: "Strategic content creation and paid campaigns to grow brand visibility." 
// //       },
// //       { 
// //         title: "AI Marketing", 
// //         description: "Predictive analytics and AI-powered campaigns for targeted reach." 
// //       }
// //     ]
// //   },
// //   {
// //     icon: Smartphone,
// //     title: "Mobile App Development",
// //     description: "Cross-platform Android & iOS applications built for performance and scalability."
// //   },
// //   {
// //     icon: Database,
// //     title: "ERP Development",
// //     description: "Scalable Enterprise Resource Planning systems to streamline business operations."
// //   },
// //   {
// //     icon: Bot,
// //     title: "AI Automation",
// //     description: "Intelligent automation solutions to reduce manual work and increase efficiency."
// //   },
// //   {
// //     icon: Box,
// //     title: "3D Modeling & Blender",
// //     description: "High-quality 3D models, product visualizations, and animations using Blender."
// //   }
// // ];



// import { Globe, Database, Bot, Share2, TrendingUp, Brain, Smartphone, Briefcase, Palette, Box, Layers, Monitor } from 'lucide-react';

// export const services = [
//   {
//     icon: Monitor,
//     title: "Website Development",
//     description: "Modern, responsive, and performance-driven websites designed to help businesses build credibility, attract customers, and grow online.",
//     subServices: [
//       { 
//         title: "Custom Web Development", 
//         description: "Fully customized websites built with clean code, fast loading speed, and SEO-friendly structure to ensure long-term performance and scalability." 
//       },
//       { 
//         title: "UI/UX Design", 
//         description: "User-focused design that improves clarity, usability, and engagement—helping visitors easily understand your services and take action." 
//       },
//       { 
//         title: "Portfolio & Business Websites", 
//         description: "Professional portfolio and company websites tailored to showcase your work, services, and brand identity effectively." 
//       }
//     ]
//   },
//   {
//     icon: TrendingUp,
//     title: "Digital Marketing",
//     description: "Strategic and data-driven marketing solutions designed to increase visibility, improve engagement, and strengthen your brand presence online.",
//     subServices: [
//       { 
//         title: "Social Media Marketing", 
//         description: "Content strategy, creative posts, and targeted ad campaigns designed to grow your audience and build meaningful customer connections." 
//       },
//       { 
//         title: "AI-Powered Marketing", 
//         description: "Advanced analytics and automation tools used to optimize campaigns, improve targeting accuracy, and enhance marketing performance." 
//       }
//     ]
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile App Development",
//     description: "High-performance Android and iOS applications built with scalable architecture, user-friendly design, and seamless functionality to enhance customer engagement."
//   },
//   {
//     icon: Database,
//     title: "ERP Development",
//     description: "Custom Enterprise Resource Planning systems that centralize operations, automate workflows, and improve efficiency across departments."
//   },
//   {
//     icon: Bot,
//     title: "AI Automation",
//     description: "Smart automation systems that reduce manual workload, streamline repetitive tasks, and improve operational productivity using artificial intelligence."
//   },
//   {
//     icon: Box,
//     title: "3D Modeling & Blender",
//     description: "Professional 3D models, product visualizations, and animations created to enhance presentations, marketing materials, and digital experiences."
//   }
// ];


import webAnimation from "../assets/lottie/web.json";
import marketingAnimation from "../assets/lottie/marketing.json";
import mobileAnimation from "../assets/lottie/mobile.json";
import erpAnimation from "../assets/lottie/erp.json";
import aiAnimation from "../assets/lottie/ai.json";
import blenderAnimation from "../assets/lottie/blender.json";
import aidevAnimation from "../assets/lottie/aidev.json";

export const services = [
  {
    animation: webAnimation,
    slug: "website-development",
    title: "Website Development",
    description: "Modern websites that build trust and help your business grow online.",
    subServices: [
      {
  title: "Custom Web Development",
  description: "We build secure, scalable full-stack web applications using modern technologies. From responsive frontends to robust backend APIs and database architecture, our solutions are engineered for performance, security, and long-term growth."
},
{
  title: "UI/UX Design",
  description: "We design clean, conversion-focused interfaces that prioritize usability and clarity. Every layout is structured to enhance user flow, reduce friction, and create seamless digital experiences across all devices."
},
{
  title: "E-Commerce Solutions",
  description: "We develop scalable e-commerce platforms with secure authentication, payment gateway integration, inventory management, and performance optimization—ensuring a smooth buying experience and reliable backend control."
},
{
  title: "Portfolio & Corporate Websites",
  description: "We create high-performance corporate and portfolio websites that establish credibility, communicate brand value clearly, and drive engagement through modern design and optimized structure."
},
{
  title: "Full-Stack Web Applications",
  description: "From idea to deployment, we build dynamic web applications with secure authentication, role-based access control, API integrations, and database optimization tailored to your business workflows."
},
{
  title: "Authentication & Security Implementation",
  description: "We implement secure login systems, JWT-based authentication, role-based authorization, and protected routes to safeguard your application and user data."
},
{
  title: "API Development & Integration",
  description: "We design and integrate RESTful APIs that enable seamless communication between systems, third-party services, and frontend applications."
},
{
  title: "Database Architecture & Optimization",
  description: "We structure and optimize databases for performance, scalability, and reliability, ensuring efficient data handling as your business grows."
},
{
  title: "Deployment & Cloud Setup",
  description: "We handle application deployment, hosting configuration, environment setup, and performance optimization to ensure your web solution runs smoothly in production."
},
{
  title: "Performance Optimization",
  description: "We analyze and optimize application speed, reduce load times, compress assets, and improve overall performance to deliver fast and efficient user experiences."
}
    ]
  },
  {
    animation: marketingAnimation,
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Smart marketing strategies to increase visibility and reach more customers.",
    subServices: [
{
  title: "Search Engine Optimization (SEO)",
  description: "Boolean Technologies develops data-driven, custom SEO strategies designed to accelerate sustainable organic growth. From in-depth keyword research and technical audits to on-page optimization and high-quality link building, we position your brand to rank higher, attract qualified traffic, and dominate search results."
},
{
  title: "Social Media Marketing (SMM)",
  description: "We create strategic, engagement-focused social media campaigns tailored to your brand voice and audience behavior. Through compelling content, community management, and performance tracking, we strengthen brand loyalty and drive measurable conversions across all major platforms."
},
{
  title: "Performance Marketing & Paid Advertising",
  description: "Maximize ROI with precision-targeted paid campaigns across Google, Meta, LinkedIn, and YouTube. Our data-driven advertising strategies focus on audience targeting, conversion tracking, A/B testing, and continuous optimization to generate high-quality leads and scalable revenue growth."
},
{
  title: "Content Marketing & Brand Storytelling",
  description: "We craft value-driven content strategies that educate, engage, and convert. From SEO blogs and website copy to video scripts and campaign messaging, our content builds authority, nurtures trust, and moves your audience seamlessly through the sales funnel."
},
{
  title: "Conversion Rate Optimization (CRO)",
  description: "Driving traffic is only half the equation. We analyze user behavior, optimize landing pages, refine funnels, and conduct A/B testing to increase conversions and maximize the performance of every marketing campaign."
},
{
  title: "Email Marketing & Automation",
  description: "Through strategic email campaigns and intelligent automation workflows, we nurture leads, re-engage prospects, and increase customer lifetime value. Our personalized communication strategies turn prospects into loyal brand advocates."
},
{
  title: "Analytics & Performance Tracking",
  description: "We implement advanced analytics and conversion tracking systems to measure every interaction. With transparent reporting and actionable insights, we continuously refine strategies to ensure consistent growth and measurable success."
}
    ]
  },
  {
    animation: mobileAnimation,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "User-friendly Android and iOS apps built for performance and growth.",
    subServices: [
      {
  title: "Cross-Platform App Development",
  description: "We develop scalable mobile applications using modern cross-platform technologies, enabling seamless performance across both Android and iOS. By leveraging efficient code architecture and reusable components, we accelerate development while maintaining high performance and consistent user experience."
},
{
  title: "Backend-Powered Mobile Applications",
  description: "Our mobile solutions are supported by secure, scalable backend systems. From authentication and role-based access control to API integrations and database management, we ensure your application operates reliably under real-world usage."
},
{
  title: "API & Third-Party Integration",
  description: "We integrate payment gateways, cloud services, analytics tools, and external APIs to extend your app’s capabilities and streamline user workflows."
},
{
  title: "App Maintenance & Performance Optimization",
  description: "Post-launch, we provide ongoing support, performance monitoring, bug fixes, and feature enhancements. As your user base grows, we optimize infrastructure and improve scalability to maintain smooth and reliable performance."
}
    ]
  },
  {
    animation: erpAnimation,
    slug: "erp-development",
    title: "ERP Development",
    description: "Custom systems to manage and automate your business operations.",
    subServices: [
      {
        title: "Custom ERP Architecture",
        description: "Off-the-shelf software rarely fits complex business workflows perfectly. Boolean Technologies engineers bespoke Enterprise Resource Planning systems from the ground up, centralizing your daily operations into a single, intuitive dashboard fully tailored to your unique operational logic."
      },
      {
        title: "Supply Chain & Inventory Management",
        description: "Gain absolute transparency over your logistics. We build intelligent tracking systems that automate stock levels, predict supply shortages, and streamline your entire supply chain. Say goodbye to manual counting and human errors with real-time inventory insights."
      },
      {
        title: "HR & Payroll Integration",
        description: "Empower your human resources team with automated, compliance-driven tools. Our custom modules streamline employee onboarding, time tracking, performance reviews, and complex payroll calculations, allowing your HR department to focus on culture rather than paperwork."
      },
      {
        title: "Advanced Analytics & Reporting",
        description: "Data is only valuable if it is readable. Our ERP solutions feature highly visual, real-time dashboards equipped with custom metrics and predictive analytics. Make informed, strategic business decisions supported by crystal-clear data visualizations."
      }
    ]
  },
  {
    animation: aiAnimation,
    slug: "ai-automation",
    title: "AI Automation",
    description: "Automate repetitive tasks and improve efficiency with AI solutions.",
    subServices: [
      {
        title: "Intelligent Workflow Automation",
        description: "Free your team from hours of repetitive, manual tasks. We integrate sophisticated AI agents directly into your business pipelines to handle data entry, document processing, and email routing. This dramatically reduces margin of error while skyrocketing your team's overall productivity."
      },
      {
        title: "AI-Powered Customer Support",
        description: "Deliver exceptional customer service 24/7 without expanding your human headcount. Our advanced NLP chatbots understand context and sentiment, capable of resolving complex customer queries, processing refunds, and routing highly specific issues to the correct human agents."
      },
      {
        title: "Predictive Business Analytics",
        description: "Stop reacting to the market and start predicting it. We build AI models that analyze your historical business data to forecast future trends, detect seasonal anomalies, and provide actionable recommendations on pricing and product demand before shifts even happen."
      },
      {
        title: "Smart System Integration",
        description: "You don't need to rebuild your tech stack to benefit from AI. We seamlessly connect modern artificial intelligence capabilities into your existing legacy software, CRMs, or ERPs through customized API gateways, instantly modernizing your company's infrastructure."
      }
    ]
  },
  {
    animation: blenderAnimation,
    slug: "3d-modeling-blender",
    title: "3D Modeling & Blender",
    description: "Professional 3D visuals for products, marketing, and presentations.",
    subServices: [
      {
        title: "Photorealistic Product Rendering",
        description: "Elevate your marketing materials with breathtaking, photorealistic 3D product visualizations. Long before the physical manufacturing process is even finished, we can provide you with studio-quality renders of your products from every angle to use in catalogs, websites, and advertisements."
      },
      {
        title: "Architectural Visualization",
        description: "Bring blueprints to life with highly detailed 3D property models. We craft immersive interior and exterior visualizations for real estate developers and architects. Show your clients exactly what a space will look like with hyper-realistic lighting, textures, and environments."
      },
      {
        title: "3D Animation & Motion Graphics",
        description: "Capture attention in a crowded digital landscape with dynamic 3D motion graphics. From complex mechanical breakdowns demonstrating how a product works internally to eye-catching social media loops, our Blender experts create animations that deeply engage your audience."
      },
      {
        title: "AR & WebGL Assets",
        description: "Step into the future of e-commerce. We design highly optimized 3D models specifically tailored for the web and Augmented Reality. Allow your customers to spin, interact with, and project your products into their own physical space right from their mobile browser."
      }
    ]
  },
  {
    animation: aidevAnimation,
    slug: "ai-development",
    title: "AI Development",
    description: "Advanced artificial intelligence solutions to empower your business.",
    subServices: [
      {
        title: "Generative AI Solutions",
        description: "Harness the power of Large Language Models to automate content creation. From custom text generation fine-tuned on your company's unique voice to automated image creation for marketing, we build bespoke generative tools that act as an undeniable force multiplier for your creative teams."
      },
      {
        title: "Computer Vision & Object Detection",
        description: "Grant your software the ability to see and understand the world. We train sophisticated neural networks capable of real-time object detection, quality control inspection, facial recognition, and complex image analysis—ideal for manufacturing, security, and healthcare applications."
      },
      {
        title: "Custom Machine Learning Models",
        description: "We don't just use APIs; we build them. Our data scientists design, train, and deploy proprietary machine learning models tailored exclusively to your highly specific datasets. Whether it's fraud detection algorithms or personalized recommendation engines, we build algorithms that give you a competitive edge."
      }
    ]
  }
];
