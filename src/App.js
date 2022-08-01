import React from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import AppRoutes from './pages/AppRoutes'


const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App