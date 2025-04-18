import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'hospitality', name: 'Hospitality' },
    { id: 'retail', name: 'Retail' }
  ];

  // Project data
  useEffect(() => {
    // In a real app, this might be an API call
    const projectData = [
      { 
        id: 1, 
        title: "Modern Apartment Renovation", 
        category: "residential", 
        location: "New York, NY",
        year: "2023",
        image: "https://images.adsttc.com/media/images/5be3/3bc4/08a5/e549/e300/031a/newsletter/42449.jpg?1541618579",
        rating: 4.8
      },
      { 
        id: 2, 
        title: "Tech Startup Office", 
        category: "commercial", 
        location: "San Francisco, CA",
        year: "2023",
        image: "https://img.freepik.com/free-photo/full-shot-students-studying-indoors_23-2149647036.jpg?semt=ais_hybrid&w=740",
        rating: 4.9
      },
      { 
        id: 3, 
        title: "Boutique Hotel Lobby", 
        category: "hospitality", 
        location: "Miami, FL",
        year: "2022",
        image: "https://media.istockphoto.com/id/1369030854/photo/3d-render-of-luxury-hotel-lobby-and-reception.jpg?s=612x612&w=0&k=20&c=obw_JfMCUfb26jO0JkYSiXOkc8Tli9vPsGmw3fLgjIc=",
        rating: 4.7
      },
      { 
        id: 4, 
        title: "Luxury Villa", 
        category: "residential", 
        location: "Malibu, CA",
        year: "2023",
        image: "https://www.laurameroni.com/sites/default/files/styles/16_9_large/public/blocco_a/laurameroni_modern-villa-interior-architecture_01_0.jpg.webp?itok=dQ6PpB4m",
        rating: 5.0
      },
      { 
        id: 5, 
        title: "Fashion Retail Store", 
        category: "retail", 
        location: "Chicago, IL",
        year: "2022",
        image: "https://i.pinimg.com/736x/4c/74/ef/4c74efa3c255b74c40633f44525e9cd1.jpg",
        rating: 4.6
      },
      { 
        id: 6, 
        title: "Urban Loft Conversion", 
        category: "residential", 
        location: "Boston, MA",
        year: "2022",
        image: "https://www.constructionplacements.com/wp-content/uploads/2024/01/Luxury-Loft-Living-in-London-How-to-Create-Your-Dream-Space.jpg",
        rating: 4.8
      },
      { 
        id: 7, 
        title: "Beachfront Restaurant", 
        category: "hospitality", 
        location: "San Diego, CA",
        year: "2023",
        image: "https://cdn.shopify.com/s/files/1/0104/1524/3330/files/098-DS-Scorpios-_2.jpg?v=1623919507",
        rating: 4.9
      },
      { 
        id: 8, 
        title: "Corporate Headquarters", 
        category: "commercial", 
        location: "Seattle, WA",
        year: "2022",
        image: "https://officebanao.com/wp-content/uploads/2023/12/modern-interior-open-office-workspace.jpg",
        rating: 4.7
      },
      { 
        id: 9, 
        title: "Modern Farmhouse", 
        category: "residential", 
        location: "Portland, OR",
        year: "2022",
        image: "https://cdn.prod.website-files.com/602c75ed03e1145b5fac2aed/642aeb14be3a5fc9960902e6_AdobeStock_427117237.jpeg",
        rating: 4.5
      },
      { 
        id: 10, 
        title: "Boutique Clothing Store", 
        category: "retail", 
        location: "Austin, TX",
        year: "2023",
        image: "https://www.shutterstock.com/image-photo/luxury-fashionable-brand-new-interior-600nw-191362898.jpg",
        rating: 4.8
      },
      { 
        id: 11, 
        title: "Rooftop Bar", 
        category: "hospitality", 
        location: "Denver, CO",
        year: "2023",
        image: "https://sdg-migration-id.s3.amazonaws.com/Interior-Design-Basile-Studio-BornRaised-San-Diego-outdoor-16.jpg",
        rating: 4.9
      },
      { 
        id: 12, 
        title: "Coworking Space", 
        category: "commercial", 
        location: "Nashville, TN",
        year: "2022",
        image: "https://officebanao.com/wp-content/uploads/2024/08/modern-interior-design-office-1-1024x683.jpg",
        rating: 4.6
      },
    ];
    
    setProjects(projectData);
    setFilteredProjects(projectData);
  }, []);

  // Handle filter changes
  const handleFilterChange = (category) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProjects(
        searchQuery 
          ? projects.filter(project => 
              project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              project.location.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : projects
      );
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.category === category && 
          (searchQuery 
            ? project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              project.location.toLowerCase().includes(searchQuery.toLowerCase())
            : true
          )
        )
      );
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (activeFilter === 'all') {
      setFilteredProjects(
        query 
          ? projects.filter(project => 
              project.title.toLowerCase().includes(query.toLowerCase()) ||
              project.location.toLowerCase().includes(query.toLowerCase())
            )
          : projects
      );
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.category === activeFilter && 
          (query 
            ? project.title.toLowerCase().includes(query.toLowerCase()) ||
              project.location.toLowerCase().includes(query.toLowerCase())
            : true
          )
        )
      );
    }
  };

  // Function to render star rating
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
              00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
              1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
              1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        {halfStar && (
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
              00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
              1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
              1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
              00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
              1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
              1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        
        <span className="ml-1 text-xs font-medium text-gray-100">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-purple-800" style={{ backgroundColor: '#9370DB' }}>
        <img 
          src="https://media.istockphoto.com/id/635732164/photo/realize-your-interior-dream-mixed-media.jpg?s=612x612&w=0&k=20&c=y9ZeXix7TgOqgsXqlVm0TTjBH57wSIMtAF7EqYAiWOg=" 
          alt="All Projects Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Complete <span className="text-yellow-300">Project Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Explore our full collection of interior design projects spanning residential, commercial, hospitality, and retail spaces.
          </motion.p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Search and Filter Controls - Updated Layout */}
          <div className="mb-12">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Search Bar */}
                <div className="lg:col-span-5">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search projects by name or location..." 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                    <svg className="h-5 w-5 text-gray-400 absolute right-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Divider for small screens */}
                <div className="block lg:hidden border-b border-gray-200 w-full my-2"></div>
                
                {/* Category Filters */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
                    {categories.map((category) => (
                      <button 
                        key={category.id}
                        onClick={() => handleFilterChange(category.id)}
                        className={`px-4 py-2 rounded-md transition-all duration-300 ${
                          activeFilter === category.id 
                            ? 'bg-purple-700 text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={activeFilter === category.id ? { backgroundColor: '#5C31CE' } : {}}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/projects/${project.id}`} className="block">
                    <div className="relative overflow-hidden h-64">
                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3 z-10 bg-black/70 px-3 py-1 rounded-full">
                        {renderStarRating(project.rating)}
                      </div>
                      
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <span className="inline-block px-3 py-1 text-xs bg-purple-700 text-white rounded-full mb-2">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <p className="text-gray-200 flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location} · {project.year}  
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-xl font-medium text-gray-700">No projects found</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                <button 
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchQuery('');
                    setFilteredProjects(projects);
                  }}
                  className="mt-4 px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition-colors"
                  style={{ backgroundColor: '#5C31CE' }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination - Optional for future enhancement */}
          {filteredProjects.length > 0 && (
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center space-x-1">
                <button className="px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-md bg-purple-700 text-white" style={{ backgroundColor: '#5C31CE' }}>1</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">2</button>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">3</button>
                <span className="px-4 py-2 text-gray-500">...</span>
                <button className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">8</button>
                <button className="px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Bring Your Vision to Life?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Let's collaborate on your next interior design project. Our team is ready to transform your space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition-colors"
              style={{ backgroundColor: '#5C31CE' }}
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}