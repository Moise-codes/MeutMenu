import { Link } from 'react-router-dom'

const orders = [
  {
    id: '#ORD-0301',
    date: 'Today, 7:30 PM',
    status: 'Preparing',
    items: [
      { name: 'Wagyu Tartare', qty: 1, price: '$55.00' },
      { name: 'Truffle Risotto', qty: 1, price: '$45.00' },
      { name: 'Crème Brûlée', qty: 2, price: '$30.00' },
    ],
    total: '$130.00',
    table: 'Table 12',
  },
  {
    id: '#ORD-0289',
    date: 'Yesterday, 8:15 PM',
    status: 'Completed',
    items: [
      { name: 'Lobster Thermidor', qty: 1, price: '$72.00' },
      { name: 'Espresso Martini', qty: 2, price: '$36.00' },
    ],
    total: '$108.00',
    table: 'Table 05',
  },
  {
    id: '#ORD-0275',
    date: 'May 25, 7:00 PM',
    status: 'Completed',
    items: [
      { name: "Chef's Tasting Menu", qty: 2, price: '$390.00' },
    ],
    total: '$390.00',
    table: 'Table 20',
  },
]

const statusColors = {
  Preparing: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Served: 'bg-primary/10 text-primary border-primary/20',
  Completed: 'bg-surface-container-high text-on-surface-variant border-outline-variant',
}

function MyOrders() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/client/home" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Home</Link>
            <Link to="/client/menu" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Menu</Link>
            <Link to="/client/orders" className="text-sm text-primary font-semibold">My Orders</Link>
          </nav>
          <Link to="/client/checkout" className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-on-surface mb-2">My Orders</h2>
          <p className="text-sm text-on-surface-variant">Track your current and past orders.</p>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="tonal-layer-1 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono font-semibold text-on-surface">{order.id}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${statusColors[order.status]}`}>{order.status}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-on-surface-variant">{order.date}</p>
                  <p className="text-xs text-on-surface-variant">{order.table}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#2A2A2A] last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-on-surface-variant w-6">x{item.qty}</span>
                      <span className="text-sm text-on-surface">{item.name}</span>
                    </div>
                    <span className="text-sm text-on-surface-variant">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-[#2A2A2A]">
                <span className="text-sm text-on-surface-variant">Total</span>
                <span className="text-xl font-bold text-primary">{order.total}</span>
              </div>

              {order.status === 'Preparing' && (
                <div className="mt-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-400 text-lg">schedule</span>
                    <span className="text-xs text-yellow-400">Estimated preparation time: 15-20 minutes</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default MyOrders
