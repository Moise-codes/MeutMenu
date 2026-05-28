import { useState } from 'react'

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Beverages', 'Specials']

const menuItems = [
  { id: 1, name: 'Wagyu Tartare', category: 'Starters', price: '$55.00', description: 'Hand-cut A5 wagyu, quail egg, truffle vinaigrette', available: true, popular: true },
  { id: 2, name: 'Truffle Risotto', category: 'Mains', price: '$45.00', description: 'Carnaroli rice, black truffle, aged parmesan, bone marrow', available: true, popular: true },
  { id: 3, name: 'Pan-Seared Sea Bass', category: 'Mains', price: '$48.00', description: 'Chilean sea bass, saffron beurre blanc, seasonal vegetables', available: true, popular: false },
  { id: 4, name: 'Lobster Thermidor', category: 'Mains', price: '$72.00', description: 'Whole Maine lobster, cognac cream, gruyère gratin', available: true, popular: false },
  { id: 5, name: 'Crème Brûlée', category: 'Desserts', price: '$15.00', description: 'Madagascar vanilla bean, caramelized sugar crust', available: true, popular: true },
  { id: 6, name: 'Foie Gras Terrine', category: 'Starters', price: '$38.00', description: 'Duck liver, Sauternes gelée, brioche toast', available: false, popular: false },
  { id: 7, name: 'Wagyu A5 Ribeye', category: 'Mains', price: '$120.00', description: 'Japanese A5 wagyu, 12oz, wasabi, ponzu', available: true, popular: true },
  { id: 8, name: 'Matcha Tiramisu', category: 'Desserts', price: '$18.00', description: 'Ceremonial matcha, mascarpone, ladyfingers', available: true, popular: false },
  { id: 9, name: 'Caesar Salad', category: 'Starters', price: '$22.00', description: 'Romaine, anchovy dressing, parmesan crisp, croutons', available: true, popular: false },
  { id: 10, name: 'Dom Pérignon 2012', category: 'Beverages', price: '$320.00', description: 'Vintage champagne, 750ml', available: true, popular: false },
  { id: 11, name: 'Chef\'s Tasting Menu', category: 'Specials', price: '$195.00', description: '7-course seasonal tasting with wine pairing', available: true, popular: true },
  { id: 12, name: 'Espresso Martini', category: 'Beverages', price: '$18.00', description: 'Vodka, coffee liqueur, fresh espresso', available: true, popular: false },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <div className="flex justify-between items-end mb-8">
        <div>
          <nav className="flex items-center gap-2 text-[11px] text-on-surface-variant mb-2">
            <span>MeutMenu</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-on-surface">Menu</span>
          </nav>
          <h2 className="text-3xl font-semibold text-on-surface">Menu Management</h2>
          <p className="text-on-surface-variant text-sm mt-1">{menuItems.length} items · {menuItems.filter((i) => i.available).length} available</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-primary-container text-on-primary text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">add</span>
          Add Item
        </button>
      </div>

      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-primary-container text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="tonal-layer-1 rounded-xl p-5 hover:border-primary/30 transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                {item.popular && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Popular</span>
                )}
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.available ? 'bg-primary/10 text-primary' : 'bg-error/10 text-error'}`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined text-lg">more_vert</span>
              </button>
            </div>
            <h3 className="text-lg font-semibold text-on-surface mb-1">{item.name}</h3>
            <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">{item.description}</p>
            <div className="flex justify-between items-center pt-3 border-t border-[#2A2A2A]">
              <span className="text-xl font-bold text-primary">{item.price}</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-wider">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowAddModal(false)}>
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-on-surface">Add Menu Item</h3>
              <button onClick={() => setShowAddModal(false)} className="text-on-surface-variant hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Item Name</label>
                <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="Dish name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Price</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="$0.00" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Category</label>
                  <select className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring">
                    {categories.filter((c) => c !== 'All').map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Description</label>
                <textarea className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring h-24 resize-none" placeholder="Ingredients, preparation style..." />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowAddModal(false)} className="flex-1 py-3 rounded-lg border border-[#2A2A2A] text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors">Cancel</button>
                <button className="flex-1 py-3 rounded-lg bg-primary-container text-on-primary text-sm font-semibold hover:brightness-110 transition-all">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
