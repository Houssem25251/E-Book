import './App.css'
import {Header} from './Components/Header/Header.jsx';
import {MainPage} from './Components/MainPage/MainPage.jsx';
import {BrowserRouter} from 'react-router';
import {Routes,Route} from 'react-router';
import Book1 from './assets/Book.png';
import senseandsensibility from './assets/senseandsensibility.jpeg';
import R from './assets/Romance.png';
import E from './assets/Economics.png';
import F from './assets/Fantasy.jpg';
import H from './assets/Horror.jpg';
import A from './assets/Adventure.jpg';
import CP from './assets/ComputerScience.jpg';
import SF from './assets/ScienceFiction.jpg';
import P from './assets/Psychology.jpg';
import S from './assets/Science.jpg';
import T from './assets/Thriller.png';
import TT from './assets/Technology.png';
import HI from './assets/History.jpg';
import PO from './assets/Poetry.jpg';
import PH from './assets/Philosophy.jpg';
import FS from './assets/Fitness&Sports.png';
import {BookPage} from './Components/BookPage/BookPage.jsx';
import {Book} from './Components/BookPage/BookPage.jsx';
import {useState} from 'react';
import {CategoryPage} from './Components/CategoryPage/CategoryPage.jsx';
import {CategoryPart} from './Components/Categories/Categories.jsx';
import {FilteredBooks} from './Components/FilteredBooks/FilteredBooks.jsx';



function MainPageApp({Search,setSearch,CategoriesArray,setbooksfav,books,booksfav,bookssaved,setbookssaved}){
  return(
    <div className="AppDiv">
        <Header Search={Search} setSearch={setSearch} />
        <MainPage CategoriesArray={CategoriesArray} setbooksfav={setbooksfav} booksfav={booksfav} books={books} bookssaved={bookssaved} setbookssaved={setbookssaved} />
    </div>
  )
}

function App(){
  //Books & favorite books data
  const b1=new Book("broken",Book1,"Broken: Tales of Ruin and Restoration is a collection of short stories about loss, brokenness, and the slow journey toward healing and hope.","Broken: Tales of Ruin and Restoration","/Books/Book.pdf",3.5,"Faith Ijiga","Romance");
  const b2=new Book("senseandsensibility",senseandsensibility,"Sense and Sensibility is a romantic novel by Jane Austen, published in 1811.","Sense and Sensibility","/Books/senseandsensibility.pdf",4.0,"Jane Austen","Romance");
  const[books,setbooks]=useState([b1,b2]);
  const[booksfav,setbooksfav]=useState([]);
  const[bookssaved,setbookssaved]=useState([]);

  //Categories data
  const cat1=new CategoryPart("Romance",R,1);
  const cat2=new CategoryPart("Fantasy",F,2);
  const cat3=new CategoryPart("Science Fiction",SF,3);
  const cat4=new CategoryPart("Adventure",A,4);
  const cat5=new CategoryPart("Horror",H,5);
  const cat6=new CategoryPart("Psychology",P,6);
  const cat7=new CategoryPart("Economics",E,7);
  const cat8=new CategoryPart("Computer Science",CP,8);
  const cat9=new CategoryPart("Science",S,9);
  const cat10=new CategoryPart("Thriller",T,10);
  const cat11=new CategoryPart("Technology",TT,11);
  const cat12=new CategoryPart("History",HI,12);
  const cat13=new CategoryPart("Poetry",PO,13);
  const cat14=new CategoryPart("Philosophy",PH,14);
  const cat15=new CategoryPart("Fitness & Sports",FS,15);
  const[CategoriesArray,setCategory]=useState([cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10,cat11,cat12,cat13,cat14,cat15]);
  
  //Input data (in header)
  const[Search,setSearch]=useState("");

  // <Route path="/filteredbooks" element={<FilteredBooks FilteredBooksSearch={FilteredBooksSearch} booksfav={booksfav} setbooksfav={setbooksfav} />}/>
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
