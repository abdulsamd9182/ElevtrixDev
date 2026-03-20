'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaFileAlt,
  FaRegGem,
  FaRegCalendarCheck,
  FaChevronRight,
  FaSearch,
  FaBullseye,
  FaLink,
  FaAd,
  FaFacebook,
  FaGoogle,
  FaTiktok
} from 'react-icons/fa'

// Simple SVG icons for benefits (unchanged)
const simpleIcons = {
  clock: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>,
  users: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>,
  file: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>,
  award: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
}

// Types
interface ProcessStep {
  id: number;
  icon: JSX.Element;
  title: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  timeline: string;
  deliverables: string[];
  gradient: string;
  color: string;
  highlights: string[];
}

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
  stat: string;
  gradient: string;
}

interface TimelineStat {
  label: string;
  value: string;
  icon: JSX.Element;
}

// Define categories
type Category = 'development' | 'seo' | 'adcampaign';

const categories: { id: Category; label: string; icon: JSX.Element }[] = [
  { id: 'development', label: 'Development', icon: <FaCode className="text-sm" /> },
  { id: 'seo', label: 'SEO', icon: <FaSearch className="text-sm" /> },
  { id: 'adcampaign', label: 'Ad Campaign', icon: <FaAd className="text-sm" /> }
];

// Process steps for each category
const processStepsByCategory: Record<Category, ProcessStep[]> = {
  development: [
    {
      id: 1,
      icon: <FaLightbulb className="text-xl md:text-2xl text-yellow-500" />,
      title: 'Discovery',
      fullTitle: '1. Discovery & Strategy',
      description: 'Deep-dive into your business goals, audience, and competition.',
      longDescription: 'We conduct stakeholder interviews, analyze competitors, define your unique value proposition, and create a detailed project roadmap with clear milestones and success metrics.',
      timeline: '3-5 days',
      deliverables: [
        'Business analysis',
        'Competitor analysis',
        'User personas',
        'Project roadmap',
        'Scope of work',
        'Success metrics',
        'Risk assessment'
      ],
      highlights: ['Strategy', 'Research', 'Planning'],
      gradient: 'from-yellow-500 to-orange-500',
      color: 'yellow'
    },
    {
      id: 2,
      icon: <FaPencilRuler className="text-xl md:text-2xl text-blue-500" />,
      title: 'Design',
      fullTitle: '2. UI/UX Design',
      description: 'Intuitive interfaces and compelling visual experiences.',
      longDescription: 'From wireframes to high-fidelity mockups, we create intuitive user experiences that convert. We build comprehensive design systems ensuring consistency across all touchpoints.',
      timeline: '5-7 days',
      deliverables: [
        'Wireframes',
        'UI/UX design',
        'Brand guidelines',
        'Interactive prototype',
        'Design system',
        'Client reviews',
        'Accessibility audit'
      ],
      highlights: ['UI/UX', 'Branding', 'Prototyping'],
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue'
    },
    {
      id: 3,
      icon: <FaCode className="text-xl md:text-2xl text-purple-500" />,
      title: 'Development',
      fullTitle: '3. Development',
      description: 'Clean, scalable code with modern technologies.',
      longDescription: 'Using Next.js, Tailwind CSS, and Node.js, we transform designs into fast, responsive websites. We follow best practices with component reusability and performance optimization.',
      timeline: '2-4 weeks',
      deliverables: [
        'Frontend code',
        'Backend integration',
        'CMS setup',
        'Database design',
        'API development',
        'Unit tests',
        'Code documentation'
      ],
      highlights: ['Coding', 'Integration', 'Testing'],
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple'
    },
    {
      id: 4,
      icon: <FaRocket className="text-xl md:text-2xl text-green-500" />,
      title: 'Launch',
      fullTitle: '4. Launch & Deploy',
      description: 'Zero-downtime deployment and thorough testing.',
      longDescription: 'We handle domain configuration, SSL, hosting setup, and final testing. Your site loads fast and is fully optimized for search engines with proper analytics.',
      timeline: '3-5 days',
      deliverables: [
        'Deployment',
        'Performance optimization',
        'SEO setup',
        'Analytics config',
        'Security hardening',
        'Launch support',
        'Post-launch monitoring'
      ],
      highlights: ['Deployment', 'Optimization', 'Security'],
      gradient: 'from-green-500 to-emerald-500',
      color: 'green'
    },
    {
      id: 5,
      icon: <FaChartLine className="text-xl md:text-2xl text-orange-500" />,
      title: 'Growth',
      fullTitle: '5. Growth & Support',
      description: 'Data-driven optimization and ongoing support.',
      longDescription: 'We track metrics, provide monthly reports, and continuously optimize for better results. We\'re your long-term growth partner with priority support.',
      timeline: 'Ongoing',
      deliverables: [
        'Analytics dashboard',
        'Monthly reports',
        'A/B testing',
        'Priority support',
        'Feature updates',
        'SEO monitoring',
        'Growth strategy'
      ],
      highlights: ['Analytics', 'Optimization', 'Support'],
      gradient: 'from-orange-500 to-red-500',
      color: 'orange'
    }
  ],
  seo: [
    {
      id: 1,
      icon: <FaSearch className="text-xl md:text-2xl text-yellow-500" />,
      title: 'SEO Audit',
      fullTitle: '1. Comprehensive SEO Audit',
      description: 'In-depth analysis of your current SEO performance.',
      longDescription: 'We perform a full technical audit, analyze backlinks, review content quality, and identify opportunities for improvement. This sets the foundation for all SEO efforts.',
      timeline: '3-5 days',
      deliverables: [
        'Technical SEO audit',
        'Backlink analysis',
        'Content review',
        'Competitor analysis',
        'Keyword gap analysis',
        'Site speed report',
        'Action plan'
      ],
      highlights: ['Audit', 'Analysis', 'Strategy'],
      gradient: 'from-yellow-500 to-orange-500',
      color: 'yellow'
    },
    {
      id: 2,
      icon: <FaBullseye className="text-xl md:text-2xl text-blue-500" />,
      title: 'Keyword Research',
      fullTitle: '2. Keyword & Topic Strategy',
      description: 'Identify high-value keywords and content opportunities.',
      longDescription: 'We research search intent, competition, and volume to build a keyword map that drives qualified traffic. We align keywords with your business goals and user needs.',
      timeline: '2-4 days',
      deliverables: [
        'Keyword clusters',
        'Search intent analysis',
        'Content calendar',
        'Topic opportunities',
        'Competitor keywords',
        'Long-tail variations',
        'Priority rankings'
      ],
      highlights: ['Research', 'Strategy', 'Planning'],
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue'
    },
    {
      id: 3,
      icon: <FaFileAlt className="text-xl md:text-2xl text-purple-500" />,
      title: 'On-Page SEO',
      fullTitle: '3. On-Page Optimization',
      description: 'Optimize content, meta tags, and internal structure.',
      longDescription: 'We optimize title tags, meta descriptions, headers, and content for target keywords. We also improve internal linking, URL structure, and schema markup.',
      timeline: '1-2 weeks',
      deliverables: [
        'Meta tag optimization',
        'Content updates',
        'Internal linking',
        'Schema implementation',
        'Image optimization',
        'URL restructuring',
        'HTML improvements'
      ],
      highlights: ['Content', 'Structure', 'Schema'],
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple'
    },
    {
      id: 4,
      icon: <FaCode className="text-xl md:text-2xl text-green-500" />,
      title: 'Technical SEO',
      fullTitle: '4. Technical SEO & Site Health',
      description: 'Fix crawl errors, improve site speed, and ensure indexability.',
      longDescription: 'We address technical issues like broken links, duplicate content, XML sitemaps, robots.txt, and core web vitals. We ensure search engines can crawl and index your site efficiently.',
      timeline: '1 week',
      deliverables: [
        'Crawl error fixes',
        'XML sitemap',
        'Robots.txt optimization',
        'Core Web Vitals',
        'Mobile usability',
        'HTTPS/SSL check',
        'Structured data'
      ],
      highlights: ['Crawling', 'Indexing', 'Performance'],
      gradient: 'from-green-500 to-emerald-500',
      color: 'green'
    },
    {
      id: 5,
      icon: <FaLink className="text-xl md:text-2xl text-orange-500" />,
      title: 'Link Building',
      fullTitle: '5. Backlink Strategy',
      description: 'Earn high-quality backlinks to boost authority.',
      longDescription: 'We develop a link-building campaign focused on relevant, authoritative sites. We use white-hat techniques like guest posting, digital PR, and outreach to grow your domain authority.',
      timeline: 'Ongoing',
      deliverables: [
        'Backlink outreach',
        'Guest posts',
        'Broken link building',
        'Competitor backlink analysis',
        'Authority metrics',
        'Monthly reports',
        'Disavow file'
      ],
      highlights: ['Outreach', 'Authority', 'Growth'],
      gradient: 'from-orange-500 to-red-500',
      color: 'orange'
    }
  ],
  adcampaign: [
    {
      id: 1,
      icon: <FaBullseye className="text-xl md:text-2xl text-yellow-500" />,
      title: 'Strategy',
      fullTitle: '1. Campaign Strategy & Goals',
      description: 'Define objectives, target audience, and budget.',
      longDescription: 'We align with your business goals, identify your ideal customer, and set measurable KPIs. We determine which platforms (Meta, Google, TikTok) best reach your audience.',
      timeline: '2-3 days',
      deliverables: [
        'Campaign objectives',
        'Audience personas',
        'Budget allocation',
        'Platform selection',
        'KPIs & tracking',
        'Competitor analysis',
        'Creative brief'
      ],
      highlights: ['Planning', 'Targeting', 'Budget'],
      gradient: 'from-yellow-500 to-orange-500',
      color: 'yellow'
    },
    {
      id: 2,
      icon: <FaPencilRuler className="text-xl md:text-2xl text-blue-500" />,
      title: 'Creative',
      fullTitle: '2. Ad Creative & Copy',
      description: 'Design eye-catching visuals and compelling copy.',
      longDescription: 'Our designers create scroll-stopping images and videos, while copywriters craft ad text that converts. We A/B test multiple variations to find what resonates.',
      timeline: '3-5 days',
      deliverables: [
        'Image ads',
        'Video ads',
        'Carousel ads',
        'Headline variations',
        'Ad copy',
        'CTAs',
        'Landing page mockups'
      ],
      highlights: ['Design', 'Copy', 'Testing'],
      gradient: 'from-blue-500 to-cyan-500',
      color: 'blue'
    },
    {
      id: 3,
      icon: <FaCode className="text-xl md:text-2xl text-purple-500" />,
      title: 'Setup',
      fullTitle: '3. Platform Setup & Tracking',
      description: 'Configure ad accounts, pixels, and conversion tracking.',
      longDescription: 'We set up Meta Ads Manager, Google Ads, and TikTok Ads accounts. We install tracking pixels, set up conversion events, and ensure accurate data collection.',
      timeline: '2-3 days',
      deliverables: [
        'Account setup',
        'Pixel installation',
        'Conversion tracking',
        'Audience creation',
        'Campaign structure',
        'UTM parameters',
        'Dashboard setup'
      ],
      highlights: ['Tracking', 'Configuration', 'Audience'],
      gradient: 'from-purple-500 to-pink-500',
      color: 'purple'
    },
    {
      id: 4,
      icon: <FaRocket className="text-xl md:text-2xl text-green-500" />,
      title: 'Launch',
      fullTitle: '4. Campaign Launch',
      description: 'Go live with optimized bids and targeting.',
      longDescription: 'We launch campaigns with carefully calibrated bids, budgets, and targeting. We monitor initial performance to catch any issues and make real-time adjustments.',
      timeline: '1 day',
      deliverables: [
        'Campaign activation',
        'Bid strategy',
        'Budget pacing',
        'Ad review',
        'Launch checklist',
        'Performance baseline',
        'Alerts setup'
      ],
      highlights: ['Launch', 'Monitoring', 'Optimization'],
      gradient: 'from-green-500 to-emerald-500',
      color: 'green'
    },
    {
      id: 5,
      icon: <FaChartLine className="text-xl md:text-2xl text-orange-500" />,
      title: 'Optimization',
      fullTitle: '5. Ongoing Optimization & Scaling',
      description: 'Analyze data, refine targeting, and scale winners.',
      longDescription: 'We continuously test new creatives, audiences, and bids. We scale successful campaigns and cut underperformers, always aiming to improve ROAS and lower CPA.',
      timeline: 'Ongoing',
      deliverables: [
        'Daily monitoring',
        'Weekly reports',
        'A/B testing',
        'Audience refinement',
        'Budget reallocation',
        'Scaling strategy',
        'Quarterly reviews'
      ],
      highlights: ['Analysis', 'Scaling', 'Reporting'],
      gradient: 'from-orange-500 to-red-500',
      color: 'orange'
    }
  ]
};

// Benefits data (unchanged)
const benefits: Benefit[] = [
  {
    icon: simpleIcons.clock,
    title: 'Fast Turnaround',
    description: 'Most projects completed in 4-6 weeks',
    stat: '60% faster',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: simpleIcons.users,
    title: 'Client Collaboration',
    description: 'Regular updates and feedback loops',
    stat: '24/7 access',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: simpleIcons.file,
    title: 'Clear Documentation',
    description: 'Everything documented for transparency',
    stat: '100% transparent',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: simpleIcons.award,
    title: 'Quality Guarantee',
    description: 'Pixel-perfect, bug-free delivery',
    stat: '100% satisfaction',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

// Timeline stats (unchanged)
const timelineStats: TimelineStat[] = [
  { label: 'Average Project', value: '6 weeks', icon: <FaClock className="text-base text-gray-400" /> },
  { label: 'Client Satisfaction', value: '98%', icon: <FaUsers className="text-base text-gray-400" /> },
  { label: 'On-Time Delivery', value: '95%', icon: <FaRegCalendarCheck className="text-base text-gray-400" /> }
];

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('development');
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Auto-rotate with pause - reset active step when category changes
  useEffect(() => {
    setActiveStep(1); // Reset to first step when category changes
  }, [selectedCategory]);

  useEffect(() => {
    if (!isVisible || isPaused) return;
    const interval = setInterval(() => setActiveStep((prev) => (prev % 5) + 1), 4500);
    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const handleStepChange = (stepId: number) => {
    setActiveStep(stepId);
    const announcement = `Step ${stepId} selected: ${currentSteps.find(s => s.id === stepId)?.title}`;
    const announcer = document.getElementById('step-announcer');
    if (announcer) announcer.textContent = announcement;
  };

  const currentSteps = processStepsByCategory[selectedCategory];
  const activeStepData = currentSteps.find(step => step.id === activeStep) || currentSteps[0];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-16 md:py-24 overflow-hidden bg-white"
      aria-label="Our process"
    >
      {/* Screen reader announcer */}
      <div id="step-announcer" className="sr-only" aria-live="polite" aria-atomic="true"></div>

      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0z\' fill=\'none\' stroke=\'rgba(0,0,0,0.02)\' stroke-width=\'1\'/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Process</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            A transparent, collaborative approach that delivers results. Choose a category to see our step-by-step process.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-1000 delay-150 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[11px] md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stats Cards - Smaller text */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-16 lg:mb-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          {timelineStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center items-center gap-1.5 mb-1">
                <span className="text-base text-gray-400 group-hover:text-blue-500 transition-colors">
                  {stat.icon}
                </span>
                <span className="text-xl md:text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Desktop Process */}
        <div className="hidden lg:block mb-20">
          {/* Step Indicators */}
          <div className="relative flex justify-between mb-12 gap-2" role="tablist" aria-label={`${selectedCategory} process steps`}>
            <div className="absolute top-8 left-[8%] right-[8%] h-0.5 bg-gray-200 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${(activeStep - 1) * 25}%` }}
              ></div>
            </div>

            {currentSteps.map((step) => {
              const isActive = activeStep === step.id;
              const isHovered = hoveredStep === step.id;
              return (
                <button
                  key={step.id}
                  role="tab"
                  id={`step-tab-${step.id}`}
                  aria-selected={isActive}
                  aria-controls={`step-panel-${step.id}`}
                  className="relative z-10 flex flex-col items-center cursor-pointer group w-[130px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-2"
                  onMouseEnter={() => { setHoveredStep(step.id); setIsPaused(true); }}
                  onMouseLeave={() => { setHoveredStep(null); setIsPaused(false); }}
                  onFocus={() => { setHoveredStep(step.id); setIsPaused(true); }}
                  onBlur={() => { setHoveredStep(null); setIsPaused(false); }}
                  onClick={() => handleStepChange(step.id)}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.gradient} p-1 transition-all duration-300 flex-shrink-0 ${isActive || isHovered
                        ? 'scale-110 shadow-lg shadow-gray-400/20'
                        : 'scale-100 shadow-sm'
                      }`}
                  >
                    <div className={`w-full h-full rounded-full bg-white flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-gray-50' : ''
                      }`}>
                      <div className={`transition-all duration-300 ${isActive || isHovered ? 'scale-110' : ''
                        }`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  <span className={`mt-2 text-sm font-medium text-center w-full transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'
                    }`}>
                    {step.title}
                  </span>
                  <div className="h-5 flex items-center justify-center mt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap transition-all duration-300 ${isActive
                        ? 'border-gray-300 text-gray-600 bg-gray-50 font-medium'
                        : 'border-gray-200 text-gray-400'
                      }`}>
                      {step.timeline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detail Panel */}
          <div
            role="tabpanel"
            id={`step-panel-${activeStepData.id}`}
            aria-labelledby={`step-tab-${activeStepData.id}`}
            className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-500 shadow-lg hover:shadow-xl sticky top-24"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${activeStepData.gradient} shadow-md`}>
                    <span className="text-white font-bold text-base">{activeStepData.id}</span>
                  </div>
                  <div className="flex gap-2">
                    {activeStepData.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 border border-gray-200 rounded-full text-gray-600 font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 tracking-tight">{activeStepData.fullTitle}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-base font-normal">
                  {activeStepData.longDescription}
                </p>
                <div className="flex items-center gap-2 mb-6 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-fit">
                  <FaClock className="text-gray-400 text-xs" />
                  <span className="text-xs text-gray-600 font-medium">
                    Estimated time: <span className="text-gray-800 font-semibold">{activeStepData.timeline}</span>
                  </span>
                </div>
                <Link
                  href="/hire-us"
                  className={`inline-flex items-center bg-gradient-to-r ${activeStepData.gradient} text-white px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group w-fit shadow-sm`}
                  aria-label={`Start ${activeStepData.title} step`}
                >
                  <span>Start This Step</span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                </Link>
              </div>

              {/* Right Column - Deliverables */}
              <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-6 shadow-inner">
                <div className="flex items-center gap-2 mb-4">
                  <FaCheckCircle className={`text-base text-transparent bg-clip-text bg-gradient-to-r ${activeStepData.gradient}`} />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Deliverables</h4>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStepData.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-xs bg-white border border-gray-200 rounded-lg px-3 py-2 hover:border-gray-300 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeStepData.gradient} mr-2 flex-shrink-0`}></span>
                      <span className="font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="lg:hidden space-y-4 mb-16">
          {currentSteps.map((step, index) => {
            const isExpanded = expandedStep === step.id;
            return (
              <div
                key={step.id}
                className={`group transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300 hover:shadow-md overflow-hidden">
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.gradient} p-2.5 flex-shrink-0 shadow-sm`}>
                        <div className="text-white">{step.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-gray-800">{step.fullTitle}</h3>
                          <span className="text-[10px] px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300 font-medium">
                            {step.timeline}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1 font-normal">{step.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                      className="w-full flex items-center justify-center gap-1 mt-3 text-xs text-gray-400 hover:text-gray-200 transition-colors font-medium"
                    >
                      <span>{isExpanded ? 'Show less' : 'Show details'}</span>
                      <FaChevronRight className={`text-[10px] transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 border-t border-white/5 pt-4 overflow-hidden"
                      >
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed font-normal">{step.longDescription}</p>
                        <div className="flex gap-2 mb-4">
                          {step.highlights.map((h, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-1 bg-gray-100 border border-gray-200 rounded-full text-gray-600 font-medium">{h}</span>
                          ))}
                        </div>
                        <div className="mb-4">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Deliverables</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {step.deliverables.slice(0, 6).map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${step.gradient}`}></span>
                                <span className="text-[10px] text-gray-600 font-normal">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Link
                          href="/hire-us"
                          className={`inline-flex items-center text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${step.gradient} border border-gray-200 rounded-full px-4 py-2 hover:shadow-sm transition-all`}
                        >
                          Learn more <FaArrowRight className="ml-1 text-[10px]" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Grid - Simple Icons, Medium Text */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-16 lg:mt-20 transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-white">{benefit.icon}</span>
                  </div>
                </div>
                <h4 className="text-base font-semibold text-gray-700 mb-1">{benefit.title}</h4>
                <p className="text-xs text-gray-500 mb-2 leading-normal px-1">{benefit.description}</p>
                <span className={`text-base font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                  {benefit.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
