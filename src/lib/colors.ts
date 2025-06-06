
// Global color configuration for the FertileCare application
export const colors = {
  // Primary brand colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe', 
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main blue
    600: '#2563eb', // Primary blue
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // Secondary brand colors (Teal)
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488', // Primary teal
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  
  // Button configurations
  button: {
    primary: 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700',
    secondary: 'bg-white border border-blue-200 text-blue-600 hover:bg-blue-50',
    accent: 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600',
  },
  
  // Text configurations
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    accent: 'text-blue-600',
    white: 'text-white',
    heading: 'text-gray-900',
  },
  
  // Background configurations
  background: {
    primary: 'bg-white',
    secondary: 'bg-gray-50',
    accent: 'bg-gradient-to-br from-blue-50 to-teal-50',
    card: 'bg-white',
  },
  
  // Border configurations
  border: {
    light: 'border-gray-200',
    medium: 'border-gray-300',
    accent: 'border-blue-200',
  },
  
  // Status colors
  status: {
    success: 'text-green-600 bg-green-50 border-green-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    error: 'text-red-600 bg-red-50 border-red-200',
    info: 'text-blue-600 bg-blue-50 border-blue-200',
  }
};

// Utility functions for accessing colors
export const getButtonClass = (variant: 'primary' | 'secondary' | 'accent' = 'primary') => {
  return colors.button[variant];
};

export const getTextClass = (variant: 'primary' | 'secondary' | 'muted' | 'accent' | 'white' | 'heading' = 'primary') => {
  return colors.text[variant];
};

export const getBackgroundClass = (variant: 'primary' | 'secondary' | 'accent' | 'card' = 'primary') => {
  return colors.background[variant];
};
