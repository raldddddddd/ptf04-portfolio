import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Target, Star, Wrench, Lightbulb, BookOpen, AlertTriangle, ChevronRight } from 'lucide-react'
import projects from '../data/projects'
import CodeBlock from '../components/CodeBlock'
import ScreenshotGallery from '../components/ScreenshotGallery'
import TechBadge from '../components/TechBadge'

function Section({ icon, title, accentColor, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(30, 30, 58, 0.6)' }}>
        <div style={{ padding: '0.45rem', borderRadius: '8px', background: `${accentColor}15`, border: `1px solid ${accentColor}25`, display: 'flex' }}>{icon}</div>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </motion.div>
  )
}

export default function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const projectIndex = projects.findIndex(p => p.id === id)
  const project = projects[projectIndex]

  if (!project) return (
    <div style={{ textAlign: 'center', padding: '6rem', color: '#64748b' }}>
      <h2 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Project not found</h2>
      <Link to="/projects" style={{ color: '#60a5fa' }}>← Back to Projects</Link>
    </div>
  )

  const accent = project.accentColor || '#60a5fa'
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <div style={{ background: '#0a0a12', minHeight: '100vh', paddingTop: '64px' }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', padding: '4rem 1.5rem', overflow: 'hidden', background: `linear-gradient(180deg, ${project.gradientFrom}22 0%, #0a0a12 100%)`, borderBottom: '1px solid rgba(30, 30, 58, 0.6)' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '200%', background: `radial-gradient(ellipse, ${accent}12 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(${accent}06 1px, transparent 1px), linear-gradient(90deg, ${accent}06 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.4rem 0.85rem', color: '#94a3b8', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 500 }}>
              <ArrowLeft size={14} />Back
            </button>
            <ChevronRight size={14} color="#3d3d60" />
            <Link to="/projects" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.8rem' }}>Projects</Link>
            <ChevronRight size={14} color="#3d3d60" />
            <span style={{ color: accent, fontSize: '0.8rem', fontWeight: 500 }}>{project.shortTitle}</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700, color: accent, background: `${accent}18`, border: `1px solid ${accent}30`, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{project.category}</span>
              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 600, color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>Project {String(projectIndex + 1).padStart(2, '0')} of {projects.length}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#e2e8f0', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1rem' }}>{project.title}</h1>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '720px', margin: '0 0 1.5rem' }}>{project.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tools.map(tool => <TechBadge key={tool} label={tool} color={accent} />)}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
        <Section icon={<Target size={18} color={accent} />} title="Objectives" accentColor={accent}>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.objectives.map((obj, i) => (
              <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '10px', background: '#12121e', border: '1px solid rgba(30, 30, 58, 0.8)', color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0, marginTop: '0.55rem', boxShadow: `0 0 8px ${accent}60` }} />
                {obj}
              </motion.li>
            ))}
          </ul>
        </Section>

        <Section icon={<Star size={18} color={accent} />} title="Key Features" accentColor={accent}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.keyFeatures.map((feat, i) => (
              <motion.span key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} style={{ padding: '0.45rem 1rem', borderRadius: '10px', background: `${accent}10`, border: `1px solid ${accent}25`, color: accent, fontSize: '0.875rem', fontWeight: 500 }}>
                {feat}
              </motion.span>
            ))}
          </div>
        </Section>

        <Section icon={<Wrench size={18} color={accent} />} title="Code Blocks" accentColor={accent}>
          {project.codeBlocks.map((block, i) => <CodeBlock key={i} code={block.code} language={block.language} explanation={block.explanation} />)}
        </Section>

        <Section icon={<BookOpen size={18} color={accent} />} title="Screenshots" accentColor={accent}>
          <ScreenshotGallery screenshots={project.screenshots} />
        </Section>

        <Section icon={<Wrench size={18} color={accent} />} title="Tools & Technologies Used" accentColor={accent}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.tools.map(tool => <TechBadge key={tool} label={tool} color={accent} />)}
          </div>
        </Section>

        <Section icon={<AlertTriangle size={18} color={accent} />} title="Challenges & Solutions" accentColor={accent}>
          <div style={{ padding: '1.25rem 1.5rem', borderRadius: '12px', background: '#12121e', border: `1px solid ${accent}20`, borderLeft: `3px solid ${accent}`, color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.8 }}>
            {project.challenges}
          </div>
        </Section>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ padding: '2rem', borderRadius: '16px', background: `linear-gradient(135deg, ${accent}0a, rgba(167, 139, 250, 0.05))`, border: `1px solid ${accent}20`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Lightbulb size={20} color={accent} />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e2e8f0', margin: 0 }}>Learning Reflection</h2>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, margin: 0, fontStyle: 'italic' }}>"{project.reflection}"</p>
        </motion.div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(30, 30, 58, 0.6)' }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Next Project</p>
          <Link to={`/projects/${nextProject.id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderRadius: '14px', background: '#12121e', border: '1px solid rgba(30, 30, 58, 0.8)', textDecoration: 'none', transition: 'all 0.2s', gap: '1rem' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${nextProject.accentColor}40`; e.currentTarget.style.background = '#1a1a2e' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(30, 30, 58, 0.8)'; e.currentTarget.style.background = '#12121e' }}>
            <div>
              <p style={{ color: '#64748b', fontSize: '0.75rem', margin: '0 0 0.25rem' }}>{nextProject.category}</p>
              <p style={{ color: '#e2e8f0', fontWeight: 700, margin: 0, fontSize: '0.95rem' }}>{nextProject.shortTitle}</p>
            </div>
            <ChevronRight size={20} color={nextProject.accentColor} />
          </Link>
        </div>
      </div>
    </div>
  )
}
