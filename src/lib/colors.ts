
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
  
  // Accent colors for special elements
  accent: {
    50: '#fef7ff',
    100: '#fce7ff',
    200: '#f8d2ff',
    300: '#f1a7ff',
    400: '#e770ff',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  
  // Button configurations - easily customizable
  button: {
    primary: 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium',
    secondary: 'bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 font-medium',
    accent: 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium',
    ghost: 'text-gray-700 hover:bg-gray-100 font-medium',
  },
  
  // Text configurations - centralized text styling
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    accent: 'text-blue-600',
    brand: 'text-blue-600',
    white: 'text-white',
    heading: 'text-gray-900 font-bold',
    subheading: 'text-gray-700 font-semibold',
    price: 'text-blue-600 font-bold',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
  },
  
  // Background configurations
  background: {
    primary: 'bg-white',
    secondary: 'bg-gray-50',
    accent: 'bg-gradient-to-br from-blue-50 to-teal-50',
    card: 'bg-white',
    hero: 'bg-gradient-to-br from-blue-50 via-white to-teal-50',
    section: 'bg-white',
  },
  
  // Border configurations
  border: {
    light: 'border-gray-200',
    medium: 'border-gray-300',
    accent: 'border-blue-200',
    primary: 'border-blue-300',
  },
  
  // Status colors for alerts, badges, etc.
  status: {
    success: 'text-green-600 bg-green-50 border-green-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    error: 'text-red-600 bg-red-50 border-red-200',
    info: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  
  // Service-specific colors
  service: {
    price: 'text-blue-600 font-bold text-xl',
    title: 'text-gray-900 font-bold text-2xl',
    description: 'text-gray-600',
    feature: 'text-gray-700',
  },
  
  // Hero section specific colors
  hero: {
    title: 'text-white font-bold drop-shadow-lg',
    subtitle: 'text-white drop-shadow-md',
    button: 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium drop-shadow-lg',
    buttonSecondary: 'border-white text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 font-medium drop-shadow-lg',
  }
};

// Utility functions for accessing colors easily
export const getButtonClass = (variant: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' = 'primary') => {
  return colors.button[variant];
};

export const getTextClass = (variant: 'primary' | 'secondary' | 'muted' | 'accent' | 'brand' | 'white' | 'heading' | 'subheading' | 'price' | 'success' | 'warning' | 'error' = 'primary') => {
  return colors.text[variant];
};

export const getBackgroundClass = (variant: 'primary' | 'secondary' | 'accent' | 'card' | 'hero' | 'section' = 'primary') => {
  return colors.background[variant];
};

export const getBorderClass = (variant: 'light' | 'medium' | 'accent' | 'primary' = 'light') => {
  return colors.border[variant];
};

export const getServiceClass = (variant: 'price' | 'title' | 'description' | 'feature' = 'title') => {
  return colors.service[variant];
};

export const getHeroClass = (variant: 'title' | 'subtitle' | 'button' | 'buttonSecondary' = 'title') => {
  return colors.hero[variant];
};

export const getStatusClass = (variant: 'success' | 'warning' | 'error' | 'info' = 'info') => {
  return colors.status[variant];
};
