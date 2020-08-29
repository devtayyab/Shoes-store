import React from 'react';
import { BrowserRouter as Router,
Routes,
Route,
Link,
Outlet,
useParams

} from "react-router-dom";
import '.././App.css';
export function  Launch() {
    return(
      <div>
        <h1>Our product</h1>
        <Outlet />
      </div>
    );
  }
  export function Launchitem() {
    return(
      <div className="pitems">
        
          {Object.entries(shoe).map(([slug,{name,Img}])=>(
            <p key={slug} className="key">
              
              
              <Link to={`/launch/${slug}`}>
                <tr>
            <td> <h2>{name}</h2>
            <img src={Img} alt="name" className="image"/></td> </tr>
              </Link>
              </p>
          ))}
      </div>
    );
  }
  export function Detail() {
    const {slug} =useParams();
   
      const shoes =shoe[slug]
     
      
    if(!shoes){
      return(
        <h2>Not Found !</h2>
      )
    }
    const {name ,Img} = shoes;
  
      return(
        <div>
          <h2>Detail</h2>
          <p>Good shoes is very important for your persionality.
          Leather Shoes Companies. Get A Better Deal. SGS Audited Suppliers. Leading B2B Portal. Quality China Products. China’s B2B Impact Award.
          </p>
          <p>Price $100</p>
        <h2>{name}</h2>
        <img src={Img} alt={name}/>
      </div>
      )
    }
    
  
  const shoe={
    "running shoes": {
      name: "Running Shoes",
      Img : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  
    },
    "Best-": {
      name: "Soft",
      Img : "https://images.lojanike.com.br/500x500/produto/246313_2255450_20200701151732.jpg"
  
    },
    
    "fashion shoes": {
      name: "High Quality",
      Img : "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  
    },
    "joger shoes": {
      name: "Joger",
      Img : "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
  
    },
    "Good shoes": {
      name: "Running",
      Img : "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  
    },
    "1": {
      name: "Jogging",
      Img : "https://images.lojanike.com.br/500x500/produto/194909_1832926_20191119144749.jpg"
  
    },
    "2": {
      name: "Running",
      Img : "https://images.lojanike.com.br/500x500/produto/210901_1957450_20200218151529.jpg"
  
    },
    "3": {
      name: "Fashion Designing Shoes",
      Img : "https://images.lojanike.com.br/500x500/produto/247729_2235965_20200623220143.jpg"
  
    },
    "4": {
      name: "Soft Shoes",
      Img : "https://images.lojanike.com.br/500x500/produto/247729_2235997_20200623220143.jpg"
  
    },


  }
  