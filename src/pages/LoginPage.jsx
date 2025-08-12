import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login({ setUser }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost/interior/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
          isAdmin: isAdmin ? '1' : '0',
        }),
      });

      const data = await response.json();
      console.log("Login response:", data); // Add this for debugging

      if (data.success) {
        // Create user object
        const userObject = {
          username: data.username,
          isAdmin: data.isAdmin === "1" || data.isAdmin === 1,
          token: data.token
        };
        
        // Save user info in localStorage
        localStorage.setItem('user', JSON.stringify(userObject));
        
        // Update app state
        setUser(userObject);
        
        // Redirect based on user type - Admin goes to dashboard, User goes to home
        if (data.isAdmin === "1" || data.isAdmin === 1) {
          navigate('/admin/dashboard');
        } else {
          navigate('/home');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="py-8 px-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              {isAdmin ? 'Admin Login' : 'User Login'}
            </h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-purple-700"
                    checked={isAdmin}
                    onChange={() => setIsAdmin(!isAdmin)}
                    style={{ accentColor: '#5C31CE' }}
                  />
                  <span className="ml-2 text-gray-700">Login as Admin</span>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-colors"
                style={{ backgroundColor: '#5C31CE' }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}