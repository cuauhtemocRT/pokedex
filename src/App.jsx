import './App.css'
import { useSelector } from 'react-redux'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes'
import PokedexInfo from './pages/PokedexInfo'

function App() {

  const trainer = useSelector(state => state.trainer)

  console.log(trainer)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* Rutues protected */}
        <Route element={<ProtectedRoutes />}>
        <Route path='/pokedex' element={<Pokedex />}/>
        <Route path='/pokedex/:id' element={<PokedexInfo />}/>
        </Route>
      </Routes> 
    </div>
  )
}

export default App
