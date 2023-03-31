import './App.css'
import './main_page/Main.css'

import MainHeaderBar from './main_page/MainHeaderBar'
import Introduction from './main_page/Introduction'
import Reviews from './main_page/Reviews'
import Footer from './main_page/Footer'

function App() {
  return (
    <div className="app">
      <MainHeaderBar />
      <Introduction />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
