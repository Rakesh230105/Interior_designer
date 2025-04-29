import { motion } from 'framer-motion';

export default function About() {
  const team = [
    { name: "Ageer Nirvignya", position: "Lead Designer", image: "https://nirvignyageer.netlify.app/images/gana.jpg" },
    { name: "Bhuvan Tadakamadla", position: "Interior Architect", image: "https://media.licdn.com/dms/image/v2/D5603AQGKwaSVwgoAiQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727278608756?e=1749686400&v=beta&t=AzpaWlRZnDZaa1duTuptqQNnCfNbNtsVjeDPQqvdH8w" },
    { name: "Mohammed Mudabbir Pasha", position: "Color Specialist", image: "https://media.licdn.com/dms/image/v2/D5603AQFY2fsEfLc8SA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719414876635?e=1750291200&v=beta&t=G01r8RAJkM5B8pMvIxUm3pYWTHGewAJSJn0Iq68DUOQ" },
    { name: "Siddeshwar Reddy", position: "Project Manager", image: "https://media.licdn.com/dms/image/v2/D4E03AQHecSdbFQ7CQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718815620182?e=1750291200&v=beta&t=FjPV45oDhv6SqimbxgdCTEea57UFjvTRzLwiY4ZGR8k" }
  ];

  const values = [
    { title: "Innovation", icon: "💡", description: "Pushing boundaries with fresh, forward-thinking design approaches" },
    { title: "Quality", icon: "✨", description: "Uncompromising attention to detail in every project we undertake" },
    { title: "Collaboration", icon: "🤝", description: "Working closely with clients to bring their vision to life" },
    { title: "Sustainability", icon: "🌿", description: "Eco-conscious design choices for a better tomorrow" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-#9370DB" style={{ backgroundColor: '#9370DB' }}>
        <img 
          src="https://ksrarchitects.com/wp-content/uploads/2022/08/@KSR-Architecture-Interior-Designers-STJW-Villa-2-scaled.jpg" 
          alt="About Us Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-yellow-300">InteriorVision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Creating beautiful, functional spaces that reflect your unique personality and lifestyle since 2010.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our <span className="text-yellow-400">Story</span></h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 by Rakesh Mulpuri, InteriorVision began as a small design consultancy with a passion for transforming ordinary spaces into extraordinary experiences.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown into a full-service interior design studio with a portfolio of residential and commercial projects across the country, each reflecting our commitment to thoughtful.
              </p>
              <p className="text-gray-600 mb-4">
                Our approach combines aesthetic excellence with practical functionality, creating spaces that are not only beautiful but also enhance the way people live.
              </p>
              <p className="text-gray-600 mb-4">
              n architecture studio is a core component of architecture education, classroom where students develop design skills.
                <br></br>
              </p>
              
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://www.shutterstock.com/image-photo/architectural-office-desk-background-construction-600nw-383356447.jpg" 
                alt="Our Studio" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our <span className="text-yellow-400">Values</span></h2>
            <p className="text-gray-600">
              These core principles guide our approach to every project and client relationship.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our <span className="text-yellow-400">Team</span></h2>
            <p className="text-gray-600">
              Our talented team of designers, architects, and project managers bring diverse expertise and a shared passion for exceptional design.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 relative overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-48 object-cover mx-auto rounded-full border-4 border-purple-100"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-purple-700" style={{ color: '#5C31CE' }}>{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}