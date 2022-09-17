import { useState } from "react";
import { useEffect } from "react";


export const Reloj = () =>{

    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        setInterval(()=> setDate(new Date()), 1000);
    }, []);

    return(
        <>
            <h1>Reloj</h1>
            <p>{date.toLocaleTimeString()}</p>
        </>
    )
}

