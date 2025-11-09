import { useState } from 'react';
import '@/App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from '@/pages/Home';
import Challenge from '@/pages/Challenge';
import Research from '@/pages/Research';
import VisualIdentity from '@/pages/VisualIdentity';
import Marketing from '@/pages/Marketing';
import WebsiteRedesign from '@/pages/WebsiteRedesign';
import Impact from '@/pages/Impact';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/challenge', label: 'Challenge' },
    { path: '/research', label: 'Research' },
    { path: '/visual-identity', label: 'Identity' },
    { path: '/marketing', label: 'Marketing' },
    { path: '/website', label: 'Website' },
    { path: '/impact', label: 'Impact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-playfair text-xl font-bold text-espresso" data-testid="logo-link" onClick={closeMenu}>
            Vintage Brew Rebrand
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-copper'
                    : 'text-charcoal hover:text-copper'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-espresso hover:text-copper transition-colors"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        data-testid="mobile-menu"
      >
        <div className="bg-cream/95 backdrop-blur-md border-t border-espresso/10">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-copper text-white'
                    : 'text-charcoal hover:bg-latte hover:text-copper'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/research" element={<Research />} />
            <Route path="/visual-identity" element={<VisualIdentity />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/website" element={<WebsiteRedesign />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;