import { FC, useEffect, useState } from "react";
import '../styles/PandaCounter.css'

export const PandaYears:FC = () => {

    const [count,setCount] = useState(0)
    const target = 2

    useEffect(()=>{
    const increment = Math.ceil(target / 2);
    const interval = setInterval(()=>{
    setCount((prev)=>{
        if(prev<target){
            return (prev+increment)
        } else {
            clearInterval(interval)
            return prev
        }
    })
    },1000)
    },[])

    return(
    <div className="counter-container">
      <div className="counter-number">{count.toLocaleString()}+</div>
      <div className="counter-label">Лет опыта</div>
    </div>
    )
}