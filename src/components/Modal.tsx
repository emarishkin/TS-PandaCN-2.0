import React, { FC, useState } from "react";
import "../styles/Modal.css";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");

  const [tariff1,setTariff1] = useState(false)
  const [tariff2,setTariff2] = useState(false)
  const [tariff3,setTariff3] = useState(false)
  const [tariff4,setTariff4] = useState(false)

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || (!tariff1 && !tariff2 && !tariff3 && !tariff4)) {
      alert("Пожалуйста, заполните все поля и выберите хотя бы один тариф.");
      return;
    }

    const selectedTariffs = [];
    if (tariff1) selectedTariffs.push("Экспресс");
    if (tariff2) selectedTariffs.push("Авиадоставка");
    if (tariff3) selectedTariffs.push("Стандартное авто");
    if (tariff4) selectedTariffs.push("Медленное авто");

    alert(`Имя: ${name}\nТелефон: ${phone}\nТарифы: ${selectedTariffs.join(", ")}\nВопрос: ${question}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Оставить заявку</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)} required />

          <div className="tariff-checkboxes">
            <label><input type="checkbox" checked={tariff1} onChange={()=>setTariff1(prev=>!prev)} /> Экспресс</label>
            <label><input type="checkbox" checked={tariff2} onChange={()=>setTariff2(prev=>!prev)} /> Авиадоставка</label>
            <label><input type="checkbox" checked={tariff3} onChange={()=>setTariff3(prev=>!prev)} /> Стандартное авто</label>
            <label><input type="checkbox" checked={tariff4} onChange={()=>setTariff4(prev=>!prev)} /> Медленное авто</label>
          </div>

          <textarea placeholder="Задать вопрос" value={question} onChange={(e) => setQuestion(e.target.value)} />

          <button type="submit">Отправить</button>
        </form>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};
