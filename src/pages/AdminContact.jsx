import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Check if user is admin on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    
    const user = JSON.parse(storedUser);
    if (!user.isAdmin) {
      navigate('/home');
      return;
    }
    
    fetchContacts();
  }, [navigate]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost/interior/get_contacts.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.success) {
        setContacts(data.contacts);
      } else {
        setError(data.message || 'Failed to fetch contacts');
      }
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError(err.message || 'Error fetching contact data');
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id, newStatus) => {
    try {
      const response = await fetch('http://localhost/interior/update_contact_status.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        },
        body: JSON.stringify({
          contact_id: id,
          status: newStatus
        })
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.success) {
        // Update contact in the local state
        setContacts(contacts.map(contact => 
          contact.id === id ? { ...contact, status: newStatus } : contact
        ));
        
        // Update selected contact if it's the one being modified
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact({ ...selectedContact, status: newStatus });
        }
      } else {
        throw new Error(data.message || 'Failed to update contact status');
      }
    } catch (err) {
      console.error('Error updating contact status:', err);
      alert(err.message || 'Error updating contact status');
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) {
      return;
    }
    
    try {
      const response = await fetch('http://localhost/interior/delete_contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
        },
        body: JSON.stringify({
          contact_id: id
        })
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.success) {
        // Remove contact from the local state
        setContacts(contacts.filter(contact => contact.id !== id));
        
        // Clear selected contact if it was the one deleted
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact(null);
        }
      } else {
        throw new Error(data.message || 'Failed to delete contact');
      }
    } catch (err) {
      console.error('Error deleting contact:', err);
      alert(err.message || 'Error deleting contact');
    }
  };

  // Filter contacts based on status and search term
  const filteredContacts = contacts.filter(contact => {
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contact.message && contact.message.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesStatus && matchesSearch;
  });

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleString();
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Management</h1>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5a1 1 0 112 0v-6a1 1 0 11-2 0v6zm1-9a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contacts List */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Contacts</h2>
              
              {/* Search and Filter */}
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
                
                <button 
                  onClick={fetchContacts}
                  className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-colors"
                  style={{ backgroundColor: '#5C31CE' }}
                >
                  Refresh
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
              {loading ? (
                <div className="p-4 text-center text-gray-500">Loading contacts...</div>
              ) : filteredContacts.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No contacts found</div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {filteredContacts.map(contact => (
                    <li 
                      key={contact.id}
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                        selectedContact && selectedContact.id === contact.id ? 'bg-purple-50' : ''
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-gray-800">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{contact.email}</p>
                          <p className="text-xs text-gray-500 mt-1">{formatDate(contact.created_at)}</p>
                        </div>
                        <div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(contact.status)}`}>
                            {contact.status ? contact.status.replace('_', ' ') : 'new'}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {/* Contact Details */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            {selectedContact ? (
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">{selectedContact.name}</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => deleteContact(selectedContact.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-gray-800">{selectedContact.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="text-gray-800">{selectedContact.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Service Interested In</p>
                    <p className="text-gray-800">{selectedContact.service || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Submitted On</p>
                    <p className="text-gray-800">{formatDate(selectedContact.created_at)}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-500 mb-2">Message</p>
                  <div className="p-4 bg-gray-50 rounded-md">
                    <p className="text-gray-800 whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-2">Status</p>
                  <div className="flex flex-wrap gap-2">
                    {['new', 'in_progress', 'completed', 'archived'].map(status => (
                      <button
                        key={status}
                        onClick={() => updateContactStatus(selectedContact.id, status)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          selectedContact.status === status 
                            ? 'bg-purple-700 text-white' 
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                        style={{ 
                          backgroundColor: selectedContact.status === status ? '#5C31CE' : undefined 
                        }}
                      >
                        {status.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center p-10">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No contact selected</h3>
                <p className="mt-1 text-sm text-gray-500">Select a contact from the list to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}