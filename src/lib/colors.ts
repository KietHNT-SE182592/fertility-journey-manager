
// Global color configuration for the FertileCare application - Mom and Baby Theme
export const colors = {
  // Primary brand colors - Soft pink and peach tones
  primary: {
    50: '#fef7f7',
    100: '#fdeef0', 
    200: '#fad4d8',
    300: '#f5b2bb',
    400: '#ed8497',
    500: '#e25976', // Main rose pink
    600: '#d13d5f', // Primary pink
    700: '#b02847',
    800: '#922541',
    900: '#7c213d',
  },
  
  // Secondary brand colors - Soft blue/lavender
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569', // Primary secondary
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Accent colors - Soft mint/sage green
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a', // Primary accent
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  // Button configurations
  button: {
    primary: 'bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white',
    secondary: 'bg-white border border-rose-200 text-rose-600 hover:bg-rose-50',
    accent: 'bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white',
    contact: 'bg-gradient-to-r from-purple-400 to-violet-500 hover:from-purple-500 hover:to-violet-600 text-white',
  },
  
  // Text configurations
  text: {
    primary: 'text-gray-800',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    accent: 'text-rose-600',
    white: 'text-white',
    heading: 'text-gray-800',
    brand: 'text-rose-600',
  },
  
  // Background configurations
  background: {
    primary: 'bg-white',
    secondary: 'bg-rose-50',
    accent: 'bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50',
    card: 'bg-white',
  },
  
  // Border configurations
  border: {
    light: 'border-rose-100',
    medium: 'border-rose-200',
    accent: 'border-rose-300',
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
export const getButtonClass = (variant: 'primary' | 'secondary' | 'accent' | 'contact' = 'primary') => {
  return colors.button[variant];
};

export const getTextClass = (variant: 'primary' | 'secondary' | 'muted' | 'accent' | 'white' | 'heading' | 'brand' = 'primary') => {
  return colors.text[variant];
};

export const getBackgroundClass = (variant: 'primary' | 'secondary' | 'accent' | 'card' = 'primary') => {
  return colors.background[variant];
};
