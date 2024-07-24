import './App.css'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

import PopBrowse from './components/Popups/PopBrowse/PopBrowse'
import PopExit from './components/Popups/PopExit/PopExit'
import PopNewCard from './components/Popups/PopNewCard/PopNewCard'
import PopUser from './components/Popups/PopUser/PopUser'


function App() {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />

      <Header />
      <Main />
    </div>
  )
}

export default App
