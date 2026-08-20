const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', tag: 'DB' },
  { id: 'checklist', label: 'Supply Checklist', tag: 'WF' },
  { id: 'family', label: 'Family Plan', tag: 'FP' },
  { id: 'evacuation', label: 'Evacuation Plan', tag: 'EV' },
  { id: 'resources', label: 'Alerts & Resources', tag: 'RS' },
]
export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="mark">GRID REF · READY</div>
        <h2>Readyline</h2>
      </div>
      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={active === item.id ? 'active' : ''}
            onClick={() => onNavigate(item.id)}
          >
            <span className="tag">{item.tag}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-foot">
        Prepared plans save on this device.
        <br />
        No data leaves your browser.
      </div>
    </aside>
  )
}

