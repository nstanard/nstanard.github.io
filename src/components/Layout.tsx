import React from 'react';
import { Link } from 'gatsby';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isCurrentPath = (path: string) => {
    console.log('path: ', path, path.length);
    if (typeof window !== 'undefined') {
      console.log('window.location.pathname: ', window?.location?.pathname, window?.location?.pathname.length);
      return window.location.pathname === path || window.location.pathname === path + '/';
    } else {
      console.error('window is undefined');
    }
    return false;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-dark-bg">
      <nav className="fixed w-full bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-12">
            {/* <div className="flex">
              <Link to="/" className="flex items-center px-2 -ml-2 transition-colors duration-150 hover:text-primary-500 dark:hover:text-primary-400">
                <span className="text-xl font-heading font-semibold tracking-tight text-gray-900 dark:text-dark-text">
                  NS
                </span>
              </Link>
            </div> */}
            <div className="flex items-center space-x-4 sm:ml-6 sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 text-sm font-medium ${
                    isCurrentPath(item.path)
                      ? 'text-primary-500 dark:text-primary-300'
                      : 'text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {/* <button
                onClick={() => setIsDark(!isDark)}
                className="inline-flex items-center p-1.5 text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button> */}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow pt-12 min-h-[calc(100dvh-3rem)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
          {children}
        </div>
      </main>
      <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Neal Stanard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 