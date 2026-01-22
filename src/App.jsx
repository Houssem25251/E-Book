import './App.css'
import {Header} from './Components/Header/Header.jsx';
import {MainPage} from './Components/MainPage/MainPage.jsx';
import {BrowserRouter} from 'react-router';
import {Routes,Route} from 'react-router';
import {BookPage} from './Components/BookPage/BookPage.jsx';
import {useState} from 'react';
import {CategoryPage} from './Components/CategoryPage/CategoryPage.jsx';
import {FilteredBooks} from './Components/FilteredBooks/FilteredBooks.jsx';
import {books} from './Data/BookData.jsx';
import {CategoriesArray} from './Data/CategoriesData.jsx';

function MainPageApp({Search,setSearch,CategoriesArray,setbooksfav,books,booksfav,bookssaved,setbookssaved}){
  return(
    <div className="AppDiv">
        <Header Search={Search} setSearch={setSearch} />
        <MainPage CategoriesArray={CategoriesArray} setbooksfav={setbooksfav} booksfav={booksfav} books={books} bookssaved={bookssaved} setbookssaved={setbookssaved} />
    </div>
  )
}

function App(){
  //Favorites and savedbooks
  const[booksfav,setbooksfav]=useState([]);
  const[bookssaved,setbookssaved]=useState([]);
  
  //Input data (in header)
  const[Search,setSearch]=useState("");
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageApp Search={Search} setSearch={setSearch} CategoriesArray={CategoriesArray} setbooksfav={setbooksfav} booksfav={booksfav} books={books} bookssaved={bookssaved} setbookssaved={setbookssaved}/>}/>
        <Route path="/book/:id" element ={<BookPage Search={Search} setSearch={setSearch} setbooksfav={setbooksfav} booksfav={booksfav} books={books} />}/>
        <Route path="/category/:id" element={<CategoryPage Search={Search} setSearch={setSearch} CategoriesArray={CategoriesArray} setbooksfav={setbooksfav} booksfav={booksfav} books={books} bookssaved={bookssaved} setbookssaved={setbookssaved}/>}/>
        <Route path="/filteredbooks" element={<FilteredBooks Search={Search} setSearch={setSearch} books={books} booksfav={booksfav} setbooksfav={setbooksfav} bookssaved={bookssaved} setbookssaved={setbookssaved}/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
