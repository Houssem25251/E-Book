import './App.css'
import {Header} from './Components/Header.jsx';
import {MainPage} from './Components/MainPage.jsx';
import {BrowserRouter} from 'react-router';
import {Routes,Route} from 'react-router';
import {BookPage} from './Components/BookPage.jsx';

function MainPageApp(){
  return(
    <div className="AppDiv">
        <Header />
        <MainPage />
    </div>
  )
}

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageApp />}/>
        <Route path="/book/:id" element ={<BookPage />}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
