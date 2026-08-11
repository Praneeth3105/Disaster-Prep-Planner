import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Checklist from './components/Checklist'
import FamilyPlan from './components/FamilyPlan'
import EvacuationPlan from './components/EvacuationPlan'
import Resources from './components/Resources'
import { useLocalStorage } from './hooks/useLocalStorage'

const PAGE_TITLES = {
  dashboard: ['Overview', 'Dashboard'],
  checklist: ['Kit Preparation', 'Supply Checklist'],
  family: ['Household', 'Family Communication Plan'],
  evacuation: ['Route Planning', 'Evacuation Plan'],
  resources: ['Reference', 'Alerts & Resources'],
}

export default function App() {
  const [page, setPage] = useState('dashboard')
  const [checked, setChecked] = useLocalStorage('readyline-checked', {})
  const [contacts, setContacts] = useLocalStorage('readyline-contacts', [])
  const [meetingPoints, setMeetingPoints] = useLocalStorage('readyline-meeting-points', [])

  const toggleItem = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))

  const [eyebrow, title] = PAGE_TITLES[page]

  return (
    <div className="app-shell">
      <Sidebar active={page} onNavigate={setPage} />
      <main className="app-main">
        <header className="app-header">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
          </div>
          <div className="header-status">
            READYLINE FIELD PLANNER
            <br />
            LOCAL DEVICE STORAGE
          </div>
        </header>

        {page === 'dashboard' && (
          <Dashboard
            checked={checked}
            contacts={contacts}
            meetingPoints={meetingPoints}
            onNavigate={setPage}
          />
        )}
        {page === 'checklist' && <Checklist checked={checked} onToggle={toggleItem} />}
        {page === 'family' && (
          <FamilyPlan
            contacts={contacts}
            setContacts={setContacts}
            meetingPoints={meetingPoints}
            setMeetingPoints={setMeetingPoints}
          />
        )}
        {page === 'evacuation' && (
          <EvacuationPlan meetingPoints={meetingPoints} onNavigate={setPage} />
        )}
        {page === 'resources' && <Resources />}
      </main>
    </div>
  )
}
