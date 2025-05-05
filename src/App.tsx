import './App.scss'
import Header from './components/Header'
import ProductsController from './controller/Products'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className='products__container'>
          <ProductsController />
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
