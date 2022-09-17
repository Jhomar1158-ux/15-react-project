import { useState } from "react"

export const Form = () =>{
    const [nombre, setNombre] = useState("");
    const [fullname, setFullname] = useState("");

    const onChange = (e) =>{
        console.log(e.target.value);
        setNombre(e.target.value);
    }
    
    const onSubmit = () =>{
        setFullname(nombre);
        setNombre("");
    }
    return(
        <>
            <h1>Bienvenido! {fullname.length>0 ? <p>{fullname} un gusto conocerte!! </p> : null}  </h1>            
            <input type="text" placeholder="Ingresa un nombre" onChange={onChange} value={nombre}></input>
            <input type="button" value="click" onClick={onSubmit}/>
        </>
    )
}


