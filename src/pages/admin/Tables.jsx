import { useState } from 'react'

const tablesData = [
  { id: 1, seats: 2, zone: 'Terrace', status: 'Occupied', guest: 'Elena M.', order: '#ORD-0247', time: '1h 12m', amount: '$124.00' },
  { id: 2, seats: 4, zone: 'Main Hall', status: 'Available', guest: null, order: null, time: null, amount: null },
  { id: 3, seats: 2, zone: 'Main Hall', status: 'Occupied', guest: 'Marcus A.', order: '#ORD-0244', time: '0h 45m', amount: '$42.00' },
  { id: 4, seats: 6, zone: 'Private', status: 'Reserved', guest: 'Johnson Party', order: null, time: '7:30 PM', amount: null },
  { id: 5, seats: 4, zone: 'Main Hall', status: 'Occupied', guest: 'David C.', order: '#ORD-0246', time: '0h 28m', amount: '$67.50' },
  { id: 6, seats: 2, zone: 'Bar', status: 'Available', guest: null, order: null, time: null, amount: null },
  { id: 7, seats: 8, zone: 'Private', status: 'Occupied', guest: 'Corporate', order: '#ORD-0240', time: '2h 05m', amount: '$520.00' },
  { id: 8, seats: 4, zone: 'Terrace', status: 'Cleaning', guest: null, order: null, time: '~5 min', amount: null },
  { id: 9, seats: 4, zone: 'Main Hall', status: 'Occupied', guest: 'Naomi T.', order: '#ORD-0243', time: '0h 18m', amount: '$178.50' },
  { id: 10, seats: 2, zone: 'Bar', status: 'Available', guest: null, order: null, time: null, amount: null },
  { id: 11, seats: 6, zone: 'Main Hall', status: 'Reserved', guest: 'Williams', order: null, time: '8:00 PM', amount: null },
  { id: 12, seats: 4, zone: 'Terrace', status: 'Occupied', guest: 'Elena M.', order: '#ORD-0247', time: '0h 12m', amount: '$124.00' },
  { id: 13, seats: 2, zone: 'Bar', status: 'Occupied', guest: 'Walk-in', order: '#ORD-0239', time: '0h 35m', amount: '$56.00' },
  { id: 14, seats: 4, zone: 'Main Hall', status: 'Occupied', guest: 'Robert F.', order: '#ORD-0242', time: '0h 32m', amount: '$94.00' },
  { id: 15, seats: 2, zone: 'Bar', status: 'Available', guest: null, order: null, time: null, amount: null },
  { id: 16, seats: 6, zone: 'Terrace', status: 'Available', guest: null, order: null, time: null, amount: null },
  { id: 17, seats: 4, zone: 'Main Hall', status: 'Cleaning', guest: null, order: null, time: '~3 min', amount: null },
  { id: 18, seats: 2, zone: 'Main Hall', status: 'Occupied', guest: 'Sophie L.', order: '#ORD-0238', time: '1h 45m', amount: '$88.00' },
  { id: 19, seats: 4, zone: 'Terrace', status: 'Available', guest: null, order: null, time: null, amount: null },
  { id: 20, seats: 8, zone: 'Private', status: 'Reserved', guest: 'Anniversary', order: null, time: '8:30 PM', amount: null },
  { id: 21, seats: 4, zone: 'Main Hall', status: 'Occupied', guest: 'Amara O.', order: '#ORD-0241', time: '0h 08m', amount: '$86.00' },
  { id: 22, seats: 2, zone: 'Bar', status: 'Occupied', guest: 'Walk-in', order: '#ORD-0237', time: '0h 55m', amount: '$34.00' },
  { id: 23, seats: 4, zone: 'Main Hall', status: 'Available', guest: null, order: null, time: null, amount: null },
  { id: 24, seats: 2, zone: 'Terrace', status: 'Available', guest: null, order: null, time: null, amount: null },
]

const statusStyles = {
  Available: 'border-primary/40 bg-primary/5',
  Occupied: 'border-tertiary-container/40 bg-tertiary-container/5',
  Reserved: 'border-yellow-500/40 bg-yellow-500/5',
  Cleaning: 'border-on-surface-variant/30 bg-surface-container-high',
}

const statusDot = {
  Available: 'bg-primary',
  Occupied: 'bg-tertiary-container',
  Reserved: 'bg-yellow-500',
  Cleaning: 'bg-on-surface-variant',
}

const zones = ['All', 'Main Hall', 'Terrace', 'Bar', 'Private']
const statuses = ['All', 'Available', 'Occupied', 'Reserved', 'Cleaning']

function Tables() {
  const [zoneFilter, setZoneFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')

  const filtered = tablesData.filter((t) => {
    if (zoneFilter !== 'All' && t.zone !== zoneFilter) return false
    if (statusFilter !== 'All' && t.status !== statusFilter) return false
    return true
  })

  const stats = {
    total: tablesData.length,
    occupied: tablesData.filter((t) => t.status === 'Occupied').length,
    available: tablesData.filter((t) => t.status === 'Available').length,
    reserved: tablesData.filter((t) => t.status === 'Reserved').length,
  }

  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex items-center gap-2 text-[11px] text-on-surface-variant mb-2">
            <span>MeutMenu</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-on-surface">Tables</span>
          </nav>
          <h2 className="text-3xl font-semibold text-on-surface">Tables Management</h2>
          <p className="text-on-surface-variant text-sm mt-1">Floor plan and real-time table status.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Tables', value: stats.total, icon: 'grid_view' },
          { label: 'Occupied', value: stats.occupied, icon: 'group', color: 'text-tertiary-container' },
          { label: 'Available', value: stats.available, icon: 'check_circle', color: 'text-primary' },
          { label: 'Reserved', value: stats.reserved, icon: 'event', color: 'text-yellow-500' },
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

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs text-on-surface-variant uppercase tracking-wider">Zone:</span>
          {zones.map((z) => (
            <button
              key={z}
              onClick={() => setZoneFilter(z)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                zoneFilter === z ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {z}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-on-surface-variant uppercase tracking-wider">Status:</span>
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                statusFilter === s ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filtered.map((table) => (
          <div key={table.id} className={`rounded-xl p-4 border cursor-pointer hover:scale-105 transition-all ${statusStyles[table.status]}`}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-on-surface">T-{String(table.id).padStart(2, '0')}</span>
              <div className={`w-2.5 h-2.5 rounded-full ${statusDot[table.status]}`} />
            </div>
            <div className="flex items-center gap-1 mb-2">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
              <span className="text-xs text-on-surface-variant">{table.seats} seats</span>
            </div>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">{table.zone}</p>
            {table.guest && <p className="text-xs text-on-surface font-semibold truncate">{table.guest}</p>}
            {table.time && <p className="text-[10px] text-on-surface-variant mt-1">{table.time}</p>}
            {table.amount && <p className="text-xs text-primary font-semibold mt-1">{table.amount}</p>}
          </div>
        ))}
      </div>
    </>
  )
}

export default Tables
