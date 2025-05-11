import { FC } from "react";
import '../styles/ModalService.css'

interface ServiceModalProps{
 onClose:()=>void
 isOpen:boolean
}

export const ServiceModal:FC<ServiceModalProps> = ({onClose,isOpen}) => {

    
    return(
        <div>
            {isOpen && (
                <div className="modal-service">
                    <div className="modal2" onClick={(e) => e.stopPropagation()}>
                        
                        <button onClick={onClose}>close</button>
                    </div>
                </div>
            )}
            {!isOpen && null}
        </div>
    )
}