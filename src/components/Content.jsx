import { useEffect, useState } from "react"
import styles from "./Content.module.css";
import { Collapse } from 'react-bootstrap';

import Accordion from 'react-bootstrap/Accordion';

export default function Content() {
    const [items,setItems]=useState("");
    const [myarray,setMyarray]= useState([]);
    const [open, setOpen] = useState(false); 
    
    useEffect(()=> {
       async function myfunc() {
        let API_KEY=1;
        let URL = "https://themealdb.com/api/json/v1/1/search.php"
          
            let x = await fetch(`${URL}?s=${items}&apiKey=${API_KEY}`);
                
                let y = await x.json();
             setMyarray(y.meals)  //
             console.log(myarray);  //is shows empty but move on !!!!!!!!!!!!!!!!!!!!!!!!!!1
                                   
            
            
        }
        myfunc();
    },[items])

   return (
        <div className="container-fluid">
            <div className="d-flex align-items-end p-2   bg-white shadow  mb-5 bg-body-tertiary rounded">
                <img className={`${styles.logoimg} m-2 fs-1 fw-bold `} src="logo.jpg" alt="" />
                <p>Food App</p>    
            </div>   
            <div>
                <input type="email"  value={items} onChange={(e)=>setItems(e.target.value)} className="form-control w-75 m-auto" id="exampleInputEmail1" aria-describedby="emailHelp"  />
            </div> 
            <div className="m-4">
                <h1 className={`${styles.details} text-center `}>Click On View Recipe For More Details</h1>
                <div>
                {myarray && myarray.length>0 ?(
                            myarray.map((arry)=> {
                                return (
                                    <div className="row">
                                         <div className="border-bottom mb-4 col-lg-3 col-md-4 col-12">
                                            <img className={`${styles.content_img} d-block mb-2 `} src={arry.strMealThumb} alt="" />
                                            <h4 className="text-center fw-bold mb-0" >{arry.strMeal}</h4>
                                            <div className="w-100 text-center">
                                                <button className={`${styles.recp} btn btn-success `} onClick={()=>setOpen(!open)}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded={open} aria-controls="collapseExample">
                                                    View Recipe
                                                </button>
                                                <Accordion >
                                                <Accordion.Item eventKey="0">
                                                    
                                                <Accordion.Header>
                                                    <button className={styles.acc_btn}>View Recipe</button>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                <p className="text-decoration-underline">YouTube clip:- <a href={arry.strYoutube}>Click Here</a></p>
                                                <h4 className="text-decoration-underline">Ingredients Of {arry.strMeal}: </h4>  
                                                <span className="m-1">{arry.strIngredient1},{arry.strIngredient2},{arry.strIngredient3},{arry.strIngredient4},{arry.strIngredient5},{arry.strIngredient6},
                                                {arry.strIngredient7},{arry.strIngredient8},{arry.strIngredient9},{arry.strIngredient10},{arry.strIngredient11},{arry.strIngredient12},{arry.strIngredient13},
                                                {arry.strIngredient14},{arry.strIngredient15}</span>
                                                 
                                                 <h1>Making of  {arry.strMeal}</h1>
                                               <p>{arry.strInstructions}</p>
                                             
                                                </Accordion.Body>
                                                </Accordion.Item>
        
                                                    </Accordion>
                                            </div>
                                         </div>
                                         <Collapse in={open}>
                                        <div className="col-lg-9 col-md-8 col-12 " id="collapseExample">
                                             <div className="card card-body">
                                             <h4>YouTube clip:- <a href={arry.strYoutube}>click here</a></h4>
                                                <h4>Ingredients of {arry.strMeal}: </h4>  
                                                <span className="m-1">{arry.strIngredient1},{arry.strIngredient2},{arry.strIngredient3},{arry.strIngredient4},{arry.strIngredient5},{arry.strIngredient6},
                                                {arry.strIngredient7},{arry.strIngredient8},{arry.strIngredient9},{arry.strIngredient10},{arry.strIngredient11},{arry.strIngredient12},{arry.strIngredient13},
                                                {arry.strIngredient14},{arry.strIngredient15}</span>
                                                 
                                               <p>{arry.strInstructions}</p>
                                               
                                               
                                               
                                            </div>
                                        </div>   
                                        </Collapse>
                                     
                                    
                                    </div>
                                    
                                    )
                                } 
                            )
                        ):(
                            <p>No Item Found</p>
                    )}
                           
                </div>
                
            
            </div>
           
        </div>
    )
}