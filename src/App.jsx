import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Overview from './pages/admin/Overview'
import Orders from './pages/admin/Orders'
import Menu from './pages/admin/Menu'
import Tables from './pages/admin/Tables'
import Staff from './pages/admin/Staff'
import Settings from './pages/admin/Settings'
import Profile from './pages/admin/Profile'
import ClientSignIn from './pages/client/ClientSignIn'
import ClientSignUp from './pages/client/ClientSignUp'
import DinerHome from './pages/client/DinerHome'
import RestaurantMenu from './pages/client/RestaurantMenu'
import MyOrders from './pages/client/MyOrders'
import Checkout from './pages/client/Checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="orders" element={<Orders />} />
        <Route path="menu" element={<Menu />} />
        <Route path="tables" element={<Tables />} />
        <Route path="staff" element={<Staff />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/client/signin" element={<ClientSignIn />} />
      <Route path="/client/signup" element={<ClientSignUp />} />
      <Route path="/client/home" element={<DinerHome />} />
      <Route path="/client/menu" element={<RestaurantMenu />} />
      <Route path="/client/orders" element={<MyOrders />} />
      <Route path="/client/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App
