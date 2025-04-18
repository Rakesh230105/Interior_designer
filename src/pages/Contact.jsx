import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // Office locations
  const officeLocations = [
    {
      city: 'Hyderabad',
      address: 'Jubliee Hills',
      zipCode: 'Hyderabad, TS 10001',
      phone: '+91 9848254165',
      email: 'hyd@interiorvision.com'
    },
    {
      city: 'Chennai',
      address: 'Boat Club',
      zipCode: 'Chennai, TN 90210',
      phone: '91 9848254166',
      email: 'chn@interiorvision.com'
    },
    {
      city: 'Mumbai',
      address: 'Juhu',
      zipCode: 'Mumbai, MH 60611',
      phone: '+91 9848254167',
      email: 'mum@interiorvision.com'
    }
  ];
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-purple-800" style={{ backgroundColor: '#9370DB' }}>
        <img 
          src="https://www.elegantinterior.info/wp-content/uploads/2022/07/13-1030x610.jpeg" 
          alt="Contact Us Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In <span className="text-yellow-300">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Have a project in mind? Reach out to our team of design experts to bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below, and our team will get back to you within 24 hours to discuss your project.
                </p>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-md mb-6"
                  >
                    <p className="font-medium">Thank you for contacting us!</p>
                    <p>We've received your message and will respond shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                          Project Type *
                        </label>
                        <select 
                          id="projectType" 
                          name="projectType" 
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        >
                          <option value="">Select Project Type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="retail">Retail</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full px-6 py-4 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition-colors flex items-center justify-center"
                      style={{ backgroundColor: '#5C31CE' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-5">
              <div className="bg-gray-50 rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                
                <div className="space-y-8">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <svg className="h-5 w-5 text-purple-700" style={{ color: '#5C31CE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{office.city}</h3>
                        <p className="text-gray-600 mt-1">{office.address}</p>
                        <p className="text-gray-600">{office.zipCode}</p>
                        <div className="mt-3 space-y-2">
                          <p className="flex items-center text-gray-600">
                            <svg className="h-4 w-4 mr-2 text-purple-700" style={{ color: '#5C31CE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {office.phone}
                          </p>
                          <p className="flex items-center text-gray-600">
                            <svg className="h-4 w-4 mr-2 text-purple-700" style={{ color: '#5C31CE' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {office.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Headquarters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our main office is located in the heart of New York City's design district.
              Feel free to stop by during business hours.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://architizer-prod.imgix.net/media/mediadata/uploads/152891046604305_Kazakhstan_Pavilion_interior.jpg?fit=max&w=1680&q=60&auto=format&auto=compress&cs=strip" 
              alt="Office Location Map" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our interior design services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What does the initial consultation involve?",
                  answer: "Our initial consultation is a comprehensive discussion about your project goals, aesthetic preferences, timeline, and budget. We'll assess your space, take measurements, and discuss potential design directions."
                },
                {
                  question: "How much does an interior design project typically cost?",
                  answer: "Project costs vary widely depending on scope, size, materials, and furnishings. During our initial consultation, we'll provide a detailed estimate based on your specific needs and budget constraints."
                },
                {
                  question: "How long does a typical interior design project take?",
                  answer: "Project timelines depend on scope and complexity. A room refresh might take 4-8 weeks, while complete renovations can range from 3-6 months or more. We'll provide a detailed timeline during the planning phase."
                },
                {
                  question: "Do you work with clients remotely?",
                  answer: "Yes! We offer virtual design services for clients outside our office locations. Through video consultations, digital mood boards, and 3D renderings, we can create beautiful spaces regardless of your location."
                },
                {
                  question: "What's your design process like?",
                  answer: "Our process includes: 1) Initial consultation and discovery, 2) Concept development with mood boards, 3) Design proposal with detailed plans and renderings, 4) Procurement and project management, and 5) Installation and styling."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-purple-800" style={{ backgroundColor: '#9370DB' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto mb-8"
          >
            Let our team of expert designers help bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button 
              className="px-8 py-4 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors"
            >
              Schedule a Call
            </button>
            <button 
              className="px-8 py-4 bg-white text-purple-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
              style={{ color: '#5C31CE' }}
            >
              Browse Our Portfolio
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}