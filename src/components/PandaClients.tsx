import { FC, useEffect, useState } from "react";
import '../styles/PandaCounter.css'

export const PandaClients:FC = () => {

    const [count,setCount] = useState(0)
    const target = 415

    useEffect(()=>{
    const increment = Math.ceil(target / 1000);
    const interval = setInterval(()=>{
    setCount((prev)=>{
        if(prev<target){
            return (prev+increment)
        } else {
            clearInterval(interval)
            return prev
        }
    })
    },20)
    },[])

    return(
    <div className="counter-container">
      <div className="counter-number">{count.toLocaleString()}+</div>
      <div className="counter-label">Постоянных клиентов</div>
    </div>
    )
}