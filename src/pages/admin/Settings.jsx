import { useState } from 'react'

const settingsSections = [
  { id: 'general', icon: 'tune', label: 'General' },
  { id: 'notifications', icon: 'notifications', label: 'Notifications' },
  { id: 'appearance', icon: 'palette', label: 'Appearance' },
  { id: 'billing', icon: 'payments', label: 'Billing' },
  { id: 'integrations', icon: 'extension', label: 'Integrations' },
  { id: 'security', icon: 'shield', label: 'Security' },
]

function Settings() {
  const [activeSection, setActiveSection] = useState('general')

  return (
    <>
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-[11px] text-on-surface-variant mb-2">
          <span>MeutMenu</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface">Settings</span>
        </nav>
        <h2 className="text-3xl font-semibold text-on-surface">Settings</h2>
        <p className="text-on-surface-variant text-sm mt-1">Configure your restaurant management platform.</p>
      </div>

      <div className="flex gap-8">
        <nav className="w-56 shrink-0 space-y-1">
          {settingsSections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm transition-colors ${
                activeSection === s.id
                  ? 'text-primary font-semibold bg-primary-container/10 border-r-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex-1 max-w-2xl">
          {activeSection === 'general' && (
            <div className="space-y-6">
              <div className="tonal-layer-1 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-on-surface mb-4">Restaurant Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Restaurant Name</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="MeutMenu Fine Dining" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Phone</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email</label>
                      <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="info@meutmenu.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Address</label>
                    <input className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" defaultValue="123 Culinary Ave, New York, NY 10001" />
                  </div>
                </div>
              </div>

              <div className="tonal-layer-1 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-on-surface mb-4">Operating Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday – Friday', hours: '11:00 AM – 11:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 12:00 AM' },
                    { day: 'Sunday', hours: '10:00 AM – 10:00 PM' },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-2 border-b border-[#2A2A2A] last:border-0">
                      <span className="text-sm text-on-surface">{item.day}</span>
                      <span className="text-sm text-on-surface-variant">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-6 py-3 bg-primary-container text-on-primary text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="tonal-layer-1 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { label: 'New Order Alerts', desc: 'Get notified when a new order is placed', enabled: true },
                  { label: 'Kitchen Updates', desc: 'Updates on order preparation status', enabled: true },
                  { label: 'Staff Check-In/Out', desc: 'Notifications when staff clock in or out', enabled: false },
                  { label: 'Low Inventory Alerts', desc: 'Warnings when menu items run low', enabled: true },
                  { label: 'Revenue Reports', desc: 'Daily revenue summary notifications', enabled: false },
                  { label: 'Customer Reviews', desc: 'New customer review notifications', enabled: true },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between py-3 border-b border-[#2A2A2A] last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{n.label}</p>
                      <p className="text-xs text-on-surface-variant">{n.desc}</p>
                    </div>
                    <div className={`w-11 h-6 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${n.enabled ? 'bg-primary' : 'bg-outline-variant'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${n.enabled ? 'translate-x-5' : 'translate-x-0'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'appearance' && (
            <div className="tonal-layer-1 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Appearance</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-on-surface mb-3">Theme</p>
                  <div className="flex gap-3">
                    {['Dark', 'Light', 'System'].map((t) => (
                      <button key={t} className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${t === 'Dark' ? 'bg-primary-container text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface mb-3">Accent Color</p>
                  <div className="flex gap-3">
                    {['#00C853', '#2196F3', '#FF5722', '#9C27B0', '#FF9800'].map((c) => (
                      <button key={c} className="w-10 h-10 rounded-full border-2 border-transparent hover:border-on-surface transition-colors" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'billing' && (
            <div className="space-y-6">
              <div className="tonal-layer-1 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-on-surface">Current Plan</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">Pro</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4">Your current plan includes unlimited orders, staff management, and analytics.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-on-surface">$49</span>
                  <span className="text-sm text-on-surface-variant">/month</span>
                </div>
              </div>
              <div className="tonal-layer-1 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-on-surface mb-4">Payment Method</h3>
                <div className="flex items-center gap-3 py-3 border border-[#2A2A2A] rounded-lg px-4">
                  <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                  <span className="text-sm text-on-surface">•••• •••• •••• 4242</span>
                  <span className="text-xs text-on-surface-variant ml-auto">Expires 12/27</span>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'integrations' && (
            <div className="tonal-layer-1 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-on-surface mb-4">Integrations</h3>
              <div className="space-y-4">
                {[
                  { name: 'Stripe', desc: 'Payment processing', connected: true },
                  { name: 'Twilio', desc: 'SMS notifications', connected: true },
                  { name: 'Google Analytics', desc: 'Web analytics', connected: false },
                  { name: 'Slack', desc: 'Team communication', connected: false },
                  { name: 'QuickBooks', desc: 'Accounting software', connected: true },
                ].map((int) => (
                  <div key={int.name} className="flex items-center justify-between py-3 border-b border-[#2A2A2A] last:border-0">
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{int.name}</p>
                      <p className="text-xs text-on-surface-variant">{int.desc}</p>
                    </div>
                    <button className={`text-xs font-semibold px-4 py-2 rounded-lg transition-colors ${int.connected ? 'bg-primary/10 text-primary' : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'}`}>
                      {int.connected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="space-y-6">
              <div className="tonal-layer-1 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-on-surface mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Current Password</label>
                    <input type="password" className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">New Password</label>
                    <input type="password" className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Confirm Password</label>
                    <input type="password" className="w-full bg-[#0A0A0A] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" />
                  </div>
                  <button className="px-6 py-3 bg-primary-container text-on-primary text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
                    Update Password
                  </button>
                </div>
              </div>
              <div className="tonal-layer-1 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-on-surface mb-4">Two-Factor Authentication</h3>
                <p className="text-sm text-on-surface-variant mb-4">Add an extra layer of security to your account.</p>
                <button className="px-6 py-3 bg-surface-container-high text-on-surface text-sm font-semibold rounded-lg hover:bg-surface-container-highest transition-colors">
                  Enable 2FA
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Settings
