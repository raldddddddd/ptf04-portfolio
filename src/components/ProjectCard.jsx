import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Layers } from 'lucide-react'
import TechBadge from './TechBadge'

const categoryColors = {
  'Regression': '#22d3ee',
  'Classification': '#a78bfa',
  'Computer Vision': '#f472b6',
  'NLP': '#fb923c',
  'AI App': '#c084fc',
}

export default function ProjectCard({ project, index = 0 }) {
  const accent = project.accentColor || '#60a5fa'
  const catColor = categoryColors[project.category] || accent
  const previewImg = project.screenshots?.[0]?.src

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#12121e',
        border: '1px solid rgba(30, 30, 58, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.3s',
        position: 'relative',
      }}
      className="project-card"
    >
      <style>{`
        .project-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}30;
        }
        .project-card:hover .card-arrow {
          transform: translateX(4px);
        }
      `}</style>

      {/* Top accent line */}
      <div style={{
        height: '3px',
        background: `linear-gradient(90deg, ${accent}, ${accent}44)`,
      }} />

      {/* Preview image */}
      {previewImg && (
        <div style={{
          height: '180px',
          overflow: 'hidden',
          position: 'relative',
          background: '#0a0a12',
        }}>
          <img
            src={previewImg}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            className="card-img"
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(180deg, transparent 40%, #12121e 100%)`,
          }} />
          <div style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
          }}>
            <span style={{
              padding: '0.25rem 0.65rem',
              borderRadius: '999px',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: catColor,
              background: `${catColor}18`,
              border: `1px solid ${catColor}30`,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {project.category}
            </span>
          </div>
          <style>{`.project-card:hover .card-img { transform: scale(1.05); }`}</style>
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Number + title */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <Layers size={14} color={accent} />
            <span style={{ fontSize: '0.72rem', color: accent, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Project {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: '#e2e8f0',
            lineHeight: 1.4,
            margin: 0,
          }}>
            {project.shortTitle}
          </h3>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.85rem',
          color: '#64748b',
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tech badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tools.slice(0, 4).map(tool => (
            <TechBadge key={tool} label={tool} color={accent} small />
          ))}
          {project.tools.length > 4 && (
            <span style={{
              fontSize: '0.7rem',
              color: '#64748b',
              padding: '0.2rem 0.5rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              +{project.tools.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          to={`/projects/${project.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.65rem',
            borderRadius: '10px',
            background: `${accent}12`,
            border: `1px solid ${accent}25`,
            color: accent,
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 600,
            transition: 'all 0.2s',
            marginTop: '0.25rem',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${accent}22`
            e.currentTarget.style.borderColor = `${accent}50`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = `${accent}12`
            e.currentTarget.style.borderColor = `${accent}25`
          }}
        >
          View Project
          <ArrowRight size={15} className="card-arrow" style={{ transition: 'transform 0.2s' }} />
        </Link>
      </div>
    </motion.div>
  )
}
