import { useState } from 'react'

const staffData = [
  { id: 1, name: 'Carlos Mendez', role: 'Head Chef', department: 'Kitchen', status: 'On Shift', shift: '2:00 PM – 10:00 PM', phone: '+1 555-0101', email: 'carlos@meutmenu.com', rating: 4.9, yearsExp: 12 },
  { id: 2, name: 'Aria Kim', role: 'Sous Chef', department: 'Kitchen', status: 'On Shift', shift: '2:00 PM – 10:00 PM', phone: '+1 555-0102', email: 'aria@meutmenu.com', rating: 4.8, yearsExp: 8 },
  { id: 3, name: 'James Walker', role: 'Head Waiter', department: 'Service', status: 'On Break', shift: '4:00 PM – 12:00 AM', phone: '+1 555-0103', email: 'james@meutmenu.com', rating: 4.7, yearsExp: 5 },
  { id: 4, name: 'Nadia Russo', role: 'Pastry Chef', department: 'Kitchen', status: 'On Shift', shift: '10:00 AM – 6:00 PM', phone: '+1 555-0104', email: 'nadia@meutmenu.com', rating: 4.9, yearsExp: 10 },
  { id: 5, name: 'Tom Hayes', role: 'Bartender', department: 'Bar', status: 'On Shift', shift: '5:00 PM – 1:00 AM', phone: '+1 555-0105', email: 'tom@meutmenu.com', rating: 4.6, yearsExp: 6 },
  { id: 6, name: 'Sophie Laurent', role: 'Waitress', department: 'Service', status: 'On Shift', shift: '4:00 PM – 12:00 AM', phone: '+1 555-0106', email: 'sophie@meutmenu.com', rating: 4.5, yearsExp: 3 },
  { id: 7, name: 'Omar Patel', role: 'Line Cook', department: 'Kitchen', status: 'On Shift', shift: '2:00 PM – 10:00 PM', phone: '+1 555-0107', email: 'omar@meutmenu.com', rating: 4.4, yearsExp: 4 },
  { id: 8, name: 'Lisa Chen', role: 'Hostess', department: 'Service', status: 'Off Duty', shift: 'Tomorrow 4:00 PM', phone: '+1 555-0108', email: 'lisa@meutmenu.com', rating: 4.7, yearsExp: 2 },
  { id: 9, name: 'Pierre Dubois', role: 'Sommelier', department: 'Service', status: 'On Shift', shift: '5:00 PM – 11:00 PM', phone: '+1 555-0109', email: 'pierre@meutmenu.com', rating: 4.8, yearsExp: 15 },
  { id: 10, name: 'Maria Garcia', role: 'Dishwasher', department: 'Kitchen', status: 'On Shift', shift: '3:00 PM – 11:00 PM', phone: '+1 555-0110', email: 'maria@meutmenu.com', rating: 4.3, yearsExp: 1 },
]

const departments = ['All', 'Kitchen', 'Service', 'Bar']

function Staff() {
  const [activeDept, setActiveDept] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = activeDept === 'All' ? staffData : staffData.filter((s) => s.department === activeDept)

  const stats = {
    total: staffData.length,
    onShift: staffData.filter((s) => s.status === 'On Shift').length,
    onBreak: staffData.filter((s) => s.status === 'On Break').length,
    offDuty: staffData.filter((s) => s.status === 'Off Duty').length,
  }

  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex items-center gap-2 text-[11px] text-on-surface-variant mb-2">
            <span>MeutMenu</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-on-surface">Staff</span>
          </nav>
          <h2 className="text-3xl font-semibold text-on-surface">Staff Management</h2>
          <p className="text-on-surface-variant text-sm mt-1">Team roster, schedules, and performance metrics.</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-primary-container text-on-primary text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">person_add</span>
          Add Staff
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Staff', value: stats.total, icon: 'groups' },
          { label: 'On Shift', value: stats.onShift, icon: 'work', color: 'text-primary' },
          { label: 'On Break', value: stats.onBreak, icon: 'free_breakfast', color: 'text-yellow-400' },
          { label: 'Off Duty', value: stats.offDuty, icon: 'hotel', color: 'text-on-surface-variant' },
        ].map((s) => (
          <div key={s.label} className="tonal-layer-1 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{s.label}</p>
              <span className={`material-symbols-outlined text-lg ${s.color || 'text-on-surface-variant'}`}>{s.icon}</span>
            </div>
            <p className="text-3xl font-bold text-on-surface">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-6">
        {departments.map((d) => (
          <button
            key={d}
            onClick={() => setActiveDept(d)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeDept === d ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="tonal-layer-1 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#2A2A2A]">
              {['Employee', 'Role', 'Department', 'Status', 'Shift', 'Rating'].map((h) => (
                <th key={h} className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((person) => (
              <tr key={person.id} className="border-b border-[#2A2A2A] last:border-0 hover:bg-surface-container-high/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-lg">person</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{person.name}</p>
                      <p className="text-xs text-on-surface-variant">{person.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-on-surface">{person.role}</td>
                <td className="px-6 py-4 text-sm text-on-surface-variant">{person.department}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    person.status === 'On Shift' ? 'bg-primary/10 text-primary' :
                    person.status === 'On Break' ? 'bg-yellow-500/10 text-yellow-400' :
                    'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {person.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-on-surface-variant">{person.shift}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-400 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-sm text-on-surface">{person.rating}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowAddModal(false)}>
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-on-surface">Add Staff Member</h3>
              <button onClick={() => setShowAddModal(false)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">First Name</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Last Name</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Role</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="Head Chef" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Department</label>
                  <select className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring">
                    {departments.filter((d) => d !== 'All').map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Phone</label>
                <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="+1 555-0000" />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowAddModal(false)} className="flex-1 py-3 rounded-lg border border-[#2A2A2A] text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors">Cancel</button>
                <button className="flex-1 py-3 rounded-lg bg-primary-container text-on-primary text-sm font-semibold hover:brightness-110 transition-all">Add Member</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Staff
