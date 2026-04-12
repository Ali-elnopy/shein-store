import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Auth from '../pages/Auth'
import ProductDetails from '../pages/ProductDetails'
import Wishlist from '../pages/Wishlist'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'

const AppRouter = () => {
  return (
    <Router >
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <main className='flex-grow'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/product/:id' element={<ProductDetails/>}/>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Auth />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                    
                </Routes>
            </main>
            <Footer/>
        </div>
    </Router>
  )
}

export default AppRouter