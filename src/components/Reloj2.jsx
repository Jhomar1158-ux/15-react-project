import { useEffect } from "react";
import { useState } from "react"

export const Reloj2 = ()=>{

    const date = new Date();
    const [dateTime, setDatetime] = useState({
        // Creamos un objeto para diferenciar por items las horas, minutos y segundos
        horas:date.getHours(),
        minutos:date.getMinutes(),
        segundos:date.getSeconds()
    });

    useEffect(()=>{
        // setInterval es una función propia de JS
        const timer = setInterval(()=>{ 
            // Creamos un objeto de la clase Date
            const date = new Date();
            // Actualizamos los valores de cada clave para integrar el useEffect
            setDatetime({
                horas:date.getHours(),
                minutos:date.getMinutes(),
                segundos:date.getSeconds()
            });

            // Le indicamos que cambie cada segundo
        }, 1000);

        // clearInterval nos permitirá detener o limpiar el intervalo antiguo
        return () => clearInterval(timer)

    }, []);


    return(
        <>
            <h1>Reloj 2</h1>
            <p>
                {dateTime.horas < 10 ? `0${dateTime.horas}` : dateTime.horas} h : {dateTime.minutos < 10 ? `0${dateTime.minutos}` : dateTime.minutos} min : {dateTime.segundos < 10 ?  `0${dateTime.segundos}` : dateTime.segundos} seg
            </p>
        </>
    )
}