import { ChangeEvent, FC, useState } from "react";
import '../styles/ModalService.css'

interface ServiceModalProps {
    onClose: () => void
    isOpen: boolean
}

export const ServiceModal: FC<ServiceModalProps> = ({ onClose, isOpen }) => {
    const [name, setName] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [question, setQuestion] = useState<string>('')
    const [selectedTariff, setSelectedTariff] = useState<string>('')
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!name || !number) {
            alert('Пожалуйста, заполните обязательные поля: имя и номер телефона')
            return
        }
        
        if (!selectedTariff) {
            alert('Пожалуйста, выберите тариф')
            return
        }
        
        alert(`Спасибо за заявку! Наш менеджер свяжется с вами в течение 12 часов.`)
        
        setTimeout(() => {
            onClose()
            setIsSubmitted(false)
            setName('')
            setNumber('')
            setQuestion('')
            setSelectedTariff('')
        }, 2000)
        
        setIsSubmitted(true)
    }

    const handleTariffChange = (tariff: string) => {
        setSelectedTariff(tariff)
    }

    return (
        <div>
            {isOpen && (
                <div className="modal-service">
                    <div className="modal2" onClick={(e) => e.stopPropagation()}>
                        <form className="popup__content" onSubmit={handleSubmit}>
                            <h2 className="popup__content-title">Получить бесплатную консультацию менеджера по логистике</h2> 
                            <p className="popup__content-text">Оставьте, пожалуйста, свои контактные данные, и наш опытный менеджер свяжется с вами в кратчайшие сроки для обсуждения деталей.</p>
                            
                            <div className="modal2-inputs">
                                <input
                                    className="popup__input"
                                    type="text"
                                    value={name}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                    placeholder="Введите имя"
                                    required
                                />

                                <input
                                    className="popup__input"
                                    type="tel"
                                    value={number}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)}
                                    placeholder="Введите номер телефона"
                                    required
                                />

                                <textarea
                                    className="popup__input"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    placeholder="Ваш вопрос (необязательно)"
                                />  
                            </div>
                            
                            <p className="tariff-text">Выберите тариф</p>
                            <div className="popup__content-radios">
                                <label className="input-label">
                                    <input 
                                        type="radio" 
                                        name="tariff" 
                                        checked={selectedTariff === 'Экспресс'} 
                                        onChange={() => handleTariffChange('Экспресс')} 
                                    />
                                    <span className="inp-span">Экспресс</span>
                                </label>
                                <label className="input-label">
                                    <input 
                                        type="radio" 
                                        name="tariff" 
                                        checked={selectedTariff === 'Авиадоставка'} 
                                        onChange={() => handleTariffChange('Авиадоставка')} 
                                    />
                                    <span className="inp-span">Авиадоставка</span>
                                </label>
                                <label className="input-label">
                                    <input 
                                        type="radio" 
                                        name="tariff" 
                                        checked={selectedTariff === 'Стандартное авто'} 
                                        onChange={() => handleTariffChange('Стандартное авто')} 
                                    />
                                    <span className="inp-span">Стандартное авто</span>
                                </label>
                                <label className="input-label">
                                    <input 
                                        type="radio" 
                                        name="tariff" 
                                        checked={selectedTariff === 'Медленное авто'} 
                                        onChange={() => handleTariffChange('Медленное авто')} 
                                    />
                                    <span className="inp-span">Медленное авто</span>
                                </label>
                                <label className="input-label">
                                    <input 
                                        type="radio" 
                                        name="tariff" 
                                        checked={selectedTariff === 'Консультация'} 
                                        onChange={() => handleTariffChange('Консультация')} 
                                    />
                                    <span className="inp-span">Консультация</span>
                                </label>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="submit-button"
                                disabled={isSubmitted}
                            >
                                {isSubmitted ? 'Отправка...' : 'Отправить'}
                            </button>
                            
                            <button 
                                className="popup__content-close" 
                                onClick={onClose}
                                type="button"
                            >
                                ✖
                            </button>
                            <p className="popup__content-info">Нажимая кнопку "Отправить", вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}