// src/components/WorkSteps.tsx
import React, { useEffect, useRef, useState } from "react";
import '../styles/WorkSteps.css'
import panda from '/panda.gif'

const steps = [
  { title: "Поиск и подбор товара" },
  { title: "Селекция поставщиков" },
  { title: "Выкуп товара" },
  { title: "Доставка на наш склад в Китае" },
  { title: "Предоставление фото и видео товара клиенту" },
  { title: "Упаковка товара" },
  { title: "Отправка товара в Москву" },
  { title: "Оказание услуг фулфилмента" },
];

const WorkSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const pandaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Каждые 4 секунды панда двигается

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
        <div className="work-steps-container">
      <h2 className="work-steps-title">Этапы работы</h2>

      <div className="steps-line-container">
        <div className="steps-line" />

        <div className="steps">
          {steps.map((step, index) => (
            <div
              className={`step ${index === activeStep ? "active" : ""}`}
              key={index}
            >
              <div className="circle" />
              <span className="label">{step.title}</span>
            </div>
          ))}
        </div>

        <div
  className="panda"
  style={{
    transform: `translateX(${activeStep * 145}%)`,
  }}
  ref={pandaRef}
>
  <div className="panda-bounce">
    <img src={panda} alt="Панда" />
  </div>
</div>

      </div>
    </div>
    </div>
    
  );
};

export default WorkSteps;