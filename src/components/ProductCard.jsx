import React from "react"
import { useContext } from "react";
import products from '../data/products' 
import CartContext from'../context/CartContext'
const ProductCard=({id,image,category,price,product})=>{
  

    return(
        <div className='card' style={{

              Height:'330px',
              width:'190px',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              cursor:'pointer',
              boxShadow:''
              

                                   }}>
    {/* <div className="inner-card" style={{display:'none'}}>
        <button style={{backgroundColor:'transparent',color:'black',border:'black',}}> add to cart</button>
    </div> */}

    
      
      <img  src={image} style={{height:'220px',width:'190px'}}/>

      
      <div style={{ padding:'0 10px', }}>
      <p  className="product" style={{fontWeight:'bold',fontSize:'1.1rem'}}>{product}</p>
      <p className="category" style={{fontSize:'1.1rem'}}> {category}</p>
      <hr style={{
    width: '180px',
    margin: '0',
    border:'none',
    borderBottom: '1px solid',
    borderRadius: '5px',
}}/>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <p  className="price" style={{fontWeight:'bold',color:'#984799',fontSize:'1.2rem'}}>{price}</p>
      <button style={{backgroundColor:'transparent',border:'0.5px black solid',padding:'10px 15px'}}>
         Add to cart
         </button>
      </div>
      </div> 
      
      </div>
      
    )
  
}
export default ProductCard;
