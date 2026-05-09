import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, GraduationCap, Users, ChevronDown } from 'lucide-react'
import AnimatedBackground from '../components/AnimatedBackground'
import ProjectCard from '../components/ProjectCard'
import TechBadge from '../components/TechBadge'
import projects from '../data/projects'

const allTools = [
  { label: 'Python', color: '#60a5fa' },
  { label: 'TensorFlow', color: '#f472b6' },
  { label: 'Scikit-learn', color: '#22d3ee' },
  { label: 'Keras', color: '#fb923c' },
  { label: 'NumPy', color: '#a78bfa' },
  { label: 'Matplotlib', color: '#34d399' },
  { label: 'Streamlit', color: '#60a5fa' },
  { label: 'Flask', color: '#94a3b8' },
  { label: 'Anvil', color: '#c084fc' },
  { label: 'Google Colab', color: '#fb923c' },
  { label: 'Seaborn', color: '#22d3ee' },
  { label: 'PyTorch', color: '#f472b6' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#0a0a12' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <AnimatedBackground />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              borderRadius: '999px',
              background: 'rgba(96, 165, 250, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.25)',
              color: '#60a5fa',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              <Sparkles size={13} />
              PTF04 – Professional Track 4 Final Project
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '0.5rem',
              color: '#e2e8f0',
              letterSpacing: '-0.02em',
            }}
          >
            Gerald Andrei D.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #22d3ee 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Santiago
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1rem',
              color: '#60a5fa',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            AI & Machine Learning Portfolio
          </motion.p>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '640px',
              margin: '0 auto 2.5rem',
            }}
          >
            Hi I am Gerald, I am currently a third-year student in AUF, a volunteer in DEVCON,
            and actively engaging in the tech community to learn and share knowledge with other people.
            I am interested in learning about almost anything from other people as it broadens my horizon on the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 2rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1d4ed8, #6d28d9)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                boxShadow: '0 0 30px rgba(96, 165, 250, 0.25)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(96, 165, 250, 0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(96, 165, 250, 0.25)' }}
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 2rem',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)',
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            >
              About Me
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#64748b',
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Info Cards */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
        }}>
          {[
            {
              icon: <GraduationCap size={22} color="#60a5fa" />,
              label: 'Institution',
              value: 'Angeles University Foundation',
              sub: 'College of Computer Studies',
              color: '#60a5fa',
            },
            {
              icon: <Sparkles size={22} color="#a78bfa" />,
              label: 'Track',
              value: 'PTF04 – Professional Track 4',
              sub: 'AI & Machine Learning',
              color: '#a78bfa',
            },
            {
              icon: <Users size={22} color="#22d3ee" />,
              label: 'Community',
              value: 'DEVCON Volunteer',
              sub: 'Tech Community Member',
              color: '#22d3ee',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                background: '#12121e',
                border: '1px solid rgba(30, 30, 58, 0.8)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <div style={{
                padding: '0.6rem',
                borderRadius: '10px',
                background: `${card.color}15`,
                border: `1px solid ${card.color}25`,
                flexShrink: 0,
              }}>
                {card.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 0.25rem' }}>
                  {card.label}
                </p>
                <p style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 0.15rem' }}>
                  {card.value}
                </p>
                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>
                  {card.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.5rem' }}>
            Tools & Technologies
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
            Technologies explored throughout the machine learning journey
          </p>
        </motion.div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
          {allTools.map((tool, i) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08 }}
            >
              <TechBadge label={tool.label} color={tool.color} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: '4rem 1.5rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.4rem' }}>
              Featured Projects
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
              A snapshot of the learning journey
            </p>
          </div>
          <Link
            to="/projects"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#60a5fa',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
            onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
          >
            View All <ArrowRight size={15} />
          </Link>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
