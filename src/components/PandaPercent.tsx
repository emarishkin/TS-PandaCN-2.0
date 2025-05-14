import { FC, useEffect, useState } from "react";


export const PandaPercent:FC = () => {

    const [count,setCount] = useState(0)
    const target = 95

    useEffect(()=>{
      const increment = Math.ceil(target / 100);
      const interval = setInterval(()=>{
         setCount((prev)=>{
            if(prev<target){
               return (prev+increment)
            } else {
               clearInterval(interval)
               return prev
            }
         })
      },150)

    },[])

    return(
    <div className="counter-container">
      <div className="counter-number">{count.toLocaleString()}%</div>
      <div className="counter-label">Лет опыта</div>
    </div>
    )
}