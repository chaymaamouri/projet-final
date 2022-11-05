export function CheckOption({valeur}){
    return(
    <div className="form-check" style={{display:'flex'}}>
    <input className="form-check-input" type="checkbox" value=""id="flexCheckDefault"/>
    <p>{valeur}</p>
   
</div>
    )
}