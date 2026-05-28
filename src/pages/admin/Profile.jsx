function Profile() {
  return (
    <>
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-[11px] text-on-surface-variant mb-2">
          <span>MeutMenu</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface">Profile</span>
        </nav>
        <h2 className="text-3xl font-semibold text-on-surface">My Profile</h2>
        <p className="text-on-surface-variant text-sm mt-1">Manage your personal information and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="tonal-layer-1 rounded-xl p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-on-primary-container text-4xl">person</span>
          </div>
          <h3 className="text-xl font-semibold text-on-surface">Marcus Vane</h3>
          <p className="text-sm text-on-surface-variant">Owner & Executive Chef</p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">Owner</span>
            <span className="text-xs px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant">Admin</span>
          </div>
          <div className="mt-6 pt-6 border-t border-[#2A2A2A] space-y-3 text-left">
            {[
              { icon: 'email', text: 'marcus@meutmenu.com' },
              { icon: 'phone', text: '+1 (555) 000-0001' },
              { icon: 'location_on', text: 'New York, NY' },
              { icon: 'calendar_today', text: 'Member since Jan 2024' },
            ].map((item) => (
              <div key={item.icon} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-lg">{item.icon}</span>
                <span className="text-sm text-on-surface-variant">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="tonal-layer-1 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-on-surface mb-4">Personal Information</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">First Name</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="Marcus" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Last Name</label>
                  <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="Vane" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email</label>
                <input type="email" className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="marcus@meutmenu.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Phone</label>
                <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="+1 (555) 000-0001" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Bio</label>
                <textarea className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring h-24 resize-none" defaultValue="Award-winning chef with 15+ years of experience in fine dining. Passionate about sustainable sourcing and innovative culinary techniques." />
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-3 bg-primary-container text-on-primary text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="tonal-layer-1 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-on-surface mb-4">Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Updated menu item: Wagyu Tartare', time: '2 hours ago', icon: 'restaurant_menu' },
                { action: 'Approved order #ORD-0247', time: '3 hours ago', icon: 'check_circle' },
                { action: 'Added staff member: Omar Patel', time: 'Yesterday', icon: 'person_add' },
                { action: 'Modified table layout', time: '2 days ago', icon: 'grid_view' },
                { action: 'Generated monthly report', time: '3 days ago', icon: 'analytics' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 py-2 border-b border-[#2A2A2A] last:border-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-lg">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-on-surface">{activity.action}</p>
                    <p className="text-xs text-on-surface-variant">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
