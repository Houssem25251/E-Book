import './MainPage.css';
import {Home} from './Home/Home.jsx';
import {Categories} from './Categories/Categories.jsx';
import {Library} from './Library/Library.jsx';

export function MainPage(){
    return(
        <div className="MainPage">
            <Home />
            <Categories />
            <Library />
        </div>
    )
}