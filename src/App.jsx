import './App.css'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Loggin from './Pages/Loggin'
import Secret from './Pages/Secret'
import Signup from './Pages/Signup'
import Header from './Components/Header'

function App () {
  return (
    <>
      <Header />
      <p>React Auth</p>
      <Home />
      <Dashboard />
      <Loggin />
      <Secret />
      <Signup />
    </>
  )
}

export default App
