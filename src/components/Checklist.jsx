import { checklistCategories } from '../data/checklistData'

export default function Checklist({ checked, onToggle }) {
  return (
    <div>
      <div className="section-label">Emergency Kit Manifest</div>
      <div className="panel">
        <h2 className="block-title">Supply Checklist</h2>
        <p className="subtext">
          Pack a bag your household can grab in under two minutes. Check items off as you pack them —
          your progress saves automatically.
        </p>

        {checklistCategories.map((cat) => {
          const done = cat.items.filter((it) => checked[it.id]).length
          return (
            <div className="checklist-category" key={cat.id}>
              <div className="checklist-category-head">
                <h3 style={{ margin: 0, fontSize: 15 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--map-blue)', marginRight: 8 }}>
                    {cat.code}
                  </span>
                  {cat.label}
                </h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-faint)' }}>
                  {done}/{cat.items.length}
                </span>
              </div>
              <div className="manifest-list">
                {cat.items.map((item) => {
                  const isChecked = !!checked[item.id]
                  return (
                    <label
                      className={`manifest-item ${isChecked ? 'checked' : ''}`}
                      key={item.id}
                      htmlFor={item.id}
                    >
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={isChecked}
                        onChange={() => onToggle(item.id)}
                      />
                      <span className="m-label">{item.label}</span>
                      <span className="m-qty">{item.qty}</span>
                    </label>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
