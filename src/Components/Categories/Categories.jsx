import R from '../../assets/Romance.png';
import E from '../../assets/Economics.png';
import F from '../../assets/Fantasy.jpg';
import H from '../../assets/Horror.jpg';
import A from '../../assets/Adventure.jpg';
import CP from '../../assets/ComputerScience.jpg';
import SF from '../../assets/ScienceFiction.jpg';
import P from '../../assets/Psychology.jpg';
import S from '../../assets/Science.jpg';
import T from '../../assets/Thriller.png';
import TT from '../../assets/Technology.png';
import HI from '../../assets/History.jpg';
import PO from '../../assets/Poetry.jpg';
import PH from '../../assets/Philosophy.jpg';
import FS from '../../assets/Fitness&Sports.png';
import './Categories.css';

import {useState,useEffect} from 'react';

class CategoryPart{
    title;
    image;
    id;
    constructor(a,b,c){
        this.title=a;
        this.image=b;
        this.id=c;
    }
}

function Category({i,t}){
    return(
        <div className="CategoryDiv">
            <img className="CatPicture" src={i}/>
                <p className="CatText">{t}</p>
        </div>
    )
}

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


export function Categories(){
    const[CategoriesArray,setCategory]=useState([]);
    function addCategory(){
        setCategory([...CategoriesArray,cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10,cat11,cat12,cat13,cat14,cat15]);
    }

    useEffect(()=>{
        addCategory();
    },[])
        
    const HiddenIds=[10,11,12,13,14,15];
    const[state,setState]=useState(false);
    function changeState(){
        setState(!state);
    }
    return(
        <div id="Categories" className="CategoriesContainer">
            <p className="CatTitle">Browse categories</p>
                <div className={`MainCat ${state?"show":""}`}>
                    {CategoriesArray.map((cat)=>{
                        if(HiddenIds.includes(cat.id)===true){
                            return(
                                <div className={`cat ${state? "show":""}`}>
                                    {state && <Category i={cat.image} t={cat.title} key={cat.id}/>}
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className="cat1">
                                    <Category i={cat.image} t={cat.title} key={cat.id}/>
                                </div>
                            )
                        }
                    })}
                </div>
            {!state && <button onClick={changeState} className="ButtonCat">Browse More</button>}
            {state && <button onClick={changeState} className="ButtonCat">Collapse</button>}      
        </div>    
    )
}