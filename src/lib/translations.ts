type Language = 'en' | 'es' | 'sr';

// Support nested translations for complex pages
type TranslationValue = string | Record<string, any>;
const translations: Record<Language, Record<string, TranslationValue>> = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Start Your Project',
    
    // Meta tags for main pages
    'meta.homepage.title': 'Digital Frog - Where Marketing Meets Engineering',
    'meta.homepage.description': 'From SEO foundations to custom software—we build complete digital systems engineered for growth, automated for scale, measured with precision.',
    'meta.homepage.keywords': 'digital marketing, SEO services, custom software development, web development, marketing automation, Santiago Chile',
    
    'meta.about.title': 'About Digital Frog - Where Engineering Meets Marketing',
    'meta.about.description': 'Learn about Digital Frog, where marketing meets engineering. We build complete digital systems that grow with your business.',
    'meta.about.keywords': 'about digital frog, marketing engineering, web development team, SEO experts',
    
    'meta.contact.title': 'Contact Digital Frog - Let\'s Build Something Great Together',
    'meta.contact.description': 'Ready to transform your digital presence? Contact Digital Frog for SEO services, custom software development, and marketing automation.',
    'meta.contact.keywords': 'contact digital frog, SEO consultation, software development quote, marketing automation',
    
    'meta.portfolio.title': 'Portfolio - Digital Frog Success Stories',
    'meta.portfolio.description': 'See how Digital Frog has helped businesses grow with SEO optimization, custom software, and marketing automation solutions.',
    'meta.portfolio.keywords': 'digital frog portfolio, SEO case studies, software development projects, client success stories',
    
    'meta.services.title': 'Services - SEO & Custom Software Development | Digital Frog',
    'meta.services.description': 'Digital Frog offers comprehensive SEO services and custom software development. From technical audits to full-stack applications.',
    'meta.services.keywords': 'SEO services, custom software development, web applications, technical SEO audit, performance optimization',

    'meta.blog.title': 'Blog - Software Development & Automation Insights | Digital Frog',
    'meta.blog.description': 'Expert insights on custom software development, process automation, and digital transformation for Chilean businesses.',
    'meta.blog.keywords': 'software development blog, automation insights, digital transformation, technology trends',

    // Hero
    'hero.headline': 'Where Marketing Meets Engineering',
    'hero.subtitle': 'From SEO foundations to custom software—we build complete digital systems engineered for growth, automated for scale, measured with precision.',
    'hero.cta.primary': 'Start Your Project',
    'hero.cta.secondary': 'See What We Build',
    
    // Stats
    'stats.pagespeed': 'PageSpeed Score Guarantee',
    'stats.automated': 'Automated Delivery',
    'stats.days': 'Days Avg Implementation',
    
    // Trust bar
    'trust.clients': 'Active Clients',
    'trust.revenue': 'Avg Revenue Increase',
    'trust.time': 'Avg Time Saved/Week',
    
    // Services Section (Homepage)
    'servicesSection.title': 'Three Tiers of Digital Infrastructure',
    'servicesSection.subtitle': "We don't just build websites or run campaigns. We engineer complete systems that work together.",
    
    // Tier 1
    'tier1.badge': 'TIER 1',
    'tier1.title': 'Foundation',
    'tier1.subtitle': 'Digital Visibility Engineering',
    'tier1.feature1': 'Systematic SEO optimization',
    'tier1.feature2': 'Technical audits (engineering-grade)',
    'tier1.feature3': 'Performance monitoring (90+ PageSpeed)',
    'tier1.feature4': 'Content strategy & implementation',
    'tier1.cta': 'Get Started',
    'tier1.price': 'Starting at $1,800/month',
    
    // Tier 2
    'tier2.badge': 'TIER 2',
    'tier2.title': 'Infrastructure',
    'tier2.subtitle': 'Performance Web Applications',
    'tier2.feature1': 'Custom Next.js applications',
    'tier2.feature2': 'High-performance websites',
    'tier2.feature3': 'E-commerce platforms',
    'tier2.feature4': 'API integrations & optimization',
    'tier2.cta': 'Request Quote',
    'tier2.price': 'Project-based pricing',
    
    // Tier 3
    'tier3.badge': 'TIER 3',
    'tier3.title': 'Systems',
    'tier3.subtitle': 'Business Automation & Custom Software',
    'tier3.feature1': 'Custom business applications',
    'tier3.feature2': 'AI-powered automation systems',
    'tier3.feature3': 'Workflow engineering',
    'tier3.feature4': 'Operations optimization',
    'tier3.cta': "Let's Talk",
    'tier3.price': 'Premium retainer or project-based',
    
    // Case Studies
    'cases.title': 'Engineering Measurable Results',
    'cases.subtitle': 'Real numbers from real clients. Because engineers measure everything.',
    'cases.cta': 'View Full Portfolio',
    
    'case1.company': 'Law Firm - Jorge Robles',
    'case1.result': '+20% Revenue',
    'case1.description': 'Complete system: SEO + automation = 2x closed cases, 40% cost reduction',
    
    'case2.company': 'NatAxtin',
    'case2.result': 'PageSpeed 75→90+',
    'case2.description': 'Performance engineering in 2.5 days. Ranking position 45→top 20 target.',
    
    'case3.company': 'Felipe Cuevas',
    'case3.result': '15 hrs/week saved',
    'case3.description': 'Automation systems: 60% lead quality improvement through intelligent workflows.',
    
    // CTA Section
    'cta.title': 'Ready to Build Your Digital System?',
    'cta.subtitle': "Whether you need SEO, a custom application, or complete automation—let's engineer your solution together.",
    'cta.button': 'Schedule Free Consultation',
    'cta.trust1': 'Free consultation',
    'cta.trust2': 'No commitment required',
    'cta.trust3': '30-min strategy call',
    
    // Footer
    'footer.tagline': 'Engineering digital solutions since 2021.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.address': 'Los Militares 5620, Of.905, Las Condes, Santiago, Chile',
    'footer.seo': 'Foundation - SEO',
    'footer.webdev': 'Infrastructure - Web Dev',
    'footer.automation': 'Systems - Automation',
    'footer.about': 'About Us',
    'footer.portfolio': 'Portfolio',
    'footer.blog': 'Blog',
    'footer.copyright': '© 2025 Digital Frog. All rights reserved. Built with engineering precision.',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Expert insights on software development, automation, and digital transformation',
    'blog.readMore': 'Read more',
    'blog.backToBlog': 'Back to blog',
    'blog.relatedPosts': 'Related posts',
    'blog.minutesRead': 'minutes read',
    'blog.comingSoon': 'Coming soon',
    'blog.comingSoonDesc': 'We\'re preparing expert insights on software development, automation, and digital transformation. Check back soon!',
    'blog.author': 'By',
    'blog.publishedOn': 'Published on',
    'blog.updatedOn': 'Updated on',
    'blog.category': 'Category',
    'blog.tags': 'Tags',
    'blog.sharePost': 'Share this post',
    'blog.readyToStart': 'Ready to start your project?',
    'blog.readyToStartDesc': 'Let\'s discuss how we can help you grow with custom software development and automation.',
    'blog.getStarted': 'Get Started',
    
    // Contact Page
    'contact.title': "Let's Build Something Great",
    'contact.subtitle': "Tell us about your project and we'll show you how engineering principles can transform your digital presence",
    'contact.step1.title': 'Service Interest',
    'contact.step2.title': 'Project Details',
    'contact.step3.title': 'Contact Info',
    'contact.service.seo': 'SEO (Foundation)',
    'contact.service.webdev': 'Web Development (Infrastructure)',
    'contact.service.automation': 'Automation (Systems)',
    'contact.service.all': 'Not sure / All of the above',
    'contact.budget': 'Budget Range',
    'contact.budget.under5k': 'Under $5K',
    'contact.budget.5k15k': '$5K - $15K',
    'contact.budget.15k50k': '$15K - $50K',
    'contact.budget.50kplus': '$50K+',
    'contact.budget.retainer': 'Ongoing retainer',
    'contact.project': 'Tell us about your project, goals, or challenges',
    'contact.timeline': 'Timeline',
    'contact.timeline.asap': 'ASAP',
    'contact.timeline.1-3': '1-3 months',
    'contact.timeline.3-6': '3-6 months',
    'contact.timeline.6plus': '6+ months',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.phone': 'Phone',
    'contact.language': 'Preferred Language',
    'contact.next': 'Next',
    'contact.back': 'Back',
    'contact.send': 'Send Message',
    'contact.success': "Message sent! We'll be in touch within 24 hours.",
    'contact.alternative': 'Alternative Contact Methods',
    'contact.available': 'Available Mon-Fri, 9am-6pm CLT',
    
    // About Page
    'about.title': 'Where Engineering Meets Marketing',
    'about.subtitle': 'Built by an engineer who understands business',
    'about.story.title': 'From Civil Engineering to Digital Systems',
    'about.story.content': "With a background in civil engineering, I bring a systematic, precision-driven approach to digital marketing. Every project is treated like an engineering challenge: analyzed, planned, measured, and optimized. This isn't about guesswork—it's about building digital infrastructure that delivers predictable, measurable results.",
    'about.philosophy.title': 'Why Engineering + Marketing?',
    'about.value1': 'Precision over guesswork',
    'about.value2': 'Systems over tactics',
    'about.value3': 'Automation over manual work',
    'about.value4': 'Results over vanity metrics',
    'about.tech.title': 'Built With Modern Technology',
    'about.tech.subtitle': 'We walk the talk—90+ PageSpeed scores on everything we build',
    'about.cta': 'Work With Us',
    
    // Portfolio Page
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Engineering measurable results for forward-thinking businesses',
    'portfolio.filter.all': 'All',
    'portfolio.filter.seo': 'SEO Projects',
    'portfolio.filter.webdev': 'Web Development',
    'portfolio.filter.automation': 'Automation',
    'portfolio.view': 'View Case Study',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Two core offerings to grow your business',
    
    // SEO Service
    'services.seo.title': 'SEO',
    'services.seo.badge': 'Foundation',
    'services.seo.what.title': 'What We Do',
    'services.seo.what.description': 'Complete SEO optimization for businesses that want to dominate search results',
    'services.seo.feature1': 'Technical SEO',
    'services.seo.feature2': 'Content Strategy',
    'services.seo.feature3': 'Local SEO',
    'services.seo.feature4': 'Link Building',
    'services.seo.who.title': 'Who It\'s For',
    'services.seo.who.target1': 'Businesses that want predictable organic traffic',
    'services.seo.who.target2': 'Companies tired of paying for ads with no long-term ROI',
    'services.seo.platforms.title': 'Platforms',
    'services.seo.platforms.note': 'Expert in WordPress + Elementor, plus Shopify, Wix, Webnode and more',
    'services.seo.timeline.title': 'Timeline',
    'services.seo.timeline.audit': 'Initial Audit',
    'services.seo.timeline.audit_time': '1 week',
    'services.seo.timeline.implementation': 'Implementation',
    'services.seo.timeline.implementation_time': '2-4 weeks',
    'services.seo.timeline.results': 'Results Visible',
    'services.seo.timeline.results_time': '3-6 months',
    'services.seo.deliverables.title': 'Deliverables',
    'services.seo.deliverable1': 'Complete technical audit',
    'services.seo.deliverable2': 'Keyword strategy',
    'services.seo.deliverable3': 'On-page optimization',
    'services.seo.deliverable4': 'Monthly performance reports',
    'services.seo.pricing': 'From $1,800 USD',
    'services.seo.pricing_note': 'per project',
    'services.seo.cta': 'Get a Free SEO Audit',
    
    // Development Service
    'services.dev.title': 'Software Development',
    'services.dev.badge': 'Systems',
    'services.dev.what.title': 'What We Build',
    'services.dev.what.description': 'Custom software, micro-SaaS, and automation systems that replace manual processes',
    'services.dev.what.migration': 'Data migration and normalization from multiple sources to structured databases',
    'services.dev.who.title': 'Who It\'s For',
    'services.dev.who.target1': 'Businesses drowning in spreadsheets',
    'services.dev.who.target2': 'Companies that need custom tools',
    'services.dev.who.target3': 'Startups building micro-SaaS',
    'services.dev.tech.title': 'Tech Stack',
    'services.dev.timeline.title': 'Timeline',
    'services.dev.timeline.discovery': 'Discovery',
    'services.dev.timeline.discovery_time': '1-2 weeks',
    'services.dev.timeline.development': 'Development',
    'services.dev.timeline.development_time': '4-12 weeks',
    'services.dev.timeline.deployment': 'Deployment + Training',
    'services.dev.timeline.deployment_time': '1 week',
    'services.dev.deliverables.title': 'What You Get',
    'services.dev.deliverable1': 'Process analysis and workflow design',
    'services.dev.deliverable2': 'Role-based access control',
    'services.dev.deliverable3': 'Automated document generation',
    'services.dev.deliverable4': 'User training',
    'services.dev.deliverable5': 'Ongoing support',
    'services.dev.cta': 'Start Your Project',
    
    // Process
    'services.process.title': 'How projects work',
    'services.process.subtitle': 'A proven process that delivers results',
    'services.process.step1': 'Discovery call',
    'services.process.desc1': 'Understanding your needs',
    'services.process.step2': 'Proposal & scope',
    'services.process.desc2': 'Clear timeline and pricing',
    'services.process.step3': 'Development sprints',
    'services.process.desc3': 'Regular updates and feedback',
    'services.process.step4': 'Launch & training',
    'services.process.desc4': 'Go live with full support',
    'services.process.step5': 'Ongoing support',
    'services.process.desc5': 'Maintenance and updates',
    
    // Final CTA
    'services.final_cta.title': 'Ready to get started?',
    'services.final_cta.description': 'Let\'s discuss your project and see how we can help you grow.',
    'services.final_cta.button': 'Start a conversation',

    // SEO Services Page (/services/seo)
    seoServices: {
      meta: {
        title: "SEO Services | Digital Frog",
        description: "Get found by customers who are already searching. Complete SEO optimization for WordPress, Shopify, Wix, and Webnode sites. From $1,800 USD.",
        keywords: "SEO services, search engine optimization, WordPress SEO, technical SEO audit, keyword strategy"
      },
      hero: {
        badge: "SEO Services",
        title: "Get Found by Customers Who Are",
        titleAccent: "Already Searching",
        subtitle: "Stop paying for ads that disappear when your budget runs out. SEO builds long-term, predictable organic traffic that compounds over time. We optimize your site for search engines and humans alike.",
        cta: "Get Free SEO Audit",
        ctaSecondary: "See Case Studies",
        trustBadges: {
          speed: "90+ PageSpeed",
          delivery: "1 Week Audit",
          satisfaction: "100% Transparent"
        }
      },
      problem: {
        title: "Why Your Website Isn't Getting Found",
        subtitle: "Competitors are outranking you because they understand what search engines actually want.",
        items: [
          {
            icon: "Search",
            title: "Invisible to Search Engines",
            description: "Your site has technical issues preventing proper indexing. Google can't find or understand your content properly."
          },
          {
            icon: "Target",
            title: "Wrong Keywords",
            description: "You're optimizing for keywords nobody searches for, or keywords that don't convert visitors into customers."
          },
          {
            icon: "Gauge",
            title: "Slow Loading Speed",
            description: "Page speed is a major ranking factor. Slow sites get pushed down in search results and lose visitors."
          },
          {
            icon: "FileX",
            title: "Poor Content Structure",
            description: "Content that doesn't follow SEO best practices. Missing meta descriptions, poor headings, weak internal linking."
          }
        ]
      },
      solution: {
        title: "Our Systematic SEO Approach",
        subtitle: "We don't just optimize. We engineer complete SEO systems that work.",
        items: [
          {
            icon: "Wrench",
            title: "Engineering-Grade Technical Audit",
            description: "We analyze your site like engineers: crawlability, site speed, mobile performance, structured data, and indexation issues."
          },
          {
            icon: "TrendingUp",
            title: "Strategic Keyword Research",
            description: "Find high-intent keywords your customers actually search for. Focus on terms that convert visitors into leads and sales."
          },
          {
            icon: "Zap",
            title: "Performance Optimization",
            description: "90+ PageSpeed guaranteed. Fast sites rank better and convert higher. We optimize every element for speed."
          },
          {
            icon: "BarChart3",
            title: "Measurable Results Tracking",
            description: "Monthly reports showing ranking improvements, traffic growth, and conversion increases. SEO that drives business results."
          }
        ],
        differentiator: {
          title: "Why 'Marketing Meets Engineering' Works for SEO",
          description: "Most SEO agencies focus only on rankings. We focus on business results. Our engineering background means technical issues get fixed properly, and our marketing expertise ensures the traffic actually converts."
        }
      },
      whatWeBuild: {
        title: "Complete SEO Optimization",
        subtitle: "Everything your site needs to dominate search rankings.",
        items: [
          {
            icon: "Search",
            title: "Technical SEO Foundation",
            description: "Site speed optimization, mobile responsiveness, structured data, XML sitemaps, and crawlability improvements."
          },
          {
            icon: "Target",
            title: "Keyword Strategy & Content",
            description: "Research, mapping, and optimization of high-intent keywords. Content structure that search engines love."
          },
          {
            icon: "Link",
            title: "On-Page Optimization",
            description: "Meta descriptions, title tags, headings, internal linking, and URL structure optimized for maximum impact."
          },
          {
            icon: "FileText",
            title: "Content Guidelines",
            description: "Clear guidelines for creating SEO-friendly content that ranks and converts visitors into customers."
          },
          {
            icon: "BarChart",
            title: "Performance Monitoring",
            description: "Monthly tracking of rankings, organic traffic, click-through rates, and conversion improvements."
          },
          {
            icon: "Smartphone",
            title: "Mobile-First Optimization",
            description: "Ensure your site performs perfectly on mobile devices where most searches happen."
          }
        ]
      },
      techStack: {
        title: "Platforms We Optimize",
        subtitle: "Expert SEO for all major website platforms.",
        description: "Whether you're on WordPress, Shopify, or custom-built sites, we have the technical expertise to optimize your specific platform for maximum search performance.",
        technologies: ["WordPress + Elementor", "Shopify", "Wix", "Webnode", "Custom HTML/React", "Next.js", "Squarespace"]
      },
      process: {
        title: "Our SEO Process",
        subtitle: "Systematic optimization that delivers measurable results.",
        steps: [
          {
            number: "01",
            title: "Technical Audit",
            duration: "1 week",
            description: "Complete analysis of your site's technical SEO health. We identify all issues preventing optimal search performance."
          },
          {
            number: "02",
            title: "Keyword Research",
            duration: "1 week",
            description: "Research high-intent keywords your customers search for. Map content strategy around terms that actually convert."
          },
          {
            number: "03",
            title: "Implementation",
            duration: "2-4 weeks",
            description: "Fix technical issues, optimize on-page elements, improve site speed, and implement structured data."
          },
          {
            number: "04",
            title: "Content Optimization",
            duration: "2-3 weeks",
            description: "Optimize existing content and create new pages targeting your priority keywords. Focus on conversion, not just traffic."
          },
          {
            number: "05",
            title: "Monitoring & Reporting",
            duration: "Ongoing",
            description: "Monthly reports tracking rankings, traffic, and business results. Continuous optimization based on performance data."
          }
        ]
      },
      caseStudy: {
        title: "SEO Results That Drive Business Growth",
        subtitle: "Real rankings, real traffic, real revenue increases.",
        featured: {
          type: "Technical Optimization",
          client: "Nataxtin",
          challenge: "Site loading slowly at 75 PageSpeed score. Rankings dropping due to poor technical performance.",
          solution: "Complete technical SEO overhaul: image optimization, code cleanup, server optimization, and mobile improvements.",
          results: [
            { metric: "90+", label: "PageSpeed Score", detail: "From 75 to 90+ in just 2.5 days" },
            { metric: "Top 20", label: "Search Position", detail: "Moved from position 45 to top 20 for target keywords" },
            { metric: "+40%", label: "Organic Traffic", detail: "Significant traffic increase within first month" }
          ],
          quote: "The technical improvements were immediately visible in our search performance.",
          quoteName: "Nataxtin Team"
        },
        additionalMetrics: [
          { value: "+150%", label: "Organic traffic", client: "Tech Consultancy" },
          { value: "45→20", label: "Average ranking", client: "Service Business" },
          { value: "+60%", label: "Lead quality", client: "Professional Services" }
        ]
      },
      pricing: {
        title: "SEO Investment",
        subtitle: "Transparent pricing for complete SEO optimization.",
        description: "SEO services start from $1,800 USD and include technical audit, keyword strategy, on-page optimization, and ongoing monitoring. Custom packages available for enterprise sites.",
        factors: {
          title: "What Affects Your Investment",
          items: [
            "Size and complexity of your website",
            "Number of target keywords and pages",
            "Current technical issues to resolve",
            "Competitive landscape in your industry"
          ]
        },
        cta: "Get Free SEO Audit",
        note: "Free technical audit included. No commitment required."
      },
      faq: {
        title: "SEO Questions Answered",
        items: [
          {
            question: "How long does it take to see SEO results?",
            answer: "Technical improvements can show results in 2-4 weeks. Significant ranking and traffic improvements typically take 3-6 months. SEO is a long-term strategy that compounds over time."
          },
          {
            question: "What's included in the SEO audit?",
            answer: "Complete technical analysis: site speed, mobile performance, crawlability, indexation issues, structured data, internal linking, and competitive analysis. You'll get a detailed report with prioritized action items."
          },
          {
            question: "Do you work with all website platforms?",
            answer: "Yes. We optimize WordPress, Shopify, Wix, Webnode, and custom-built sites. Our engineering background means we can handle any platform or technical challenge."
          },
          {
            question: "How do you measure SEO success?",
            answer: "We track rankings, organic traffic, click-through rates, and most importantly - business results like leads and sales. Monthly reports show exactly how SEO impacts your bottom line."
          },
          {
            question: "What makes your SEO different?",
            answer: "We combine engineering precision with marketing strategy. Technical issues get fixed properly, keyword strategy focuses on conversion, and everything is measured for business impact - not just vanity metrics."
          }
        ]
      },
      finalCta: {
        title: "Ready to Dominate Search Rankings?",
        subtitle: "Get a free technical SEO audit. We'll analyze your site and show you exactly what's holding back your search performance.",
        cta: "Get Free SEO Audit",
        note: "Detailed audit report included. No commitment required."
      }
    },

    // Web Development Services Page (/services/web-development)
    webDevelopment: {
      meta: {
        title: "Web Development Services | Digital Frog",
        description: "Fast, modern websites that convert. Custom React/Next.js development with 90+ PageSpeed guaranteed. Mobile-first, SEO-ready. From $3,000 USD.",
        keywords: "web development, React development, Next.js, custom websites, mobile-first design, fast websites"
      },
      hero: {
        badge: "Web Development",
        title: "Fast, Modern Websites",
        titleAccent: "That Convert",
        subtitle: "Your website should work as hard as you do. We build lightning-fast, conversion-optimized websites using modern React and Next.js. 90+ PageSpeed guaranteed, mobile-first design, and built for growth.",
        cta: "Start Your Project",
        ctaSecondary: "View Our Work",
        trustBadges: {
          speed: "90+ PageSpeed",
          delivery: "4-8 Week Build",
          satisfaction: "100% Custom"
        }
      },
      problem: {
        title: "Why Most Websites Fail to Convert",
        subtitle: "Your website is your most important marketing asset. Here's what's probably wrong with it.",
        items: [
          {
            icon: "Turtle",
            title: "Painfully Slow Loading",
            description: "Users abandon sites that take longer than 3 seconds to load. Slow sites kill conversions and hurt search rankings."
          },
          {
            icon: "Smartphone",
            title: "Poor Mobile Experience",
            description: "Over 60% of traffic is mobile, but most websites are desktop-first. Poor mobile experience = lost customers."
          },
          {
            icon: "Palette",
            title: "Generic Template Design",
            description: "Your site looks like thousands of others. Generic templates don't build trust or communicate your unique value."
          },
          {
            icon: "Search",
            title: "Not Built for SEO",
            description: "Beautiful design is useless if nobody finds it. Most websites aren't optimized for search engines from the ground up."
          }
        ]
      },
      solution: {
        title: "Our Modern Web Development Approach",
        subtitle: "We don't just build websites. We build conversion-optimized, lightning-fast web applications.",
        items: [
          {
            icon: "Zap",
            title: "Performance-First Architecture",
            description: "Built with Next.js and optimized for speed. We guarantee 90+ PageSpeed scores because fast sites convert better and rank higher."
          },
          {
            icon: "Smartphone",
            title: "Mobile-First Design",
            description: "Designed for mobile users first, then scaled up. Perfect experience on every device, from phone to desktop."
          },
          {
            icon: "Paintbrush",
            title: "Custom, Conversion-Focused Design",
            description: "Unique design tailored to your brand and audience. Every element is designed to guide visitors toward becoming customers."
          },
          {
            icon: "TrendingUp",
            title: "SEO & Marketing Integration",
            description: "Built for search engines and optimized for conversions. Your website becomes your best marketing tool."
          }
        ],
        differentiator: {
          title: "Why 'Marketing Meets Engineering' Creates Better Websites",
          description: "Most developers focus on code. Most designers focus on looks. We focus on results. Our engineering ensures your site is fast and reliable. Our marketing expertise ensures it actually converts visitors into customers."
        }
      },
      whatWeBuild: {
        title: "Modern Websites That Work",
        subtitle: "Custom solutions for every type of business.",
        items: [
          {
            icon: "Store",
            title: "Business Websites",
            description: "Professional sites that build trust, communicate value, and convert visitors into leads and customers."
          },
          {
            icon: "ShoppingCart",
            title: "E-Commerce Platforms",
            description: "Fast, secure online stores with optimized checkout flows. Built to sell more and provide excellent user experience."
          },
          {
            icon: "Users",
            title: "Service Provider Sites",
            description: "Websites for consultants, agencies, and service providers. Showcase expertise and make it easy to book consultations."
          },
          {
            icon: "Building",
            title: "Corporate Websites",
            description: "Enterprise-grade sites that reflect your brand's professionalism and communicate with stakeholders effectively."
          },
          {
            icon: "FileText",
            title: "Portfolio Sites",
            description: "Showcase your work beautifully. Perfect for designers, photographers, architects, and creative professionals."
          },
          {
            icon: "Megaphone",
            title: "Landing Pages",
            description: "High-converting landing pages for campaigns, product launches, and lead generation. Built to maximize conversions."
          }
        ]
      },
      techStack: {
        title: "Modern Technology Stack",
        subtitle: "Built with the same technology powering Netflix, Vercel, and top startups worldwide.",
        description: "We use Next.js, React, TypeScript, and deploy on Vercel's edge network. This means your site loads instantly anywhere in the world and scales automatically as you grow.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL", "Stripe", "Resend"]
      },
      process: {
        title: "Our Development Process",
        subtitle: "From concept to launch in 4-8 weeks.",
        steps: [
          {
            number: "01",
            title: "Discovery & Strategy",
            duration: "1 week",
            description: "Understand your business, audience, and goals. Define site structure, content strategy, and conversion optimization approach."
          },
          {
            number: "02",
            title: "Design & Prototyping",
            duration: "1-2 weeks",
            description: "Create wireframes and custom design mockups. Focus on user experience, mobile-first approach, and conversion optimization."
          },
          {
            number: "03",
            title: "Development & Testing",
            duration: "2-4 weeks",
            description: "Code your site with modern technology, optimize for speed and SEO, test on all devices and browsers."
          },
          {
            number: "04",
            title: "Launch & Optimization",
            duration: "1 week",
            description: "Deploy to production, set up analytics, train your team, and ensure everything works perfectly."
          },
          {
            number: "05",
            title: "Growth & Maintenance",
            duration: "Ongoing",
            description: "Monitor performance, provide updates, and optimize for better conversions based on real user data."
          }
        ]
      },
      caseStudy: {
        title: "Websites That Drive Real Business Results",
        subtitle: "Real projects, real performance improvements, real ROI.",
        featured: {
          type: "E-Commerce Redesign",
          client: "E-Commerce Platform",
          challenge: "Outdated website with poor mobile experience and slow loading times affecting conversion rates and customer experience.",
          solution: "Complete rebuild with Next.js, mobile-first design, optimized checkout flow, and performance optimization for sub-2-second load times.",
          results: [
            { metric: "3x", label: "Conversion Rate", detail: "From 1.2% to 3.6% conversion rate improvement" },
            { metric: "95", label: "PageSpeed Score", detail: "Achieved 95+ PageSpeed on both mobile and desktop" },
            { metric: "2.1s", label: "Load Time", detail: "Average page load time reduced to under 2.1 seconds" }
          ],
          quote: "The new website not only looks amazing but actually sells better. Our conversion rate tripled.",
          quoteName: "E-Commerce Platform Owner"
        },
        additionalMetrics: [
          { value: "+200%", label: "Mobile conversions", client: "Service Provider" },
          { value: "95+", label: "PageSpeed score", client: "Corporate Site" },
          { value: "-60%", label: "Bounce rate", client: "Professional Services" }
        ]
      },
      pricing: {
        title: "Web Development Investment",
        subtitle: "Transparent pricing for custom website development.",
        description: "Custom website development starts from $3,000 USD. Final price depends on complexity, features, and timeline. Every project includes custom design, mobile optimization, and performance guarantee.",
        factors: {
          title: "What Affects Your Investment",
          items: [
            "Design complexity and custom features",
            "Number of pages and content volume",
            "E-commerce functionality requirements",
            "Third-party integrations needed"
          ]
        },
        cta: "Get Project Quote",
        note: "Free consultation and project estimate. No commitment required."
      },
      faq: {
        title: "Web Development Questions Answered",
        items: [
          {
            question: "How long does it take to build a website?",
            answer: "Most websites take 4-8 weeks from kickoff to launch. Simple sites can be ready in 4 weeks, while complex e-commerce or multi-feature sites may take 8+ weeks. We'll give you a realistic timeline upfront."
          },
          {
            question: "What's included in the price?",
            answer: "Everything: custom design, development, mobile optimization, performance optimization, SEO setup, content management system, testing, launch, and training. No hidden fees."
          },
          {
            question: "Do you guarantee the 90+ PageSpeed score?",
            answer: "Yes. We guarantee 90+ PageSpeed scores on both mobile and desktop. If we don't achieve this, we work for free until we do. Fast sites rank better and convert more."
          },
          {
            question: "Can I update the content myself?",
            answer: "Absolutely. We build user-friendly content management systems so you can update text, images, and basic content without technical knowledge. We also provide training and documentation."
          },
          {
            question: "What happens after the site launches?",
            answer: "We provide ongoing support, security updates, and performance monitoring. We can also help with content updates, feature additions, and marketing optimization as your business grows."
          }
        ]
      },
      finalCta: {
        title: "Ready for a Website That Actually Works?",
        subtitle: "Let's discuss your project. Get a free consultation and custom quote for your new website.",
        cta: "Start Your Project",
        note: "Free consultation included. No commitment required."
      }
    },

    // Automation Services Page (/services/automation)
    automationServices: {
      meta: {
        title: "Business Automation Services | Digital Frog",
        description: "Automate repetitive tasks and focus on growth. Custom automation for invoicing, lead qualification, onboarding, and reporting. From $5,000 USD.",
        keywords: "business automation, process automation, workflow automation, task automation, business efficiency"
      },
      hero: {
        badge: "Business Automation",
        title: "Automate the Repetitive,",
        titleAccent: "Focus on Growth",
        subtitle: "Your team shouldn't waste time on tasks a computer can do better. We build custom automation that handles repetitive work — invoicing, follow-ups, data entry, reporting — so your people can focus on what actually grows the business.",
        cta: "Get Automation Assessment",
        ctaSecondary: "See What We Automate",
        trustBadges: {
          speed: "2-6 Week Build",
          delivery: "300% ROI Avg",
          satisfaction: "15+ Hours Saved"
        }
      },
      problem: {
        title: "The Hidden Cost of Manual Work",
        subtitle: "Your team is burning time and energy on tasks that should be automated.",
        items: [
          {
            icon: "Clock",
            title: "Time Drain",
            description: "Hours spent on repetitive tasks: data entry, follow-ups, report generation, and administrative work that doesn't grow your business."
          },
          {
            icon: "AlertTriangle",
            title: "Human Error",
            description: "Manual processes are prone to mistakes. Missed follow-ups, data entry errors, and inconsistent execution hurt your reputation."
          },
          {
            icon: "DollarSign",
            title: "Hidden Costs",
            description: "Every hour your team spends on manual work is an hour not spent on sales, strategy, or customer service. The opportunity cost is huge."
          },
          {
            icon: "TrendingDown",
            title: "Scaling Bottlenecks",
            description: "Manual processes don't scale. As you grow, you need more people to handle the same repetitive tasks instead of growing strategically."
          }
        ]
      },
      solution: {
        title: "Our Smart Automation Approach",
        subtitle: "We don't just automate. We optimize your entire workflow for maximum efficiency.",
        items: [
          {
            icon: "Brain",
            title: "Intelligent Process Analysis",
            description: "We map your workflows and identify the best automation opportunities. Focus on high-impact, low-risk automations first."
          },
          {
            icon: "Zap",
            title: "Custom Automation Systems",
            description: "Built specifically for your business processes. No generic tools that force you to change how you work."
          },
          {
            icon: "Shield",
            title: "Error-Proof Execution",
            description: "Built-in error handling, notifications, and fallbacks. Your automated systems are more reliable than manual processes."
          },
          {
            icon: "TrendingUp",
            title: "Scalable Infrastructure",
            description: "Systems that grow with your business. Add more customers without adding administrative overhead."
          }
        ],
        differentiator: {
          title: "Why 'Marketing Meets Engineering' Matters for Automation",
          description: "Most automation focuses on eliminating tasks. We focus on eliminating bottlenecks to growth. Our marketing expertise ensures we automate the processes that actually impact your bottom line, not just the easy ones."
        }
      },
      whatWeBuild: {
        title: "Processes We Automate",
        subtitle: "From lead generation to customer success - we automate what matters most.",
        items: [
          {
            icon: "Users",
            title: "Lead Management",
            description: "Lead scoring, qualification, follow-up sequences, and CRM updates. Never lose a prospect due to poor follow-up again."
          },
          {
            icon: "FileText",
            title: "Financial Processes",
            description: "Invoice generation, payment reminders, expense tracking, and financial reporting. Get paid faster and reduce accounting overhead."
          },
          {
            icon: "UserCheck",
            title: "Client Onboarding",
            description: "Welcome sequences, document collection, account setup, and training delivery. Consistent experience for every new client."
          },
          {
            icon: "BarChart3",
            title: "Reporting & Analytics",
            description: "Automated report generation, performance dashboards, and status notifications. Always know how your business is performing."
          },
          {
            icon: "Mail",
            title: "Communication Workflows",
            description: "Automated email sequences, SMS notifications, and status updates. Keep everyone informed without manual effort."
          },
          {
            icon: "Database",
            title: "Data Management",
            description: "Data entry, synchronization between systems, and data cleanup. Ensure your data is always accurate and up-to-date."
          }
        ]
      },
      techStack: {
        title: "Automation Technology",
        subtitle: "Built with reliable, scalable technology that integrates with your existing tools.",
        description: "We use modern automation platforms like Zapier, Make (Integromat), and custom solutions built with Next.js and APIs. Your automations work with your existing tools: CRM, email, accounting, and more.",
        technologies: ["Zapier", "Make (Integromat)", "Next.js APIs", "Webhooks", "Google Workspace", "Microsoft 365", "CRM Integration"]
      },
      process: {
        title: "Our Automation Process",
        subtitle: "From analysis to deployment in 2-6 weeks.",
        steps: [
          {
            number: "01",
            title: "Process Analysis",
            duration: "1 week",
            description: "Map your current workflows, identify bottlenecks, and prioritize automation opportunities based on impact and effort."
          },
          {
            number: "02",
            title: "Automation Design",
            duration: "3-5 days",
            description: "Design the automated workflows with error handling, notifications, and integration points with your existing systems."
          },
          {
            number: "03",
            title: "Build & Test",
            duration: "1-3 weeks",
            description: "Build the automation, test with real data, and refine based on results. Include your team in testing process."
          },
          {
            number: "04",
            title: "Deploy & Train",
            duration: "1 week",
            description: "Deploy to production, train your team on new workflows, and ensure everything runs smoothly."
          },
          {
            number: "05",
            title: "Monitor & Optimize",
            duration: "Ongoing",
            description: "Monitor performance, fix any issues, and identify additional automation opportunities as your business grows."
          }
        ]
      },
      caseStudy: {
        title: "Automation That Transforms Business",
        subtitle: "Real businesses, real time savings, real growth.",
        featured: {
          type: "Lead Management Automation",
          client: "Felipe Cuevas - Real Estate Consultant",
          challenge: "Spending 15+ hours weekly on lead qualification, follow-ups, and document preparation, leaving little time for actual client work and business growth.",
          solution: "Automated lead scoring system, email follow-up sequences, document generation, and CRM integration to handle all repetitive tasks automatically.",
          results: [
            { metric: "15hrs", label: "Saved Weekly", detail: "Time previously spent on manual tasks now available for client work" },
            { metric: "60%", label: "Lead Quality", detail: "Automated scoring identifies better prospects faster" },
            { metric: "2x", label: "Client Capacity", detail: "Can handle twice as many clients with same effort" }
          ],
          quote: "I used to dread Monday mornings looking at all the manual work ahead. Now the system handles the repetitive stuff and I actually get to focus on helping clients.",
          quoteName: "Felipe Cuevas"
        },
        additionalMetrics: [
          { value: "300%", label: "Average ROI", client: "First Year" },
          { value: "40%", label: "Cost reduction", client: "Professional Services" },
          { value: "85%", label: "Error reduction", client: "Financial Processes" }
        ]
      },
      pricing: {
        title: "Automation Investment",
        subtitle: "ROI-focused pricing with transparent value.",
        description: "Custom automation projects start from $5,000 USD. Most clients see complete ROI within 2-4 months through time savings, error reduction, and increased capacity.",
        factors: {
          title: "What Affects Your Investment",
          items: [
            "Number and complexity of processes to automate",
            "Integration requirements with existing systems",
            "Custom logic and decision-making workflows",
            "Timeline and priority level"
          ]
        },
        cta: "Get Automation Assessment",
        note: "Free process analysis included. Average ROI: 300% in first year."
      },
      faq: {
        title: "Automation Questions Answered",
        items: [
          {
            question: "What processes can be automated?",
            answer: "Most repetitive, rule-based processes can be automated: lead qualification, follow-ups, invoicing, reporting, data entry, email sequences, and more. We analyze your workflows and identify the best opportunities."
          },
          {
            question: "How long does it take to build automation?",
            answer: "Most automation projects take 2-6 weeks. Simple automations (email sequences, basic notifications) can be ready in 2 weeks. Complex multi-system integrations may take 6+ weeks."
          },
          {
            question: "Will automation work with our existing tools?",
            answer: "Yes. We integrate with most business tools: CRMs (Salesforce, HubSpot), email platforms (Gmail, Outlook), accounting software (QuickBooks, Xero), project management tools, and more."
          },
          {
            question: "What if something breaks or needs changes?",
            answer: "We build robust automations with error handling and monitoring. We provide ongoing support and can modify or expand your automations as your business needs change."
          },
          {
            question: "How do we measure ROI on automation?",
            answer: "We track time saved, error reduction, increased capacity, and faster processes. Most clients see ROI within 2-4 months through reduced manual work and improved efficiency."
          }
        ]
      },
      finalCta: {
        title: "Ready to Reclaim Your Time?",
        subtitle: "Let's identify the processes draining your team's energy. Get a free 30-minute automation assessment.",
        cta: "Get Free Assessment",
        note: "No commitment. Just clarity on what's possible."
      }
    },

    // Landing Pages
    customSoftware: {
      meta: {
        title: "Custom Software Development | Digital Frog",
        description: "Build software that adapts to your business, not the other way around. Custom solutions for automation, internal tools, and business growth. Free diagnostic call.",
        keywords: "custom software development, bespoke software, business automation, internal tools, software company"
      },
      hero: {
        badge: "Custom Software",
        title: "Software That Adapts to",
        titleAccent: "Your Business",
        subtitle: "Generic software forces you to change how you work. We build solutions around your actual processes — increasing efficiency, reducing errors, and giving you a competitive edge that off-the-shelf tools can't match.",
        cta: "Book Free Diagnostic",
        ctaSecondary: "See Our Work",
        trustBadges: {
          speed: "90+ PageSpeed",
          delivery: "2.5 Days Avg",
          satisfaction: "100% Delivered"
        }
      },
      problem: {
        title: "The Problem with Off-the-Shelf Software",
        subtitle: "You've tried the generic solutions. Here's why they fall short.",
        items: [
          {
            icon: "Puzzle",
            title: "You Adapt to the Software",
            description: "Instead of working the way you need, you're forced to change your processes to fit rigid software limitations."
          },
          {
            icon: "CreditCard",
            title: "Growing License Costs",
            description: "Monthly fees that increase every year. More users, more features, more charges. The costs compound while value plateaus."
          },
          {
            icon: "Link2Off",
            title: "Integration Nightmares",
            description: "Your tools don't talk to each other. Data lives in silos. Your team wastes hours on manual data entry between systems."
          },
          {
            icon: "Gauge",
            title: "Performance Bottlenecks",
            description: "Slow loading, feature bloat, poor mobile experience. Your productivity tools shouldn't slow you down."
          }
        ]
      },
      solution: {
        title: "Our Approach: Marketing Meets Engineering",
        subtitle: "We don't just build software. We build software that grows your business.",
        items: [
          {
            icon: "Target",
            title: "Built Around Your Processes",
            description: "We start by understanding how you actually work. Your software adapts to you, capturing your unique competitive advantages."
          },
          {
            icon: "Wallet",
            title: "One Investment, No Surprises",
            description: "No monthly licenses eating into margins. You own your software outright. Updates and hosting are predictable, not escalating."
          },
          {
            icon: "Plug",
            title: "Seamless Integrations",
            description: "Connect everything: your CRM, accounting software, email, payment systems. Data flows automatically where it needs to go."
          },
          {
            icon: "Zap",
            title: "Performance Guaranteed",
            description: "We guarantee 90+ PageSpeed scores. Fast, responsive, mobile-first. Because slow software costs you money."
          }
        ],
        differentiator: {
          title: "Why 'Marketing Meets Engineering' Matters",
          description: "Most dev shops build what you ask for. We build what will actually work for your business — because we understand both the technology AND the business growth side. Your software won't just function; it will convert, retain, and scale."
        }
      },
      whatWeBuild: {
        title: "What We Build",
        subtitle: "Custom solutions for real business problems.",
        items: [
          {
            icon: "LayoutDashboard",
            title: "Internal Management Systems",
            description: "Dashboards, admin panels, and workflow tools that give you complete visibility and control."
          },
          {
            icon: "Users",
            title: "Client Portals",
            description: "Self-service portals where your clients can access information, submit requests, and track progress."
          },
          {
            icon: "RefreshCw",
            title: "Process Automation",
            description: "Eliminate repetitive tasks. Automatic invoicing, reporting, notifications, and data processing."
          },
          {
            icon: "FileText",
            title: "Document Generation",
            description: "Automated contracts, proposals, reports, and certificates. Generated in seconds, not hours."
          },
          {
            icon: "Link",
            title: "System Integrations",
            description: "Connect your existing tools. Sync data between CRM, ERP, accounting, and custom systems."
          },
          {
            icon: "Smartphone",
            title: "Web & Mobile Apps",
            description: "Progressive web apps that work on any device. No app store required, instant updates."
          }
        ]
      },
      techStack: {
        title: "Built with Modern Technology",
        subtitle: "No legacy code. No technical debt. Just clean, maintainable, scalable systems.",
        description: "We use Next.js, TypeScript, PostgreSQL, and deploy on Vercel — the same stack powering companies like Netflix, Twitch, and Nike. Your software is built on a foundation that will last.",
        technologies: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma", "Vercel", "Tailwind CSS"]
      },
      process: {
        title: "How We Work",
        subtitle: "A proven process that delivers results, on time.",
        steps: [
          {
            number: "01",
            title: "Discovery",
            duration: "1-2 weeks",
            description: "We map your processes, identify bottlenecks, and define exactly what needs to be built. You'll get a detailed proposal with timeline and investment."
          },
          {
            number: "02",
            title: "Design & Architecture",
            duration: "1 week",
            description: "We design the user experience and system architecture. You'll see wireframes and approve the approach before any code is written."
          },
          {
            number: "03",
            title: "Development",
            duration: "4-12 weeks",
            description: "We build in sprints with regular demos. You see progress weekly and can provide feedback throughout. No surprises at launch."
          },
          {
            number: "04",
            title: "Launch & Training",
            duration: "1 week",
            description: "We deploy to production, train your team, and ensure everything runs smoothly. Full handover documentation included."
          },
          {
            number: "05",
            title: "Ongoing Support",
            duration: "Continuous",
            description: "We don't disappear after launch. Maintenance, updates, and support packages available to keep your system running perfectly."
          }
        ]
      },
      caseStudy: {
        title: "Results That Speak",
        subtitle: "Real outcomes from real clients.",
        featured: {
          type: "Law Firm",
          client: "Jorge Robles & Associates",
          challenge: "Manual case tracking, client communication gaps, and administrative overhead consuming billable hours.",
          solution: "Custom case management system with client portal, automated document generation, and workflow automation.",
          results: [
            { metric: "+20%", label: "Increase in new cases", detail: "Word-of-mouth improved as client experience improved" },
            { metric: "2x", label: "More cases closed", detail: "Same team, better systems, more capacity" },
            { metric: "15hrs", label: "Saved weekly", detail: "Across the team in reduced admin work" }
          ],
          quote: "We went from managing spreadsheets to managing growth.",
          quoteName: "Jorge Robles"
        },
        additionalMetrics: [
          { value: "3x", label: "Conversion increase", client: "E-Commerce Platform" },
          { value: "-40%", label: "Operational costs", client: "SaaS Startup" },
          { value: "+150%", label: "Organic traffic", client: "Tech Consultancy" }
        ]
      },
      pricing: {
        title: "Investment",
        subtitle: "Transparent pricing. No hidden fees.",
        description: "Custom software projects start from $5,000 USD, depending on complexity and scope. Every project is different, so we provide a detailed quote after our discovery phase.",
        factors: {
          title: "What Affects Your Investment",
          items: [
            "Complexity of workflows and features",
            "Number of integrations required",
            "User roles and access levels",
            "Timeline and priority"
          ]
        },
        cta: "Get a Custom Quote",
        note: "Free diagnostic call. No commitment required."
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "How much does custom software cost?",
            answer: "Projects start from $5,000 USD. The final investment depends on complexity, integrations, and timeline. We provide a detailed, fixed-price quote after our discovery phase — no surprises."
          },
          {
            question: "How long does development take?",
            answer: "Most projects take 6-14 weeks from kickoff to launch. Simple automation tools can be ready in 4 weeks. Complex systems with multiple integrations may take 16+ weeks. We'll give you a realistic timeline upfront."
          },
          {
            question: "What technologies do you use?",
            answer: "We build with Next.js, TypeScript, React, and PostgreSQL, deployed on Vercel. This modern stack ensures fast performance, easy maintenance, and scalability. No legacy code or technical debt."
          },
          {
            question: "Do you provide ongoing support?",
            answer: "Yes. We offer maintenance and support packages starting at $1,200/month. This includes bug fixes, minor updates, security patches, and priority support. We don't disappear after launch."
          },
          {
            question: "Can you integrate with our existing tools?",
            answer: "Absolutely. We specialize in integrations. Whether it's your CRM (Salesforce, HubSpot), accounting software (QuickBooks, Xero), payment processors (Stripe, PayPal), or custom APIs — we'll connect them."
          },
          {
            question: "Do you work with companies outside your country?",
            answer: "Yes, we have real experience with clients in Chile and Australia, and we provide services worldwide. Remote collaboration is built into our process with async communication and scheduled video calls across time zones."
          }
        ]
      },
      finalCta: {
        title: "Ready to Build Software That Works for You?",
        subtitle: "Let's discuss your project. Book a free 30-minute diagnostic call — no commitment, no sales pitch. Just a conversation about what's possible.",
        cta: "Book Free Diagnostic",
        note: "We'll analyze your needs and give you an honest assessment."
      }
    },

    processAutomation: {
      meta: {
        title: "Business Process Automation | Digital Frog",
        description: "Stop wasting hours on repetitive tasks. Custom automation solutions that save time, reduce errors, and let your team focus on growth. Free assessment.",
        keywords: "process automation, business automation, workflow automation, task automation, RPA alternative"
      },
      hero: {
        badge: "Process Automation",
        title: "Stop Wasting Hours on",
        titleAccent: "Repetitive Tasks",
        subtitle: "Your team is talented. They shouldn't spend their time copying data between spreadsheets, sending reminder emails, or generating the same reports every week. We build automation that handles the tedious work — so your people can focus on what actually moves the needle.",
        cta: "Get Free Assessment",
        ctaSecondary: "See Automation Examples"
      },
      problem: {
        title: "The Hidden Cost of Manual Processes",
        subtitle: "Calculate how much repetitive tasks are really costing you.",
        items: [
          {
            icon: "Clock",
            title: "Time Drain",
            description: "Your best people spend 30-50% of their time on tasks that could be automated. That's expensive talent doing low-value work."
          },
          {
            icon: "AlertTriangle",
            title: "Human Error",
            description: "Manual data entry means mistakes. Mistakes mean rework, customer complaints, and revenue loss."
          },
          {
            icon: "TrendingDown",
            title: "Scaling Bottleneck",
            description: "As you grow, manual processes don't scale. You hire more people just to handle volume, not to add value."
          },
          {
            icon: "Brain",
            title: "Mental Load",
            description: "Remembering what to do, when to do it, and tracking everything mentally. It's exhausting and things slip through cracks."
          }
        ]
      },
      whatWeAutomate: {
        title: "What We Automate",
        subtitle: "Real automation for real business problems.",
        categories: [
          {
            title: "Finance & Operations",
            items: [
              "Invoice generation and sending",
              "Payment reminders and collections",
              "Bank reconciliation",
              "Expense reporting",
              "Financial report generation"
            ]
          },
          {
            title: "Sales & Marketing",
            items: [
              "Lead qualification and scoring",
              "Follow-up sequences",
              "Proposal and quote generation",
              "CRM data updates",
              "Email campaigns"
            ]
          },
          {
            title: "HR & Admin",
            items: [
              "Employee onboarding workflows",
              "Leave request processing",
              "Document collection",
              "Compliance reminders",
              "Reporting and analytics"
            ]
          },
          {
            title: "Client Services",
            items: [
              "Client onboarding",
              "Status updates and notifications",
              "Document requests",
              "Feedback collection",
              "Service renewals"
            ]
          }
        ]
      },
      vsRPA: {
        title: "Custom Automation vs. Enterprise RPA",
        subtitle: "You don't need UiPath or Automation Anywhere.",
        comparison: [
          {
            aspect: "Cost",
            rpa: "$50,000+ licensing fees per year",
            custom: "One-time investment, you own it"
          },
          {
            aspect: "Complexity",
            rpa: "Requires RPA specialists and training",
            custom: "Works with your existing team"
          },
          {
            aspect: "Flexibility",
            rpa: "Limited to what the platform can do",
            custom: "Built exactly for your needs"
          },
          {
            aspect: "Maintenance",
            rpa: "Breaks when UIs change",
            custom: "API-based, more stable"
          }
        ],
        conclusion: "For most SMBs, enterprise RPA is overkill. Custom automation gives you exactly what you need at a fraction of the cost."
      },
      roiCalculator: {
        title: "Calculate Your Automation ROI",
        subtitle: "See how much you could save.",
        inputs: {
          hours: "Hours per week on this task",
          hourlyRate: "Average hourly cost of employee",
          errorRate: "Estimated error rate (%)"
        },
        outputs: {
          annualHours: "Hours saved annually",
          annualSavings: "Annual cost savings",
          roi: "ROI in first year"
        },
        cta: "Get Full Analysis"
      },
      caseStudy: {
        title: "Automation in Action",
        featured: {
          type: "Real Estate Consultant",
          client: "Felipe Cuevas",
          challenge: "Spending 15+ hours weekly on lead qualification, follow-ups, and document preparation.",
          solution: "Automated lead scoring, email sequences, and document generation integrated with his CRM.",
          results: [
            { metric: "15hrs", label: "Saved weekly" },
            { metric: "60%", label: "Better lead quality" },
            { metric: "2x", label: "Client capacity" }
          ],
          quote: "I used to dread Monday mornings. Now I actually spend time with clients instead of spreadsheets."
        }
      },
      process: {
        title: "How We Build Your Automation",
        steps: [
          {
            number: "01",
            title: "Process Mapping",
            description: "We document your current workflows, identify repetitive tasks, and prioritize based on time saved and impact."
          },
          {
            number: "02",
            title: "Automation Design",
            description: "We design the automated workflow, including triggers, actions, error handling, and notifications."
          },
          {
            number: "03",
            title: "Build & Test",
            description: "We build the automation, test thoroughly with your real data, and refine until it's bulletproof."
          },
          {
            number: "04",
            title: "Deploy & Train",
            description: "We deploy to production and train your team on monitoring and handling edge cases."
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What processes can be automated?",
            answer: "Any process that follows consistent rules and involves digital data can likely be automated. This includes data entry, report generation, email communications, document creation, notifications, and integrations between systems. If you do it the same way every time, it's a candidate for automation."
          },
          {
            question: "How much does automation cost?",
            answer: "Automation projects start from $5,000 USD. The final investment depends on complexity and the number of systems involved. Most clients see ROI within 2-4 months."
          },
          {
            question: "Will automation replace my employees?",
            answer: "No. Automation handles the repetitive, low-value tasks so your team can focus on work that requires human judgment, creativity, and relationships. Your people become more valuable, not redundant."
          },
          {
            question: "What if something goes wrong?",
            answer: "We build in error handling, notifications, and fallbacks. When something unexpected happens, you're notified immediately and can intervene. We also provide monitoring dashboards so you have full visibility."
          },
          {
            question: "Do you integrate with our existing tools?",
            answer: "Yes. We work with most common business tools: Google Workspace, Microsoft 365, Salesforce, HubSpot, QuickBooks, Slack, and hundreds of others via APIs. If it has an API, we can connect it."
          }
        ]
      },
      finalCta: {
        title: "Ready to Reclaim Your Time?",
        subtitle: "Let's identify the processes draining your team's energy. Book a free 30-minute assessment — we'll map your biggest automation opportunities.",
        cta: "Get Free Assessment",
        note: "No commitment. Just clarity on what's possible."
      }
    },

    professionalServices: {
      meta: {
        title: "Software for Law Firms, Accountants & Consultants | Digital Frog",
        description: "Custom software built for professional services firms. Case management, client portals, document automation, and billing systems. See how we helped a law firm 2x their closed cases.",
        keywords: "law firm software, accounting software, consultant software, professional services automation, case management system"
      },
      hero: {
        badge: "Professional Services",
        title: "Software Built for",
        titleAccent: "Professionals Like You",
        subtitle: "Law firms, accounting practices, and consultancies share a common challenge: billable time consumed by admin work. We build systems that automate the repetitive, organize the complex, and let you focus on your clients.",
        cta: "Book Industry Consultation",
        ctaSecondary: "See Law Firm Case Study"
      },
      industries: {
        title: "Who We Serve",
        items: [
          {
            icon: "Pickaxe",
            title: "Mining & Resources",
            description: "Process automation, safety compliance tracking, equipment maintenance systems, and operational dashboards for one of Chile's most important industries."
          },
          {
            icon: "Scale",
            title: "Law Firms",
            description: "Case management, document automation, client portals, deadline tracking, and conflict checking. We have direct experience with regulated legal environments."
          },
          {
            icon: "ShieldCheck",
            title: "Regulated Industries",
            description: "Compliance tracking, audit trails, document management, and reporting systems for industries with strict regulatory requirements."
          },
          {
            icon: "Briefcase",
            title: "Professional Services",
            description: "Any business with repetitive processes can benefit from automation. If your team spends time on admin instead of clients, we can help."
          }
        ]
      },
      challenges: {
        title: "We Understand Your Challenges",
        subtitle: "Because we've solved them before.",
        items: [
          {
            title: "Billable Time Lost to Admin",
            description: "Every hour spent on data entry, document prep, and scheduling is an hour not billed. For a firm with 5 professionals billing $200/hr, 5 hours of admin per week = $260,000/year in lost revenue."
          },
          {
            title: "Client Communication Gaps",
            description: "Clients call asking for updates. Your team stops what they're doing to check status. Everyone loses time. Information silos create frustration on both sides."
          },
          {
            title: "Document Chaos",
            description: "Contracts, reports, and deliverables scattered across email, drives, and filing systems. Finding the right version takes longer than it should."
          },
          {
            title: "Scaling Without Hiring",
            description: "Growing your client base shouldn't mean proportionally growing your admin staff. The right systems let you scale efficiently."
          }
        ]
      },
      solutions: {
        title: "Solutions We Build",
        items: [
          {
            icon: "FolderKanban",
            title: "Case & Matter Management",
            description: "Track every client, matter, and deadline in one place. Automatic reminders, status tracking, and team assignment. Never miss a deadline again."
          },
          {
            icon: "Users",
            title: "Client Portals",
            description: "Secure portals where clients can upload documents, check status, sign agreements, and communicate with your team. Reduce phone calls by 60%+."
          },
          {
            icon: "FileSignature",
            title: "Document Automation",
            description: "Generate contracts, engagement letters, reports, and certificates automatically. Pull data from your systems, output professional documents in seconds."
          },
          {
            icon: "Clock",
            title: "Time & Billing Integration",
            description: "Track time, generate invoices, and sync with your accounting system. Reduce billing cycles and improve collections."
          },
          {
            icon: "Bell",
            title: "Workflow Automation",
            description: "Automatic task assignment, deadline reminders, document requests, and status updates. Your processes run consistently without manual oversight."
          },
          {
            icon: "BarChart3",
            title: "Business Intelligence",
            description: "Dashboards showing utilization, revenue by client/matter, aging receivables, and team performance. Make decisions with data."
          }
        ]
      },
      caseStudy: {
        badge: "Case Study",
        title: "How a Law Firm Doubled Their Closed Cases",
        client: "Jorge Robles & Associates",
        subtitle: "Family law practice in Santiago, Chile",
        challenge: {
          title: "The Challenge",
          description: "Jorge's firm was drowning in administrative work. Case tracking lived in spreadsheets. Client communication was scattered across email and phone. Document preparation consumed hours that should have been billable. Growth meant hiring more admin staff, eating into margins."
        },
        solution: {
          title: "What We Built",
          items: [
            "Custom case management system tracking all matters, deadlines, and client interactions",
            "Client portal for document upload, status checking, and secure messaging",
            "Automated document generation for standard agreements and court filings",
            "Integration with calendar and email for automatic reminders",
            "Dashboard showing case pipeline, revenue, and team workload"
          ]
        },
        results: {
          title: "The Results",
          items: [
            { metric: "+20%", label: "Increase in new client inquiries", detail: "Word-of-mouth improved as client experience improved" },
            { metric: "2x", label: "More cases closed annually", detail: "Same team, better systems, more capacity" },
            { metric: "15hrs", label: "Saved per week", detail: "Across the team in reduced admin work" },
            { metric: "60%", label: "Fewer status inquiry calls", detail: "Clients check the portal instead" }
          ]
        },
        quote: {
          text: "We went from managing spreadsheets to managing growth. The system paid for itself in the first quarter.",
          name: "Jorge Robles",
          title: "Founding Partner"
        }
      },
      pricing: {
        title: "Investment",
        description: "Professional services systems typically range from $15,000-$40,000 USD depending on complexity, integrations, and number of users. Most firms see ROI within 6 months through recovered billable time and improved client capacity.",
        cta: "Get Industry-Specific Quote"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "How is this different from practice management software like Clio or PracticePanther?",
            answer: "Off-the-shelf practice management forces you to adapt to their workflows. We build around YOUR specific processes and can include features those platforms don't offer — like custom document automation, specific integrations with your other tools, or unique client portal features. No per-user licensing fees that scale with your team."
          },
          {
            question: "How long does implementation take?",
            answer: "Most systems take 6-12 weeks from kickoff to launch. We work in phases: core functionality first, then add features. You'll see progress weekly and can start using the system before all features are complete."
          },
          {
            question: "Will my team actually use it?",
            answer: "Adoption is built into our process. We involve key team members during design, train everyone thoroughly, and build systems that are actually easier than current workflows. If it's harder to use than what you have, we've failed."
          },
          {
            question: "What about data security and confidentiality?",
            answer: "We take security seriously. Role-based access control, encrypted data at rest and in transit, audit logs, and compliance with relevant regulations. We can discuss specific requirements for your industry."
          },
          {
            question: "Can you integrate with our existing systems?",
            answer: "Yes. We commonly integrate with accounting software (QuickBooks, Xero), email (Gmail, Outlook), calendars, document storage (Google Drive, Dropbox), and industry-specific tools. If it has an API, we can connect it."
          }
        ]
      },
      finalCta: {
        title: "Ready to Transform Your Practice?",
        subtitle: "Let's discuss your specific challenges. Book a free 30-minute consultation focused on your industry.",
        cta: "Book Industry Consultation",
        note: "We'll share insights from firms like yours and give you an honest assessment."
      }
    }
  },
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.blog': 'Blog',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.cta': 'Comienza tu proyecto',
    
    // Meta tags for main pages (Spanish)
    'meta.homepage.title': 'Digital Frog - Donde el Marketing se Encuentra con la Ingeniería',
    'meta.homepage.description': 'Desde SEO hasta software a medida—creamos sistemas digitales que crecen contigo, se escalan solos y entregan resultados concretos.',
    'meta.homepage.keywords': 'marketing digital, servicios SEO, desarrollo software personalizado, desarrollo web, automatización marketing, Santiago Chile',
    
    'meta.about.title': 'Nosotros - Digital Frog | Donde el Marketing se Encuentra con la Ingeniería',
    'meta.about.description': 'Conoce Digital Frog, donde el marketing se encuentra con la ingeniería. Creamos sistemas digitales completos que crecen con tu negocio.',
    'meta.about.keywords': 'sobre digital frog, ingeniería marketing, equipo desarrollo web, expertos SEO',
    
    'meta.contact.title': 'Contacto - Digital Frog | Hagamos Crecer tu Negocio',
    'meta.contact.description': '¿Listo para transformar tu presencia digital? Contacta Digital Frog para servicios SEO, desarrollo de software y automatización de marketing.',
    'meta.contact.keywords': 'contacto digital frog, consulta SEO, cotización desarrollo software, automatización marketing',
    
    'meta.portfolio.title': 'Portafolio - Casos de Éxito Digital Frog',
    'meta.portfolio.description': 'Ve cómo Digital Frog ha ayudado a negocios a crecer con optimización SEO, software personalizado y soluciones de automatización.',
    'meta.portfolio.keywords': 'portafolio digital frog, casos estudio SEO, proyectos desarrollo software, historias éxito clientes',
    
    'meta.services.title': 'Servicios - SEO y Desarrollo Software Personalizado | Digital Frog',
    'meta.services.description': 'Digital Frog ofrece servicios completos de SEO y desarrollo de software personalizado. Desde auditorías técnicas hasta aplicaciones full-stack.',
    'meta.services.keywords': 'servicios SEO, desarrollo software personalizado, aplicaciones web, auditoría técnica SEO, optimización rendimiento',

    'meta.blog.title': 'Blog - Desarrollo de Software y Automatización | Digital Frog',
    'meta.blog.description': 'Contenido experto sobre desarrollo de software a medida, automatización de procesos y transformación digital para empresas en Chile.',
    'meta.blog.keywords': 'blog desarrollo software, automatización procesos, transformación digital, tendencias tecnología',

    // Hero
    'hero.headline': 'Donde el Marketing se encuentra con la Ingeniería',
    'hero.subtitle': 'Desde SEO hasta software a medida—creamos sistemas digitales que crecen contigo, se escalan solos y entregan resultados concretos.',
    'hero.cta.primary': 'Comienza tu proyecto',
    'hero.cta.secondary': 'Ve nuestro trabajo',
    
    // Stats
    'stats.pagespeed': 'PageSpeed garantizado',
    'stats.automated': 'Entrega automática',
    'stats.days': 'Días promedio de implementación',
    
    // Trust bar
    'trust.clients': 'Clientes activos',
    'trust.revenue': 'Aumento promedio en ingresos',
    'trust.time': 'Horas ahorradas por semana',
    
    // Services Section (Homepage)
    'servicesSection.title': 'Tres niveles de solución digital',
    'servicesSection.subtitle': 'No hacemos solo sitios web o campañas sueltas. Creamos ecosistemas digitales que funcionan en conjunto.',
    
    // Tier 1
    'tier1.badge': 'NIVEL 1',
    'tier1.title': 'Base',
    'tier1.subtitle': 'Visibilidad digital con ingeniería',
    'tier1.feature1': 'SEO sistemático que funciona',
    'tier1.feature2': 'Auditorías técnicas profundas',
    'tier1.feature3': 'Velocidad web garantizada (90+ PageSpeed)',
    'tier1.feature4': 'Contenido estratégico que convierte',
    'tier1.cta': 'Empezar',
    'tier1.price': 'Desde $1.800/mes',
    
    // Tier 2
    'tier2.badge': 'NIVEL 2',
    'tier2.title': 'Desarrollo',
    'tier2.subtitle': 'Apps web que vuelan',
    'tier2.feature1': 'Apps custom con Next.js',
    'tier2.feature2': 'Sitios web ultra rápidos',
    'tier2.feature3': 'Tiendas online potentes',
    'tier2.feature4': 'Integraciones y optimización',
    'tier2.cta': 'Cotizar',
    'tier2.price': 'Precio por proyecto',
    
    // Tier 3
    'tier3.badge': 'NIVEL 3',
    'tier3.title': 'Sistemas',
    'tier3.subtitle': 'Automatización Empresarial y Software Personalizado',
    'tier3.feature1': 'Aplicaciones empresariales personalizadas',
    'tier3.feature2': 'Sistemas de automatización con IA',
    'tier3.feature3': 'Ingeniería de flujos de trabajo',
    'tier3.feature4': 'Optimización de operaciones',
    'tier3.cta': 'Conversemos',
    'tier3.price': 'Retainer premium o por proyecto',
    
    // Case Studies
    'cases.title': 'Resultados Medibles con Ingeniería',
    'cases.subtitle': 'Números reales de clientes reales. Porque los ingenieros miden todo.',
    'cases.cta': 'Ver Portafolio Completo',
    
    'case1.company': 'Estudio Jurídico - Jorge Robles',
    'case1.result': '+20% ingresos',
    'case1.description': 'SEO + automatización = duplicó casos cerrados y bajó costos 40%',
    
    'case2.company': 'NatAxtin',
    'case2.result': 'PageSpeed 75→90+',
    'case2.description': 'Optimizamos su web en 2.5 días. Posición en Google: puesto 45 → top 20.',
    
    'case3.company': 'Felipe Cuevas',
    'case3.result': '15 hrs/semana libres',
    'case3.description': 'Automatizamos procesos: 60% mejor calidad de leads con flujos inteligentes.',
    
    // CTA Section
    'cta.title': '¿Listo para hacer crecer tu negocio?',
    'cta.subtitle': 'SEO, apps web, automatización—diseñemos la solución perfecta para ti.',
    'cta.button': 'Agenda una consulta gratis',
    'cta.trust1': 'Consulta sin costo',
    'cta.trust2': 'Sin compromiso',
    'cta.trust3': '30 minutos de estrategia',
    
    // Footer
    'footer.tagline': 'Desarrollando soluciones digitales desde 2021.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.contact': 'Contacto',
    'footer.seo': 'Base - SEO',
    'footer.webdev': 'Infraestructura - Desarrollo Web',
    'footer.automation': 'Sistemas - Automatización',
    'footer.about': 'Nosotros',
    'footer.portfolio': 'Portafolio',
    'footer.blog': 'Blog',
    'footer.copyright': '© 2025 Digital Frog. Hecho con ingeniería en Chile.',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Contenido experto sobre desarrollo de software, automatización y transformación digital',
    'blog.readMore': 'Leer más',
    'blog.backToBlog': 'Volver al blog',
    'blog.relatedPosts': 'Artículos relacionados',
    'blog.minutesRead': 'minutos de lectura',
    'blog.comingSoon': 'Próximamente',
    'blog.comingSoonDesc': 'Estamos preparando contenido experto sobre desarrollo de software, automatización y transformación digital. ¡Vuelve pronto!',
    'blog.author': 'Por',
    'blog.publishedOn': 'Publicado el',
    'blog.updatedOn': 'Actualizado el',
    'blog.category': 'Categoría',
    'blog.tags': 'Etiquetas',
    'blog.sharePost': 'Compartir artículo',
    'blog.readyToStart': '¿Listo para comenzar tu proyecto?',
    'blog.readyToStartDesc': 'Conversemos sobre cómo podemos ayudarte a crecer con desarrollo de software personalizado y automatización.',
    'blog.getStarted': 'Comenzar',
    
    // Contact Page
    'contact.title': 'Hagamos crecer tu negocio',
    'contact.subtitle': 'Cuéntanos de tu proyecto y te mostraremos cómo hacer que tu presencia digital genere más ventas',
    'contact.step1.title': '¿Qué necesitas?',
    'contact.step2.title': 'Detalles de tu proyecto',
    'contact.step3.title': 'Tus datos',
    'contact.service.seo': 'SEO (más tráfico web)',
    'contact.service.webdev': 'Desarrollo web (sitios y apps)',
    'contact.service.automation': 'Automatización (procesos)',
    'contact.service.all': 'No sé aún / Todo',
    'contact.budget': 'Presupuesto aproximado',
    'contact.budget.under5k': 'Menos de $5K',
    'contact.budget.5k15k': '$5K - $15K',
    'contact.budget.15k50k': '$15K - $50K',
    'contact.budget.50kplus': '$50K+',
    'contact.budget.retainer': 'Retainer continuo',
    'contact.project': 'Cuéntanos qué quieres lograr',
    'contact.timeline': 'Tiempos',
    'contact.timeline.asap': 'Lo antes posible',
    'contact.timeline.1-3': '1-3 meses',
    'contact.timeline.3-6': '3-6 meses',
    'contact.timeline.6plus': '6+ meses',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.company': 'Empresa',
    'contact.phone': 'Teléfono',
    'contact.language': 'Idioma Preferido',
    'contact.next': 'Siguiente',
    'contact.back': 'Atrás',
    'contact.send': 'Enviar',
    'contact.success': '¡Listo! Te contactamos en 24 horas.',
    'contact.alternative': 'Otras formas de contacto',
    'contact.available': 'Disponible Lun-Vie, 9am-6pm CLT',
    
    // About Page
    'about.title': 'Donde el marketing se encuentra con la ingeniería',
    'about.subtitle': 'Creado por un ingeniero que entiende cómo hacer crecer negocios',
    'about.story.title': 'De ingeniero civil a sistemas digitales',
    'about.story.content': 'Con background en ingeniería civil, traigo un enfoque sistemático y preciso al marketing digital. Cada proyecto lo trato como un problema de ingeniería: analizo, planifico, mido y optimizo. Nada de prueba y error—construyo infraestructura digital que entrega resultados predecibles.',
    'about.philosophy.title': '¿Por qué ingeniería + marketing?',
    'about.value1': 'Datos concretos, no corazonadas',
    'about.value2': 'Sistemas que funcionan, no tácticas sueltas',
    'about.value3': 'Automatización que ahorra tiempo',
    'about.value4': 'Resultados reales, no métricas de vanidad',
    'about.tech.title': 'Tecnología de punta',
    'about.tech.subtitle': 'Hacemos lo que predicamos—90+ PageSpeed en todo lo que construimos',
    'about.cta': 'Trabajemos juntos',
    
    // Portfolio Page
    'portfolio.title': 'Nuestro trabajo',
    'portfolio.subtitle': 'Resultados reales para empresas que quieren crecer',
    'portfolio.filter.all': 'Todo',
    'portfolio.filter.seo': 'SEO',
    'portfolio.filter.webdev': 'Desarrollo web',
    'portfolio.filter.automation': 'Automatización',
    'portfolio.view': 'Ver caso',

    // Services Page
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Dos soluciones para hacer crecer tu negocio',
    
    // SEO Service
    'services.seo.title': 'SEO',
    'services.seo.badge': 'Base',
    'services.seo.what.title': 'Qué Hacemos',
    'services.seo.what.description': 'SEO completo para empresas que quieren dominar en buscadores',
    'services.seo.feature1': 'SEO Técnico',
    'services.seo.feature2': 'Estrategia de Contenido',
    'services.seo.feature3': 'SEO Local',
    'services.seo.feature4': 'Link Building',
    'services.seo.who.title': 'Para Quién Es',
    'services.seo.who.target1': 'Empresas que quieren tráfico orgánico predecible',
    'services.seo.who.target2': 'Empresas cansadas de pagar por ads sin ROI a largo plazo',
    'services.seo.platforms.title': 'Plataformas',
    'services.seo.platforms.note': 'Experto en WordPress + Elementor, más Shopify, Wix, Webnode y otros',
    'services.seo.timeline.title': 'Timeline',
    'services.seo.timeline.audit': 'Auditoría Inicial',
    'services.seo.timeline.audit_time': '1 semana',
    'services.seo.timeline.implementation': 'Implementación',
    'services.seo.timeline.implementation_time': '2-4 semanas',
    'services.seo.timeline.results': 'Resultados Visibles',
    'services.seo.timeline.results_time': '3-6 meses',
    'services.seo.deliverables.title': 'Entregables',
    'services.seo.deliverable1': 'Auditoría técnica completa',
    'services.seo.deliverable2': 'Estrategia de keywords',
    'services.seo.deliverable3': 'Optimización on-page',
    'services.seo.deliverable4': 'Reportes mensuales de performance',
    'services.seo.pricing': 'Desde $1.800 USD',
    'services.seo.pricing_note': 'por proyecto',
    'services.seo.cta': 'Pide tu Auditoría SEO Gratis',
    
    // Development Service
    'services.dev.title': 'Desarrollo de Software',
    'services.dev.badge': 'Sistemas',
    'services.dev.what.title': 'Qué Construimos',
    'services.dev.what.description': 'Software custom, micro-SaaS y sistemas de automatización que reemplazan procesos manuales',
    'services.dev.what.migration': 'Migración y normalización de datos desde múltiples fuentes a bases de datos estructuradas',
    'services.dev.who.title': 'Para Quién Es',
    'services.dev.who.target1': 'Empresas ahogándose en spreadsheets',
    'services.dev.who.target2': 'Empresas que necesitan herramientas custom',
    'services.dev.who.target3': 'Startups construyendo micro-SaaS',
    'services.dev.tech.title': 'Tech Stack',
    'services.dev.timeline.title': 'Timeline',
    'services.dev.timeline.discovery': 'Descubrimiento',
    'services.dev.timeline.discovery_time': '1-2 semanas',
    'services.dev.timeline.development': 'Desarrollo',
    'services.dev.timeline.development_time': '4-12 semanas',
    'services.dev.timeline.deployment': 'Deployment + Capacitación',
    'services.dev.timeline.deployment_time': '1 semana',
    'services.dev.deliverables.title': 'Qué Obtienes',
    'services.dev.deliverable1': 'Análisis de procesos y diseño de flujos',
    'services.dev.deliverable2': 'Control de acceso por roles',
    'services.dev.deliverable3': 'Generación automática de documentos',
    'services.dev.deliverable4': 'Capacitación de usuarios',
    'services.dev.deliverable5': 'Soporte continuo',
    'services.dev.cta': 'Empezar Tu Proyecto',
    
    // Process
    'services.process.title': 'Cómo funcionan los proyectos',
    'services.process.subtitle': 'Un proceso probado que entrega resultados',
    'services.process.step1': 'Llamada inicial',
    'services.process.desc1': 'Entendemos tus necesidades',
    'services.process.step2': 'Propuesta y alcance',
    'services.process.desc2': 'Tiempos y precios claros',
    'services.process.step3': 'Sprints de desarrollo',
    'services.process.desc3': 'Updates y feedback regular',
    'services.process.step4': 'Lanzamiento y capacitación',
    'services.process.desc4': 'Salimos en vivo con soporte total',
    'services.process.step5': 'Soporte continuo',
    'services.process.desc5': 'Mantenimiento y actualizaciones',
    
    // Final CTA
    'services.final_cta.title': '¿Listo para empezar?',
    'services.final_cta.description': 'Hablemos de tu proyecto y veamos cómo podemos ayudarte a crecer.',
    'services.final_cta.button': 'Empezar conversación',

    // Servicios SEO Page (/es/servicios/seo)
    serviciosSEO: {
      meta: {
        title: "Servicios SEO | Digital Frog Chile",
        description: "Haz que te encuentren los clientes que ya están buscando. SEO completo para WordPress, Shopify, Wix y Webnode. Desde $1.800 USD.",
        keywords: "servicios SEO, posicionamiento web, SEO WordPress, auditoría SEO técnica, estrategia keywords Chile"
      },
      hero: {
        badge: "Servicios SEO",
        title: "Haz que Te Encuentren los Clientes",
        titleAccent: "que Ya Están Buscando",
        subtitle: "Deja de pagar por ads que desaparecen cuando se acaba tu presupuesto. El SEO construye tráfico orgánico predecible a largo plazo que se multiplica con el tiempo. Optimizamos tu sitio para buscadores y para humanos.",
        cta: "Obtén Auditoría SEO Gratis",
        ctaSecondary: "Ver Casos de Éxito",
        trustBadges: {
          speed: "90+ PageSpeed",
          delivery: "Auditoría en 1 Semana",
          satisfaction: "100% Transparente"
        }
      },
      problem: {
        title: "Por Qué Tu Sitio Web No Aparece en Google",
        subtitle: "Los competidores te superan porque entienden lo que los buscadores realmente quieren.",
        items: [
          {
            icon: "Search",
            title: "Invisible para Buscadores",
            description: "Tu sitio tiene problemas técnicos que impiden una indexación correcta. Google no puede encontrar ni entender tu contenido adecuadamente."
          },
          {
            icon: "Target",
            title: "Keywords Incorrectas",
            description: "Optimizas para keywords que nadie busca, o para keywords que no convierten visitantes en clientes."
          },
          {
            icon: "Gauge",
            title: "Velocidad de Carga Lenta",
            description: "La velocidad es un factor de ranking importante. Los sitios lentos bajan en resultados de búsqueda y pierden visitantes."
          },
          {
            icon: "FileX",
            title: "Estructura de Contenido Pobre",
            description: "Contenido que no sigue mejores prácticas SEO. Meta descripciones faltantes, encabezados pobres, enlaces internos débiles."
          }
        ]
      },
      solution: {
        title: "Nuestro Enfoque SEO Sistemático",
        subtitle: "No solo optimizamos. Ingeniamos sistemas SEO completos que funcionan.",
        items: [
          {
            icon: "Wrench",
            title: "Auditoría Técnica Nivel Ingeniería",
            description: "Analizamos tu sitio como ingenieros: rastreabilidad, velocidad del sitio, rendimiento móvil, datos estructurados e indexación."
          },
          {
            icon: "TrendingUp",
            title: "Investigación Estratégica de Keywords",
            description: "Encontramos keywords de alta intención que tus clientes realmente buscan. Enfoque en términos que convierten visitantes en ventas."
          },
          {
            icon: "Zap",
            title: "Optimización de Rendimiento",
            description: "90+ PageSpeed garantizado. Los sitios rápidos ranquean mejor y convierten más. Optimizamos cada elemento para velocidad."
          },
          {
            icon: "BarChart3",
            title: "Seguimiento de Resultados Medibles",
            description: "Reportes mensuales mostrando mejoras en ranking, crecimiento de tráfico y aumentos de conversión. SEO que impulsa resultados de negocio."
          }
        ],
        differentiator: {
          title: "Por Qué 'Marketing se Encuentra con Ingeniería' Funciona para SEO",
          description: "La mayoría de agencias SEO se enfocan solo en rankings. Nosotros nos enfocamos en resultados de negocio. Nuestra experiencia en ingeniería significa que los problemas técnicos se arreglan correctamente, y nuestra expertise en marketing asegura que el tráfico realmente convierte."
        }
      },
      whatWeBuild: {
        title: "Optimización SEO Completa",
        subtitle: "Todo lo que tu sitio necesita para dominar los rankings de búsqueda.",
        items: [
          {
            icon: "Search",
            title: "Base SEO Técnica",
            description: "Optimización de velocidad, responsividad móvil, datos estructurados, XML sitemaps y mejoras de rastreabilidad."
          },
          {
            icon: "Target",
            title: "Estrategia de Keywords y Contenido",
            description: "Investigación, mapeo y optimización de keywords de alta intención. Estructura de contenido que los buscadores aman."
          },
          {
            icon: "Link",
            title: "Optimización On-Page",
            description: "Meta descripciones, title tags, encabezados, enlaces internos y estructura URL optimizados para máximo impacto."
          },
          {
            icon: "FileText",
            title: "Guías de Contenido",
            description: "Guías claras para crear contenido amigable con SEO que rankea y convierte visitantes en clientes."
          },
          {
            icon: "BarChart",
            title: "Monitoreo de Rendimiento",
            description: "Seguimiento mensual de rankings, tráfico orgánico, tasas de clics y mejoras de conversión."
          },
          {
            icon: "Smartphone",
            title: "Optimización Mobile-First",
            description: "Aseguramos que tu sitio funcione perfectamente en dispositivos móviles donde ocurre la mayoría de las búsquedas."
          }
        ]
      },
      techStack: {
        title: "Plataformas que Optimizamos",
        subtitle: "SEO experto para todas las principales plataformas web.",
        description: "Ya sea que tengas WordPress, Shopify o sitios construidos a medida, tenemos la expertise técnica para optimizar tu plataforma específica para máximo rendimiento de búsqueda.",
        technologies: ["WordPress + Elementor", "Shopify", "Wix", "Webnode", "HTML/React Custom", "Next.js", "Squarespace"]
      },
      process: {
        title: "Nuestro Proceso SEO",
        subtitle: "Optimización sistemática que entrega resultados medibles.",
        steps: [
          {
            number: "01",
            title: "Auditoría Técnica",
            duration: "1 semana",
            description: "Análisis completo de la salud SEO técnica de tu sitio. Identificamos todos los problemas que impiden rendimiento de búsqueda óptimo."
          },
          {
            number: "02",
            title: "Investigación de Keywords",
            duration: "1 semana",
            description: "Investigamos keywords de alta intención que tus clientes buscan. Mapeamos estrategia de contenido alrededor de términos que realmente convierten."
          },
          {
            number: "03",
            title: "Implementación",
            duration: "2-4 semanas",
            description: "Arreglamos problemas técnicos, optimizamos elementos on-page, mejoramos velocidad del sitio e implementamos datos estructurados."
          },
          {
            number: "04",
            title: "Optimización de Contenido",
            duration: "2-3 semanas",
            description: "Optimizamos contenido existente y creamos nuevas páginas dirigidas a tus keywords prioritarias. Enfoque en conversión, no solo tráfico."
          },
          {
            number: "05",
            title: "Monitoreo y Reportes",
            duration: "Continuo",
            description: "Reportes mensuales siguiendo rankings, tráfico y resultados de negocio. Optimización continua basada en datos de rendimiento."
          }
        ]
      },
      caseStudy: {
        title: "Resultados SEO que Impulsan Crecimiento de Negocio",
        subtitle: "Rankings reales, tráfico real, aumentos de ingresos reales.",
        featured: {
          type: "Optimización Técnica",
          client: "Nataxtin",
          challenge: "Sitio cargando lento con puntaje PageSpeed de 75. Rankings bajando debido a pobre rendimiento técnico.",
          solution: "Revisión SEO técnica completa: optimización de imágenes, limpieza de código, optimización de servidor y mejoras móviles.",
          results: [
            { metric: "90+", label: "Puntaje PageSpeed", detail: "De 75 a 90+ en solo 2.5 días" },
            { metric: "Top 20", label: "Posición Búsqueda", detail: "Pasó de posición 45 a top 20 para keywords objetivo" },
            { metric: "+40%", label: "Tráfico Orgánico", detail: "Aumento significativo de tráfico en el primer mes" }
          ],
          quote: "Las mejoras técnicas fueron inmediatamente visibles en nuestro rendimiento de búsqueda.",
          quoteName: "Equipo Nataxtin"
        },
        additionalMetrics: [
          { value: "+150%", label: "Tráfico orgánico", client: "Consultora Tech" },
          { value: "45→20", label: "Ranking promedio", client: "Negocio Servicios" },
          { value: "+60%", label: "Calidad leads", client: "Servicios Profesionales" }
        ]
      },
      pricing: {
        title: "Inversión SEO",
        subtitle: "Precios transparentes para optimización SEO completa.",
        description: "Los servicios SEO empiezan desde $1.800 USD e incluyen auditoría técnica, estrategia de keywords, optimización on-page y monitoreo continuo. Paquetes personalizados disponibles para sitios enterprise.",
        factors: {
          title: "Qué Afecta Tu Inversión",
          items: [
            "Tamaño y complejidad de tu sitio web",
            "Número de keywords objetivo y páginas",
            "Problemas técnicos actuales a resolver",
            "Panorama competitivo en tu industria"
          ]
        },
        cta: "Obtén Auditoría SEO Gratis",
        note: "Auditoría técnica gratis incluida. Sin compromiso requerido."
      },
      faq: {
        title: "Preguntas SEO Respondidas",
        items: [
          {
            question: "¿Cuánto tiempo toma ver resultados SEO?",
            answer: "Las mejoras técnicas pueden mostrar resultados en 2-4 semanas. Mejoras significativas de ranking y tráfico típicamente toman 3-6 meses. SEO es una estrategia a largo plazo que se compone con el tiempo."
          },
          {
            question: "¿Qué incluye la auditoría SEO?",
            answer: "Análisis técnico completo: velocidad del sitio, rendimiento móvil, rastreabilidad, problemas de indexación, datos estructurados, enlaces internos y análisis competitivo. Recibirás un reporte detallado con acciones priorizadas."
          },
          {
            question: "¿Trabajan con todas las plataformas web?",
            answer: "Sí. Optimizamos WordPress, Shopify, Wix, Webnode y sitios construidos a medida. Nuestra experiencia en ingeniería significa que podemos manejar cualquier plataforma o desafío técnico."
          },
          {
            question: "¿Cómo miden el éxito SEO?",
            answer: "Seguimos rankings, tráfico orgánico, tasas de clics y lo más importante - resultados de negocio como leads y ventas. Reportes mensuales muestran exactamente cómo el SEO impacta tu bottom line."
          },
          {
            question: "¿Qué hace diferente su SEO?",
            answer: "Combinamos precisión de ingeniería con estrategia de marketing. Los problemas técnicos se arreglan correctamente, la estrategia de keywords se enfoca en conversión, y todo se mide para impacto de negocio - no solo métricas de vanidad."
          }
        ]
      },
      finalCta: {
        title: "¿Listo para Dominar los Rankings de Búsqueda?",
        subtitle: "Obtén una auditoría SEO técnica gratis. Analizaremos tu sitio y te mostraremos exactamente qué está frenando tu rendimiento de búsqueda.",
        cta: "Obtén Auditoría SEO Gratis",
        note: "Reporte de auditoría detallado incluido. Sin compromiso requerido."
      }
    },

    // Desarrollo Web Services Page (/es/servicios/desarrollo-web)
    desarrolloWeb: {
      meta: {
        title: "Servicios de Desarrollo Web | Digital Frog Chile",
        description: "Sitios web rápidos y modernos que convierten. Desarrollo React/Next.js personalizado con 90+ PageSpeed garantizado. Mobile-first, listo para SEO. Desde $3.000 USD.",
        keywords: "desarrollo web, desarrollo React, Next.js, sitios web personalizados, diseño mobile-first, sitios web rápidos Chile"
      },
      hero: {
        badge: "Desarrollo Web",
        title: "Sitios Web Rápidos y Modernos",
        titleAccent: "que Convierten",
        subtitle: "Tu sitio web debería trabajar tan duro como tú. Construimos sitios web ultra rápidos y optimizados para conversión usando React y Next.js moderno. 90+ PageSpeed garantizado, diseño mobile-first, y construido para crecer.",
        cta: "Inicia Tu Proyecto",
        ctaSecondary: "Ver Nuestro Trabajo",
        trustBadges: {
          speed: "90+ PageSpeed",
          delivery: "4-8 Semanas Build",
          satisfaction: "100% Custom"
        }
      },
      problem: {
        title: "Por Qué la Mayoría de Sitios Web Fallan en Convertir",
        subtitle: "Tu sitio web es tu activo de marketing más importante. Esto es lo que probablemente está mal.",
        items: [
          {
            icon: "Turtle",
            title: "Carga Dolorosamente Lenta",
            description: "Los usuarios abandonan sitios que toman más de 3 segundos en cargar. Los sitios lentos matan conversiones y dañan rankings de búsqueda."
          },
          {
            icon: "Smartphone",
            title: "Mala Experiencia Móvil",
            description: "Más del 60% del tráfico es móvil, pero la mayoría de sitios son desktop-first. Mala experiencia móvil = clientes perdidos."
          },
          {
            icon: "Palette",
            title: "Diseño de Template Genérico",
            description: "Tu sitio se ve como miles de otros. Los templates genéricos no construyen confianza ni comunican tu valor único."
          },
          {
            icon: "Search",
            title: "No Construido para SEO",
            description: "Un diseño hermoso es inútil si nadie lo encuentra. La mayoría de sitios no están optimizados para buscadores desde el inicio."
          }
        ]
      },
      solution: {
        title: "Nuestro Enfoque de Desarrollo Web Moderno",
        subtitle: "No solo construimos sitios web. Construimos aplicaciones web optimizadas para conversión y velocidad extrema.",
        items: [
          {
            icon: "Zap",
            title: "Arquitectura Performance-First",
            description: "Construido con Next.js y optimizado para velocidad. Garantizamos puntajes PageSpeed 90+ porque los sitios rápidos convierten mejor y rankean más alto."
          },
          {
            icon: "Smartphone",
            title: "Diseño Mobile-First",
            description: "Diseñado para usuarios móviles primero, luego escalado hacia arriba. Experiencia perfecta en cualquier dispositivo, de celular a desktop."
          },
          {
            icon: "Paintbrush",
            title: "Diseño Custom Enfocado en Conversión",
            description: "Diseño único adaptado a tu marca y audiencia. Cada elemento está diseñado para guiar visitantes hacia convertirse en clientes."
          },
          {
            icon: "TrendingUp",
            title: "SEO y Marketing Integrado",
            description: "Construido para buscadores y optimizado para conversiones. Tu sitio web se convierte en tu mejor herramienta de marketing."
          }
        ],
        differentiator: {
          title: "Por Qué 'Marketing se Encuentra con Ingeniería' Crea Mejores Sitios Web",
          description: "La mayoría de desarrolladores se enfocan en código. La mayoría de diseñadores se enfocan en apariencia. Nosotros nos enfocamos en resultados. Nuestra ingeniería asegura que tu sitio sea rápido y confiable. Nuestra expertise en marketing asegura que realmente convierta visitantes en clientes."
        }
      },
      whatWeBuild: {
        title: "Sitios Web Modernos que Funcionan",
        subtitle: "Soluciones custom para todo tipo de negocio.",
        items: [
          {
            icon: "Store",
            title: "Sitios Web Empresariales",
            description: "Sitios profesionales que construyen confianza, comunican valor y convierten visitantes en leads y clientes."
          },
          {
            icon: "ShoppingCart",
            title: "Plataformas E-Commerce",
            description: "Tiendas online rápidas y seguras con flujos de checkout optimizados. Construidas para vender más y brindar excelente experiencia."
          },
          {
            icon: "Users",
            title: "Sitios para Proveedores de Servicios",
            description: "Sitios web para consultores, agencias y proveedores de servicios. Muestra expertise y facilita agendar consultas."
          },
          {
            icon: "Building",
            title: "Sitios Web Corporativos",
            description: "Sitios de nivel enterprise que reflejan el profesionalismo de tu marca y se comunican efectivamente con stakeholders."
          },
          {
            icon: "FileText",
            title: "Sitios Portfolio",
            description: "Muestra tu trabajo hermosamente. Perfecto para diseñadores, fotógrafos, arquitectos y profesionales creativos."
          },
          {
            icon: "Megaphone",
            title: "Landing Pages",
            description: "Landing pages de alta conversión para campañas, lanzamientos de producto y generación de leads. Construidas para maximizar conversiones."
          }
        ]
      },
      techStack: {
        title: "Stack Tecnológico Moderno",
        subtitle: "Construido con la misma tecnología que impulsa Netflix, Vercel y startups líderes mundialmente.",
        description: "Usamos Next.js, React, TypeScript y desplegamos en la red edge de Vercel. Esto significa que tu sitio carga instantáneamente en cualquier lugar del mundo y escala automáticamente a medida que creces.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL", "Stripe", "Resend"]
      },
      process: {
        title: "Nuestro Proceso de Desarrollo",
        subtitle: "De concepto a lanzamiento en 4-8 semanas.",
        steps: [
          {
            number: "01",
            title: "Descubrimiento y Estrategia",
            duration: "1 semana",
            description: "Entendemos tu negocio, audiencia y objetivos. Definimos estructura del sitio, estrategia de contenido y enfoque de optimización de conversión."
          },
          {
            number: "02",
            title: "Diseño y Prototipado",
            duration: "1-2 semanas",
            description: "Creamos wireframes y mockups de diseño custom. Enfoque en experiencia del usuario, aproximación mobile-first y optimización de conversión."
          },
          {
            number: "03",
            title: "Desarrollo y Testing",
            duration: "2-4 semanas",
            description: "Codificamos tu sitio con tecnología moderna, optimizamos para velocidad y SEO, testeamos en todos los dispositivos y navegadores."
          },
          {
            number: "04",
            title: "Lanzamiento y Optimización",
            duration: "1 semana",
            description: "Desplegamos a producción, configuramos analytics, capacitamos a tu equipo y aseguramos que todo funcione perfectamente."
          },
          {
            number: "05",
            title: "Crecimiento y Mantenimiento",
            duration: "Continuo",
            description: "Monitoreamos rendimiento, brindamos actualizaciones y optimizamos para mejores conversiones basadas en datos de usuarios reales."
          }
        ]
      },
      caseStudy: {
        title: "Sitios Web que Impulsan Resultados Reales de Negocio",
        subtitle: "Proyectos reales, mejoras de rendimiento reales, ROI real.",
        featured: {
          type: "Rediseño E-Commerce",
          client: "Plataforma E-Commerce",
          challenge: "Sitio web desactualizado con mala experiencia móvil y tiempos de carga lentos afectando tasas de conversión y experiencia del cliente.",
          solution: "Reconstrucción completa con Next.js, diseño mobile-first, flujo de checkout optimizado y optimización de rendimiento para tiempos de carga bajo 2 segundos.",
          results: [
            { metric: "3x", label: "Tasa de Conversión", detail: "Mejora de tasa de conversión de 1.2% a 3.6%" },
            { metric: "95", label: "Puntaje PageSpeed", detail: "Logró 95+ PageSpeed en móvil y desktop" },
            { metric: "2.1s", label: "Tiempo de Carga", detail: "Tiempo promedio de carga de página reducido a menos de 2.1 segundos" }
          ],
          quote: "El nuevo sitio web no solo se ve increíble sino que vende mejor. Nuestra tasa de conversión se triplicó.",
          quoteName: "Propietario Plataforma E-Commerce"
        },
        additionalMetrics: [
          { value: "+200%", label: "Conversiones móviles", client: "Proveedor Servicios" },
          { value: "95+", label: "Puntaje PageSpeed", client: "Sitio Corporativo" },
          { value: "-60%", label: "Tasa de rebote", client: "Servicios Profesionales" }
        ]
      },
      pricing: {
        title: "Inversión Desarrollo Web",
        subtitle: "Precios transparentes para desarrollo de sitios web custom.",
        description: "El desarrollo de sitios web personalizados empieza desde $3.000 USD. El precio final depende de complejidad, funcionalidades y timeline. Cada proyecto incluye diseño custom, optimización móvil y garantía de rendimiento.",
        factors: {
          title: "Qué Afecta Tu Inversión",
          items: [
            "Complejidad de diseño y funcionalidades custom",
            "Número de páginas y volumen de contenido",
            "Requerimientos de funcionalidad e-commerce",
            "Integraciones de terceros necesarias"
          ]
        },
        cta: "Obtén Cotización del Proyecto",
        note: "Consulta gratis y estimación del proyecto incluida. Sin compromiso requerido."
      },
      faq: {
        title: "Preguntas de Desarrollo Web Respondidas",
        items: [
          {
            question: "¿Cuánto tiempo toma construir un sitio web?",
            answer: "La mayoría de sitios web toman 4-8 semanas desde kickoff hasta lanzamiento. Sitios simples pueden estar listos en 4 semanas, mientras que sitios e-commerce complejos o multi-funcionalidad pueden tomar 8+ semanas. Te daremos un timeline realista desde el inicio."
          },
          {
            question: "¿Qué está incluido en el precio?",
            answer: "Todo: diseño custom, desarrollo, optimización móvil, optimización de rendimiento, configuración SEO, sistema de gestión de contenido, testing, lanzamiento y capacitación. Sin costos ocultos."
          },
          {
            question: "¿Garantizan el puntaje PageSpeed 90+?",
            answer: "Sí. Garantizamos puntajes PageSpeed 90+ en móvil y desktop. Si no logramos esto, trabajamos gratis hasta conseguirlo. Los sitios rápidos rankean mejor y convierten más."
          },
          {
            question: "¿Puedo actualizar el contenido yo mismo?",
            answer: "Absolutamente. Construimos sistemas de gestión de contenido amigables para que puedas actualizar textos, imágenes y contenido básico sin conocimiento técnico. También brindamos capacitación y documentación."
          },
          {
            question: "¿Qué pasa después del lanzamiento del sitio?",
            answer: "Brindamos soporte continuo, actualizaciones de seguridad y monitoreo de rendimiento. También podemos ayudar con actualizaciones de contenido, adición de funcionalidades y optimización de marketing a medida que tu negocio crece."
          }
        ]
      },
      finalCta: {
        title: "¿Listo para un Sitio Web que Realmente Funcione?",
        subtitle: "Hablemos de tu proyecto. Obtén una consulta gratuita y cotización personalizada para tu nuevo sitio web.",
        cta: "Inicia Tu Proyecto",
        note: "Consulta gratuita incluida. Sin compromiso requerido."
      }
    },

    // Servicios Automatización Page (/es/servicios/automatizacion)
    serviciosAutomatizacion: {
      meta: {
        title: "Servicios de Automatización Empresarial | Digital Frog Chile",
        description: "Automatiza tareas repetitivas y enfócate en crecer. Automatización personalizada para facturación, calificación de leads, onboarding y reportes. Desde $5.000 USD.",
        keywords: "automatización empresarial, automatización de procesos, automatización workflows, automatización tareas, eficiencia empresarial Chile"
      },
      hero: {
        badge: "Automatización Empresarial",
        title: "Automatiza lo Repetitivo,",
        titleAccent: "Enfócate en Crecer",
        subtitle: "Tu equipo no debería perder tiempo en tareas que una computadora puede hacer mejor. Construimos automatización personalizada que maneja trabajo repetitivo — facturación, seguimientos, ingreso de datos, reportes — para que tu gente se enfoque en lo que realmente hace crecer el negocio.",
        cta: "Obtén Evaluación de Automatización",
        ctaSecondary: "Ver Qué Automatizamos",
        trustBadges: {
          speed: "2-6 Semanas Build",
          delivery: "300% ROI Promedio",
          satisfaction: "15+ Horas Ahorradas"
        }
      },
      problem: {
        title: "El Costo Oculto del Trabajo Manual",
        subtitle: "Tu equipo está quemando tiempo y energía en tareas que deberían estar automatizadas.",
        items: [
          {
            icon: "Clock",
            title: "Drenaje de Tiempo",
            description: "Horas gastadas en tareas repetitivas: ingreso de datos, seguimientos, generación de reportes y trabajo administrativo que no hace crecer tu negocio."
          },
          {
            icon: "AlertTriangle",
            title: "Error Humano",
            description: "Los procesos manuales son propensos a errores. Seguimientos perdidos, errores de ingreso de datos y ejecución inconsistente lastiman tu reputación."
          },
          {
            icon: "DollarSign",
            title: "Costos Ocultos",
            description: "Cada hora que tu equipo gasta en trabajo manual es una hora que no se gasta en ventas, estrategia o servicio al cliente. El costo de oportunidad es enorme."
          },
          {
            icon: "TrendingDown",
            title: "Cuellos de Botella de Escalamiento",
            description: "Los procesos manuales no escalan. A medida que creces, necesitas más gente para manejar las mismas tareas repetitivas en vez de crecer estratégicamente."
          }
        ]
      },
      solution: {
        title: "Nuestro Enfoque de Automatización Inteligente",
        subtitle: "No solo automatizamos. Optimizamos todo tu flujo de trabajo para máxima eficiencia.",
        items: [
          {
            icon: "Brain",
            title: "Análisis Inteligente de Procesos",
            description: "Mapeamos tus flujos de trabajo e identificamos las mejores oportunidades de automatización. Enfoque en automatizaciones de alto impacto y bajo riesgo primero."
          },
          {
            icon: "Zap",
            title: "Sistemas de Automatización Custom",
            description: "Construidos específicamente para tus procesos de negocio. No herramientas genéricas que te fuerzan a cambiar tu forma de trabajar."
          },
          {
            icon: "Shield",
            title: "Ejecución a Prueba de Errores",
            description: "Manejo de errores integrado, notificaciones y respaldos. Tus sistemas automatizados son más confiables que los procesos manuales."
          },
          {
            icon: "TrendingUp",
            title: "Infraestructura Escalable",
            description: "Sistemas que crecen con tu negocio. Agrega más clientes sin agregar sobrecarga administrativa."
          }
        ],
        differentiator: {
          title: "Por Qué 'Marketing se Encuentra con Ingeniería' Importa para Automatización",
          description: "La mayoría de automatización se enfoca en eliminar tareas. Nosotros nos enfocamos en eliminar cuellos de botella al crecimiento. Nuestra expertise en marketing asegura que automatizamos los procesos que realmente impactan tu bottom line, no solo los fáciles."
        }
      },
      whatWeBuild: {
        title: "Procesos que Automatizamos",
        subtitle: "Desde generación de leads hasta éxito del cliente - automatizamos lo que más importa.",
        items: [
          {
            icon: "Users",
            title: "Gestión de Leads",
            description: "Lead scoring, calificación, secuencias de seguimiento y actualizaciones de CRM. Nunca más pierdas un prospecto por mal seguimiento."
          },
          {
            icon: "FileText",
            title: "Procesos Financieros",
            description: "Generación de facturas, recordatorios de pago, seguimiento de gastos y reportes financieros. Cobra más rápido y reduce sobrecarga contable."
          },
          {
            icon: "UserCheck",
            title: "Onboarding de Clientes",
            description: "Secuencias de bienvenida, recolección de documentos, configuración de cuentas y entrega de capacitación. Experiencia consistente para cada nuevo cliente."
          },
          {
            icon: "BarChart3",
            title: "Reportes y Analytics",
            description: "Generación automática de reportes, dashboards de rendimiento y notificaciones de estado. Siempre sabe cómo está funcionando tu negocio."
          },
          {
            icon: "Mail",
            title: "Flujos de Comunicación",
            description: "Secuencias automatizadas de email, notificaciones SMS y actualizaciones de estado. Mantén a todos informados sin esfuerzo manual."
          },
          {
            icon: "Database",
            title: "Gestión de Datos",
            description: "Ingreso de datos, sincronización entre sistemas y limpieza de datos. Asegura que tus datos siempre sean precisos y actualizados."
          }
        ]
      },
      techStack: {
        title: "Tecnología de Automatización",
        subtitle: "Construido con tecnología confiable y escalable que se integra con tus herramientas existentes.",
        description: "Usamos plataformas modernas de automatización como Zapier, Make (Integromat) y soluciones custom construidas con Next.js y APIs. Tus automatizaciones funcionan con tus herramientas existentes: CRM, email, contabilidad y más.",
        technologies: ["Zapier", "Make (Integromat)", "APIs Next.js", "Webhooks", "Google Workspace", "Microsoft 365", "Integración CRM"]
      },
      process: {
        title: "Nuestro Proceso de Automatización",
        subtitle: "De análisis a despliegue en 2-6 semanas.",
        steps: [
          {
            number: "01",
            title: "Análisis de Procesos",
            duration: "1 semana",
            description: "Mapeamos tus flujos de trabajo actuales, identificamos cuellos de botella y priorizamos oportunidades de automatización basadas en impacto y esfuerzo."
          },
          {
            number: "02",
            title: "Diseño de Automatización",
            duration: "3-5 días",
            description: "Diseñamos los flujos de trabajo automatizados con manejo de errores, notificaciones y puntos de integración con tus sistemas existentes."
          },
          {
            number: "03",
            title: "Construir y Testear",
            duration: "1-3 semanas",
            description: "Construimos la automatización, testeamos con datos reales y refinamos basados en resultados. Incluimos a tu equipo en el proceso de testing."
          },
          {
            number: "04",
            title: "Desplegar y Capacitar",
            duration: "1 semana",
            description: "Desplegamos a producción, capacitamos a tu equipo en nuevos flujos de trabajo y aseguramos que todo funcione suavemente."
          },
          {
            number: "05",
            title: "Monitorear y Optimizar",
            duration: "Continuo",
            description: "Monitoreamos rendimiento, arreglamos cualquier problema e identificamos oportunidades adicionales de automatización a medida que tu negocio crece."
          }
        ]
      },
      caseStudy: {
        title: "Automatización que Transforma Negocios",
        subtitle: "Negocios reales, ahorro de tiempo real, crecimiento real.",
        featured: {
          type: "Automatización Gestión de Leads",
          client: "Felipe Cuevas - Consultor Inmobiliario",
          challenge: "Pasaba más de 15 horas semanales en calificación de leads, seguimientos y preparación de documentos, dejando poco tiempo para trabajo real con clientes y crecimiento del negocio.",
          solution: "Sistema automatizado de lead scoring, secuencias de email de seguimiento, generación de documentos e integración CRM para manejar automáticamente todas las tareas repetitivas.",
          results: [
            { metric: "15hrs", label: "Ahorradas Semanalmente", detail: "Tiempo previamente gastado en tareas manuales ahora disponible para trabajo con clientes" },
            { metric: "60%", label: "Calidad de Leads", detail: "Scoring automatizado identifica mejores prospectos más rápido" },
            { metric: "2x", label: "Capacidad de Clientes", detail: "Puede manejar el doble de clientes con el mismo esfuerzo" }
          ],
          quote: "Antes odiaba los lunes mirando todo el trabajo manual por delante. Ahora el sistema maneja las cosas repetitivas y realmente puedo enfocarme en ayudar clientes.",
          quoteName: "Felipe Cuevas"
        },
        additionalMetrics: [
          { value: "300%", label: "ROI promedio", client: "Primer Año" },
          { value: "40%", label: "Reducción costos", client: "Servicios Profesionales" },
          { value: "85%", label: "Reducción errores", client: "Procesos Financieros" }
        ]
      },
      pricing: {
        title: "Inversión en Automatización",
        subtitle: "Precios enfocados en ROI con valor transparente.",
        description: "Los proyectos de automatización personalizada empiezan desde $5.000 USD. La mayoría de clientes ve ROI completo en 2-4 meses a través de ahorro de tiempo, reducción de errores y aumento de capacidad.",
        factors: {
          title: "Qué Afecta Tu Inversión",
          items: [
            "Número y complejidad de procesos a automatizar",
            "Requerimientos de integración con sistemas existentes",
            "Lógica custom y flujos de trabajo de toma de decisiones",
            "Timeline y nivel de prioridad"
          ]
        },
        cta: "Obtén Evaluación de Automatización",
        note: "Análisis de procesos gratis incluido. ROI promedio: 300% en el primer año."
      },
      faq: {
        title: "Preguntas de Automatización Respondidas",
        items: [
          {
            question: "¿Qué procesos pueden automatizarse?",
            answer: "La mayoría de procesos repetitivos basados en reglas pueden automatizarse: calificación de leads, seguimientos, facturación, reportes, ingreso de datos, secuencias de email y más. Analizamos tus flujos de trabajo e identificamos las mejores oportunidades."
          },
          {
            question: "¿Cuánto tiempo toma construir automatización?",
            answer: "La mayoría de proyectos de automatización toman 2-6 semanas. Automatizaciones simples (secuencias de email, notificaciones básicas) pueden estar listas en 2 semanas. Integraciones complejas multi-sistema pueden tomar 6+ semanas."
          },
          {
            question: "¿La automatización funcionará con nuestras herramientas existentes?",
            answer: "Sí. Nos integramos con la mayoría de herramientas de negocio: CRMs (Salesforce, HubSpot), plataformas email (Gmail, Outlook), software contable (QuickBooks, Xero), herramientas de gestión de proyectos y más."
          },
          {
            question: "¿Qué pasa si algo se rompe o necesita cambios?",
            answer: "Construimos automatizaciones robustas con manejo de errores y monitoreo. Brindamos soporte continuo y podemos modificar o expandir tus automatizaciones a medida que las necesidades de tu negocio cambian."
          },
          {
            question: "¿Cómo medimos ROI en automatización?",
            answer: "Seguimos tiempo ahorrado, reducción de errores, aumento de capacidad y procesos más rápidos. La mayoría de clientes ve ROI en 2-4 meses a través de trabajo manual reducido y eficiencia mejorada."
          }
        ]
      },
      finalCta: {
        title: "¿Listo para Recuperar Tu Tiempo?",
        subtitle: "Identifiquemos los procesos que están drenando la energía de tu equipo. Obtén una evaluación de automatización gratuita de 30 minutos.",
        cta: "Obtén Evaluación Gratis",
        note: "Sin compromiso. Solo claridad sobre lo que es posible."
      }
    },

    // Landing Pages - Spanish
    softwareAMedida: {
      meta: {
        title: "Desarrollo de Software a Medida | Digital Frog Chile",
        description: "Creamos software que se adapta a tu empresa, no al revés. Soluciones personalizadas para automatización, herramientas internas y crecimiento. Diagnóstico gratis.",
        keywords: "software a medida, desarrollo software personalizado, automatización empresarial, software Chile, desarrollo aplicaciones"
      },
      hero: {
        badge: "Software a Medida",
        title: "Software que se Adapta a",
        titleAccent: "Tu Empresa",
        subtitle: "El software genérico te obliga a cambiar tu forma de trabajar. Nosotros construimos soluciones alrededor de tus procesos reales — aumentando eficiencia, reduciendo errores, y dándote una ventaja competitiva que las herramientas estándar no pueden ofrecer.",
        cta: "Agenda Diagnóstico Gratis",
        ctaSecondary: "Ver Nuestro Trabajo",
        trustBadges: {
          speed: "90+ PageSpeed",
          delivery: "2.5 Días Promedio",
          satisfaction: "100% Entregado"
        }
      },
      problem: {
        title: "El Problema con el Software Genérico",
        subtitle: "Ya probaste las soluciones estándar. Por eso no funcionan.",
        items: [
          {
            icon: "Puzzle",
            title: "Te Adaptas al Software",
            description: "En vez de trabajar como necesitas, te ves forzado a cambiar tus procesos para ajustarte a las limitaciones del software."
          },
          {
            icon: "CreditCard",
            title: "Licencias que Crecen",
            description: "Pagos mensuales que aumentan cada año. Más usuarios, más funciones, más cobros. Los costos se acumulan mientras el valor se estanca."
          },
          {
            icon: "Link2Off",
            title: "Integraciones Imposibles",
            description: "Tus herramientas no se comunican entre sí. Los datos viven en silos. Tu equipo pierde horas en ingreso manual de datos entre sistemas."
          },
          {
            icon: "Gauge",
            title: "Lento y Pesado",
            description: "Carga lenta, funciones que no usas, mala experiencia móvil. Tus herramientas de productividad no deberían frenarte."
          }
        ]
      },
      solution: {
        title: "Nuestro Enfoque: Marketing + Ingeniería",
        subtitle: "No solo construimos software. Construimos software que hace crecer tu negocio.",
        items: [
          {
            icon: "Target",
            title: "Diseñado para Tus Procesos",
            description: "Empezamos entendiendo cómo trabajas realmente. Tu software se adapta a ti, capturando tus ventajas competitivas únicas."
          },
          {
            icon: "Wallet",
            title: "Tu Software, Tu Propiedad",
            description: "Olvídate de las licencias mensuales que aumentan cada año. Con nosotros, eres dueño de tu software. Costos de mantenimiento y hosting claros desde el día uno."
          },
          {
            icon: "Plug",
            title: "Integraciones Sin Fricciones",
            description: "Conectamos todo: tu CRM, software contable, email, sistemas de pago. Los datos fluyen automáticamente donde deben estar."
          },
          {
            icon: "Zap",
            title: "Rendimiento Garantizado",
            description: "Garantizamos 90+ en PageSpeed. Rápido, responsivo, mobile-first. Porque el software lento te cuesta dinero."
          }
        ],
        differentiator: {
          title: "Por Qué 'Marketing + Ingeniería' Importa",
          description: "La mayoría de las empresas de desarrollo construyen lo que pides. Nosotros construimos lo que realmente va a funcionar para tu negocio — porque entendemos tanto la tecnología como el lado del crecimiento. Tu software no solo va a funcionar; va a convertir, retener y escalar."
        }
      },
      whatWeBuild: {
        title: "Qué Construimos",
        subtitle: "Soluciones personalizadas para problemas reales de negocio.",
        items: [
          {
            icon: "LayoutDashboard",
            title: "Sistemas de Gestión Interna",
            description: "Dashboards, paneles de administración y herramientas de workflow que te dan visibilidad y control total."
          },
          {
            icon: "Users",
            title: "Portales de Clientes",
            description: "Portales de autoservicio donde tus clientes pueden acceder información, enviar solicitudes y seguir su progreso."
          },
          {
            icon: "RefreshCw",
            title: "Automatización de Procesos",
            description: "Elimina tareas repetitivas. Facturación automática, reportes, notificaciones y procesamiento de datos."
          },
          {
            icon: "FileText",
            title: "Generación de Documentos",
            description: "Contratos, propuestas, reportes y certificados automáticos. Generados en segundos, no en horas."
          },
          {
            icon: "Link",
            title: "Integraciones de Sistemas",
            description: "Conecta tus herramientas existentes. Sincroniza datos entre CRM, ERP, contabilidad y sistemas custom."
          },
          {
            icon: "Smartphone",
            title: "Apps Web y Móviles",
            description: "Progressive web apps que funcionan en cualquier dispositivo. Sin app store, actualizaciones instantáneas."
          }
        ]
      },
      techStack: {
        title: "Tecnología Moderna",
        subtitle: "Sin código legado. Sin deuda técnica. Sistemas limpios, mantenibles y escalables.",
        description: "Usamos Next.js, TypeScript, PostgreSQL y desplegamos en Vercel — el mismo stack que usan empresas como Netflix, Twitch y Nike. Tu software está construido sobre una base que va a durar.",
        technologies: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma", "Vercel", "Tailwind CSS"]
      },
      process: {
        title: "Cómo Trabajamos",
        subtitle: "Un proceso probado que entrega resultados, a tiempo.",
        steps: [
          {
            number: "01",
            title: "Descubrimiento",
            duration: "1-2 semanas",
            description: "Mapeamos tus procesos, identificamos cuellos de botella y definimos exactamente qué hay que construir. Recibes una propuesta detallada con timeline e inversión."
          },
          {
            number: "02",
            title: "Diseño y Arquitectura",
            duration: "1 semana",
            description: "Diseñamos la experiencia de usuario y arquitectura del sistema. Verás wireframes y aprobarás el enfoque antes de escribir código."
          },
          {
            number: "03",
            title: "Desarrollo",
            duration: "4-12 semanas",
            description: "Construimos en sprints con demos regulares. Ves el progreso semanalmente y puedes dar feedback durante todo el proceso. Sin sorpresas en el lanzamiento."
          },
          {
            number: "04",
            title: "Lanzamiento y Capacitación",
            duration: "1 semana",
            description: "Desplegamos a producción, capacitamos a tu equipo y aseguramos que todo funcione perfecto. Documentación completa incluida."
          },
          {
            number: "05",
            title: "Soporte Continuo",
            duration: "Permanente",
            description: "No desaparecemos después del lanzamiento. Paquetes de mantenimiento, actualizaciones y soporte disponibles para mantener tu sistema funcionando perfecto."
          }
        ]
      },
      caseStudy: {
        title: "Resultados Reales",
        subtitle: "Casos de éxito de clientes reales.",
        featured: {
          type: "Estudio Jurídico",
          client: "Jorge Robles & Asociados",
          challenge: "Seguimiento manual de casos, comunicación deficiente con clientes y carga administrativa consumiendo horas facturables.",
          solution: "Sistema de gestión de casos personalizado con portal de clientes, generación automática de documentos y automatización de workflows.",
          results: [
            { metric: "+20%", label: "Aumento en casos nuevos" },
            { metric: "2x", label: "Más casos cerrados" },
            { metric: "15hrs", label: "Ahorradas por semana" }
          ],
          quote: "Pasamos de gestionar planillas a gestionar crecimiento.",
          quoteName: "Jorge Robles"
        },
        additionalMetrics: [
          { value: "3x", label: "Aumento en conversión", client: "Plataforma E-Commerce" },
          { value: "-40%", label: "Costos operacionales", client: "Startup SaaS" },
          { value: "+150%", label: "Tráfico orgánico", client: "Consultora Tech" }
        ]
      },
      pricing: {
        title: "Inversión",
        subtitle: "Precios transparentes. Sin costos ocultos.",
        description: "Los proyectos de software a medida comienzan desde $5,000 USD, dependiendo de la complejidad y alcance. Cada proyecto es diferente, así que entregamos una cotización detallada después de nuestra fase de descubrimiento.",
        factors: {
          title: "Qué Afecta Tu Inversión",
          items: [
            "Complejidad de workflows y funcionalidades",
            "Cantidad de integraciones necesarias",
            "Roles de usuario y niveles de acceso",
            "Timeline y prioridad"
          ]
        },
        cta: "Obtén una Cotización",
        note: "Diagnóstico gratis. Sin compromiso."
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Cuánto cuesta un software a medida?",
            answer: "Los proyectos comienzan desde $5,000 USD. La inversión final depende de la complejidad, integraciones y timeline. Entregamos una cotización detallada y a precio fijo después de nuestra fase de descubrimiento — sin sorpresas."
          },
          {
            question: "¿Cuánto tiempo toma el desarrollo?",
            answer: "La mayoría de los proyectos toman 6-14 semanas desde el inicio hasta el lanzamiento. Herramientas simples de automatización pueden estar listas en 4 semanas. Sistemas complejos con múltiples integraciones pueden tomar 16+ semanas. Te damos un timeline realista desde el inicio."
          },
          {
            question: "¿Qué tecnologías usan?",
            answer: "Construimos con Next.js, TypeScript, React y PostgreSQL, desplegado en Vercel. Este stack moderno asegura rendimiento rápido, mantenimiento fácil y escalabilidad. Sin código legado ni deuda técnica."
          },
          {
            question: "¿Ofrecen soporte continuo?",
            answer: "Sí. Ofrecemos paquetes de mantenimiento y soporte desde $1,200 USD/mes. Esto incluye corrección de bugs, actualizaciones menores, parches de seguridad y soporte prioritario. No desaparecemos después del lanzamiento."
          },
          {
            question: "¿Pueden integrarse con nuestras herramientas existentes?",
            answer: "Absolutamente. Nos especializamos en integraciones. Ya sea tu CRM (Salesforce, HubSpot), software contable (QuickBooks, Xero), procesadores de pago (Stripe, PayPal), o APIs personalizadas — los conectamos."
          },
          {
            question: "¿Trabajan con empresas fuera de Chile?",
            answer: "Sí, tenemos experiencia real con clientes en Chile y Australia, y brindamos servicios a todo el mundo. La colaboración remota está integrada en nuestro proceso con comunicación asincrónica y videollamadas programadas para trabajar efectivamente entre zonas horarias."
          }
        ]
      },
      finalCta: {
        title: "¿Listo para Construir Software que Trabaje para Ti?",
        subtitle: "Conversemos sobre tu proyecto. Agenda un diagnóstico gratis de 30 minutos — sin compromiso, sin pitch de ventas. Solo una conversación sobre lo que es posible.",
        cta: "Agenda Diagnóstico Gratis",
        note: "Analizamos tus necesidades y te damos una evaluación honesta."
      }
    },

    automatizacionProcesos: {
      meta: {
        title: "Automatización de Procesos Empresariales | Digital Frog Chile",
        description: "Deja de perder horas en tareas repetitivas. Soluciones de automatización a medida que ahorran tiempo, reducen errores y liberan a tu equipo. Evaluación gratis.",
        keywords: "automatización de procesos, automatización empresarial, automatización workflows, automatización tareas, alternativa RPA"
      },
      hero: {
        badge: "Automatización de Procesos",
        title: "Deja de Perder Horas en",
        titleAccent: "Tareas Repetitivas",
        subtitle: "Tu equipo es talentoso y su tiempo vale oro. No deberían gastarlo copiando datos entre planillas, mandando emails de seguimiento, o armando los mismos reportes cada semana. Nosotros construimos automatizaciones que se encargan del trabajo repetitivo — para que tu gente se dedique a lo que realmente importa.",
        cta: "Obtén Evaluación Gratis",
        ctaSecondary: "Ver Ejemplos"
      },
      problem: {
        title: "El Costo Oculto de los Procesos Manuales",
        subtitle: "Calcula cuánto te están costando realmente las tareas repetitivas.",
        items: [
          {
            icon: "Clock",
            title: "Pérdida de Tiempo",
            description: "Tu mejor gente pasa 30-50% de su tiempo en tareas que podrían automatizarse. Eso es talento caro haciendo trabajo de bajo valor."
          },
          {
            icon: "AlertTriangle",
            title: "Errores Humanos",
            description: "Ingreso manual de datos significa errores. Errores significan retrabajo, quejas de clientes y pérdida de ingresos."
          },
          {
            icon: "TrendingDown",
            title: "Cuello de Botella para Escalar",
            description: "Cuando creces, los procesos manuales no escalan. Contratas más gente solo para manejar volumen, no para agregar valor."
          },
          {
            icon: "Brain",
            title: "Carga Mental",
            description: "Recordar qué hacer, cuándo hacerlo, y seguir todo mentalmente. Es agotador y las cosas se escapan."
          }
        ]
      },
      whatWeAutomate: {
        title: "Qué Automatizamos",
        subtitle: "Automatización real para problemas reales de negocio.",
        categories: [
          {
            title: "Finanzas y Operaciones",
            items: [
              "Generación y envío de facturas",
              "Recordatorios de pago y cobranza",
              "Conciliación bancaria",
              "Reportes de gastos",
              "Generación de informes financieros"
            ]
          },
          {
            title: "Ventas y Marketing",
            items: [
              "Calificación y scoring de leads",
              "Secuencias de seguimiento",
              "Generación de propuestas y cotizaciones",
              "Actualización de datos en CRM",
              "Campañas de email"
            ]
          },
          {
            title: "RRHH y Administración",
            items: [
              "Workflows de onboarding",
              "Procesamiento de solicitudes de vacaciones",
              "Recolección de documentos",
              "Recordatorios de compliance",
              "Reportería y analytics"
            ]
          },
          {
            title: "Servicios a Clientes",
            items: [
              "Onboarding de clientes",
              "Actualizaciones de estado y notificaciones",
              "Solicitudes de documentos",
              "Recolección de feedback",
              "Renovaciones de servicio"
            ]
          }
        ]
      },
      vsRPA: {
        title: "Automatización a Medida vs. RPA Empresarial",
        subtitle: "No necesitas UiPath ni Automation Anywhere.",
        comparison: [
          {
            aspect: "Costo",
            rpa: "$50,000+ en licencias anuales",
            custom: "Inversión única, tú eres dueño"
          },
          {
            aspect: "Complejidad",
            rpa: "Requiere especialistas en RPA y capacitación",
            custom: "Funciona con tu equipo existente"
          },
          {
            aspect: "Flexibilidad",
            rpa: "Limitado a lo que la plataforma puede hacer",
            custom: "Construido exactamente para tus necesidades"
          },
          {
            aspect: "Mantenimiento",
            rpa: "Se rompe cuando cambian las interfaces",
            custom: "Basado en APIs, más estable"
          }
        ],
        conclusion: "Para la mayoría de las pymes, el RPA empresarial es exagerado. La automatización a medida te da exactamente lo que necesitas a una fracción del costo."
      },
      roiCalculator: {
        title: "Calcula el ROI de Tu Automatización",
        subtitle: "Mira cuánto podrías ahorrar.",
        inputs: {
          hours: "Horas por semana en esta tarea",
          hourlyRate: "Costo promedio por hora del empleado",
          errorRate: "Tasa estimada de errores (%)"
        },
        outputs: {
          annualHours: "Horas ahorradas al año",
          annualSavings: "Ahorro anual en costos",
          roi: "ROI en el primer año"
        },
        cta: "Obtén Análisis Completo"
      },
      caseStudy: {
        title: "Automatización en Acción",
        featured: {
          type: "Consultor Inmobiliario",
          client: "Felipe Cuevas",
          challenge: "Pasaba más de 15 horas semanales en calificación de leads, seguimientos y preparación de documentos.",
          solution: "Lead scoring automatizado, secuencias de email y generación de documentos integrado con su CRM.",
          results: [
            { metric: "15hrs", label: "Ahorradas por semana" },
            { metric: "60%", label: "Mejor calidad de leads" },
            { metric: "2x", label: "Capacidad de clientes" }
          ],
          quote: "Antes odiaba los lunes. Ahora realmente paso tiempo con clientes en vez de planillas."
        }
      },
      process: {
        title: "Cómo Construimos Tu Automatización",
        steps: [
          {
            number: "01",
            title: "Mapeo de Procesos",
            description: "Documentamos tus workflows actuales, identificamos tareas repetitivas y priorizamos según tiempo ahorrado e impacto."
          },
          {
            number: "02",
            title: "Diseño de Automatización",
            description: "Diseñamos el workflow automatizado, incluyendo triggers, acciones, manejo de errores y notificaciones."
          },
          {
            number: "03",
            title: "Construcción y Testing",
            description: "Construimos la automatización, testeamos exhaustivamente con tus datos reales y refinamos hasta que sea a prueba de balas."
          },
          {
            number: "04",
            title: "Despliegue y Capacitación",
            description: "Desplegamos a producción y capacitamos a tu equipo en monitoreo y manejo de casos especiales."
          }
        ]
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿Qué procesos se pueden automatizar?",
            answer: "Cualquier proceso que siga reglas consistentes e involucre datos digitales probablemente puede automatizarse. Esto incluye ingreso de datos, generación de reportes, comunicaciones por email, creación de documentos, notificaciones e integraciones entre sistemas. Si lo haces de la misma forma cada vez, es candidato para automatización."
          },
          {
            question: "¿Cuánto cuesta la automatización?",
            answer: "Los proyectos de automatización comienzan desde $5,000 USD. La inversión final depende de la complejidad y cantidad de sistemas involucrados. La mayoría de los clientes ven ROI en 2-4 meses."
          },
          {
            question: "¿La automatización reemplazará a mis empleados?",
            answer: "No. La automatización maneja las tareas repetitivas y de bajo valor para que tu equipo pueda enfocarse en trabajo que requiere juicio humano, creatividad y relaciones. Tu gente se vuelve más valiosa, no redundante."
          },
          {
            question: "¿Qué pasa si algo sale mal?",
            answer: "Incorporamos manejo de errores, notificaciones y respaldos. Cuando algo inesperado pasa, te notificamos inmediatamente y puedes intervenir. También proveemos dashboards de monitoreo para que tengas visibilidad completa."
          },
          {
            question: "¿Se integran con nuestras herramientas existentes?",
            answer: "Sí. Trabajamos con la mayoría de las herramientas de negocio comunes: Google Workspace, Microsoft 365, Salesforce, HubSpot, QuickBooks, Slack, y cientos de otras vía APIs. Si tiene API, podemos conectarla."
          }
        ]
      },
      finalCta: {
        title: "¿Listo para Recuperar Tu Tiempo?",
        subtitle: "Identifiquemos los procesos que drenan la energía de tu equipo. Agenda una evaluación gratis de 30 minutos — mapearemos tus mayores oportunidades de automatización.",
        cta: "Obtén Evaluación Gratis",
        note: "Sin compromiso. Solo claridad sobre lo que es posible."
      }
    },

    serviciosProfesionales: {
      meta: {
        title: "Software para Abogados, Contadores y Consultores | Digital Frog Chile",
        description: "Software a medida para firmas de servicios profesionales. Gestión de casos, portales de clientes, automatización de documentos y sistemas de facturación. Descubre cómo ayudamos a un estudio jurídico a duplicar sus casos cerrados.",
        keywords: "software para abogados, software contable, software consultores, automatización servicios profesionales, sistema gestión casos"
      },
      hero: {
        badge: "Servicios Profesionales",
        title: "Software Diseñado para",
        titleAccent: "Profesionales como Tú",
        subtitle: "Estudios jurídicos, firmas contables y consultoras comparten un desafío común: tiempo facturable consumido por trabajo administrativo. Construimos sistemas que automatizan lo repetitivo, organizan lo complejo, y te permiten enfocarte en tus clientes.",
        cta: "Agenda Consulta Especializada",
        ctaSecondary: "Ver Caso de Éxito"
      },
      industries: {
        title: "A Quiénes Servimos",
        items: [
          {
            icon: "Pickaxe",
            title: "Minería y Recursos",
            description: "Automatización de procesos, seguimiento de cumplimiento de seguridad, sistemas de mantenimiento de equipos y dashboards operacionales para una de las industrias más importantes de Chile."
          },
          {
            icon: "Scale",
            title: "Estudios Jurídicos",
            description: "Gestión de casos, automatización de documentos, portales de clientes, seguimiento de plazos y verificación de conflictos. Tenemos experiencia directa con entornos legales regulados."
          },
          {
            icon: "ShieldCheck",
            title: "Industrias Reguladas",
            description: "Seguimiento de cumplimiento, registros de auditoría, gestión documental y sistemas de reportería para industrias con requisitos regulatorios estrictos."
          },
          {
            icon: "Briefcase",
            title: "Servicios Profesionales",
            description: "Cualquier negocio con procesos repetitivos puede beneficiarse de la automatización. Si tu equipo pasa tiempo en admin en vez de con clientes, podemos ayudar."
          }
        ]
      },
      challenges: {
        title: "Entendemos Tus Desafíos",
        subtitle: "Porque ya los hemos resuelto antes.",
        items: [
          {
            title: "Tiempo Facturable Perdido en Admin",
            description: "Cada hora gastada en ingreso de datos, preparación de documentos y agendamiento es una hora no facturada. Para una firma con 5 profesionales facturando $200/hr, 5 horas de admin por semana = $260,000/año en ingresos perdidos."
          },
          {
            title: "Brechas en Comunicación con Clientes",
            description: "Los clientes llaman preguntando por actualizaciones. Tu equipo deja lo que está haciendo para verificar el estado. Todos pierden tiempo. Los silos de información crean frustración en ambos lados."
          },
          {
            title: "Caos Documental",
            description: "Contratos, informes y entregables dispersos entre email, drives y sistemas de archivo. Encontrar la versión correcta toma más tiempo del que debería."
          },
          {
            title: "Escalar Sin Contratar",
            description: "Crecer tu base de clientes no debería significar crecer proporcionalmente tu staff administrativo. Los sistemas correctos te permiten escalar eficientemente."
          }
        ]
      },
      solutions: {
        title: "Soluciones que Construimos",
        items: [
          {
            icon: "FolderKanban",
            title: "Gestión de Casos y Materias",
            description: "Rastrea cada cliente, materia y plazo en un solo lugar. Recordatorios automáticos, seguimiento de estado y asignación de equipo. Nunca más pierdas un plazo."
          },
          {
            icon: "Users",
            title: "Portales de Clientes",
            description: "Portales seguros donde los clientes pueden subir documentos, verificar estado, firmar acuerdos y comunicarse con tu equipo. Reduce las llamadas telefónicas en 60%+."
          },
          {
            icon: "FileSignature",
            title: "Automatización de Documentos",
            description: "Genera contratos, cartas de compromiso, informes y certificados automáticamente. Extrae datos de tus sistemas, produce documentos profesionales en segundos."
          },
          {
            icon: "Clock",
            title: "Integración de Tiempo y Facturación",
            description: "Registra tiempo, genera facturas y sincroniza con tu sistema contable. Reduce ciclos de facturación y mejora la cobranza."
          },
          {
            icon: "Bell",
            title: "Automatización de Workflows",
            description: "Asignación automática de tareas, recordatorios de plazos, solicitudes de documentos y actualizaciones de estado. Tus procesos corren consistentemente sin supervisión manual."
          },
          {
            icon: "BarChart3",
            title: "Business Intelligence",
            description: "Dashboards mostrando utilización, ingresos por cliente/materia, cuentas por cobrar envejecidas y desempeño del equipo. Toma decisiones con datos."
          }
        ]
      },
      caseStudy: {
        badge: "Caso de Éxito",
        title: "Cómo un Estudio Jurídico Duplicó sus Casos Cerrados",
        client: "Jorge Robles & Asociados",
        subtitle: "Práctica de derecho de familia en Santiago, Chile",
        challenge: {
          title: "El Desafío",
          description: "El estudio de Jorge se estaba ahogando en trabajo administrativo. El seguimiento de casos vivía en planillas Excel. La comunicación con clientes estaba dispersa entre email y teléfono. La preparación de documentos consumía horas que deberían haber sido facturables. Crecer significaba contratar más personal administrativo, afectando los márgenes."
        },
        solution: {
          title: "Lo Que Construimos",
          items: [
            "Sistema personalizado de gestión de casos rastreando todas las materias, plazos e interacciones con clientes",
            "Portal de clientes para subir documentos, verificar estado y mensajería segura",
            "Generación automática de documentos para acuerdos estándar y escritos judiciales",
            "Integración con calendario y email para recordatorios automáticos",
            "Dashboard mostrando pipeline de casos, ingresos y carga de trabajo del equipo"
          ]
        },
        results: {
          title: "Los Resultados",
          items: [
            { metric: "+20%", label: "Aumento en consultas de nuevos clientes", detail: "El boca a boca mejoró al mejorar la experiencia del cliente" },
            { metric: "2x", label: "Más casos cerrados anualmente", detail: "Mismo equipo, mejores sistemas, más capacidad" },
            { metric: "15hrs", label: "Ahorradas por semana", detail: "En todo el equipo por reducción de trabajo admin" },
            { metric: "60%", label: "Menos llamadas de consulta de estado", detail: "Los clientes revisan el portal en su lugar" }
          ]
        },
        quote: {
          text: "Pasamos de gestionar planillas a gestionar crecimiento. El sistema se pagó solo en el primer trimestre.",
          name: "Jorge Robles",
          title: "Socio Fundador"
        }
      },
      pricing: {
        title: "Inversión",
        description: "Los sistemas para servicios profesionales típicamente van de $15,000-$40,000 USD dependiendo de la complejidad, integraciones y número de usuarios. La mayoría de las firmas ven ROI dentro de 6 meses a través de tiempo facturable recuperado y mayor capacidad de clientes.",
        cta: "Obtén Cotización Especializada"
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿En qué se diferencia de software como Clio o PracticePanther?",
            answer: "El software estándar de gestión de práctica te obliga a adaptarte a sus workflows. Nosotros construimos alrededor de TUS procesos específicos y podemos incluir funcionalidades que esas plataformas no ofrecen — como automatización de documentos personalizada, integraciones específicas con tus otras herramientas, o funciones únicas de portal de clientes. Sin licencias por usuario que escalan con tu equipo."
          },
          {
            question: "¿Cuánto tiempo toma la implementación?",
            answer: "La mayoría de los sistemas toman 6-12 semanas desde el inicio hasta el lanzamiento. Trabajamos en fases: funcionalidad core primero, luego agregamos features. Verás progreso semanalmente y puedes empezar a usar el sistema antes de que todas las funcionalidades estén completas."
          },
          {
            question: "¿Mi equipo realmente lo va a usar?",
            answer: "La adopción está incorporada en nuestro proceso. Involucramos a miembros clave del equipo durante el diseño, capacitamos a todos exhaustivamente, y construimos sistemas que son realmente más fáciles que los workflows actuales. Si es más difícil de usar que lo que tienes, hemos fracasado."
          },
          {
            question: "¿Qué pasa con la seguridad y confidencialidad de datos?",
            answer: "Tomamos la seguridad en serio. Control de acceso basado en roles, datos encriptados en reposo y en tránsito, logs de auditoría y cumplimiento con regulaciones relevantes. Podemos discutir requerimientos específicos de tu industria."
          },
          {
            question: "¿Pueden integrarse con nuestros sistemas existentes?",
            answer: "Sí. Comúnmente nos integramos con software contable (QuickBooks, Xero), email (Gmail, Outlook), calendarios, almacenamiento de documentos (Google Drive, Dropbox), y herramientas específicas de la industria. Si tiene API, podemos conectarlo."
          }
        ]
      },
      finalCta: {
        title: "¿Listo para Transformar Tu Práctica?",
        subtitle: "Conversemos sobre tus desafíos específicos. Agenda una consulta gratis de 30 minutos enfocada en tu industria.",
        cta: "Agenda Consulta Especializada",
        note: "Compartiremos insights de firmas como la tuya y te daremos una evaluación honesta."
      }
    }
  },

  sr: {
    // Navigation
    'nav.services': 'Usluge',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.about': 'O nama',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Pokrenite projekat',

    // Meta tags for main pages
    'meta.homepage.title': 'Digital Frog - Gde se Marketing Susreće sa Inženjeringom',
    'meta.homepage.description': 'Od SEO osnova do softvera po meri—gradimo kompletne digitalne sisteme projektovane za rast, automatizovane za skaliranje, merene sa preciznošću.',
    'meta.homepage.keywords': 'digitalni marketing, SEO usluge, razvoj softvera po meri, razvoj veb sajtova, automatizacija marketinga',

    'meta.about.title': 'O nama - Digital Frog | Gde se Marketing Susreće sa Inženjeringom',
    'meta.about.description': 'Saznajte više o Digital Frog, gde se marketing susreće sa inženjeringom. Gradimo kompletne digitalne sisteme koji rastu sa vašim biznisom.',
    'meta.about.keywords': 'o digital frog, marketing inženjering, tim za razvoj veba, SEO eksperti',

    'meta.contact.title': 'Kontakt - Digital Frog | Hajde da Izgradimo Nešto Odlično',
    'meta.contact.description': 'Spremni da transformišete svoju digitalnu prisutnost? Kontaktirajte Digital Frog za SEO usluge, razvoj softvera po meri i automatizaciju marketinga.',
    'meta.contact.keywords': 'kontakt digital frog, SEO konsultacije, ponuda razvoj softvera, automatizacija marketinga',

    'meta.portfolio.title': 'Portfolio - Digital Frog Priče o Uspešnosti',
    'meta.portfolio.description': 'Pogledajte kako je Digital Frog pomogao preduzećima da rastu sa SEO optimizacijom, softverom po meri i rešenjima za automatizaciju.',
    'meta.portfolio.keywords': 'digital frog portfolio, SEO studije slučaja, projekti razvoja softvera, priče o uspešnosti klijenata',

    'meta.services.title': 'Usluge - SEO i Razvoj Softvera po Meri | Digital Frog',
    'meta.services.description': 'Digital Frog nudi sveobuhvatne SEO usluge i razvoj softvera po meri. Od tehničkih audita do full-stack aplikacija.',
    'meta.services.keywords': 'SEO usluge, razvoj softvera po meri, veb aplikacije, tehnički SEO audit, optimizacija performansi',

    'meta.blog.title': 'Blog - Razvoj Softvera i Automatizacija | Digital Frog',
    'meta.blog.description': 'Stručni uvidi o razvoju softvera po meri, automatizaciji procesa i digitalnoj transformaciji za preduzeća.',
    'meta.blog.keywords': 'blog razvoj softvera, automatizacija procesa, digitalna transformacija, tehnološki trendovi',

    // Hero
    'hero.headline': 'Gde se Marketing Susreće sa Inženjeringom',
    'hero.subtitle': 'Od SEO osnova do softvera po meri—gradimo kompletne digitalne sisteme projektovane za rast, automatizovane za skaliranje, merene sa preciznošću.',
    'hero.cta.primary': 'Pokrenite projekat',
    'hero.cta.secondary': 'Pogledajte šta gradimo',

    // Stats
    'stats.pagespeed': 'PageSpeed Score Garancija',
    'stats.automated': 'Automatska Dostava',
    'stats.days': 'Dana Prosečna Implementacija',

    // Trust bar
    'trust.clients': 'Aktivni Klijenti',
    'trust.revenue': 'Prosečno Povećanje Prihoda',
    'trust.time': 'Prosečno Vreme Uštede/Nedelja',

    // Services Section (Homepage)
    'servicesSection.title': 'Tri Nivoa Digitalne Infrastrukture',
    'servicesSection.subtitle': 'Ne samo da gradimo sajtove ili vodimo kampanje. Projektujemo kompletne sisteme koji rade zajedno.',

    // Tier 1
    'tier1.badge': 'NIVO 1',
    'tier1.title': 'Temelj',
    'tier1.subtitle': 'Digitalna Vidljivost',
    'tier1.feature1': 'Sistematska SEO optimizacija',
    'tier1.feature2': 'Tehnički auditi (inženjerski nivo)',
    'tier1.feature3': 'Praćenje performansi (90+ PageSpeed)',
    'tier1.feature4': 'Strategija i implementacija sadržaja',
    'tier1.cta': 'Počni',
    'tier1.price': 'Od 1.800 dolara/mesečno',

    // Tier 2
    'tier2.badge': 'NIVO 2',
    'tier2.title': 'Infrastruktura',
    'tier2.subtitle': 'Performantne Veb Aplikacije',
    'tier2.feature1': 'Prilagođene Next.js aplikacije',
    'tier2.feature2': 'Visokoperformantni veb sajtovi',
    'tier2.feature3': 'E-commerce platforme',
    'tier2.feature4': 'API integracije i optimizacija',
    'tier2.cta': 'Zatražite ponudu',
    'tier2.price': 'Cena po projektu',

    // Tier 3
    'tier3.badge': 'NIVO 3',
    'tier3.title': 'Sistemi',
    'tier3.subtitle': 'Poslovna Automatizacija i Softver po Meri',
    'tier3.feature1': 'Prilagođene poslovne aplikacije',
    'tier3.feature2': 'AI-pokretani sistemi automatizacije',
    'tier3.feature3': 'Inženjering radnih tokova',
    'tier3.feature4': 'Optimizacija operacija',
    'tier3.cta': 'Razgovarajmo',
    'tier3.price': 'Premium retainer ili po projektu',

    // Case Studies
    'cases.title': 'Merljivi Rezultati',
    'cases.subtitle': 'Pravi brojevi od pravih klijenata. Jer inženjeri mere sve.',
    'cases.cta': 'Pogledaj Portfolio',

    'case1.company': 'Advokatska Kancelarija - Jorge Robles',
    'case1.result': '+20% Prihoda',
    'case1.description': 'Kompletni sistem: SEO + automatizacija = 2x više zatvorenih slučajeva, 40% smanjenje troškova',

    'case2.company': 'NatAxtin',
    'case2.result': 'PageSpeed 75→90+',
    'case2.description': 'Inženjering performansi za 2,5 dana. Pozicija u pretraživanju 45→top 20 cilj.',

    'case3.company': 'Felipe Cuevas',
    'case3.result': '15 sati/nedelja uštede',
    'case3.description': 'Sistemi automatizacije: 60% poboljšanje kvaliteta potencijalnih klijenata kroz inteligentne radne tokove.',

    // CTA Section
    'cta.title': 'Spremni da Izgradite Svoj Digitalni Sistem?',
    'cta.subtitle': 'Bilo da vam treba SEO, prilagođena aplikacija ili kompletna automatizacija—hajde da zajedno projektujemo vaše rešenje.',
    'cta.button': 'Zakazuj Besplatnu Konsultaciju',
    'cta.trust1': 'Besplatna konsultacija',
    'cta.trust2': 'Bez obaveze',
    'cta.trust3': '30-minutni strategijski poziv',

    // Footer
    'footer.tagline': 'Razvijamo digitalna rešenja od 2021.',
    'footer.services': 'Usluge',
    'footer.company': 'Kompanija',
    'footer.contact': 'Kontakt',
    'footer.address': 'Los Militares 5620, Of.905, Las Condes, Santiago, Chile',
    'footer.seo': 'Osnova - SEO',
    'footer.webdev': 'Infrastruktura - Veb Dev',
    'footer.automation': 'Sistemi - Automatizacija',
    'footer.about': 'O nama',
    'footer.portfolio': 'Portfolio',
    'footer.blog': 'Blog',
    'footer.copyright': '© 2025 Digital Frog. Sva prava zadržana. Izgrađeno sa inženjerskom preciznošću.',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Stručni uvidi o razvoju softvera, automatizaciji i digitalnoj transformaciji',
    'blog.readMore': 'Pročitaj više',
    'blog.backToBlog': 'Nazad na blog',
    'blog.relatedPosts': 'Povezani članci',
    'blog.minutesRead': 'minuta čitanja',
    'blog.comingSoon': 'Uskoro',
    'blog.comingSoonDesc': 'Pripremamo stručne uvide o razvoju softvera, automatizaciji i digitalnoj transformaciji. Vratite se uskoro!',
    'blog.author': 'Od',
    'blog.publishedOn': 'Objavljeno',
    'blog.updatedOn': 'Ažurirano',
    'blog.category': 'Kategorija',
    'blog.tags': 'Tagovi',
    'blog.sharePost': 'Podeli članak',
    'blog.readyToStart': 'Spremni da pokrenete projekat?',
    'blog.readyToStartDesc': 'Razgovarajmo o tome kako možemo da vam pomognemo da rastete sa razvojem softvera po meri i automatizacijom.',
    'blog.getStarted': 'Počni',

    // Contact Page
    'contact.title': 'Hajde da Izgradimo Nešto Odlično',
    'contact.subtitle': 'Recite nam o svom projektu i pokazaćemo vam kako inženjerski principi mogu da transformišu vašu digitalnu prisutnost',
    'contact.step1.title': 'Šta vam je potrebno?',
    'contact.step2.title': 'Detalji vašeg projekta',
    'contact.step3.title': 'Vaši podaci',
    'contact.service.seo': 'SEO (više veb saobraćaja)',
    'contact.service.webdev': 'Veb razvoj (sajtovi i aplikacije)',
    'contact.service.automation': 'Automatizacija (procesi)',
    'contact.service.all': 'Nisam siguran / Sve',
    'contact.budget': 'Približni budžet',
    'contact.budget.under5k': 'Manje od $5K',
    'contact.budget.5k15k': '$5K - $15K',
    'contact.budget.15k50k': '$15K - $50K',
    'contact.budget.50kplus': '$50K+',
    'contact.budget.retainer': 'Kontinuirani retainer',
    'contact.project': 'Recite nam šta želite da postignete',
    'contact.timeline': 'Rokovi',
    'contact.timeline.asap': 'Što je pre moguće',
    'contact.timeline.1-3': '1-3 meseca',
    'contact.timeline.3-6': '3-6 meseci',
    'contact.timeline.6plus': '6+ meseci',
    'contact.name': 'Ime',
    'contact.email': 'Email',
    'contact.company': 'Kompanija',
    'contact.phone': 'Telefon',
    'contact.language': 'Preferirani jezik',
    'contact.next': 'Sledeće',
    'contact.back': 'Nazad',
    'contact.send': 'Pošalji',
    'contact.success': 'Gotovo! Kontaktiraćemo vas u roku od 24 sata.',
    'contact.alternative': 'Ostali načini kontakta',
    'contact.available': 'Dostupni Pon-Pet, 9-18h CLT',

    // About Page
    'about.title': 'Gde se marketing susreće sa inženjeringom',
    'about.subtitle': 'Kreiran od strane inženjera koji razume kako da uvećava biznis',
    'about.story.title': 'Od građevinskog inženjera do digitalnih sistema',
    'about.story.content': 'Sa pozadinom u građevinskom inženjeringu, donosim sistematski i precizan pristup digitalnom marketingu. Svaki projekat tretiraju kao inženjerski problem: analiziram, planiram, merim i optimizujem. Nema probe i greške—gradim digitalnu infrastrukturu koja donosi predvidive rezultate.',
    'about.philosophy.title': 'Zašto inženjering + marketing?',
    'about.value1': 'Konkretni podaci, a ne slutnje',
    'about.value2': 'Sistemi koji funkcionišu, a ne pojedinačne taktike',
    'about.value3': 'Automatizacija koja štedi vreme',
    'about.value4': 'Stvarni rezultati, a ne metrije taštine',
    'about.tech.title': 'Najnovija tehnologija',
    'about.tech.subtitle': 'Radimo ono što propovedamo—90+ PageSpeed u svemu što gradimo',
    'about.cta': 'Radimo zajedno',

    // Portfolio Page
    'portfolio.title': 'Naš rad',
    'portfolio.subtitle': 'Stvarni rezultati za kompanije koje žele da rastu',
    'portfolio.filter.all': 'Sve',
    'portfolio.filter.seo': 'SEO',
    'portfolio.filter.webdev': 'Veb razvoj',
    'portfolio.filter.automation': 'Automatizacija',
    'portfolio.view': 'Pogledaj slučaj',

    // Services Page
    'services.title': 'Naše usluge',
    'services.subtitle': 'Dva osnovna rešenja za rast vašeg biznisa',

    // SEO Service
    'services.seo.title': 'SEO',
    'services.seo.badge': 'Temelj',
    'services.seo.what.title': 'Šta Radimo',
    'services.seo.what.description': 'Kompletna SEO optimizacija za preduzeća koja žele da dominiraju u rezultatima pretrage',
    'services.seo.feature1': 'Tehnički SEO',
    'services.seo.feature2': 'Strategija Sadržaja',
    'services.seo.feature3': 'Lokalni SEO',
    'services.seo.feature4': 'Izgradnja Linkova',
    'services.seo.who.title': 'Za Koga je Namenjeno',
    'services.seo.who.target1': 'Preduzeća koja žele predvidiv organski saobraćaj',
    'services.seo.who.target2': 'Kompanije umorne od plaćanja oglasa bez dugoročnog ROI-ja',
    'services.seo.platforms.title': 'Platforme',
    'services.seo.platforms.note': 'Ekspertiza u WordPress + Elementor, plus Shopify, Wix, Webnode i više',
    'services.seo.timeline.title': 'Rokovi',
    'services.seo.timeline.audit': 'Početni Audit',
    'services.seo.timeline.audit_time': '1 nedelja',
    'services.seo.timeline.implementation': 'Implementacija',
    'services.seo.timeline.implementation_time': '2-4 nedelje',
    'services.seo.timeline.results': 'Vidljivi Rezultati',
    'services.seo.timeline.results_time': '3-6 meseci',
    'services.seo.deliverables.title': 'Što Dobijate',
    'services.seo.deliverable1': 'Kompletni tehnički audit',
    'services.seo.deliverable2': 'Strategija ključnih reči',
    'services.seo.deliverable3': 'On-page optimizacija',
    'services.seo.deliverable4': 'Mesečni izvešaji o performansama',
    'services.seo.pricing': 'Od 1.800 dolara',
    'services.seo.pricing_note': 'po projektu',
    'services.seo.cta': 'Dobijte Besplatan SEO Audit',

    // Development Service
    'services.dev.title': 'Razvoj Softvera',
    'services.dev.badge': 'Sistemi',
    'services.dev.what.title': 'Šta Gradimo',
    'services.dev.what.description': 'Prilagođeni softver, mikro-SaaS i sistemi automatizacije koji zamenjuju manuelne procese',
    'services.dev.what.migration': 'Migracija i normalizacija podataka iz više izvora u struktuirane baze podataka',
    'services.dev.who.title': 'Za Koga je Namenjeno',
    'services.dev.who.target1': 'Preduzeća koja se davlju u tabelama',
    'services.dev.who.target2': 'Kompanije kojima trebaju prilagođeni alati',
    'services.dev.who.target3': 'Startapi koji grade mikro-SaaS',
    'services.dev.tech.title': 'Tehnički Stek',
    'services.dev.timeline.title': 'Rokovi',
    'services.dev.timeline.discovery': 'Otkrivanje',
    'services.dev.timeline.discovery_time': '1-2 nedelje',
    'services.dev.timeline.development': 'Razvoj',
    'services.dev.timeline.development_time': '4-12 nedelja',
    'services.dev.timeline.deployment': 'Pokretanje + Obuka',
    'services.dev.timeline.deployment_time': '1 nedelja',
    'services.dev.deliverables.title': 'Šta Dobijate',
    'services.dev.deliverable1': 'Analiza procesa i dizajn radnog toka',
    'services.dev.deliverable2': 'Kontrola pristupa na osnovu uloge',
    'services.dev.deliverable3': 'Automatsko generisanje dokumenata',
    'services.dev.deliverable4': 'Obuka korisnika',
    'services.dev.deliverable5': 'Kontinuirana podrška',
    'services.dev.cta': 'Pokrenite Projekat',

    // Process
    'services.process.title': 'Kako funkcionišu projekti',
    'services.process.subtitle': 'Provereni proces koji donosi rezultate',
    'services.process.step1': 'Poziv za otkrivanje',
    'services.process.desc1': 'Razumevanje vaših potreba',
    'services.process.step2': 'Predlog i obim',
    'services.process.desc2': 'Jasni rokovi i cene',
    'services.process.step3': 'Sprintovi razvoja',
    'services.process.desc3': 'Redovne vesti i povratne informacije',
    'services.process.step4': 'Pokretanje i obuka',
    'services.process.desc4': 'Lansiranje sa punom podrškom',
    'services.process.step5': 'Kontinuirana podrška',
    'services.process.desc5': 'Održavanje i ažuriranja',

    // Final CTA
    'services.final_cta.title': 'Spremni da počnete?',
    'services.final_cta.description': 'Razgovarajmo o vašem projektu i vidimo kako možemo da vam pomognemo da rastete.',
    'services.final_cta.button': 'Počni razgovor',

    // SEO Services Page (/services/seo)
    seoServices: {
      meta: {
        title: "SEO Usluge | Digital Frog",
        description: "Neka vas pronađu klijenti koji već traže. Kompletna SEO optimizacija za WordPress, Shopify, Wix i Webnode sajtove. Od 1.800 dolara.",
        keywords: "SEO usluge, optimizacija za pretraživače, WordPress SEO, tehnički SEO audit, strategija ključnih reči"
      },
      hero: {
        badge: "SEO Usluge",
        title: "Neka Vas Pronađu Klijenti Koji",
        titleAccent: "Već Traže",
        subtitle: "Prestanite da plaćate oglase koji nestaju kada se budžet potroši. SEO gradi dugoročan, predvidiv organski saobraćaj koji se povećava tokom vremena. Optimizujemo vaš sajt za pretraživače i ljude.",
        cta: "Dobijte Besplatan SEO Audit",
        ctaSecondary: "Pogledajte Studije Slučaja",
        trustBadges: {
          speed: "90+ PageSpeed",
          delivery: "1 Nedelja Audit",
          satisfaction: "100% Transparentno"
        }
      },
      problem: {
        title: "Zašto Vaš Veb Sajt Nije Pronađen",
        subtitle: "Konkurenti vas nadmašuju jer razumeju šta pretraživači stvarno žele.",
        items: [
          {
            icon: "Search",
            title: "Nevidljiv za Pretraživače",
            description: "Vaš sajt ima tehničke probleme koji sprečavaju pravilno indeksiranje. Google ne može da pronađe ili razume vaš sadržaj kako treba."
          },
          {
            icon: "Target",
            title: "Pogrešne Ključne Reči",
            description: "Optimizujete za ključne reči koje niko ne traži, ili ključne reči koje ne pretvaraju posetioce u kupce."
          },
          {
            icon: "Gauge",
            title: "Sporo Učitavanje",
            description: "Brzina stranice je glavni faktor rangiranja. Spori sajtovi se guraju dole u rezultatima pretrage i gube posetioce."
          },
          {
            icon: "FileX",
            title: "Loša Struktura Sadržaja",
            description: "Sadržaj koji ne prati SEO najbolje prakse. Nedostaju meta opisi, loši naslovi, slabo interno povezivanje."
          }
        ]
      },
      solution: {
        title: "Naš Sistematski SEO Pristup",
        subtitle: "Ne samo da optimizujemo. Projektujemo kompletne SEO sisteme koji funkcionišu.",
        items: [
          {
            icon: "Wrench",
            title: "Tehnički Audit Inženjerskog Nivoa",
            description: "Analiziramo vaš sajt kao inženjeri: mogućnost indeksiranja, brzina sajta, mobilne performanse, strukturni podaci, problemi indeksiranja."
          },
          {
            icon: "TrendingUp",
            title: "Strateško Istraživanje Ključnih Reči",
            description: "Pronađite ključne reči visoke namere koje vaši klijenti stvarno traže. Fokus na termine koji pretvaraju posetioce u potencijalne klijente i prodaju."
          },
          {
            icon: "Zap",
            title: "Optimizacija Performansi",
            description: "90+ PageSpeed garantovano. Brzi sajtovi se bolje rangiraju i više konvertuju. Optimizujemo svaki element za brzinu."
          },
          {
            icon: "BarChart3",
            title: "Merljivo Praćenje Rezultata",
            description: "Mesečni izveštaji koji pokazuju poboljšanja rangiranja, rast saobraćaja i povećanje konverzija. SEO koji vodi poslovne rezultate."
          }
        ],
        differentiator: {
          title: "Zašto 'Marketing Meets Engineering' Funkcioniše za SEO",
          description: "Većina SEO agencija se fokusira samo na rangiranje. Mi se fokusiramo na poslovne rezultate. Naša inženjerska pozadina znači da se tehnički problemi rešavaju kako treba, a naša marketing ekspertiza osigurava da saobraćaj stvarno konvertuje."
        }
      }
    },
  },
};

/**
 * Server-side translation helper - no client-side dependencies
 */
export function getTranslations(lang: Language) {
  const langTranslations = translations[lang] || translations.en;
  
  return {
    t: (key: string): any => {
      // First try direct key lookup (for flat keys like 'nav.services')
      if (langTranslations[key]) {
        return langTranslations[key];
      }
      
      // Then try nested keys like 'customSoftware.hero.title'
      const keys = key.split('.');
      let result: any = langTranslations;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return key; // Return the key if not found
        }
      }
      
      return result || key;
    }
  };
}

/**
 * Detect language from URL path
 */
export function detectLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/sr')) return 'sr';
  if (pathname.startsWith('/en')) return 'en';
  return 'en'; // Default fallback
}

/**
 * Get localized path - adds language prefix to routes
 */
export function getLocalizedPath(path: string, lang: Language): string {
  // If path is just "/" return language root
  if (path === '/') {
    if (lang === 'es') return '/es';
    if (lang === 'sr') return '/sr';
    return '/';
  }
  
  // Remove any existing language prefix
  const cleanPath = path.replace(/^\/(en|es|sr)/, '');
  
  // Add language prefix, keep English as default
  if (lang === 'es') return `/es${cleanPath}`;
  if (lang === 'sr') return `/sr${cleanPath}`;
  return cleanPath;
}

/**
 * Remove language prefix from path
 */
export function getCleanPath(pathname: string): string {
  return pathname.replace(/^\/(en|es|sr)/, '') || '/';
}

/**
 * Route mapping for language switching between different URL structures
 */
const ROUTE_MAPPING: Record<string, { en: string; es: string; sr: string }> = {
  // Blog routes
  '/blog': {
    en: '/blog',
    es: '/blog',
    sr: '/blog'
  },
  // Landing pages with different URL structures
  '/services/custom-software': {
    en: '/services/custom-software',
    es: '/servicios/software-a-medida',
    sr: '/services/custom-software'
  },
  '/servicios/software-a-medida': {
    en: '/services/custom-software',
    es: '/servicios/software-a-medida',
    sr: '/services/custom-software'
  },
  '/services/process-automation': {
    en: '/services/process-automation',
    es: '/servicios/automatizacion-procesos',
    sr: '/services/process-automation'
  },
  '/servicios/automatizacion-procesos': {
    en: '/services/process-automation',
    es: '/servicios/automatizacion-procesos',
    sr: '/services/process-automation'
  },
  // New service pages
  '/services/seo': {
    en: '/services/seo',
    es: '/servicios/seo',
    sr: '/services/seo'
  },
  '/servicios/seo': {
    en: '/services/seo',
    es: '/servicios/seo',
    sr: '/services/seo'
  },
  '/services/web-development': {
    en: '/services/web-development',
    es: '/servicios/desarrollo-web',
    sr: '/services/web-development'
  },
  '/servicios/desarrollo-web': {
    en: '/services/web-development',
    es: '/servicios/desarrollo-web',
    sr: '/services/web-development'
  },
  '/services/automation': {
    en: '/services/automation',
    es: '/servicios/automatizacion',
    sr: '/services/automation'
  },
  '/servicios/automatizacion': {
    en: '/services/automation',
    es: '/servicios/automatizacion',
    sr: '/services/automation'
  },
  // Professional services
  '/solutions/professional-services': {
    en: '/solutions/professional-services',
    es: '/soluciones/servicios-profesionales',
    sr: '/solutions/professional-services'
  },
  '/soluciones/servicios-profesionales': {
    en: '/solutions/professional-services',
    es: '/soluciones/servicios-profesionales',
    sr: '/solutions/professional-services'
  }
};

/**
 * Get the correct route path for language switching
 */
export function getLanguageSwitchPath(currentPath: string, targetLang: Language): string {
  const cleanPath = getCleanPath(currentPath);
  
  // Check if this is a special route that needs mapping
  const routeMapping = ROUTE_MAPPING[cleanPath];
  if (routeMapping) {
    const targetPath = routeMapping[targetLang];
    if (targetLang === 'es') return `/es${targetPath}`;
    if (targetLang === 'sr') return `/sr${targetPath}`;
    return targetPath;
  }
  
  // For standard routes, use normal localization
  return getLocalizedPath(cleanPath, targetLang);
}

export type { Language };