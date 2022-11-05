import { CheckOption } from "./CheckOption"
export default function FilterBar () {
    return(
        <div className="fliterContainer" style={{ backgroundColor:'#EFE2D9',height:'100vh',width:'250px',
        padding:'20px 0 0 20px'}}>
            <div style={{display:'flex',flexDirection:'column',}}>
                <p style={{fontWeight:'bold'}}> Proudcts categories</p>
                <CheckOption valeur="Bouquets"/>
                <CheckOption valeur="fleurs"/>
                <CheckOption valeur="cadeaux"/>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <p style={{fontWeight:'bold'}}> Occasions</p>
                <CheckOption valeur="Mariage"/>
                <CheckOption valeur="roses"/>
                <CheckOption valeur="simple"/>
            </div>
        </div>
    )
}
