import FilterableProductTable from './components/FilterableProductTable'
import PRODUCTS from './assets/Products'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    </>
  )
}

export default App
