import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Form Input Component
const FormInput = ({ label, type, placeholder, name, value, onChange, required }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-32"
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      )}
    </div>
  );
};

// Contact Information Card
const ContactInfoCard = ({ icon, title, details }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
      <div className="text-purple-700 mr-4 text-2xl" style={{ color: '#5C31CE' }}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{details}</p>
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Send data to PHP backend
      // Change this line in the handleSubmit function
const response = await fetch('http://localhost/interior/save_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      // Check if the response is okay
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', errorText);
        
        // Try to parse error as JSON, if possible
        try {
          const errorJson = JSON.parse(errorText);
          throw new Error(errorJson.message || `Server error: ${response.status}`);
        } catch (jsonError) {
          throw new Error(`Server error: ${response.status}. ${errorText || 'No error details available.'}`);
        }
      }
      
      // Parse the JSON response
      const result = await response.json();
      
      console.log('Form submission success:', result);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Show success message
      setSubmitted(true);
      
      // Scroll back to top to show the success message
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'Failed to submit the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: '📞', title: 'Phone', details: '+1 (555) 123-4567' },
    { icon: '✉️', title: 'Email', details: 'info@interiorvision.com' },
    { icon: '📍', title: 'Office', details: '123 Design Street, Creative District, CA 90210' },
    { icon: '🕒', title: 'Hours', details: 'Monday - Friday: 9am - 6pm' }
  ];

  // Rest of the component remains unchanged...
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center">
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: '#9370DB' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              We'd love to hear about your project and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {submitted && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-8 mx-auto max-w-4xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm leading-5 text-green-700">
                Thank you for your message! We'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-8 mx-auto max-w-4xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0v-6a1 1 0 11-2 0v6zm1-9a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm leading-5 text-red-700">
                {submitError}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Full Name"
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={true}
                  />
                  
                  <FormInput 
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Phone Number"
                    type="tel"
                    placeholder="Your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required={false}
                  />
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Design</option>
                      <option value="furniture">Furniture Selection</option>
                      <option value="color">Color Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <FormInput 
                  label="Your Message"
                  type="textarea"
                  placeholder="Tell us about your project and any specific requirements..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required={true}
                />
                
                <button 
                  type="submit" 
                  className={`bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  style={{ backgroundColor: '#5C31CE' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfoCard 
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    details={info.details}
                  />
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'pinterest', 'linkedin'].map((platform, index) => (
                    <a 
                      key={index}
                      href={`#${platform}`} 
                      className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-purple-700 hover:text-white transition-all duration-300"
                      style={{ backgroundColor: index === 0 ? '#5C31CE' : undefined, color: index === 0 ? 'white' : undefined }}
                    >
                      {platform.charAt(0).toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The rest of your component remains the same... */}
    </div>
  );
}