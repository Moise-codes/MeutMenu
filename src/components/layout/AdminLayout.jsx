import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopNavBar from './TopNavBar'

function AdminLayout() {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <TopNavBar />
      <main className="pl-64 pt-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
