import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CodeBlock({ code, language = 'python', explanation }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(30, 30, 58, 0.8)',
        background: '#0d0d1a',
        boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
        marginBottom: '1.5rem',
      }}
    >
      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.65rem 1rem',
        background: '#111127',
        borderBottom: '1px solid rgba(30, 30, 58, 0.8)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: '0.5rem' }}>
            <Terminal size={13} color="#64748b" />
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
              {language}
            </span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.3rem 0.7rem',
            borderRadius: '6px',
            background: copied ? 'rgba(34, 211, 238, 0.12)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${copied ? 'rgba(34, 211, 238, 0.3)' : 'rgba(255,255,255,0.08)'}`,
            cursor: 'pointer',
            color: copied ? '#22d3ee' : '#94a3b8',
            fontSize: '0.75rem',
            fontWeight: 500,
            transition: 'all 0.2s',
          }}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code */}
      <div style={{ fontSize: '0.875rem' }}>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: '1.25rem 1.25rem',
            background: '#0d0d1a',
            fontSize: '0.875rem',
            lineHeight: 1.7,
          }}
          showLineNumbers={code.split('\n').length > 3}
          lineNumberStyle={{ color: '#3d3d60', minWidth: '2rem' }}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* Explanation */}
      {explanation && (
        <div style={{
          padding: '0.85rem 1.25rem',
          background: '#0f0f20',
          borderTop: '1px solid rgba(30, 30, 58, 0.6)',
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: 3,
            minHeight: '100%',
            borderRadius: '99px',
            background: 'linear-gradient(180deg, #60a5fa, #a78bfa)',
            flexShrink: 0,
            marginTop: '2px',
            alignSelf: 'stretch',
          }} />
          <p style={{
            fontSize: '0.875rem',
            color: '#94a3b8',
            lineHeight: 1.7,
            margin: 0,
          }}>
            {explanation}
          </p>
        </div>
      )}
    </motion.div>
  )
}
