// Application Data
const appData = {
  company: {
    name: "Elite RFP Solutions",
    tagline: "Transform Your Bids Into Winning Proposals",
    description: "Leading provider of professional tender and RFP services, helping businesses secure high-value contracts through expert bid writing, technical documentation, and strategic proposal management.",
    founded: "2018",
    experience: "6+ years",
    projects_completed: "500+",
    success_rate: "78%",
    clients_served: "200+"
  },
  services: [
    {
      title: "Technical Writing Services",
      description: "Comprehensive technical documentation including user manuals, API documentation, system specifications, and process documentation with clear, structured, and compliant content.",
      features: ["User Manuals", "API Documentation", "System Specifications", "Process Documentation", "Regulatory Documentation"],
      icon: "fas fa-file-alt"
    },
    {
      title: "Technical Editing", 
      description: "Professional editing and review of technical documents to ensure clarity, compliance, and consistency. We enhance readability while maintaining technical accuracy.",
      features: ["Document Review", "Content Restructuring", "Compliance Checking", "Consistency Enhancement", "Quality Assurance"],
      icon: "fas fa-edit"
    },
    {
      title: "Document Standardisation and Formatting",
      description: "Transform your documents with professional formatting, standardized templates, and consistent styling that meets industry standards and client requirements.",
      features: ["Template Creation", "Style Guide Development", "Format Standardization", "Brand Alignment", "Multi-format Output"],
      icon: "fas fa-align-left"
    },
    {
      title: "Bid Management",
      description: "End-to-end bid management from opportunity identification to submission, ensuring compliance, timeliness, and strategic positioning for maximum success.",
      features: ["Opportunity Assessment", "Team Coordination", "Timeline Management", "Compliance Monitoring", "Submission Support"],
      icon: "fas fa-tasks"
    },
    {
      title: "Bid Enhancement/Review",
      description: "Expert review and enhancement of existing bids to improve competitiveness, clarity, and compliance before submission.",
      features: ["Competitive Analysis", "Content Optimization", "Compliance Review", "Win Theme Development", "Final Quality Check"],
      icon: "fas fa-search-plus"
    },
    {
      title: "Bid Writing",
      description: "Professional bid writing services creating compelling, compliant, and winning proposals tailored to client requirements and evaluation criteria.",
      features: ["Proposal Writing", "Response Strategy", "Value Proposition", "Executive Summary", "Technical Solutions"],
      icon: "fas fa-pen-fancy"
    }
  ],
  caseStudies: [
    {
      title: "£2.5M Healthcare Technology Contract Win",
      client: "Regional Health Authority",
      challenge: "Complex multi-phase RFP for digital health platform with strict compliance requirements and 45-day deadline",
      solution: "Developed comprehensive technical response with detailed implementation roadmap, risk mitigation strategies, and compelling value proposition highlighting 25% cost savings",
      results: {
        contract_value: "£2.5M",
        timeline: "45 days",
        success_rate: "100%",
        cost_savings: "25%"
      },
      testimonial: "Elite RFP Solutions delivered a winning proposal that exceeded our expectations. Their attention to detail and strategic approach was instrumental in securing this major contract."
    },
    {
      title: "Government Infrastructure Bid Success", 
      client: "City Council Transportation Department",
      challenge: "Multi-million pound transportation infrastructure project requiring extensive technical documentation and stakeholder coordination",
      solution: "Created detailed technical specifications, environmental impact assessments, and project management plans with clear deliverables and timelines",
      results: {
        contract_value: "£8.2M", 
        timeline: "60 days",
        success_rate: "100%",
        competitors_beaten: 12
      },
      testimonial: "The quality of documentation and strategic presentation gave us a competitive edge. We won against 12 other bidders thanks to their expertise."
    },
    {
      title: "Digital Transformation Framework Win",
      client: "Financial Services Consortium", 
      challenge: "Complex IT transformation RFP requiring detailed technical architecture and change management approach",
      solution: "Developed comprehensive digital transformation strategy with phased implementation, risk management, and measurable outcomes",
      results: {
        contract_value: "£4.8M",
        timeline: "35 days", 
        success_rate: "100%",
        efficiency_gain: "40%"
      },
      testimonial: "Their strategic approach and technical expertise helped us present a compelling case for digital transformation that resonated with evaluators."
    }
  ],
  blogPosts: [
    {
      title: "AI-Driven Procurement: Transforming RFP Processes in 2024",
      date: "2024-11-15",
      category: "Industry Trends",
      summary: "Explore how artificial intelligence is revolutionizing procurement processes, from automated compliance checking to predictive analytics for bid success.",
      content: "The procurement landscape is experiencing unprecedented transformation with AI adoption reaching 70% among leading organizations. Machine learning algorithms now analyze RFP requirements in minutes, identify compliance gaps, and suggest optimization strategies...",
      tags: ["AI", "Procurement", "Digital Transformation"]
    },
    {
      title: "Government Contract Opportunities: Q4 2024 Outlook",
      date: "2024-10-28", 
      category: "Government Contracts",
      summary: "Analysis of upcoming government contract opportunities, policy changes, and strategic considerations for successful bidding in the public sector.",
      content: "Government spending on technology and infrastructure continues to grow, with £45 billion allocated for digital transformation initiatives. New procurement frameworks emphasize sustainability, innovation, and value for money...",
      tags: ["Government", "Public Sector", "Opportunities"]
    },
    {
      title: "Best Practices for Technical Documentation in Bids",
      date: "2024-10-10",
      category: "Best Practices", 
      summary: "Essential guidelines for creating compelling technical documentation that enhances bid quality and demonstrates capability to evaluators.",
      content: "Technical documentation quality often determines bid success. Our analysis of 500+ winning proposals reveals key patterns: clear executive summaries, detailed implementation plans, and robust risk mitigation strategies...",
      tags: ["Documentation", "Best Practices", "Technical Writing"]
    }
  ],
  team: [
    {
      name: "Sarah Mitchell",
      role: "Managing Director & Lead Bid Strategist", 
      experience: "15+ years",
      expertise: ["Strategic Bid Management", "Government Contracts", "Team Leadership"],
      bio: "Former procurement executive with extensive public and private sector experience. Led winning bids worth over £200M."
    },
    {
      name: "David Chen",
      role: "Senior Technical Writer",
      experience: "12+ years", 
      expertise: ["Technical Documentation", "API Documentation", "Regulatory Compliance"],
      bio: "Technical writing specialist with deep expertise in complex technical documentation and regulatory compliance across multiple industries."
    },
    {
      name: "Emma Rodriguez",
      role: "Bid Management Specialist",
      experience: "8+ years",
      expertise: ["Project Management", "Compliance Review", "Stakeholder Coordination"], 
      bio: "Certified project manager specializing in bid coordination, compliance management, and multi-stakeholder engagement."
    }
  ],
  testimonials: [
    {
      client: "Healthcare Technology Ltd",
      name: "John Thompson", 
      role: "CEO",
      quote: "Elite RFP Solutions transformed our bidding process. Their strategic approach and attention to detail helped us win 3 major contracts worth £12M in just 6 months.",
      rating: 5
    },
    {
      client: "Infrastructure Solutions PLC",
      name: "Maria Santos",
      role: "Business Development Director", 
      quote: "Professional, reliable, and results-driven. Their expertise in government contracts has been invaluable to our growth strategy.",
      rating: 5
    },
    {
      client: "Tech Innovations Group",
      name: "Robert Clarke",
      role: "Managing Director",
      quote: "Outstanding service from start to finish. They understood our technical solutions and translated them into winning proposals.",
      rating: 5
    }
  ],
  stats: {
    years_experience: 6,
    projects_completed: 500,
    success_rate: 78,
    clients_served: 200,
    total_contract_value: "£250M+",
    average_project_duration: "42 days"
  },
  contact: {
    phone: "+44 20 7123 4567",
    email: "info@eliterfpsolutions.co.uk", 
    address: "Suite 15, Business Centre, 123 London Road, Manchester M1 2AB, United Kingdom",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    emergency: "+44 7700 123456"
  }
};

// Application state
class EliteRFPApp {
  constructor() {
    this.currentPage = 'home';
    this.currentTestimonial = 0;
    this.isMenuOpen = false;
    this.testimonialInterval = null;
  }
  
  // Initialize the application
  init() {
    console.log('🚀 Initializing Elite RFP Solutions website...');
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }
  
  start() {
    console.log('📱 Starting application setup...');
    this.bindEvents();
    this.populateContent();
    this.setActivePage('home');
    this.startTestimonialCarousel();
    console.log('✅ Elite RFP Solutions website initialized successfully');
  }
  
  // Bind event handlers
  bindEvents() {
    console.log('🔗 Binding navigation events...');
    
    // Wait a bit to ensure DOM is ready
    setTimeout(() => {
      this.setupNavigation();
      this.setupForms();
      this.setupMobileMenu();
      this.setupUtilityEvents();
    }, 100);
  }
  
  setupNavigation() {
    // Navigation links with data-page attributes
    const navLinks = document.querySelectorAll('[data-page]');
    console.log(`Found ${navLinks.length} navigation links`);
    
    navLinks.forEach((link, index) => {
      const page = link.getAttribute('data-page');
      console.log(`🔗 Binding navigation link ${index + 1}: "${link.textContent.trim()}" -> ${page}`);
      
      // Remove any existing event listeners
      link.removeEventListener('click', this.handleNavClick);
      
      // Add new event listener with proper context
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`🔄 Navigation clicked: ${page}`);
        this.navigateToPage(page);
      });
    });
    
    // Logo click to go home
    const logo = document.querySelector('.nav__logo');
    if (logo) {
      logo.style.cursor = 'pointer';
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('🏠 Logo clicked - going to home');
        this.navigateToPage('home');
      });
    }
    
    console.log('✅ Navigation setup completed');
  }
  
  setupForms() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
      console.log('📝 Contact form bound');
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => this.handleNewsletterForm(e));
      console.log('📧 Newsletter form bound');
    }
  }
  
  setupMobileMenu() {
    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
      navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('📱 Menu toggle clicked');
        this.toggleMenu();
      });
      console.log('🍔 Mobile menu toggle bound');
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && !e.target.closest('.nav')) {
        this.closeMenu();
      }
    });
  }
  
  setupUtilityEvents() {
    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isMenuOpen) {
        this.closeMenu();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu();
      }
      
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('user-is-tabbing');
    });
  }
  
  // Navigate to a specific page
  navigateToPage(pageId) {
    console.log(`🎯 Navigating to page: ${pageId}`);
    
    // Validate page ID
    const validPages = ['home', 'services', 'about', 'case-studies', 'blog', 'technical-editing', 'contact', 'privacy'];
    if (!validPages.includes(pageId)) {
      console.error(`❌ Invalid page ID: ${pageId}, defaulting to home`);
      pageId = 'home';
    }
    
    this.setActivePage(pageId);
    this.closeMenu();
  }
  
  // Set active page with improved logic
  setActivePage(pageId) {
    console.log(`📄 Setting active page: ${pageId}`);
    
    // Get all pages and navigation links
    const allPages = document.querySelectorAll('.page');
    const allNavLinks = document.querySelectorAll('.nav__link');
    
    console.log(`Found ${allPages.length} page elements:`, Array.from(allPages).map(p => p.id));
    
    // Hide all pages
    allPages.forEach(page => {
      page.classList.remove('active');
      page.style.display = 'none'; // Force hide
      console.log(`Hidden page: ${page.id}`);
    });
    
    // Remove active class from all nav links
    allNavLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      targetPage.style.display = 'block'; // Force show
      this.currentPage = pageId;
      console.log(`✅ Activated page: ${pageId}`);
      
      // Update nav link
      const activeLink = document.querySelector(`[data-page="${pageId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
        console.log(`✅ Activated nav link for: ${pageId}`);
      }
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Update page title
      this.updatePageTitle(pageId);
      
      // Trigger animations
      this.triggerPageAnimations(targetPage);
      
    } else {
      console.error(`❌ Page element not found: #${pageId}`);
      // Fallback to home
      const homePage = document.getElementById('home');
      if (homePage) {
        homePage.classList.add('active');
        homePage.style.display = 'block';
        this.currentPage = 'home';
        console.log('📍 Fallback: Activated home page');
      }
    }
  }
  
  // Trigger page animations
  triggerPageAnimations(pageElement) {
    const animatedElements = pageElement.querySelectorAll('.slide-up, .fade-in');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
  
  // Update page title
  updatePageTitle(pageId) {
    const titles = {
      home: 'Elite RFP Solutions - Transform Your Bids Into Winning Proposals',
      services: 'Our Services - Elite RFP Solutions',
      about: 'About Us - Elite RFP Solutions',
      'case-studies': 'Case Studies - Elite RFP Solutions',
      blog: 'News & Blog - Elite RFP Solutions',
      'technical-editing': 'Technical Editing - Elite RFP Solutions',
      contact: 'Contact Us - Elite RFP Solutions',
      privacy: 'Privacy Policy - Elite RFP Solutions'
    };
    
    document.title = titles[pageId] || titles.home;
    console.log(`📄 Updated page title: ${document.title}`);
  }
  
  // Toggle mobile menu
  toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    if (navMenu && navToggle) {
      this.isMenuOpen = !this.isMenuOpen;
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      console.log(`🍔 Menu toggled: ${this.isMenuOpen ? 'open' : 'closed'}`);
      
      // Add ARIA attributes for accessibility
      navToggle.setAttribute('aria-expanded', this.isMenuOpen.toString());
      navMenu.setAttribute('aria-hidden', (!this.isMenuOpen).toString());
    }
  }
  
  // Close mobile menu
  closeMenu() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    if (navMenu && navToggle && this.isMenuOpen) {
      this.isMenuOpen = false;
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      
      // Update ARIA attributes
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('aria-hidden', 'true');
      
      console.log('🍔 Menu closed');
    }
  }
  
  // Populate dynamic content
  populateContent() {
    console.log('📊 Populating dynamic content...');
    this.populateServices();
    this.populateServicesDetailed();
    this.populateTeam();
    this.populateCaseStudies();
    this.populateBlog();
    this.populateTestimonials();
    console.log('✅ Content population completed');
  }
  
  // Populate services grid
  populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    const servicesHTML = appData.services.slice(0, 6).map(service => `
      <div class="service-card fade-in">
        <i class="service-card__icon ${service.icon}"></i>
        <h3 class="service-card__title">${service.title}</h3>
        <p class="service-card__description">${service.description}</p>
        <ul class="service-card__features">
          ${service.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    `).join('');
    
    servicesGrid.innerHTML = servicesHTML;
  }
  
  // Populate detailed services
  populateServicesDetailed() {
    const servicesDetailed = document.getElementById('servicesDetailed');
    if (!servicesDetailed) return;
    
    const servicesHTML = appData.services.map(service => `
      <div class="service-detailed slide-up">
        <div class="service-detailed__header">
          <i class="service-detailed__icon ${service.icon}"></i>
          <div>
            <h2 class="service-detailed__title">${service.title}</h2>
            <p>${service.description}</p>
          </div>
        </div>
        <div class="service-detailed__features">
          ${service.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
        </div>
      </div>
    `).join('');
    
    servicesDetailed.innerHTML = servicesHTML;
  }
  
  // Populate team grid
  populateTeam() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    
    const teamHTML = appData.team.map(member => `
      <div class="team-member slide-up">
        <div class="team-member__avatar">
          <i class="fas fa-user"></i>
        </div>
        <h3 class="team-member__name">${member.name}</h3>
        <p class="team-member__role">${member.role}</p>
        <p class="team-member__experience">${member.experience}</p>
        <p class="team-member__bio">${member.bio}</p>
      </div>
    `).join('');
    
    teamGrid.innerHTML = teamHTML;
  }
  
  // Populate case studies
  populateCaseStudies() {
    const caseStudiesGrid = document.getElementById('caseStudiesGrid');
    if (!caseStudiesGrid) return;
    
    const caseStudiesHTML = appData.caseStudies.map(study => `
      <div class="case-study slide-up">
        <div class="case-study__header">
          <h2 class="case-study__title">${study.title}</h2>
          <p class="case-study__client">${study.client}</p>
        </div>
        <div class="case-study__content">
          <div class="case-study__section">
            <h4>Challenge</h4>
            <p>${study.challenge}</p>
          </div>
          <div class="case-study__section">
            <h4>Solution</h4>
            <p>${study.solution}</p>
          </div>
          <div class="case-study__results">
            ${Object.entries(study.results).map(([key, value]) => `
              <div class="result-item">
                <span class="result-value">${value}</span>
                <span class="result-label">${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              </div>
            `).join('')}
          </div>
          <div class="case-study__testimonial">
            "${study.testimonial}"
          </div>
        </div>
      </div>
    `).join('');
    
    caseStudiesGrid.innerHTML = caseStudiesHTML;
  }
  
  // Populate blog posts
  populateBlog() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    const blogHTML = appData.blogPosts.map(post => `
      <article class="blog-post slide-up">
        <div class="blog-post__image">
          <i class="fas fa-newspaper"></i>
        </div>
        <div class="blog-post__content">
          <span class="blog-post__category">${post.category}</span>
          <h2 class="blog-post__title">${post.title}</h2>
          <p class="blog-post__date">${this.formatDate(post.date)}</p>
          <p class="blog-post__summary">${post.summary}</p>
          <div class="blog-post__tags">
            ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `).join('');
    
    blogGrid.innerHTML = blogHTML;
  }
  
  // Populate testimonials
  populateTestimonials() {
    const testimonialsCarousel = document.getElementById('testimonialsCarousel');
    if (!testimonialsCarousel) return;
    
    const testimonial = appData.testimonials[this.currentTestimonial];
    const testimonialHTML = `
      <div class="testimonial-card fade-in">
        <div class="testimonial-quote">${testimonial.quote}</div>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-role">${testimonial.role}</div>
        <div class="testimonial-company">${testimonial.client}</div>
        <div class="testimonial-rating">
          ${Array.from({length: testimonial.rating}, () => '<i class="fas fa-star"></i>').join('')}
        </div>
      </div>
    `;
    
    testimonialsCarousel.innerHTML = testimonialHTML;
  }
  
  // Start testimonial carousel
  startTestimonialCarousel() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    
    this.testimonialInterval = setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % appData.testimonials.length;
      this.populateTestimonials();
    }, 5000);
    
    console.log('🔄 Testimonial carousel started');
  }
  
  // Format date
  formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-GB', options);
  }
  
  // Handle contact form submission
  handleContactForm(e) {
    e.preventDefault();
    console.log('📝 Contact form submitted');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
      this.showNotification('Please fill in all required fields.', 'error');
      return;
    }
    
    if (!this.isValidEmail(data.email)) {
      this.showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    // Simulate form submission
    this.showNotification('Thank you for your message. We\'ll get back to you within 24 hours.', 'success');
    e.target.reset();
    
    console.log('📝 Contact form data:', data);
  }
  
  // Handle newsletter form submission
  handleNewsletterForm(e) {
    e.preventDefault();
    console.log('📧 Newsletter form submitted');
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    if (!email || !this.isValidEmail(email)) {
      this.showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    this.showNotification('Successfully subscribed to our newsletter!', 'success');
    e.target.reset();
    
    console.log('📧 Newsletter subscription:', email);
  }
  
  // Email validation
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Show notification
  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#38a169' : '#e53e3e'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease-out;
      max-width: 300px;
      font-weight: 500;
      font-family: var(--font-family-base, 'Inter', sans-serif);
    `;
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    notification.innerHTML = `
      <i class="${icon}" style="margin-right: 0.5rem;"></i>
      ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }
  
  // Debug function
  debug() {
    console.log('=== Navigation Debug ===');
    console.log('Current page:', this.currentPage);
    console.log('Available pages:', Array.from(document.querySelectorAll('.page')).map(p => p.id));
    console.log('Navigation links:', Array.from(document.querySelectorAll('[data-page]')).map(link => ({
      text: link.textContent.trim(),
      page: link.getAttribute('data-page')
    })));
    console.log('Active page element:', document.getElementById(this.currentPage));
  }
}

// Initialize application
const app = new EliteRFPApp();

// Start the app
app.init();

// Header scroll effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (!header) return;
  
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  if (currentScrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScrollY = currentScrollY;
});

// Add CSS for scrolled header
const style = document.createElement('style');
style.textContent = `
  .header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(15px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;
document.head.appendChild(style);

// Export for debugging
window.EliteRFPApp = app;
window.debugNavigation = () => app.debug();

console.log(`
%c🚀 Elite RFP Solutions Website
%cVersion: 2.0.0 - Navigation Fixed
%cTransform Your Bids Into Winning Proposals
`, 
'color: #1a365d; font-size: 16px; font-weight: bold;',
'color: #20b2aa; font-size: 12px;',
'color: #4a5568; font-size: 12px; font-style: italic;'
);