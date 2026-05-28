import { Link } from 'react-router-dom'

const kpiCards = [
  { label: 'Total Revenue', value: '$8,420', trend: '+12%', icon: 'payments', trendUp: true },
  { label: 'Total Orders', value: '94', trend: '+8%', icon: 'receipt', trendUp: true },
  { label: 'Tables Occupied', value: '18', subtext: '/ 24', icon: 'table_restaurant', progress: 75 },
  { label: 'Avg. Order Value', value: '$89.50', subtext: 'vs $84.20 prev.', icon: 'analytics' },
]

const recentOrders = [
  { id: '#ORD-0247', table: 'Table 12', items: 3, total: '$124.00', status: 'Preparing', statusColor: 'text-yellow-400' },
  { id: '#ORD-0246', table: 'Table 05', items: 2, total: '$67.50', status: 'Served', statusColor: 'text-primary' },
  { id: '#ORD-0245', table: 'Table 18', items: 5, total: '$215.00', status: 'New', statusColor: 'text-blue-400' },
  { id: '#ORD-0244', table: 'Table 03', items: 1, total: '$42.00', status: 'Completed', statusColor: 'text-on-surface-variant' },
  { id: '#ORD-0243', table: 'Table 09', items: 4, total: '$178.50', status: 'Preparing', statusColor: 'text-yellow-400' },
]

const topDishes = [
  { name: 'Wagyu Tartare', orders: 34, revenue: '$1,870', trend: '+18%' },
  { name: 'Truffle Risotto', orders: 28, revenue: '$1,260', trend: '+12%' },
  { name: 'Pan-Seared Sea Bass', orders: 25, revenue: '$1,125', trend: '+5%' },
  { name: 'Crème Brûlée', orders: 22, revenue: '$330', trend: '+22%' },
]

function Overview() {
  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex items-center gap-2 text-[11px] text-on-surface-variant mb-2">
            <span>MeutMenu</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-on-surface">Overview</span>
          </nav>
          <h2 className="text-3xl font-semibold text-on-surface">Good evening, Marcus</h2>
          <p className="text-on-surface-variant text-sm mt-1">Here&apos;s what&apos;s happening in your kitchen tonight.</p>
        </div>
        <Link
          to="/admin/orders"
          className="flex items-center gap-2 bg-primary-container text-on-primary text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary-container/10"
        >
          <span className="material-symbols-outlined">add</span>
          New Order
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpiCards.map((card) => (
          <div key={card.label} className="tonal-layer-1 p-6 rounded-xl flex flex-col justify-between h-32 hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{card.label}</p>
              <span className="material-symbols-outlined text-primary text-xl">{card.icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-semibold">{card.value}</p>
              {card.trend && card.trendUp && (
                <span className="text-[10px] text-primary flex items-center bg-primary/10 px-1.5 py-0.5 rounded">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  {card.trend}
                </span>
              )}
              {card.subtext && !card.progress && (
                <span className="text-[10px] text-on-surface-variant">{card.subtext}</span>
              )}
              {card.progress && (
                <>
                  <span className="text-on-surface-variant text-xs ml-1">{card.subtext}</span>
                  <div className="w-20 h-1.5 bg-outline-variant rounded-full ml-auto overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${card.progress}%` }} />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 tonal-layer-1 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-on-surface">Recent Orders</h3>
            <Link to="/admin/orders" className="text-xs text-primary hover:underline">View all →</Link>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between py-3 border-b border-[#2A2A2A] last:border-0">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-on-surface">{order.id}</span>
                  <span className="text-xs text-on-surface-variant">{order.table}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-on-surface-variant">{order.items} items</span>
                  <span className="text-sm font-semibold text-on-surface w-20 text-right">{order.total}</span>
                  <span className={`text-xs font-semibold w-20 text-right ${order.statusColor}`}>{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tonal-layer-1 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-on-surface">Top Dishes</h3>
            <span className="text-xs text-on-surface-variant">Tonight</span>
          </div>
          <div className="space-y-4">
            {topDishes.map((dish, i) => (
              <div key={dish.name} className="flex items-center gap-4">
                <span className="text-lg font-bold text-on-surface-variant/50 w-6">{i + 1}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{dish.name}</p>
                  <p className="text-xs text-on-surface-variant">{dish.orders} orders · {dish.revenue}</p>
                </div>
                <span className="text-xs text-primary">{dish.trend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="tonal-layer-1 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-on-surface mb-4">Kitchen Status</h3>
          <div className="space-y-4">
            {[
              { station: 'Grill', chef: 'Carlos M.', load: 85, status: 'Active' },
              { station: 'Sauté', chef: 'Aria K.', load: 72, status: 'Active' },
              { station: 'Pastry', chef: 'Jean L.', load: 45, status: 'Active' },
              { station: 'Cold', chef: 'Nadia R.', load: 30, status: 'Idle' },
            ].map((s) => (
              <div key={s.station} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">local_fire_department</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold text-on-surface">{s.station}</p>
                    <span className={`text-xs ${s.status === 'Active' ? 'text-primary' : 'text-on-surface-variant'}`}>{s.status}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-1">{s.chef}</p>
                  <div className="w-full h-1 bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${s.load}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tonal-layer-1 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-on-surface mb-4">Active Staff</h3>
          <div className="space-y-3">
            {[
              { name: 'Carlos Mendez', role: 'Head Chef', status: 'On Shift', icon: 'chef_hat' },
              { name: 'Aria Kim', role: 'Sous Chef', status: 'On Shift', icon: 'restaurant' },
              { name: 'James Walker', role: 'Waiter', status: 'On Break', icon: 'room_service' },
              { name: 'Nadia Russo', role: 'Pastry Chef', status: 'On Shift', icon: 'cake' },
              { name: 'Tom Hayes', role: 'Bartender', status: 'On Shift', icon: 'local_bar' },
            ].map((person) => (
              <div key={person.name} className="flex items-center gap-3 py-2 border-b border-[#2A2A2A] last:border-0">
                <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">person</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-on-surface">{person.name}</p>
                  <p className="text-xs text-on-surface-variant">{person.role}</p>
                </div>
                <span className={`text-xs font-semibold ${person.status === 'On Shift' ? 'text-primary' : 'text-yellow-400'}`}>
                  {person.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview
