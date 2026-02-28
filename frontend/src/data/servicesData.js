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
        description: "Boolean Technologies specializes in building high-performance, custom websites tailored to your unique business needs. We craft platforms from the ground up to ensure lightning-fast loading speeds, robust security, and seamless scalability to handle future growth. Our custom web solutions are designed precisely to elevate your digital presence."
      },
      {
        title: "UI/UX Design",
        description: "Our dedicated design team focuses on user-centric aesthetics to create engaging, intuitive experiences. We prioritize clarity, usability, and modern visual trends to ensure your visitors easily navigate your services and convert into loyal customers. It's not just about looks; it's about seamless interaction."
      },
      {
        title: "E-Commerce Solutions",
        description: "Transform your retail business into a digital powerhouse. We develop fully featured e-commerce platforms complete with secure payment gateways, inventory management, and intuitive shopping carts. Our solutions are designed to maximize your conversions and provide absolute ease of use for both admins and shoppers."
      },
      {
        title: "Portfolio & Corporate Sites",
        description: "Make a powerful first impression with professional corporate websites and stunning portfolios. We design sites that elegantly showcase your brand narrative, achievements, and core services—establishing immediate credibility and trust with your target audience and stakeholders."
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
        description: "As a leading digital marketing agency, Boolean Technologies develops highly optimized, custom SEO strategies guaranteed to maximize your organic growth. Our experts perform meticulous keyword research, technical audits, and content optimization to secure top-ranking positions and drive high-intent traffic directly to your website."
      },
      {
        title: "Social Media Marketing (SMM)",
        description: "We create highly engaging and result-oriented social media campaigns designed to captivate audiences worldwide. By crafting strategic content tailored to each platform, we build meaningful customer connections, boost brand loyalty, and drive high conversion rates across all your social channels."
      },
      {
        title: "Google Ads & PPC",
        description: "Maximize your absolute return on investment with targeted Pay-Per-Click campaigns. Our dedicated team develops highly focused, data-driven advertising strategies using Google Ads. We precisely target your ideal demographic to generate high-quality leads and instant visibility in a competitive marketplace."
      },
      {
        title: "Content Marketing",
        description: "Content is the backbone of modern digital success. Our creative team produces compelling, value-driven content—from high-quality blog posts to engaging video scripts—that educates your audience, builds brand authority, and naturally guides users through the sales funnel."
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
        title: "Native iOS Development",
        description: "We build premium, high-performance applications exclusively for the Apple ecosystem. Using Swift and modern iOS frameworks, our team ensures your application integrates flawlessly with the latest Apple hardware, providing users with a fluid, secure, and intuitive experience."
      },
      {
        title: "Native Android Development",
        description: "Reach the massive global audience of Android users with robust, scalable native applications. We utilize Kotlin and Android Studio to develop highly responsive apps designed to run beautifully across the deeply fragmented landscape of Android devices and screen sizes."
      },
      {
        title: "Cross-Platform Apps",
        description: "Reduce time-to-market without sacrificing quality. Using cutting-edge frameworks like React Native and Flutter, we develop versatile applications that work seamlessly on both Android and iOS from a single codebase—ensuring consistent UI/UX and significantly lower maintenance costs."
      },
      {
        title: "App Maintenance & Scaling",
        description: "Our relationship doesn't end at launch. We provide comprehensive post-launch support, continuous performance monitoring, and rapid updates. As your user base grows, we ensure your backend infrastructure seamlessly scales to accommodate the increased demand without a hitch."
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
