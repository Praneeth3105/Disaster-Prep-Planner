export default function ReadinessGauge({ percent }) {
  const clamped = Math.max(0, Math.min(100, percent))
  const radius = 80
  const cx = 100
  const cy = 100
  const startAngle = 180
  const endAngle = 0
  const angle = startAngle - (clamped / 100) * (startAngle - endAngle)

  const toXY = (deg) => {
    const rad = (deg * Math.PI) / 180
    return [cx + radius * Math.cos(rad), cy - radius * Math.sin(rad)]
  }

  const [needleX, needleY] = toXY(angle)

  const arcPath = (from, to, r) => {
    const [x1, y1] = toXY(from)
    const [x2, y2] = toXY(to)
    const largeArc = from - to > 180 ? 1 : 0
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`
  }

  const ticks = Array.from({ length: 11 }, (_, i) => {
    const deg = 180 - i * 18
    const [ox, oy] = toXY(deg)
    const inner = radius - 10
    const rad = (deg * Math.PI) / 180
    const ix = cx + inner * Math.cos(rad)
    const iy = cy - inner * Math.sin(rad)
    return { x1: ix, y1: iy, x2: ox, y2: oy, major: i % 5 === 0 }
  })

  let status = 'Not started'
  if (clamped >= 100) status = 'Fully ready'
  else if (clamped >= 66) status = 'Well prepared'
  else if (clamped >= 33) status = 'In progress'
  else if (clamped > 0) status = 'Getting started'

  return (
    <div className="gauge-wrap">
      <svg viewBox="0 0 200 120" width="220" height="132">
        <path
          d={arcPath(180, 0, radius)}
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d={arcPath(180, angle, radius)}
          fill="none"
          stroke="var(--map-blue)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="var(--ink)"
            strokeWidth={t.major ? 2 : 1}
            opacity={t.major ? 0.6 : 0.3}
          />
        ))}
        <line
          x1={cx}
          y1={cy}
          x2={needleX}
          y2={needleY}
          stroke="var(--alert-rust)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx={cx} cy={cy} r="6" fill="var(--ink)" />
      </svg>
      <div className="gauge-figure">
        <span className="big">{Math.round(clamped)}%</span>
        {status}
      </div>
    </div>
  )
}
