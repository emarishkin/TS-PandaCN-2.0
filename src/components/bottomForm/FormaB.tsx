import { ChangeEvent, FC, FormEvent, useState } from "react";

interface FormaBProps{

}

export const FormaB:FC<FormaBProps> = () => {

    const [name,setName] =useState<string>('')
    const [number,setNumber] =useState<string>('')
    const [question,setQuestion] =useState<string>('')
    
    const [check,setCheck] =useState<boolean>(false)

    const clickForm = (e:FormEvent) =>{
    e.preventDefault()
    
    if(!name || !number || !check){
        alert('заполните все поля!')
        return
    }
    alert(`Имя: ${name}\nТелефон: ${number}\nВопрос: ${question}`)
    
    setName('')
    setNumber('')
    setQuestion('')
    setCheck(false)
    }
    

    return(
        <form onSubmit={clickForm}>
            <input
             type="text"
             placeholder='Как к вам обращаться?'
             value={name}
             onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
             />

            <input
             type="tel"
             placeholder='+7(999)999-99-99'
             value={number}
             onChange={(e:ChangeEvent<HTMLInputElement>)=>setNumber(e.target.value)}
             />

            <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ваш вопрос (необязательно)"
            />

            <label><input type="checkbox" checked={check} onChange={()=>setCheck(prev=>!prev)} />Соглашаюсь с действующей политикой обработки персональных данных</label>

            <button type="submit">Отправить</button>
        </form>
    )
}