import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen"
import ProductsScreen from "./Components/Screens/ProductsScreen/ProductsScreen"
import ProductDetailScreen from "./Components/Screens/ProductDetailScreen/ProductDetailScreen"

function App() {

  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/products' element={<ProductsScreen/>} />
          <Route path='/product/:product_id' element={<ProductDetailScreen/>} />
        </Routes>
      </div>
  )
}

export default App
