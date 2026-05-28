import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <main className="flex min-h-screen w-full overflow-hidden">
      <section className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-black">
        <div className="absolute top-8 left-8 z-20">
          <h1 className="text-xl font-black tracking-tight text-white">MeutMenu</h1>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-container/30 via-surface/80 to-black" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>
        <div className="absolute bottom-8 left-8 z-20">
          <h2 className="text-5xl font-semibold text-white max-w-sm leading-tight">Welcome back, Chef.</h2>
          <p className="text-lg text-white/70 mt-4 max-w-xs">Precision in every plate. Efficiency in every service.</p>
        </div>
      </section>

      <section className="w-full lg:w-[55%] flex flex-col justify-center items-center bg-[#111111] px-4 md:px-24">
        <div className="lg:hidden absolute top-4 left-4">
          <h1 className="text-xl font-black text-primary">MeutMenu</h1>
        </div>
        <div className="w-full max-w-md">
          <header className="mb-10">
            <h3 className="text-3xl font-semibold text-on-surface mb-2">Sign In</h3>
            <p className="text-sm text-on-surface-variant">Access your kitchen management suite.</p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring transition-colors"
                placeholder="chef@meutmenu.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-on-surface-variant block uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot?</a>
              </div>
              <input
                id="password"
                type="password"
                className="w-full bg-[#111111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-on-surface input-focus-ring transition-colors"
                placeholder="••••••••"
              />
            </div>

            <Link
              to="/admin/overview"
              className="w-full bg-primary-container text-on-primary font-semibold py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary-container/20 flex items-center justify-center text-sm"
            >
              Sign In
            </Link>
          </form>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#2A2A2A]" />
            <span className="text-xs text-on-surface-variant uppercase tracking-wider">Or continue with</span>
            <div className="flex-1 h-px bg-[#2A2A2A]" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-outline-variant transition-all text-sm text-on-surface-variant">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-outline-variant transition-all text-sm text-on-surface-variant">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-on-surface-variant">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-primary hover:underline font-semibold">Create account</Link>
          </p>
          <p className="mt-3 text-center text-sm text-on-surface-variant">
            <Link to="/client/signin" className="text-primary/70 hover:underline">Sign in as a diner →</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default SignIn
