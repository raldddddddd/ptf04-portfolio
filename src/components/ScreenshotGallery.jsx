import { useState, useCallback } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

export default function ScreenshotGallery({ screenshots }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = screenshots.map(s => ({ src: s.src, alt: s.caption }))

  const openAt = useCallback((i) => {
    setIndex(i)
    setOpen(true)
  }, [])

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1rem',
      }}>
        {screenshots.map((shot, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            onClick={() => openAt(i)}
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid rgba(30, 30, 58, 0.8)',
              background: '#0d0d1a',
              aspectRatio: '16/10',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(96, 165, 250, 0.15)' }}
          >
            <img
              src={shot.src}
              alt={shot.caption}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s',
              }}
            />
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '0.75rem',
              opacity: 0,
              transition: 'opacity 0.2s',
            }}
            className="gallery-overlay">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#e2e8f0', fontSize: '0.8rem', fontWeight: 500 }}>
                  {shot.caption}
                </span>
                <ZoomIn size={16} color="#60a5fa" />
              </div>
            </div>

            <style>{`
              div:hover .gallery-overlay { opacity: 1 !important; }
            `}</style>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.95)' },
        }}
      />
    </>
  )
}
