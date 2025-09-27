import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Edit2, Save, X, Camera } from 'lucide-react';

const avatars = ['🧑‍💼', '👨‍🎓', '👩‍🎓', '🧑‍⚕️', '👨‍⚕️', '👩‍⚕️', '🧑‍💻', '👨‍💻', '👩‍💻', '🧑‍🎨', '👨‍🎨', '👩‍🎨'];

const Profile = () => {
  const { user, updateUser, loading } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    mobile: user?.mobile || '',
    funnyName: user?.funnyName || '',
    avatar: user?.avatar || '🧑‍💼'
  });
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || '🧑‍💼');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      const updatedData = {
        ...formData,
        avatar: selectedAvatar
      };
      
      await updateUser(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      mobile: user?.mobile || '',
      funnyName: user?.funnyName || '',
      avatar: user?.avatar || '🧑‍💼'
    });
    setSelectedAvatar(user?.avatar || '🧑‍💼');
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please login to view your profile</p>
          <button
            onClick={() => navigate('/auth')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-8 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {selectedAvatar}
                  </div>
                  {isEditing && (
                    <button className="absolute -bottom-1 -right-1 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="text-white">
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-green-100 capitalize">{user.role}</p>
                  {user.funnyName && (
                    <p className="text-green-200 text-sm">"{user.funnyName}"</p>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      disabled={loading}
                      className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center disabled:opacity-50"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Avatar Selection */}
          {isEditing && (
            <div className="px-6 py-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Avatar</h3>
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
                {avatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAvatar(avatar)}
                    className={`w-12 h-12 rounded-xl text-2xl transition-all duration-200 ${
                      selectedAvatar === avatar
                        ? 'bg-green-100 border-2 border-green-500 shadow-lg scale-110'
                        : 'bg-gray-100 border-2 border-gray-200 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form Section */}
          <div className="px-6 py-6 space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <User className="w-4 h-4 mr-2" />
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your full name"
                />
              ) : (
                <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                  {user.name || 'Not provided'}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Mail className="w-4 h-4 mr-2" />
                Email Address
              </label>
              <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                {user.email}
              </div>
              <p className="text-xs text-gray-500">Email cannot be changed</p>
            </div>

            {/* Funny Name Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <User className="w-4 h-4 mr-2" />
                Funny Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="funnyName"
                  value={formData.funnyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your funny name (optional)"
                />
              ) : (
                <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                  {user.funnyName || 'Not provided'}
                </div>
              )}
            </div>

            {/* Mobile Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Phone className="w-4 h-4 mr-2" />
                Mobile Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your mobile number"
                />
              ) : (
                <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                  {user.mobile || 'Not provided'}
                </div>
              )}
            </div>

            {/* Role Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <User className="w-4 h-4 mr-2" />
                Role
              </label>
              <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 capitalize">
                {user.role}
              </div>
              <p className="text-xs text-gray-500">Role cannot be changed</p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <button
              onClick={() => navigate('/')}
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;