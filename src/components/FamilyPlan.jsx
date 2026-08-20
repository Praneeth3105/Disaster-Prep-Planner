import { useState } from 'react'
export default function FamilyPlan({ contacts, setContacts, meetingPoints, setMeetingPoints }) {
  const [contactForm, setContactForm] = useState({ name: '', relation: '', phone: '' })
  const [pointForm, setPointForm] = useState({ label: '', address: '' })

  const addContact = (e) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.phone) return
    setContacts([...contacts, { ...contactForm, id: crypto.randomUUID() }])
    setContactForm({ name: '', relation: '', phone: '' })
  }

  const removeContact = (id) => setContacts(contacts.filter((c) => c.id !== id))

  const addPoint = (e) => {
    e.preventDefault()
    if (!pointForm.label || !pointForm.address) return
    setMeetingPoints([...meetingPoints, { ...pointForm, id: crypto.randomUUID() }])
    setPointForm({ label: '', address: '' })
  }

  const removePoint = (id) => setMeetingPoints(meetingPoints.filter((p) => p.id !== id))

  return (
    <div>
      <div className="section-label">Communication Plan</div>

      <div className="panel">
        <h2 className="block-title">Emergency Contacts</h2>
        <p className="subtext">
          Include one out-of-town contact — local lines are often congested in a disaster, but a
          long-distance call may still connect.
        </p>

        <form className="form-grid" onSubmit={addContact}>
          <input
            type="text"
            placeholder="Full name"
            value={contactForm.name}
            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Relation (e.g. Sister, Neighbour)"
            value={contactForm.relation}
            onChange={(e) => setContactForm({ ...contactForm, relation: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={contactForm.phone}
            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
          />
          <button className="btn" type="submit">
            Add contact
          </button>
        </form>

        <table className="record-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Relation</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 && (
              <tr>
                <td colSpan={4} className="empty-row">
                  No contacts saved yet — add the first above.
                </td>
              </tr>
            )}
            {contacts.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.relation || '—'}</td>
                <td style={{ fontFamily: 'var(--font-mono)' }}>{c.phone}</td>
                <td>
                  <button className="btn btn-ghost" onClick={() => removeContact(c.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel">
        <h2 className="block-title">Meeting Points</h2>
        <p className="subtext">
          Agree on where to reunite if home isn't safe or reachable — one nearby, one outside your
          immediate neighbourhood.
        </p>

        <form className="form-grid" onSubmit={addPoint}>
          <input
            type="text"
            placeholder="Label (e.g. Nearby, Out-of-area)"
            value={pointForm.label}
            onChange={(e) => setPointForm({ ...pointForm, label: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address or landmark"
            value={pointForm.address}
            onChange={(e) => setPointForm({ ...pointForm, address: e.target.value })}
          />
          <button className="btn" type="submit">
            Add meeting point
          </button>
        </form>

        <table className="record-table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {meetingPoints.length === 0 && (
              <tr>
                <td colSpan={3} className="empty-row">
                  No meeting points set yet — add the first above.
                </td>
              </tr>
            )}
            {meetingPoints.map((p) => (
              <tr key={p.id}>
                <td>{p.label}</td>
                <td>{p.address}</td>
                <td>
                  <button className="btn btn-ghost" onClick={() => removePoint(p.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
