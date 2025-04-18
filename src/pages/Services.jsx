import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Service Card Component
const ServiceCard = ({ icon, title, description, features, index, imageSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-purple-700 font-medium"
          style={{ color: '#5C31CE' }}
        >
          {isExpanded ? 'Show less' : 'Learn more'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-medium text-gray-700 mb-2">What's included:</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-purple-700 mr-2 mt-1" style={{ color: '#5C31CE' }}>✓</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Process Step Component
const ProcessStep = ({ number, title, description, imageSrc, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 py-12`}>
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-100 rounded-lg h-64 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold mr-4" style={{ backgroundColor: '#5C31CE' }}>
            {number}
          </span>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </div>
  );
};

// FAQ Component
const FAQ = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <svg 
          className={`w-5 h-5 text-purple-700 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: '#5C31CE' }}
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3"
        >
          <p className="text-gray-600">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  // Service data
  const services = [
    { 
      icon: "🏠", 
      title: "Residential Design", 
      description: "Transform your living spaces into beautiful, functional homes that reflect your personality and lifestyle.",
      features: [
        "Complete interior design for new homes",
        "Renovation and remodeling projects",
        "Room-by-room design solutions",
        "Custom furniture and built-ins",
        "Material and finish selection"
      ],
      imageSrc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
    },
    { 
      icon: "🏢", 
      title: "Commercial Design", 
      description: "Create inspiring work environments that boost productivity, impress clients, and enhance your brand identity.",
      features: [
        "Office design and space planning",
        "Retail and hospitality interiors",
        "Brand integration into physical spaces",
        "Ergonomic workspace solutions",
        "Sustainable commercial interiors"
      ],
      imageSrc: "https://www.shutterstock.com/image-illustration/modern-office-interior-design-loft-600nw-1259412769.jpg"
    },
    { 
      icon: "🛋️", 
      title: "Furniture & Styling", 
      description: "Find the perfect pieces that match your style and space requirements for a cohesive, curated look.",
      features: [
        "Custom furniture design",
        "Furniture selection and procurement",
        "Accessory and art curation",
        "Styling and decorating services",
        "Furniture layout optimization"
      ],
      imageSrc: "https://media.designcafe.com/wp-content/uploads/2021/01/09115428/living-room-interior-design-for-small-indian-homes-with-subtle-pastel-dual-tone.jpg"
    },
    { 
      icon: "🎨", 
      title: "Color Consultation", 
      description: "Discover the ideal color palette to enhance your space, influence mood, and create visual harmony.",
      features: [
        "Personalized color scheme development",
        "Paint selection and coordination",
        "Material and finish color integration",
        "Color psychology application",
        "Lighting and color interaction planning"
      ],
      imageSrc: "https://foyr.com/learn/wp-content/uploads/2021/03/blue-in-interior-design-scaled.jpg"
    },
    { 
      icon: "📏", 
      title: "Space Planning", 
      description: "Optimize your layout for functionality, flow, and aesthetic appeal to make the most of your space.",
      features: [
        "Spatial analysis and optimization",
        "Traffic flow improvement",
        "Furniture arrangement",
        "Multi-functional space design",
        "Scale and proportion planning"
      ],
      imageSrc: "https://nppartners.net/wp-content/uploads/2021/10/be762f3cf400aa32891a4d160864187d.jpg"
    },
    { 
      icon: "📐", 
      title: "3D Visualization", 
      description: "Experience your space before it's built with photorealistic renderings and virtual walkthroughs.",
      features: [
        "Photorealistic 3D renderings",
        "Virtual reality experiences",
        "Interactive design previews",
        "Before/after visualizations",
        "Material and finish visualization"
      ],
      imageSrc: "https://img.freepik.com/free-photo/high-angle-living-room-interior-design_23-2149647173.jpg?semt=ais_hybrid&w=740"
    },
    { 
      icon: "🏗️", 
      title: "Project Management", 
      description: "Leave the details to us as we coordinate contractors, deliveries, and installations to bring your design to life.",
      features: [
        "Contractor coordination",
        "Budget management",
        "Timeline development and tracking",
        "Quality control and inspections",
        "Vendor and supplier management"
      ],
      imageSrc: "https://cdn1.vectorstock.com/i/1000x1000/65/35/project-management-construction-interior-design-vector-27426535.jpg"
    },
    { 
      icon: "🌿", 
      title: "Sustainable Design", 
      description: "Create beautiful spaces that are environmentally responsible with eco-friendly materials and energy-efficient solutions.",
      features: [
        "Eco-friendly material selection",
        "Energy-efficient design strategies",
        "Sustainable furniture sourcing",
        "Indoor air quality improvement",
        "Green certification guidance"
      ],
      imageSrc: "https://www.iiad.edu.in/wp-content/uploads/2024/01/6-16.webp"
    }
  ];
  
  // Process steps
  const processSteps = [
    {
      number: "1",
      title: "Discovery & Consultation",
      description: "We begin with an in-depth discussion to understand your vision, needs, budget, and timeline. This initial consultation helps us establish the scope of your project and determine how our services can best meet your needs.",
      imageSrc: "https://www.shutterstock.com/image-photo/contemporary-designer-pointing-home-interior-600nw-1734082757.jpg"
    },
    {
      number: "2",
      title: "Concept Development",
      description: "Our design team creates preliminary concepts based on your requirements. We present mood boards, material samples, and initial space plans to visualize the direction of your project and refine the design approach.",
      imageSrc: "https://foyr.com/learn/wp-content/uploads/2023/04/interior-design-concept-development-phases-of-interior-design.jpg"
    },
    {
      number: "3",
      title: "Design Development",
      description: "Once the concept is approved, we develop detailed design plans including furniture layouts, material specifications, color schemes, lighting plans, and custom elements. 3D visualizations help you experience the space before implementation.",
      imageSrc: "https://www.shutterstock.com/image-photo/design-project-development-3d-visualization-600nw-2171581457.jpg"
    },
    {
      number: "4",
      title: "Implementation & Installation",
      description: "We coordinate with contractors, vendors, and craftsmen to bring your design to life. Our team manages the procurement, delivery, and installation process, ensuring quality control at every step.",
      imageSrc: "https://images.adsttc.com/media/images/633b/2c59/7120/027a/9adb/0787/large_jpg/what-materials-can-promote-health-in-interior-architecture_21.jpg?1664822367"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "What is the typical timeline for an interior design project?",
      answer: "Project timelines vary based on scope and complexity. A single room redesign might take 4-8 weeks, while a complete home renovation could take 6-12 months. During our initial consultation, we'll provide a customized timeline based on your specific project requirements."
    },
    {
      question: "How do you charge for your services?",
      answer: "We offer flexible fee structures including flat fees for defined projects, hourly rates for consultations and smaller projects, and percentage-based fees for larger projects. We provide transparent pricing and detailed proposals before beginning any work."
    },
    {
      question: "Do I need to have a specific style in mind before working with you?",
      answer: "Not at all! Part of our process is helping you discover and define your style. Through conversations, questionnaires, and image references, we'll work together to identify aesthetics that resonate with you, even if you don't have a clear vision at the start."
    },
    {
      question: "Can you work with my existing furniture and decor?",
      answer: "Absolutely! We can incorporate cherished pieces into your new design. During our assessment, we'll identify items to keep, repurpose, or reupholster, integrating them seamlessly with new elements for a cohesive look that honors your history."
    },
    {
      question: "Do you handle small projects or only complete home designs?",
      answer: "We welcome projects of all sizes! From single-room refreshes to complete home transformations, our services can be tailored to match your needs. We offer specialized packages for smaller projects to make professional design accessible."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-purple-700" style={{ backgroundColor: '#9370DB' }}>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://media.istockphoto.com/id/1199197780/photo/designer-working-in-office-doing-furniture-and-flooring-material-selection-from-samples-for.jpg?s=612x612&w=0&k=20&c=ltCrS0DC0A1EBpA46VLAoRajDdWWlTsJ5jboIHAnjg4=" 
            alt="Interior Design Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-300">Services</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive interior design solutions tailored to your unique style, needs, and budget. From concept to completion, we transform spaces into extraordinary experiences.
            </p>
            <Link to="/contact">
              <button className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-all duration-300" style={{ color: '#5C31CE' }}>
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive <span className="text-yellow-400">Design</span> Services</h2>
            <p className="text-gray-600">
              From initial concept to final styling, our team provides end-to-end solutions for creating spaces that inspire and function beautifully.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                imageSrc={service.imageSrc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our <span className="text-yellow-400">Design</span> Process</h2>
            <p className="text-gray-600">
              A transparent, collaborative approach that ensures a smooth journey from concept to completion.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                imageSrc={step.imageSrc}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked <span className="text-yellow-400">Questions</span></h2>
            <p className="text-gray-600">
              Find answers to common questions about our services, process, and approach to interior design.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQ 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your <span className="text-yellow-400">Design</span> Journey?</h2>
            <p className="text-gray-600 mb-8">
              Our team is ready to bring your vision to life. Contact us today to schedule a consultation and discover how we can transform your space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300" style={{ backgroundColor: '#5C31CE' }}>
                  Schedule a Consultation
                </button>
              </Link>
              <Link to="/projects">
                <button className="bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300" style={{ borderColor: '#5C31CE', color: '#5C31CE' }}>
                  View Our Portfolio
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}