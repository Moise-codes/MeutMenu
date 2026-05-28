function TopNavBar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 flex justify-between items-center px-8 z-40 bg-surface border-b border-outline-variant">
      <div className="flex items-center gap-6 w-1/2">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-on-surface"
            placeholder="Search orders, tables, or staff..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined text-xl">help</span>
          <span className="text-xs font-semibold tracking-wider uppercase">Support</span>
        </button>
        <div className="h-8 w-px bg-outline-variant mx-2" />
        <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
        </button>
        <div className="flex items-center gap-3 ml-2 cursor-pointer">
          <div className="text-right hidden lg:block">
            <p className="text-xs font-semibold text-on-surface">Marcus Vane</p>
            <p className="text-[10px] text-on-surface-variant">Owner</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopNavBar
