import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import DetailsPage from './pages/DetailsPage'


function App() {


  return (
       <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:objectID' element={<DetailsPage/>}/>
        </Routes>
      </div>
        
  )
}

export default App
