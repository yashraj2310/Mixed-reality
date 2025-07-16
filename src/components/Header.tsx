import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Laptop, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Applications', href: '/applications' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <motion.header 
      className="absolute inset-x-0 top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.nav 
        className="flex items-center justify-between p-6 lg:px-8 backdrop-blur-sm bg-white/10 border-b border-white/20" 
        aria-label="Global"
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex lg:flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="-m-1.5 p-1.5 flex items-center group">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Laptop className="h-8 w-auto text-white group-hover:text-indigo-300 transition-colors" />
              </motion.div>
              <motion.span 
                className="ml-2 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors"
                whileHover={{ x: 2 }}
              >
                MR Hub
              </motion.span>
              <motion.div
                className="ml-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4 text-yellow-400" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
        
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-indigo-300 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Mixed Reality Hub</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={item.href} 
                className="relative text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors group"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ width: '100%' }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to="/applications" 
              className="group text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors flex items-center"
            >
              <motion.span
                whileHover={{ x: -2 }}
                transition={{ duration: 0.2 }}
              >
                Learn more
              </motion.span>
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <motion.div 
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 px-6 py-6 sm:max-w-sm backdrop-blur-sm"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/" className="-m-1.5 p-1.5 flex items-center group">
                    <span className="sr-only">Mixed Reality Hub</span>
                    <Laptop className="h-8 w-auto text-white" />
                    <span className="ml-2 text-xl font-bold text-white">MR Hub</span>
                  </Link>
                </motion.div>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white hover:text-indigo-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Link
                        to="/applications"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Learn more
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;