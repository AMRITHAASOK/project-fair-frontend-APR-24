import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={true}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
