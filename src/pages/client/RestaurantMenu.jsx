import { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { id: 1, name: 'Wagyu Tartare', category: 'Starters', price: 55, description: 'Hand-cut A5 wagyu, quail egg, truffle vinaigrette', popular: true },
  { id: 2, name: 'Caesar Salad', category: 'Starters', price: 22, description: 'Romaine, anchovy dressing, parmesan crisp, croutons', popular: false },
  { id: 3, name: 'Foie Gras Terrine', category: 'Starters', price: 38, description: 'Duck liver, Sauternes gelée, brioche toast', popular: false },
  { id: 4, name: 'Sashimi Platter', category: 'Starters', price: 45, description: 'Selection of premium-grade tuna, salmon, and hamachi', popular: true },
  { id: 5, name: 'French Onion Soup', category: 'Starters', price: 18, description: 'Caramelized onions, gruyère crouton, beef broth', popular: false },
  { id: 6, name: 'Truffle Risotto', category: 'Mains', price: 45, description: 'Carnaroli rice, black truffle, aged parmesan, bone marrow', popular: true },
  { id: 7, name: 'Pan-Seared Sea Bass', category: 'Mains', price: 48, description: 'Chilean sea bass, saffron beurre blanc, seasonal vegetables', popular: false },
  { id: 8, name: 'Lobster Thermidor', category: 'Mains', price: 72, description: 'Whole Maine lobster, cognac cream, gruyère gratin', popular: true },
  { id: 9, name: 'Wagyu A5 Ribeye', category: 'Mains', price: 120, description: 'Japanese A5 wagyu, 12oz, wasabi, ponzu', popular: true },
  { id: 10, name: 'Coq au Vin', category: 'Mains', price: 42, description: 'Braised chicken, red wine, pearl onions, mushrooms', popular: false },
  { id: 11, name: 'Steak Frites', category: 'Mains', price: 52, description: 'Dry-aged ribeye, truffle fries, béarnaise sauce', popular: false },
  { id: 12, name: 'Crème Brûlée', category: 'Desserts', price: 15, description: 'Madagascar vanilla bean, caramelized sugar crust', popular: true },
  { id: 13, name: 'Matcha Tiramisu', category: 'Desserts', price: 18, description: 'Ceremonial matcha, mascarpone, ladyfingers', popular: false },
  { id: 14, name: 'Chocolate Soufflé', category: 'Desserts', price: 22, description: 'Valrhona dark chocolate, vanilla crème anglaise', popular: true },
  { id: 15, name: 'Dom Pérignon 2012', category: 'Beverages', price: 320, description: 'Vintage champagne, 750ml', popular: false },
  { id: 16, name: 'Espresso Martini', category: 'Beverages', price: 18, description: 'Vodka, coffee liqueur, fresh espresso', popular: true },
  { id: 17, name: 'Negroni', category: 'Beverages', price: 16, description: 'Gin, Campari, sweet vermouth', popular: false },
  { id: 18, name: "Chef's Tasting Menu", category: 'Specials', price: 195, description: '7-course seasonal tasting with wine pairing', popular: true },
]

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Beverages', 'Specials']

function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [cart, setCart] = useState({})

  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter((i) => i.category === activeCategory)
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = { ...prev }
      if (updated[id] > 1) updated[id] -= 1
      else delete updated[id]
      return updated
    })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/client/home" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Home</Link>
            <Link to="/client/menu" className="text-sm text-primary font-semibold">Menu</Link>
            <Link to="/client/orders" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">My Orders</Link>
          </nav>
          <Link to="/client/checkout" className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full text-[10px] text-on-primary flex items-center justify-center font-bold">{cartCount}</span>
            )}
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-on-surface mb-2">Our Menu</h2>
          <p className="text-sm text-on-surface-variant">Explore our curated selection of fine dining dishes.</p>
        </div>

        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div key={item.id} className="tonal-layer-1 rounded-xl p-5 hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-on-surface">{item.name}</h3>
                    {item.popular && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">Popular</span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">{item.description}</p>
                  <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  {cart[item.id] ? (
                    <div className="flex items-center gap-2">
                      <button onClick={() => removeFromCart(item.id)} className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="text-sm font-semibold text-on-surface w-6 text-center">{cart[item.id]}</span>
                      <button onClick={() => addToCart(item.id)} className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center hover:brightness-110 transition-all">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => addToCart(item.id)} className="flex items-center gap-1 px-3 py-2 rounded-lg bg-primary-container text-on-primary text-xs font-semibold hover:brightness-110 transition-all">
                      <span className="material-symbols-outlined text-sm">add</span>
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default RestaurantMenu
