import { Link } from 'react-router-dom'

const cartItems = [
  { id: 1, name: 'Wagyu Tartare', price: 55.00, qty: 1 },
  { id: 6, name: 'Truffle Risotto', price: 45.00, qty: 1 },
  { id: 12, name: 'Crème Brûlée', price: 15.00, qty: 2 },
]

function Checkout() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const tax = subtotal * 0.08
  const serviceCharge = subtotal * 0.15
  const total = subtotal + tax + serviceCharge

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/client/home" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Home</Link>
            <Link to="/client/menu" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Menu</Link>
            <Link to="/client/orders" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">My Orders</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link to="/client/menu" className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-primary transition-colors mb-4">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Menu
          </Link>
          <h2 className="text-3xl font-semibold text-on-surface mb-2">Checkout</h2>
          <p className="text-sm text-on-surface-variant">Review your order before placing.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="tonal-layer-1 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Order Items</h3>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-[#2A2A2A] last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">restaurant</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-on-surface">{item.name}</p>
                        <p className="text-xs text-on-surface-variant">Qty: {item.qty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-on-surface">${(item.price * item.qty).toFixed(2)}</span>
                      <button className="text-on-surface-variant hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tonal-layer-1 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Special Requests</h3>
              <textarea
                className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring h-24 resize-none"
                placeholder="Any dietary requirements, allergies, or special requests..."
              />
            </div>

            <div className="tonal-layer-1 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Table Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Table Number</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="Table 12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Guests</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="2" type="number" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="tonal-layer-1 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="text-on-surface">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Tax (8%)</span>
                  <span className="text-on-surface">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Service (15%)</span>
                  <span className="text-on-surface">${serviceCharge.toFixed(2)}</span>
                </div>
                <div className="border-t border-[#2A2A2A] pt-3 flex justify-between">
                  <span className="text-sm font-semibold text-on-surface">Total</span>
                  <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-primary-container text-on-primary font-semibold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary-container/20 text-sm mb-3">
                Place Order
              </button>
              <Link to="/client/menu" className="w-full py-3 rounded-lg border border-[#2A2A2A] text-on-surface-variant text-sm font-semibold hover:bg-surface-container-high transition-colors text-center block">
                Continue Browsing
              </Link>
            </div>

            <div className="tonal-layer-1 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">verified</span>
                <div>
                  <p className="text-xs font-semibold text-on-surface">Secure Order</p>
                  <p className="text-[10px] text-on-surface-variant">Your order is securely processed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Checkout
