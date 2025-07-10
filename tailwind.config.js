module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1a1a2e", // Deep mathematical contemplation
        secondary: "#16213e", // Supporting academic depth
        accent: "#00d4ff", // Interactive discovery moments
        
        // Background Colors
        background: "#0f0f23", // Cosmic mathematical space
        surface: "#252547", // Subtle content elevation
        
        // Text Colors
        "text-primary": "#e4e4e7", // Extended reading comfort
        "text-secondary": "#a1a1aa", // Supporting information
        
        // Status Colors
        success: "#10b981", // Positive mathematical validation - emerald-500
        warning: "#f59e0b", // Attention without alarm - amber-500
        error: "#ef4444", // Helpful mathematical corrections - red-500
        
        // Additional Shades for Flexibility
        "primary-light": "#2a2a4e", // Lighter primary variant
        "primary-dark": "#0a0a1e", // Darker primary variant
        "accent-light": "#33ddff", // Lighter accent variant
        "accent-dark": "#00a4cc", // Darker accent variant
        "surface-light": "#353557", // Lighter surface variant
        "surface-dark": "#151537", // Darker surface variant
      },
      
      fontFamily: {
        // Headlines - Mathematical precision
        jetbrains: ['JetBrains Mono', 'monospace'],
        
        // Body - Exceptional readability
        inter: ['Inter', 'sans-serif'],
        
        // CTAs - Modern confidence
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        
        // Accents - Code and mathematical expressions
        'fira-code': ['Fira Code', 'monospace'],
      },
      
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      boxShadow: {
        // Mathematical shadows
        'mathematical': '0 4px 20px rgba(0, 212, 255, 0.1)',
        'subtle': '0 2px 10px rgba(26, 26, 46, 0.2)',
        'depth': '0 8px 32px rgba(15, 15, 35, 0.3)',
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.2)',
      },
      
      borderColor: {
        accent: '#00d4ff',
        subtle: 'rgba(37, 37, 71, 0.5)',
        primary: '#1a1a2e',
        surface: '#252547',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'mathematical': 'mathematical 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        mathematical: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      
      transitionDuration: {
        'fast': '300ms',
        'mathematical': '800ms',
        'complex': '1200ms',
      },
      
      transitionTimingFunction: {
        'mathematical': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'complex': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      backdropBlur: {
        'mathematical': '12px',
      },
      
      backgroundImage: {
        'gradient-mathematical': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        'gradient-surface': 'linear-gradient(135deg, #252547 0%, #1a1a2e 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-glow': {
          textShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
        },
        '.text-glow-lg': {
          textShadow: '0 0 20px rgba(0, 212, 255, 0.7)',
        },
        '.mathematical-border': {
          border: '1px solid #00d4ff',
        },
        '.mathematical-glow': {
          boxShadow: '0 4px 20px rgba(0, 212, 255, 0.1)',
        },
        '.transition-mathematical': {
          transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.transition-complex': {
          transition: 'all 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}