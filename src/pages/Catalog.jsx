import React ,{useState} from 'react'
import NavBar from '../components/NavBar'
import FilterBar from '../components/FilterBar'
import Products  from '../components/Products'
import products from '../data/products'

export default function Catalog(){
      const   styles={
                
                    display:'flex',
                    gap:'60px',
                
        }
        

  

        
   
       
    return(
        <div className='main' style={{
           
            display:'flex',
            gap:'100px',
            flexDirection:'column',
            fontSize:'16px'
        }}>
            <NavBar/> 
            
                <img src='../images/couv3.jpg' height={450} />
            
            
            <div className='products-container1' style={{
                display:'flex',
                justifyContent:'space-between',
                padding:'0 60px 0 50px'
            }}>
                <FilterBar/>
                
                <div className='products-container2' style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'30px',
                    
                }}>
            <div style={{display:'flex',flexDirection:'column'}}>
                <Products products={products}/>
           </div>
            
            </div>
                </div>
        </div>
        
    )
            }



