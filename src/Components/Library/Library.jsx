import './Library.css';
import Book1 from '../../assets/Book.png';
import {Book,BookCard} from '../BookPage.jsx';


const b1=new Book("broken",Book1,"Broken","/Books/Book.pdf");
export const books=[];
books.push(b1);

function SavedBooks(){
    return(
        <div className="SavedBooks-Container">
            <p className="SavedBooks-Text">Saved Books</p>
            <div className="Books-Container">
                {books.map((c)=>{
                    return(
                        <BookCard s={c}/>
                    )
                })}
            </div>    
        </div>    
    )
}

export function Library(){
    return(
        <>
            <p className="Library-Text">My Library</p>
            <SavedBooks />
        </>
    )
}