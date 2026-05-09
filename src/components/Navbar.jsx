import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Brain, Code2 } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 1.5rem',
          transition: 'background 0.3s, box-shadow 0.3s, border-color 0.3s',
          background: scrolled
            ? 'rgba(10, 10, 18, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(30, 30, 58, 0.8)'
            : '1px solid transparent',
          boxShadow: scrolled
            ? '0 4px 30px rgba(0,0,0,0.4)'
            : 'none',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              boxShadow: '0 0 16px rgba(96, 165, 250, 0.4)',
            }}>
              <Brain size={18} color="#fff" />
            </div>
            <span style={{
              fontWeight: 700,
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Gerald Santiago
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
               className="desktop-nav">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  style={{
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#60a5fa' : '#94a3b8',
                    background: isActive ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(96, 165, 250, 0.2)' : '1px solid transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.target.style.color = '#e2e8f0'
                      e.target.style.background = 'rgba(255,255,255,0.05)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.target.style.color = '#94a3b8'
                      e.target.style.background = 'transparent'
                    }
                  }}
                >
                  {label}
                </Link>
              )
            })}
            <a
              href="https://auf.edu.ph"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#fff',
                background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                boxShadow: '0 0 12px rgba(96, 165, 250, 0.2)',
                transition: 'all 0.2s',
              }}
            >
              <Code2 size={14} />
              PTF04
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="mobile-menu-btn"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              color: '#e2e8f0',
              display: 'none',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(10, 10, 18, 0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(30, 30, 58, 0.8)',
              padding: '1rem 1.5rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  style={{
                    textDecoration: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#60a5fa' : '#94a3b8',
                    background: isActive ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(96, 165, 250, 0.2)' : 'transparent',
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
