import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <main className="flex min-h-screen">
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-surface/60 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>
        <div className="relative z-10 flex flex-col justify-between p-16 h-full">
          <div className="flex items-center space-x-3">
            <div className="bg-black w-10 h-10 flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>flare</span>
            </div>
            <span className="text-xl font-black text-primary tracking-tight">MeutMenu</span>
          </div>
          <div className="max-w-md">
            <div className="inline-flex items-center px-3 py-1 bg-primary-container/10 border border-primary-container/20 rounded-full mb-8">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Restaurant Management Platform</span>
            </div>
            <h1 className="text-5xl font-semibold text-on-surface mb-8 leading-tight">
              Run your restaurant like a world-class operation.
            </h1>
            <ul className="space-y-4">
              {['Live order tracking', 'Smart menu control', 'Staff scheduling & analytics'].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-base text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-[#111111] px-4 md:px-16">
        <div className="lg:hidden absolute top-4 left-4">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
        </div>
        <div className="w-full max-w-md">
          <header className="mb-8">
            <h3 className="text-3xl font-semibold text-on-surface mb-2">Create Account</h3>
            <p className="text-sm text-on-surface-variant">Set up your restaurant management profile.</p>
          </header>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider">First Name</label>
                <input className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="Marcus" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider">Last Name</label>
                <input className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="Vane" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider">Restaurant Name</label>
              <input className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="Chez Marcus" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider">Email Address</label>
              <input type="email" className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="chef@meutmenu.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider">Password</label>
              <input type="password" className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="••••••••" />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input type="checkbox" className="mt-1 accent-primary" />
              <p className="text-xs text-on-surface-variant leading-relaxed">
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>

            <Link
              to="/admin/overview"
              className="w-full bg-primary-container text-on-primary font-semibold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary-container/20 flex items-center justify-center text-sm"
            >
              Create Account
            </Link>
          </form>

          <p className="mt-6 text-center text-sm text-on-surface-variant">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary hover:underline font-semibold">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default SignUp
