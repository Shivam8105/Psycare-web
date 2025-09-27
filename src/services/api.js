// API service for PsyCare backend communication
const API_BASE_URL = 'http://localhost:8080/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Helper method to get auth headers
  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    };
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async register(userData) {
    return this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }

    return response;
  }

  async logout() {
    try {
      await this.request('/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      // Continue with local logout even if server request fails
      console.warn('Server logout failed:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  async getCurrentUser() {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (!token || !savedUser) return null;

    try {
      // For now, return the saved user since we don't have a /me endpoint
      return { user: JSON.parse(savedUser) };
    } catch (error) {
      // If parsing fails, clear storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return null;
    }
  }

  async updateProfile(userData) {
    const response = await this.request('/users/update', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });

    // Update local storage with new user data
    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
    }

    return response;
  }

  // Chat methods
  async sendChatMessage(chatData) {
    return this.request('/chat', {
      method: 'POST',
      body: JSON.stringify(chatData),
    });
  }

  // Appointment methods
  async getAppointments() {
    return this.request('/appointments');
  }

  async bookAppointment(appointmentData) {
    return this.request('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    });
  }

  // Wellness methods
  async getWellnessResources() {
    return this.request('/wellness');
  }

  // Test methods
  async getTests() {
    return this.request('/tests');
  }

  async submitTest(testData) {
    return this.request('/tests', {
      method: 'POST',
      body: JSON.stringify(testData),
    });
  }

  // Forum methods
  async getForumPosts() {
    return this.request('/forum');
  }

  async createForumPost(postData) {
    return this.request('/forum', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }
}

export default new ApiService();