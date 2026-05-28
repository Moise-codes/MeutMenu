import { useState } from 'react'

const ordersData = [
  { id: '#ORD-0247', client: 'Elena Marchetti', table: 'Table 12', items: ['Wagyu Tartare', 'Truffle Risotto', 'Crème Brûlée'], total: '$124.00', status: 'Preparing', time: '12 min ago', priority: 'high' },
  { id: '#ORD-0246', client: 'David Chen', table: 'Table 05', items: ['Pan-Seared Sea Bass', 'Garden Salad'], total: '$67.50', status: 'Served', time: '28 min ago', priority: 'normal' },
  { id: '#ORD-0245', client: 'Sarah Williams', table: 'Table 18', items: ['Lobster Thermidor', 'Foie Gras', 'Wagyu A5', 'Truffle Fries', 'Dom Pérignon'], total: '$215.00', status: 'New', time: '2 min ago', priority: 'high' },
  { id: '#ORD-0244', client: 'Marcus Aurelius', table: 'Table 03', items: ['Caesar Salad'], total: '$42.00', status: 'Completed', time: '45 min ago', priority: 'normal' },
  { id: '#ORD-0243', client: 'Naomi Tanaka', table: 'Table 09', items: ['Sashimi Platter', 'Miso Soup', 'Tempura', 'Matcha Tiramisu'], total: '$178.50', status: 'Preparing', time: '18 min ago', priority: 'normal' },
  { id: '#ORD-0242', client: 'Robert Fischer', table: 'Table 14', items: ['Steak Frites', 'Onion Soup'], total: '$94.00', status: 'Served', time: '32 min ago', priority: 'normal' },
  { id: '#ORD-0241', client: 'Amara Osei', table: 'Table 21', items: ['Jollof Rice Special', 'Grilled Prawns', 'Plantain Chips'], total: '$86.00', status: 'Preparing', time: '8 min ago', priority: 'high' },
  { id: '#ORD-0240', client: 'Jean Dupont', table: 'Table 07', items: ['Coq au Vin', 'Cheese Board'], total: '$112.00', status: 'New', time: '1 min ago', priority: 'normal' },
]

const statusColors = {
  New: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Preparing: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Served: 'bg-primary/10 text-primary border-primary/20',
  Completed: 'bg-surface-container-high text-on-surface-variant border-outline-variant',
}

const filters = ['All', 'New', 'Preparing', 'Served', 'Completed']

function Orders() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? ordersData : ordersData.filter((o) => o.status === activeFilter)

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-on-surface mb-1">Orders Management</h2>
        <p className="text-on-surface-variant text-sm">Live feed of kitchen operations and guest transactions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'New Orders', count: ordersData.filter((o) => o.status === 'New').length, sub: '+2 from last hour', icon: 'fiber_new' },
          { label: 'Preparing', count: ordersData.filter((o) => o.status === 'Preparing').length, sub: 'Kitchen at 84% cap', icon: 'oven_gen' },
          { label: 'Completed Today', count: ordersData.filter((o) => o.status === 'Completed').length + 41, sub: '$3,240 revenue', icon: 'check_circle' },
        ].map((card) => (
          <div key={card.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl">{card.icon}</span>
            </div>
            <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider mb-2">{card.label}</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-4xl font-bold">{card.count}</h3>
              <span className="text-primary text-xs">{card.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeFilter === f
                ? 'bg-primary-container text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((order) => (
          <div key={order.id} className="tonal-layer-1 rounded-xl p-5 hover:border-primary/30 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center mt-0.5">
                  <span className="material-symbols-outlined text-on-surface-variant">receipt_long</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-semibold text-on-surface">{order.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[order.status]}`}>{order.status}</span>
                    {order.priority === 'high' && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary border border-tertiary/20">Priority</span>
                    )}
                  </div>
                  <p className="text-sm text-on-surface">{order.client} · {order.table}</p>
                  <p className="text-xs text-on-surface-variant mt-1">{order.items.join(', ')}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-on-surface">{order.total}</p>
                <p className="text-xs text-on-surface-variant">{order.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Orders
