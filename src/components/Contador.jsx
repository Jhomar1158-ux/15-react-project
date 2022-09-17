import { useState } from "react"

export const Contador = () =>{
    
    const [contador, setContador] = useState(0);
    
    const aumenta = () =>{
        if(contador >= 0){
            setContador(contador+1);
        }
    }
    const disminuye = () =>{
        if(contador>=1){
            setContador(contador-1);
        }
    }
    return(
        <>
            <h3>Contador</h3>
            <h1>{contador}</h1>
            <div className="btns">
                <button className="btn+" onClick={()=> aumenta()}>+</button>
                <button className="btn-" onClick={()=> disminuye()}>-</button>
            </div>
            
        </>
    )
}