const API_BASE_URL = 'http://localhost:5237/api/Auth';

const authService = {
  // Register a new user
  register: async (fullName, email, password, gender = 'Other') => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          gender,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Login user
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      
      // Store JWT token
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userEmail', email);
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  // Get current user profile
  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        return null;
      }

      const response = await fetch(`${API_BASE_URL}/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid
          authService.logout();
          return null;
        }
        throw new Error('Failed to fetch user profile');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
  },

  // Get stored token
  getToken: () => {
    return localStorage.getItem('authToken');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },

  // Get user email from storage
  getUserEmail: () => {
    return localStorage.getItem('userEmail');
  },
};

export default authService;
