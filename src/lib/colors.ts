
// Global color configuration for the FertileCare application
export const colors = {
  // Primary brand colors based on new palette
  primary: {
    50: '#fefcff',
    100: '#faf9ff', 
    200: '#f0edff',
    300: '#e6deff',
    400: '#d3d0fb', // Main purple from palette
    500: '#b8b3f7',
    600: '#9d96f3',
    700: '#8279ef',
    800: '#675ceb',
    900: '#4c3fe7',
  },
  
  // Secondary brand colors (Light Blue)
  secondary: {
    50: '#f0fcff',
    100: '#e6faff',
    200: '#d9f7ff',
    300: '#c7f1ff', // Light blue from palette
    400: '#a3e9ff',
    500: '#7fe1ff',
    600: '#5bd9ff',
    700: '#37d1ff',
    800: '#13c9ff',
    900: '#00c1ef',
  },
  
  // Accent colors
  accent: {
    pink: '#ffd8d9', // Pink from palette
    mint: '#cdfde5', // Mint green from palette
    yellow: '#fafdc6', // Light yellow from palette
  },
  
  // Button configurations
  button: {
    primary: 'bg-gradient-to-r from-purple-400 to-blue-300 hover:from-purple-500 hover:to-blue-400 text-white',
    secondary: 'bg-white border border-purple-200 text-purple-600 hover:bg-purple-50',
    accent: 'bg-gradient-to-r from-pink-200 to-mint-200 hover:from-pink-300 hover:to-mint-300 text-gray-800',
    contact: 'bg-gradient-to-r from-mint-300 to-yellow-200 hover:from-mint-400 hover:to-yellow-300 text-gray-800',
  },
  
  // Text configurations
  text: {
    primary: 'text-gray-800',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    accent: 'text-purple-600',
    white: 'text-white',
    heading: 'text-gray-800',
  },
  
  // Background configurations
  background: {
    primary: 'bg-white',
    secondary: 'bg-gradient-to-br from-pink-100 to-blue-100',
    accent: 'bg-gradient-to-br from-purple-50 to-mint-50',
    card: 'bg-white',
    hero: 'bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200',
  },
  
  // Border configurations
  border: {
    light: 'border-purple-200',
    medium: 'border-purple-300',
    accent: 'border-blue-200',
  },
  
  // Status colors
  status: {
    success: 'text-green-600 bg-mint-50 border-mint-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    error: 'text-red-600 bg-pink-50 border-pink-200',
    info: 'text-blue-600 bg-blue-50 border-blue-200',
  }
};

// Utility functions for accessing colors
export const getButtonClass = (variant: 'primary' | 'secondary' | 'accent' | 'contact' = 'primary') => {
  return colors.button[variant];
};

export const getTextClass = (variant: 'primary' | 'secondary' | 'muted' | 'accent' | 'white' | 'heading' = 'primary') => {
  return colors.text[variant];
};

export const getBackgroundClass = (variant: 'primary' | 'secondary' | 'accent' | 'card' | 'hero' = 'primary') => {
  return colors.background[variant];
};
