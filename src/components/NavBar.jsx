import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"
import products from "../data/products"
export default function NavBar(){
  const cart = useContext(CartContext)
  let cartItems = cart.map(item=> ( {...products.find(p => p.id === item.id),qte : item.qte})) | []
    let total = cartItems.reduce((acc,curr)=>acc+curr.price*curr.qte,0)
    console.log(cartItems)
    
     
    return (
        <nav>
            <span className="my_shop">
          My Shoping
        </span>
            <ul style={{display:'flex',listStyle:'none',justifyContent:'space-around',background:'white', gap:'30px'}}>
                <li style={{clor:'black'}}><Link to="/">Home</Link></li>
                <li><Link style={{clor:'black'}} to="/Catalog">Catalog</Link></li>
                <li><Link style={{clor:'black'}} to="Bouquets">Bouquets</Link></li>
                <li><Link style={{clor:'black'}} to="/Cadeaux">Cadeaux</Link></li>

                
               
            </ul>
            <div className="cart">
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{total}</span>
        </div>
        </nav>
    ) 
}


