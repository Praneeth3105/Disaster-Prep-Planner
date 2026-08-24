import { checklistCategories, totalItemCount } from '../data/checklistData'
import ReadinessGauge from './ReadinessGauge'

export default function Dashboard({ checked, contacts, meetingPoints, onNavigate }) {
  const checkedCount = Object.values(checked).filter(Boolean).length
  const percent = totalItemCount ? (checkedCount / totalItemCount) * 100 : 0
  return (
    <div>
      <div className="section-label">Situation Report</div>
      <div className="dashboard-grid">
        <div className="panel" style={{ textAlign: 'center' }}>
          <h2 className="block-title">Household Readiness</h2>
          <p className="subtext">Based on your emergency kit checklist.</p>
          <ReadinessGauge percent={percent} />
          <button className="btn" style={{ marginTop: 12 }} onClick={() => onNavigate('checklist')}>
            Update checklist
          </button>
        </div>

        <div className="panel">
          <h2 className="block-title">Kit Status by Category</h2>
          <p className="subtext">How much of each supply category is packed and checked off.</p>
          {checklistCategories.map((cat) => {
            const done = cat.items.filter((it) => checked[it.id]).length
            const pct = (done / cat.items.length) * 100
            return (
              <div className="category-bar-row" key={cat.id}>
                <span className="cb-code">{cat.code}</span>
                <span className="cb-label">{cat.label}</span>
                <div className="category-bar-track">
                  <div className="category-bar-fill" style={{ width: `${pct}%` }} />
                </div>
                <span className="cb-pct">
                  {done}/{cat.items.length}
                </span>
              </div>
            )
          })}

          <div className="stat-grid">
            <div className="stat-card">
              <div className="num">{contacts.length}</div>
              <div className="lbl">Emergency contacts saved</div>
            </div>
            <div className="stat-card">
              <div className="num">{meetingPoints.length}</div>
              <div className="lbl">Meeting points set</div>
            </div>
            <div className="stat-card">
              <div className="num">{checkedCount}/{totalItemCount}</div>
              <div className="lbl">Supplies checked off</div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="section-label">Quick Actions</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn" onClick={() => onNavigate('family')}>
            Add emergency contact
          </button>
          <button className="btn" onClick={() => onNavigate('evacuation')}>
            Review evacuation plan
          </button>
          <button className="btn" onClick={() => onNavigate('resources')}>
            View helplines
          </button>
        </div>
      </div>
    </div>
  )
}
