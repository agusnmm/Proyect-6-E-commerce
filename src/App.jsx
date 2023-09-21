import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import RoutesIndex from './routes/RoutesIndex'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
