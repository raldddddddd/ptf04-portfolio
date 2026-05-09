import { motion } from 'framer-motion'
import { Layers, Search } from 'lucide-react'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

const categories = ['All', 'Regression', 'Classification', 'Computer Vision', 'NLP', 'AI App']

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = projects.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ background: '#0a0a12', minHeight: '100vh', paddingTop: '64px' }}>
      {/* Page Header */}
      <div style={{
        position: 'relative',
        padding: '4rem 1.5rem 3rem',
        borderBottom: '1px solid rgba(30, 30, 58, 0.6)',
        background: 'linear-gradient(180deg, #0d0d1a 0%, #0a0a12 100%)',
        overflow: 'hidden',
      }}>
        {/* bg grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(96, 165, 250, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                padding: '0.5rem',
                borderRadius: '10px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.2)',
              }}>
                <Layers size={20} color="#60a5fa" />
              </div>
              <span style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                All Projects
              </span>
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              color: '#e2e8f0',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
            }}>
              Machine Learning{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Portfolio</span>
            </h1>
            <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '560px', lineHeight: 1.7, margin: 0 }}>
              A collection of 7 AI & ML projects built throughout PTF04 — from regression and classification to computer vision and NLP.
            </p>
          </motion.div>

          {/* Search + Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            {/* Search */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1rem',
              borderRadius: '10px',
              background: '#12121e',
              border: '1px solid rgba(30, 30, 58, 0.8)',
              flex: '1',
              minWidth: '200px',
              maxWidth: '320px',
            }}>
              <Search size={16} color="#64748b" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#e2e8f0',
                  fontSize: '0.875rem',
                  width: '100%',
                }}
              />
            </div>

            {/* Category filters */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: '1px solid',
                    background: activeCategory === cat ? 'rgba(96, 165, 250, 0.15)' : 'rgba(255,255,255,0.04)',
                    borderColor: activeCategory === cat ? 'rgba(96, 165, 250, 0.4)' : 'rgba(255,255,255,0.08)',
                    color: activeCategory === cat ? '#60a5fa' : '#64748b',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
            <p>No projects found matching your search.</p>
          </div>
        ) : (
          <>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Showing {filtered.length} of {projects.length} projects
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}>
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
