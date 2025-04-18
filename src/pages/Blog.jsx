import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Blog Post Card Component
const BlogPostCard = ({ image, category, title, excerpt, date, author, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: '#5C31CE', color: 'white' }}>
            {category}
          </span>
          <span className="text-xs text-gray-500 ml-3">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-700 transition-colors duration-300" style={{ color: '#1A1A2E' }}>
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2">
              <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-gray-700">{author.name}</span>
          </div>
          <Link 
            to={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`} 
            onClick={() => window.scrollTo(0, 0)}
            className="text-sm font-medium flex items-center group" 
            style={{ color: '#5C31CE' }}
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Featured Blog Post Component
const FeaturedBlogPost = ({ post }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative h-96">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex items-center mb-3">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-400 text-gray-900">
              {post.category}
            </span>
            <span className="text-xs text-gray-200 ml-3">{post.date}</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">{post.title}</h2>
          <p className="text-gray-200 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden mr-3">
                <img src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-white">{post.author.name}</span>
            </div>
            <Link 
              to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => window.scrollTo(0, 0)} 
              className="text-sm font-medium flex items-center group text-white"
            >
              Read Full Article
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Newsletter Subscription Component
const NewsletterSubscription = () => {
  return (
    <motion.div 
      className="bg-gray-50 p-8 rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-3">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 mb-6">Stay updated with the latest interior design trends, tips, and inspirations.</p>
      <form className="flex flex-wrap gap-2">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button 
          type="submit" 
          className="px-4 py-2 rounded-md text-white font-medium transition-colors duration-300"
          style={{ backgroundColor: '#5C31CE' }}
        >
          Subscribe
        </button>
      </form>
    </motion.div>
  );
};

// Blog Categories Component
const BlogCategories = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <motion.div 
      className="mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button 
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === 'all' ? 'text-white' : 'text-gray-700 bg-gray-100 hover:bg-gray-200'}`}
          style={activeCategory === 'all' ? { backgroundColor: '#5C31CE' } : {}}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button 
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category.toLowerCase() ? 'text-white' : 'text-gray-700 bg-gray-100 hover:bg-gray-200'}`}
            style={activeCategory === category.toLowerCase() ? { backgroundColor: '#5C31CE' } : {}}
            onClick={() => setActiveCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Blog post data with individual image sources
  const featuredPost = {
    image: "https://imgmediagumlet.lbb.in/media/2025/01/677e5a647b7f1d2816ee14cc_1736333924791.jpg",
    title: "2025 Interior Design Trends That Will Transform Your Space",
    category: "Trends",
    date: "April 15, 2025",
    excerpt: "Discover the latest interior design trends that are reshaping homes and workspaces in 2025. From sustainable materials to smart technology integration, we explore how these trends can elevate your space.",
    author: {
      name: "Alexandra Rivera",
      image: "/images/authors/alexandra-rivera.jpg"
    }
  };
  
  const blogPosts = [
    {
      image: "https://homedesigns.ai/go/wp-content/uploads/2024/05/minimalist-living-room.png",
      title: "The Art of Minimalist Living",
      category: "Minimalism",
      date: "April 10, 2025",
      excerpt: "Explore how minimalist design principles can create spaces that are both beautiful and functional. Learn practical tips for decluttering and embracing minimalist aesthetics in your home.",
      author: {
        name: "David Chen",
        image: "/images/authors/david-chen.jpg"
      }
    },
    {
      image: "https://www.technostructacademy.com/blog/wp-content/uploads/2024/09/Color-Psychology-in-Interior-Design.webp",
      title: "Color Psychology in Interior Design",
      category: "Color Theory",
      date: "April 5, 2025",
      excerpt: "Understanding how different colors affect mood and behavior is essential for creating spaces that evoke the right emotions. Dive into the fascinating world of color psychology.",
      author: {
        name: "Sarah Johnson",
        image: "/images/authors/sarah-johnson.jpg"
      }
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Hm9BNHqhsG4qVagwjhMK0q4166xM6io1mw&s",
      title: "Sustainable Materials for Eco-Friendly Homes",
      category: "Sustainability",
      date: "March 28, 2025",
      excerpt: "Discover the latest eco-friendly materials that are revolutionizing interior design. From recycled glass countertops to bamboo flooring, learn how to make sustainable choices.",
      author: {
        name: "Marcus Green",
        image: "/images/authors/marcus-green.jpg"
      }
    },
    {
      image: "https://studiokook.com/cdn/shop/articles/Studio-Kook-Blog-Banner.jpg?v=1707893118",
      title: "Smart Solutions for Small Spaces",
      category: "Small Spaces",
      date: "March 22, 2025",
      excerpt: "Living in a compact apartment doesn't mean sacrificing style or functionality. Explore creative design solutions that maximize every square foot of your space.",
      author: {
        name: "Emma Wright",
        image: "/images/authors/emma-wright.jpg"
      }
    },
    {
      image: "https://alacritys.in/wp-content/uploads/2025/03/1.-Christmas-Home-Lighting-Blog-Feature-Image-3.jpg",
      title: "The Impact of Lighting in Interior Design",
      category: "Lighting",
      date: "March 15, 2025",
      excerpt: "Proper lighting can transform a space from ordinary to extraordinary. Learn about layered lighting techniques and how to create the perfect ambiance for any room.",
      author: {
        name: "James Wilson",
        image: "/images/authors/james-wilson.jpg"
      }
    },
    {
      image: "https://i0.wp.com/nileshsawant.com/wp-content/uploads/2023/07/0Intro.jpeg?resize=889%2C1024&ssl=1",
      title: "Furniture Arrangement: The Basics and Beyond",
      category: "Furniture",
      date: "March 8, 2025",
      excerpt: "Mastering the art of furniture arrangement can dramatically improve the flow and functionality of your space. Discover key principles and creative approaches.",
      author: {
        name: "Olivia Lopez",
        image: "/images/authors/olivia-lopez.jpg"
      }
    }
  ];
  
  const categories = ["Trends", "Minimalism", "Color Theory", "Sustainability", "Small Spaces", "Lighting", "Furniture"];
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-800" style={{ backgroundColor: '#9370DB' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://cdn.prod.website-files.com/6334a8d89862a1cc15eae9e1/6449b3d75375436f262ddf3f_78e30ffd.png" 
            alt="Interior Design Blog" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              InteriorVision Blog
            </h1>
            <p className="text-xl text-gray-200 mb-0">
              Inspiration, ideas, and expert advice for creating beautiful living spaces
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Post Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Article</h2>
          <FeaturedBlogPost post={featuredPost} />
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <BlogCategories 
                categories={categories} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <BlogPostCard 
                    key={index}
                    image={post.image}
                    category={post.category}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    author={post.author}
                    index={index}
                  />
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">No articles found in this category. Try selecting a different category.</p>
                </div>
              )}
              
              <div className="mt-12 flex justify-center">
                <button 
                  className="px-6 py-2 border-2 rounded-md font-medium transition-colors duration-300"
                  style={{ borderColor: '#5C31CE', color: '#5C31CE' }}
                >
                  Load More Articles
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              {/* Search Widget */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Popular Posts Widget */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKwtwFnCqQHCoJ4olBPIxfQDDdZK-mIZ-CQ&s" 
                      alt="Popular Post" 
                      className="w-20 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                        <Link to="/blog/biophilic-design-bringing-nature-indoors" onClick={() => window.scrollTo(0, 0)}>
                          Biophilic Design: Bringing Nature Indoors
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">March 1, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img 
                      src="https://blog.growup.green/hubfs/Let%20nature%20inside%20%20biophilic%20design%E2%80%99s%20case%20for%20happiness%20and%20health.png" 
                      alt="Popular Post" 
                      className="w-20 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                        <Link to="/blog/luxury-design-on-a-budget" onClick={() => window.scrollTo(0, 0)}>
                          Luxury Design on a Budget: Designer Tips
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">February 20, 2025</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img 
                      src="https://shabbyfufu.com/wp-content/uploads/2025/03/The_Art_Decorating_How_Statement_Pieces_Transform_Houzz_DecoZen.jpg" 
                      alt="Popular Post" 
                      className="w-20 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 hover:text-purple-700 transition-colors duration-300 line-clamp-2">
                        <Link to="/blog/statement-pieces-that-transform-rooms" onClick={() => window.scrollTo(0, 0)}>
                          Statement Pieces That Transform Rooms
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500">February 14, 2025</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Newsletter Subscription */}
              <NewsletterSubscription />
              
              {/* Instagram Feed */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us on Instagram</h3>
                <div className="grid grid-cols-3 gap-2">
                  <img src="https://img.freepik.com/premium-psd/instagram-application-logo_23-2151544088.jpg" />
                  <img src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?semt=ais_hybrid&w=740" />
                  <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" />
                  
                  
                </div>
                <a 
                  href="https://instagram.com/interiorvision" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium flex items-center justify-center group"
                  style={{ color: '#5C31CE' }}
                >
                  @interiorvision
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16" style={{ backgroundColor: '#5C31CE' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Need Professional Interior Design Help?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Turn inspiration into reality with our expert design services.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-8 py-3 rounded-md font-medium text-lg transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}