import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/admin/overview', icon: 'dashboard', label: 'Overview' },
  { to: '/admin/orders', icon: 'receipt_long', label: 'Orders' },
  { to: '/admin/menu', icon: 'restaurant_menu', label: 'Menu' },
  { to: '/admin/tables', icon: 'grid_view', label: 'Tables' },
  { to: '/admin/staff', icon: 'badge', label: 'Staff' },
]

const bottomItems = [
  { to: '/admin/settings', icon: 'settings', label: 'Settings' },
  { to: '/admin/profile', icon: 'account_circle', label: 'Profile' },
]

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? 'text-primary font-bold border-r-2 border-primary bg-primary-container/10'
        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
    }`

  return (
    <aside className="h-screen w-64 flex flex-col fixed left-0 top-0 border-r border-outline-variant bg-surface z-50">
      <div className="flex flex-col h-full py-8 overflow-y-auto custom-scrollbar">
        <div className="px-8 mb-10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">restaurant_menu</span>
            <div>
              <h1 className="text-xl font-black text-primary">MeutMenu</h1>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Kitchen Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-xs font-semibold tracking-wider uppercase">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="px-4 mt-auto space-y-1">
          {bottomItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-xs font-semibold tracking-wider uppercase">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
