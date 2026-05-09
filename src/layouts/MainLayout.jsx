import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(30, 30, 58, 0.6)',
      background: '#0a0a12',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{
          color: '#64748b',
          fontSize: '0.875rem',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          flexWrap: 'wrap',
        }}>
          <span>Gerald Andrei D. Santiago</span>
          <span>·</span>
          <span>PTF04 – AUF College of Computer Studies</span>
          <span>·</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            Made with <Heart size={13} color="#f472b6" fill="#f472b6" /> and Python
          </span>
        </p>
      </div>
    </footer>
  )
}

export default function MainLayout() {
  const location = useLocation()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0a12' }}>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          style={{ flex: 1 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
