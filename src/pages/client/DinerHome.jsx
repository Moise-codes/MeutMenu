import { Link } from 'react-router-dom'

const featuredDishes = [
  { name: "Chef's Tasting Menu", desc: '7-course seasonal tasting with wine pairing', price: '$195.00', tag: 'Signature' },
  { name: 'Wagyu A5 Ribeye', desc: 'Japanese A5 wagyu, 12oz, wasabi, ponzu', price: '$120.00', tag: 'Popular' },
  { name: 'Lobster Thermidor', desc: 'Whole Maine lobster, cognac cream, gruyère', price: '$72.00', tag: 'Chef Pick' },
]

const categories = [
  { name: 'Starters', icon: 'soup_kitchen', count: 8 },
  { name: 'Mains', icon: 'restaurant', count: 12 },
  { name: 'Desserts', icon: 'cake', count: 6 },
  { name: 'Beverages', icon: 'local_bar', count: 15 },
  { name: 'Specials', icon: 'auto_awesome', count: 3 },
]

function DinerHome() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/client/home" className="text-sm text-primary font-semibold">Home</Link>
            <Link to="/client/menu" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Menu</Link>
            <Link to="/client/orders" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">My Orders</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/client/checkout" className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full text-[10px] text-on-primary flex items-center justify-center font-bold">3</span>
            </Link>
            <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-on-surface-variant text-lg">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <section className="mb-12">
          <div className="bg-gradient-to-br from-primary-container/20 via-surface/50 to-surface rounded-2xl p-10 border border-primary-container/10">
            <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Welcome back, John</p>
            <h2 className="text-4xl font-semibold text-on-surface mb-3 leading-tight">Discover tonight&apos;s culinary masterpieces</h2>
            <p className="text-base text-on-surface-variant mb-6 max-w-lg">Browse our carefully curated menu, place your order, and enjoy an unforgettable dining experience.</p>
            <Link to="/client/menu" className="inline-flex items-center gap-2 bg-primary-container text-on-primary text-sm font-semibold px-6 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-lg">restaurant_menu</span>
              Browse Full Menu
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-on-surface">Categories</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link key={cat.name} to="/client/menu" className="tonal-layer-1 rounded-xl p-5 text-center hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary text-3xl mb-2 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                <p className="text-sm font-semibold text-on-surface">{cat.name}</p>
                <p className="text-xs text-on-surface-variant">{cat.count} items</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-on-surface">Featured Dishes</h3>
            <Link to="/client/menu" className="text-xs text-primary hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredDishes.map((dish) => (
              <div key={dish.name} className="tonal-layer-1 rounded-xl overflow-hidden hover:border-primary/30 transition-colors group">
                <div className="h-40 bg-gradient-to-br from-surface-container-high to-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface-variant/30 text-6xl group-hover:text-primary/30 transition-colors">restaurant</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{dish.tag}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-on-surface mb-1">{dish.name}</h4>
                  <p className="text-xs text-on-surface-variant mb-3">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{dish.price}</span>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary text-xs font-semibold hover:brightness-110 transition-all">
                      <span className="material-symbols-outlined text-sm">add</span>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tonal-layer-1 rounded-2xl p-8 text-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-3 block">support_agent</span>
          <h3 className="text-xl font-semibold text-on-surface mb-2">Need Assistance?</h3>
          <p className="text-sm text-on-surface-variant mb-4 max-w-md mx-auto">Our staff is ready to help with dietary requirements, allergies, or special requests.</p>
          <button className="px-6 py-3 border border-outline-variant text-on-surface text-sm font-semibold rounded-lg hover:bg-surface-container-high transition-colors">
            Call Your Waiter
          </button>
        </section>
      </main>
    </div>
  )
}

export default DinerHome
