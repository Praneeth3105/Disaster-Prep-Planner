import { useState } from 'react'
import { helplines, hazardGuides } from '../data/resourcesData'

export default function Resources() {
  const [openId, setOpenId] = useState(hazardGuides[0]?.id ?? null)
  return (
    <div>
      <div className="section-label">Alerts & Resources</div>

      <div className="panel">
        <h2 className="block-title">Emergency Helplines</h2>
        <p className="subtext">India-wide numbers. Save these to your phone's emergency contacts too.</p>
        <div className="helpline-grid">
          {helplines.map((h) => (
            <div className="helpline-card" key={h.name}>
              <span className="h-name">{h.name}</span>
              <span className="h-num">{h.number}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <h2 className="block-title">Hazard Response Guides</h2>
        <p className="subtext">Short first-response steps by hazard type. Not a substitute for official guidance.</p>
        {hazardGuides.map((guide) => {
          const isOpen = openId === guide.id
          return (
            <div className="hazard-accordion-item" key={guide.id}>
              <button
                className="hazard-accordion-head"
                onClick={() => setOpenId(isOpen ? null : guide.id)}
                aria-expanded={isOpen}
              >
                {guide.label}
                <span className="chev">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="hazard-accordion-body">
                  <ol>
                    {guide.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
