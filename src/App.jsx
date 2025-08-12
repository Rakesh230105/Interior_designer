import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AllProjects from './pages/AllProjects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminContacts from './pages/AdminContact'; // Import the new component
function App() {
const [user, setUser] = useState(null);
// Check if user is logged in on component mount
useEffect(() => {
const storedUser = localStorage.getItem('user');
if (storedUser) {
setUser(JSON.parse(storedUser));
 }
 }, []);
// Protected route component
const ProtectedRoute = ({ children, requiresAdmin }) => {
if (!user) {
return <Navigate to="/login" />;
 }
if (requiresAdmin && !user.isAdmin) {
return <Navigate to="/" />;
 }
return children;
 };
const handleLogout = () => {
localStorage.removeItem('user');
setUser(null);
 };
return (
<Router>
<div className="flex flex-col min-h-screen">
<Navbar user={user} onLogout={handleLogout} />
<main className="flex-grow">
<Routes>
{/* Redirect root path to home page */}
<Route
path="/"
element={<Navigate to="/home" />}
/>
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/projects" element={<AllProjects />} />
<Route path="/contact" element={<Contact />} />
<Route path="/blog" element={<Blog />} />
<Route path="/login" element={<Login setUser={setUser} />} />
<Route
path="/admin/dashboard"
element={
<ProtectedRoute requiresAdmin={true}>
<AdminDashboard />
</ProtectedRoute>
}
/>
{/* Add the new route for contact management */}
<Route
path="/admin/contacts"
element={
<ProtectedRoute requiresAdmin={true}>
<AdminContacts />
</ProtectedRoute>
}
/>
</Routes>
</main>
<Footer />
</div>
</Router>
 );
}
export default App;