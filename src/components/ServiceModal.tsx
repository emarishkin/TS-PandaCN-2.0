import { ChangeEvent, FC, useState } from "react";
import '../styles/ModalService.css'

interface ServiceModalProps{
 onClose:()=>void
 isOpen:boolean
}

export const ServiceModal:FC<ServiceModalProps> = ({onClose,isOpen}) => {
    
    const [name,setName] = useState<string>('')
    const [number,setNumber] = useState<string>('')
    const [quast,setQuast] = useState<string>('')
    
    return(
        <div>
            {isOpen && (
                <div className="modal-service">
                    <div className="modal2" onClick={(e) => e.stopPropagation()}>
                        <form className="popup__content">
                            <h2 className="popup__content-title">Получить бесплатную консультацию менеджера по логистике</h2> 
                            <p className="popup__content-text">Оставьте, пожалуйста, свои контактные данные, и наш опытный менеджер свяжется с вами в кратчайшие сроки для обсуждения деталей.</p>
                            <div className="modal2-inputs">
                                <input
                                 type="text"
                                 value={name}
                                 onChange={(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
                                 placeholder="Введите имя" 
                                 />

                                <input
                                 type="text"
                                 value={number}
                                 onChange={(e:ChangeEvent<HTMLInputElement>)=>setNumber(e.target.value)}
                                 placeholder="введите номер телефона" 
                                 />

                                <textarea
                                 value={quast}
                                 onChange={(e)=>setQuast(e.target.value)}
                                 placeholder="ВВедите имя" 
                                 />  
                            </div>

                            <button className="popup__content-close" onClick={onClose}>✖</button>
                        </form>
                    </div>
                </div>
            )}
            {!isOpen && null}
        </div>
    )
}