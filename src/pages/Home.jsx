import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Featured Project Component
const FeaturedProject = ({ image, title, description, index }) => {
  return (
    <motion.div 
      className="relative overflow-hidden group rounded-lg h-96" // Increased height to make images larger
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="h-full w-full bg-gray-200 overflow-hidden rounded-lg"> {/* Changed to h-full w-full for consistent sizing */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end rounded-lg">
        <div className="p-6 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm opacity-80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonial Component
const Testimonial = ({ text, author, position }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <svg className="h-8 w-8 text-purple-700 opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-700 mb-4">{text}</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  );
};

// Design Showcase Component
const DesignShowcase = () => {
  return (
    <div className="relative h-full w-full bg-gray-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://cdn.bluent.com/images/illustration.webp" 
              alt="Interior Design Showcase" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end justify-center p-4">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg text-center">
              <p className="text-purple-700 font-medium" style={{ color: '#5C31CE' }}>Interactive Design Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sample data with individual image sources
  const services = [
    { icon: "🏠", title: "Residential Design", description: "Transform your living spaces into beautiful, functional homes." },
    { icon: "🏢", title: "Commercial Design", description: "Create inspiring work environments that boost productivity and impress clients." },
    { icon: "🛋️", title: "Furniture Selection", description: "Find the perfect pieces that match your style and space requirements." },
    { icon: "🎨", title: "Color Consultation", description: "Discover the ideal color palette to enhance your space and mood." },
  ];
  
  const projects = [
    { image: "https://modernvillasco.com/wp-content/uploads/2024/06/Interior-design-15.jpg", title: "Modern Apartment", description: "Minimalist design for urban living" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2023/1/IV/XN/HW/2352054/office-interiors.jpg", title: "Luxury Villa", description: "Elegant interior for spacious homes" },
    { image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?cs=srgb&dl=pexels-pixabay-37347.jpg&fm=jpg", title: "Office Space", description: "Productive environment for creative teams" },
    { image: "https://5.imimg.com/data5/SELLER/Default/2024/10/460338658/JE/SS/YT/52331314/modern-restaurant-interiors-designing-500x500.jpg", title: "Restaurant Design", description: "Cozy atmosphere for fine dining" },
  ];
  
  const testimonials = [
    { text: "Working with InteriorVision transformed our home completely. Their attention to detail and creative solutions exceeded our expectations.", author: "Emma Johnson", position: "Homeowner" },
    { text: "Our office redesign has significantly improved team morale and productivity. The team was professional and delivered on time and budget.", author: "Michael Chen", position: "CEO, TechStart" },
    { text: "The design process was collaborative and enjoyable. They listened to our needs and created a space that perfectly reflects our style.", author: "Sarah Williams", position: "Client" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with purple overlay */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-purple-800"
          style={{
            opacity: Math.max(0, Math.min(0.7 - scrollY / 1000, 0.7)),
            backgroundColor: '#5C31CE'
          }}
        >
          <img 
            src="https://www.taradigm.com/wp-content/uploads/2024/03/AdobeStock_258357963-scaled.jpeg" 
            alt="Interior Design Hero" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Spaces Into <span className="text-yellow-300">Extraordinary</span> Experiences
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Award-winning interior design studio specializing in creating beautiful, functional spaces that reflect your unique style and needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
                <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300" style={{ backgroundColor: '#5C31CE' }}>
                  Explore Our Work
                </button>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-md font-medium text-lg transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Design Visualization Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Beautiful <span className="text-yellow-400">Design</span> Visualization</h2>
              <p className="text-gray-600 mb-6">
                 Our design visualization technology allows you to explore  making it easier to visualize the end result and make informed decisions.
              </p>
              <ul className="space-y-3">
                {['Realistic lighting and materials', 'Accurate spatial representation', 'Virtual walkthroughs', 'Real-time modifications'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-purple-700 mr-2" style={{ color: '#5C31CE' }}>✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <button className="mt-8 font-medium flex items-center group" style={{ color: '#5C31CE' }}>
                  Learn more about our process
                  <img src="https://cdn-icons-png.freepik.com/512/399/399640.png" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" alt="Arrow icon" />
                </button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 h-80"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <DesignShowcase />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our <span className="text-yellow-400">Services</span></h2>
            <p className="text-gray-600">
              We offer a comprehensive range of interior design services tailored to meet your specific needs and vision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border-t-4"
                style={{ borderColor: '#5C31CE' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300" style={{ backgroundColor: '#5C31CE' }}>
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured <span className="text-yellow-400">Projects</span></h2>
            <p className="text-gray-600">
              Explore our portfolio of carefully crafted interior spaces that combine functionality, aesthetics, and personal expression.
            </p>
          </motion.div>
          
          {/* Changed to grid with 2 columns for larger images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FeaturedProject 
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/all-projects" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-8 py-3 rounded-md font-medium transition-all duration-300" style={{ borderColor: '#5C31CE', color: '#5C31CE' }}>
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Client <span className="text-yellow-400">Testimonials</span></h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Testimonial 
                  text={testimonial.text}
                  author={testimonial.author}
                  position={testimonial.position}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5C31CE' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's collaborate to create the perfect interior that reflects your style, meets your needs, and exceeds your expectations.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-8 py-3 rounded-md font-medium text-lg transition-all duration-300">
                Schedule a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}