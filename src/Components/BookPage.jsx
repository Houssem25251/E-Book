import './BookPage.css';
import FILLEDSTAR from '../assets/FILLEDSTAR.png';
import UNFILLEDSTAR from '../assets/UNFILLEDSTAR.png'
import HALFFILLEDSTAR from '../assets/HALFFILLEDSTAR.png';
import {Header} from './Header.jsx';
import {useParams} from 'react-router';
import {Link} from 'react-router';
import {useState} from 'react';

export class Book{
    id;
    image;
    description;
    title;
    download;
    reviews;
    author;
    genre;
    constructor(a,b,z,c,d,e,f,g){
        this.id=a;
        this.image=b;
        this.title=c;
        this.download=d;
        this.reviews=e;
        this.author=f;
        this.description=z;
        this.genre=g;
    }
}

export function BookCardSaved({s,booksfav,setbooksfav}){
    const [fs,setFs]=useState(false);
    function mouseEnter(){
        setFs(true);
    }
    function mouseOut(){
        setFs(false);
    }
    function addfav(){
        if(!booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav([...booksfav,s]);
        }
        else{
            alert("Book already exists in favorite section!");
        }
    }
    return(
        <div className="BookCard">
            <Link className="Link-To-Book" to={`/book/${s.id}`}>
                <img className="BookCard-Image" src={s.image}/>
            </Link>
            <button onClick={()=>{addfav()}} onMouseLeave={()=>{mouseOut()}} onMouseEnter={()=>{mouseEnter()}} className="BookCard-Button">
                        <img title="Add to favorite" className="BookCardFavorite" src={fs?FILLEDSTAR:UNFILLEDSTAR}/>
            </button>
        </div>
    )
}

export function BookCardFavorite({s,booksfav,setbooksfav}){
    const [fs,setFs]=useState(false);
    function mouseEnter(){
        setFs(true);
    }
    function mouseOut(){
        setFs(false);
    }
    function removefav(){
        if(booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav(booksfav.filter((book)=>{return(book.id!==s.id)}));
        }
    }
    return(
        <div className="BookCard">
            <Link className="Link-To-Book" to={`/book/${s.id}`}>
                <img className="BookCard-Image" src={s.image}/>
            </Link>
            <button onClick={()=>{removefav()}} onMouseLeave={()=>{mouseOut()}} onMouseEnter={()=>{mouseEnter()}} className="BookCard-Button">
                        <img title="Remove from favorite" className="BookCardFavorite" src={fs?UNFILLEDSTAR:FILLEDSTAR}/>
            </button>
        </div>
    )
}

function reviews(rev){
    const reviews=[];
    if(Number.isInteger(rev)===true){
        for(let i=0;i<rev;i++){
            reviews.push(<img className="STAR" src={FILLEDSTAR}/>)
        }
        for(let i=rev;i<5;i++){
            reviews.push(<img className="STAR" src={UNFILLEDSTAR}/>)
        }
    }
    else{
        const r=Math.floor(rev);
        for(let i=0;i<r;i++){
            reviews.push(<img className="STAR" src={FILLEDSTAR}/>)
        }
        reviews.push(<img className="STAR" src={HALFFILLEDSTAR}/>)
        for(let i=r;i<4;i++){
            reviews.push(<img className="STAR" src={UNFILLEDSTAR}/>)
        }
        
    }
    return (reviews);
}

export function BookPage({books,booksfav,setbooksfav}){
    const [f,setf]=useState(false);
    let {id}=useParams();
    const s=books.find(e=>e.id===id);
    function addfav(){
        if(!booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav([...booksfav,s]);
            alert("Book is now added to favortie section!");
            setf(true);
        }
        else{
            alert("Book already exists in favorite section!");
        }
    }
    function removefav(){
        if(booksfav.some((book)=>{return(book.id===s.id)})){
            setbooksfav(booksfav.filter((book)=>{book.id!==s.id}));
            setf(false);
            alert("Book has been removed from favorite section!");
        }
    }
    return(
    <div className="MainBookPage">
        <Header />
        <div className="BookPage">
            <p className="book-title">{s.title}</p>
            <div className="BookPage-Content">
                <img className="BookPage-Image" src={s.image}/>
                    <div className="sub-book-content">
                        <p className="book-author">By {s.author}</p>
                        <div className="ReviewsContainer">
                            {reviews(s.reviews)}
                        </div>
                        <p className="book-description">{s.description}</p>
                        <div className="parent-download">
                            <a className="download" href={s.download} download>Download PDF</a>
                            {!f && <a onClick={()=>{addfav();}} className="download">Add to favorites</a>}
                            {f && <a onClick={()=>{removefav();}} className="download">Remove from favorites</a>}
                            
                        </div>
                    </div>    
            </div>
        </div> 
    </div>
    )
}


