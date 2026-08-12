const STEPS = [
  {
    title: 'Know your triggers',
    body: 'Decide in advance what would make your household evacuate — an official alert, visible smoke, rising water — so no one hesitates when it happens.',
  },
  {
    title: 'Grab the kit, not more',
    body: 'Your packed emergency kit and go-bag should be by the main door. Do not stop to gather extra items once the decision is made.',
  },
  {
    title: 'Shut off utilities if time allows',
    body: 'Turn off gas and electricity at the mains only if it is safe and quick to do so — do not delay leaving for this.',
  },
  {
    title: 'Take the agreed route',
    body: 'Use the primary route to your nearby meeting point unless officials direct otherwise. Have a backup route in mind in case it is blocked.',
  },
  {
    title: 'Check in',
    body: 'Once safe, contact your out-of-town contact so they can relay your status to the rest of the family.',
  },
]

export default function EvacuationPlan({ meetingPoints, onNavigate }) {
  return (
    <div>
      <div className="section-label">Route & Evacuation</div>

      <div className="panel">
        <h2 className="block-title">Evacuation Sequence</h2>
        <p className="subtext">Walk through this order with your household so everyone knows their role.</p>
        {STEPS.map((step, i) => (
          <div className="route-step" key={step.title}>
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="step-body">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="panel">
        <h2 className="block-title">Your Meeting Points</h2>
        <p className="subtext">Pulled from your Family Plan.</p>
        {meetingPoints.length === 0 ? (
          <div>
            <p className="subtext" style={{ marginBottom: 12 }}>
              You haven't set any meeting points yet.
            </p>
            <button className="btn" onClick={() => onNavigate('family')}>
              Add meeting points
            </button>
          </div>
        ) : 
          (
          <table className="record-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {meetingPoints.map((p) => (
                <tr key={p.id}>
                  <td>{p.label}</td>
                  <td>{p.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
