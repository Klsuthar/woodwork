// Animation Utilities
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export const scaleUp = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
  transition: { duration: 0.3 }
};

// Scroll Animation Handler
export const handleScrollAnimation = (element: HTMLElement, offset = 100): boolean => {
  const elementPosition = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  return elementPosition - windowHeight + offset <= 0;
};

// Smooth Scroll Function
export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Debounce Function
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Intersection Observer Utility
export const createIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
): IntersectionObserver => {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, options);
};

// Form Validation
export const validateForm = (data: Record<string, string>): Record<string, string> => {
  const errors: Record<string, string> = {};

  // Email validation
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (basic)
  if (data.phone && !/^\+?[\d\s-]{10,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Name validation
  if (data.name && data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Message validation
  if (data.message && data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return errors;
};

// Local Storage Utilities
export const storage = {
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },
  
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }
};

// Device Detection
export const device = {
  isMobile: (): boolean => window.innerWidth <= 768,
  isTablet: (): boolean => window.innerWidth > 768 && window.innerWidth <= 1024,
  isDesktop: (): boolean => window.innerWidth > 1024
};

// Image Loading Utility
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Error Handler
export const handleError = (error: Error, context: string): void => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error(`Error in ${context}:`, error);
  }
  
  // Here you could add error reporting service integration
  // e.g., Sentry, LogRocket, etc.
};

// Performance Monitoring
export const measurePerformance = (label: string, callback: () => void): void => {
  if (process.env.NODE_ENV === 'development') {
    console.time(label);
    callback();
    console.timeEnd(label);
  } else {
    callback();
  }
};

// Custom Event Emitter
class EventEmitter {
  private events: Record<string, Function[]> = {};

  on(event: string, callback: Function): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event: string, callback: Function): void {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  emit(event: string, data?: any): void {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
}

export const eventEmitter = new EventEmitter();

// Theme Handler
export const themeHandler = {
  isDark: (): boolean => {
    return document.documentElement.classList.contains('dark');
  },
  
  toggle: (): void => {
    document.documentElement.classList.toggle('dark');
    storage.set('theme', themeHandler.isDark() ? 'dark' : 'light');
  },
  
  init: (): void => {
    if (storage.get('theme', 'light') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
};