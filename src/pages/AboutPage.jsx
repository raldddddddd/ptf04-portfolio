import { motion } from 'framer-motion'
import { GraduationCap, Users, Code2, Brain, Heart } from 'lucide-react'
import TechBadge from '../components/TechBadge'
import AnimatedBackground from '../components/AnimatedBackground'

const toolGroups = [
  { title: 'Machine Learning', color: '#60a5fa', tools: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'] },
  { title: 'Deep Learning', color: '#a78bfa', tools: ['TensorFlow', 'Keras', 'PyTorch'] },
  { title: 'Deployment', color: '#22d3ee', tools: ['Streamlit', 'Flask', 'Anvil', 'MIT App Inventor'] },
  { title: 'Environment', color: '#34d399', tools: ['Google Colab', 'Python', 'JobLib', 'PIL', 'PoseNet'] },
]

const timeline = [
  { label: 'Project 1', title: 'Plant Growth Prediction', detail: 'Linear Regression vs MLP Regressor', color: '#22d3ee' },
  { label: 'Project 2', title: 'Iris Classification', detail: 'KNN vs MLP + Anvil Deployment', color: '#a78bfa' },
  { label: 'Project 3', title: 'Boston Housing', detail: 'Neural Network Optimization + Streamlit', color: '#60a5fa' },
  { label: 'Project 4', title: 'CIFAR-10', detail: 'CNN Training + Flask Deployment', color: '#f472b6' },
  { label: 'Project 5', title: 'Dogs vs Cats', detail: 'Pre-trained CNN + Flask', color: '#34d399' },
  { label: 'Project 6', title: 'Sentiment Analysis', detail: 'LSTM RNN + Anvil Deployment', color: '#fb923c' },
  { label: 'Project 7', title: 'Dance Recognition App', detail: 'PoseNet + MIT App Inventor', color: '#c084fc' },
]

export default function AboutPage() {
  return (
    <div style={{ background: '#0a0a12', minHeight: '100vh', paddingTop: '64px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '5rem 1.5rem 4rem', overflow: 'hidden', borderBottom: '1px solid rgba(30, 30, 58, 0.6)' }}>
        <AnimatedBackground />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.9rem', borderRadius: '999px', background: 'rgba(96, 165, 250, 0.1)', border: '1px solid rgba(96, 165, 250, 0.25)', color: '#60a5fa', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              <Brain size={13} />About Me
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#e2e8f0', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              Gerald Andrei D.{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Santiago</span>
            </h1>
            <p style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              PTF04 — Professional Track 4
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.85, maxWidth: '680px', margin: 0 }}>
              Hi I am Gerald, I am currently a third-year student in AUF, a volunteer in DEVCON,
              and actively engaging in the tech community to learn and share knowledge with other people.
              I am interested in learning about almost anything from other people as it broadens my horizon on the world.
            </p>
          </motion.div>

          {/* Info Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2.5rem' }}>
            {[
              { icon: <GraduationCap size={20} color="#60a5fa" />, title: 'University', value: 'Angeles University Foundation', color: '#60a5fa' },
              { icon: <Code2 size={20} color="#a78bfa" />, title: 'College', value: 'College of Computer Studies', color: '#a78bfa' },
              { icon: <Users size={20} color="#22d3ee" />, title: 'Community', value: 'DEVCON Volunteer', color: '#22d3ee' },
              { icon: <Heart size={20} color="#f472b6" />, title: 'Year Level', value: 'Third-Year Student', color: '#f472b6' },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ padding: '1.25rem', borderRadius: '14px', background: '#12121e', border: '1px solid rgba(30, 30, 58, 0.8)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: `${card.color}15`, border: `1px solid ${card.color}25`, flexShrink: 0 }}>{card.icon}</div>
                <div>
                  <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 0.25rem' }}>{card.title}</p>
                  <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.875rem', margin: 0 }}>{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.4rem' }}>Skills & Tools</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Technologies learned and applied throughout the PTF04 course</p>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {toolGroups.map((group, gi) => (
            <motion.div key={gi} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.1 }}>
              <p style={{ color: group.color, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{group.title}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.tools.map(tool => <TechBadge key={tool} label={tool} color={group.color} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section style={{ padding: '4rem 1.5rem 6rem', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#e2e8f0', marginBottom: '0.4rem' }}>Learning Journey</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>The progression of projects throughout PTF04</p>
        </motion.div>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '7px', top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, #60a5fa, #a78bfa, #f472b6)', opacity: 0.3, borderRadius: 1 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{ position: 'absolute', left: '-2rem', top: '1rem', width: 14, height: 14, borderRadius: '50%', background: item.color, boxShadow: `0 0 10px ${item.color}60`, border: '2px solid #0a0a12' }} />
                <div style={{ padding: '1rem 1.25rem', borderRadius: '12px', background: '#12121e', border: '1px solid rgba(30, 30, 58, 0.8)', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', color: item.color, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>{item.label}</span>
                  <div>
                    <p style={{ color: '#e2e8f0', fontWeight: 600, margin: '0 0 0.15rem', fontSize: '0.9rem' }}>{item.title}</p>
                    <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
