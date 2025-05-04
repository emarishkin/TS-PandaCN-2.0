import { ChangeEvent, FC, useState } from "react";

interface BunnerProps{

}

export const Bunner:FC<BunnerProps> = () => {

const [wei,setWei] = useState('')
const [volume,setVolume] = useState('')
const [cost,setCost] = useState('')

const [result, setResult] = useState<string | null>(null);

const handleChange1 = (e:ChangeEvent<HTMLInputElement>) => {
    setWei(e.target.value)
}
const handleChange2 = (e:ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value)
}
const handleChange3 = (e:ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.value)
}

const handleSubmit = (e:React.FormEvent) => {
  e.preventDefault()
  const Wei = parseFloat(wei)
  const Volume = parseFloat(volume)
  const Cost = parseFloat(cost)
  const deliveryCost = (Wei * 2) + (Volume * 100) + (Cost * 0.05);
  setResult(`Примерная стоимость доставки: $${deliveryCost.toFixed(2)}`);
}

    return(
        <section>
            <div>
                <h3>Калькулятор рассчета стоимости перевозки</h3>
                <form onSubmit={handleSubmit} >
                    <input 
                    type="text"
                    placeholder="Вес (кг)"
                    value={wei}
                    onChange={handleChange1}
                    />
                    <input 
                    type="text"
                    placeholder="Объем (м³)"
                    value={volume}
                    onChange={handleChange2}
                    />
                    <input 
                    type="text"
                    placeholder="Стоимость товара (USD)"
                    value={cost}
                    onChange={handleChange3}
                    />
                    <button type="submit">Рассчитать стоимость</button>
                </form>
                <div>
                    {result}
                </div>
            </div>
        </section>
    )
}