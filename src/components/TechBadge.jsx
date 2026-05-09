export default function TechBadge({ label, color = '#60a5fa', small = false }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: small ? '0.2rem 0.55rem' : '0.3rem 0.75rem',
        borderRadius: '999px',
        fontSize: small ? '0.7rem' : '0.78rem',
        fontWeight: 500,
        color: color,
        background: `${color}18`,
        border: `1px solid ${color}30`,
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s',
      }}
    >
      {label}
    </span>
  )
}
