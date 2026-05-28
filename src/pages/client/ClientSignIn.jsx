import { Link } from 'react-router-dom'

function ClientSignIn() {
  return (
    <main className="flex min-h-screen">
      <section className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        <div className="relative z-10 flex flex-col justify-between p-16 h-full">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
          <div className="max-w-sm">
            <h2 className="text-4xl font-semibold text-white leading-tight mb-4">Your table awaits.</h2>
            <p className="text-base text-white/60">Browse menus, place orders, and enjoy a seamless dining experience.</p>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-[55%] flex flex-col justify-center items-center bg-[#111111] px-4 md:px-24">
        <div className="lg:hidden absolute top-4 left-4">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
        </div>
        <div className="w-full max-w-md">
          <header className="mb-10">
            <h3 className="text-3xl font-semibold text-on-surface mb-2">Diner Sign In</h3>
            <p className="text-sm text-on-surface-variant">Sign in to your dining account.</p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider">Email</label>
              <input type="email" className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="diner@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider">Password</label>
              <input type="password" className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring" placeholder="••••••••" />
            </div>

            <Link to="/client/home" className="w-full bg-primary-container text-on-primary font-semibold py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center text-sm">
              Sign In
            </Link>
          </form>

          <p className="mt-8 text-center text-sm text-on-surface-variant">
            New to MeutMenu?{' '}
            <Link to="/client/signup" className="text-primary hover:underline font-semibold">Create account</Link>
          </p>
          <p className="mt-3 text-center text-sm text-on-surface-variant">
            <Link to="/signin" className="text-primary/70 hover:underline">Restaurant owner? Sign in here →</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default ClientSignIn
