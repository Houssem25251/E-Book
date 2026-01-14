import './BookPage.css';
import Book1 from '../assets/Book.png';
import {Header} from './Header.jsx';
import {books} from './Library/Library.jsx';
import {useParams} from 'react-router';
import {Link} from 'react-router';

export class Book{
    id;
    image;
    title;
    download;
    constructor(a,b,c,d){
        this.id=a;
        this.image=b;
        this.title=c;
        this.download=d;
    }
}

export function BookCard({s}){
    
    return(
        <div className="BookCard">
            <Link to={`/book/${s.id}`}>GO TO BOOK</Link>
            <img className="BookCard-Image" src={s.image}/>
        </div>
    )
}


export function BookPage(){
    let {id}=useParams();
    const s=books.find(e=>e.id===id);
    return(
    <div className="MainBookPage">
        <Header />
        <div className="BookPage">
            <img src={s.image}/>
            <div className="BookPage-Content">
                <p>{s.title}</p>
                <p>{s.author}</p>
                <p>book reviews</p>
            </div>
        </div> 
    </div>
    )
}


