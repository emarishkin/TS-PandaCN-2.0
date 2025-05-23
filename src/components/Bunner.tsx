import { ChangeEvent, FC, useState } from "react";
import "../styles/Bunner.css";
import banner from '/banner.png'

interface BunnerProps {}

export const Bunner: FC<BunnerProps> = () => {
  const [wei, setWei] = useState("");
  const [volume, setVolume] = useState("");
  const [cost, setCost] = useState("");

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

  const [dopOption1, setDopOption1] = useState(false);
  const [dopOption2, setDopOption2] = useState(false);

  const [result, setResult] = useState<string | null>(null);
  const [errorMassage, setErrorMassage] = useState<string | null>(null);


  const [kons, setKons] = useState(false);
  const [name, setName] = useState<string>("");
  const [numder, setNumder] = useState<string>("");
  const [quastion, setQuastion] = useState<string>("");

  const [inputErrors, setInputErrors] = useState({
    wei: false,
    volume: false,
    cost: false
  });

  const [showCalc, setShowCalc] = useState(false);

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => setWei(e.target.value);
  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => setVolume(e.target.value);
  const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => setCost(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    const Wei = parseFloat(wei);
    const Volume = parseFloat(volume);
    const Cost = parseFloat(cost);

    const errors = {
      wei: isNaN(Wei) || Wei <= 0,
      volume: isNaN(Volume) || Volume <= 0,
      cost: isNaN(Cost) || Cost <= 0
    };
  
    setInputErrors(errors);

    if(!option1 && !option2 && !option3 && !option4){
      setErrorMassage('выберите тариф')
      setResult(null)
      return
    }

    if (isNaN(Wei) || isNaN(Volume) || isNaN(Cost) || Wei <= 0 || Volume <= 0 || Cost <= 0) {
      setErrorMassage("Введите корректные положительные значения для веса, объема и стоимости товара");
      setResult(null);
      return;
    }
    
    setErrorMassage(null)

    let extraCost = 0;
    if (option1) extraCost += 2000;
    if (option2) extraCost += 1500;
    if (option3) extraCost += 500;
    if (option4) extraCost += 200;

    let dop = 0;
    if (dopOption1) dop += 999;
    if (dopOption2) dop += 500;

    const deliveryCost = Wei * 1 + Volume * 2 + Cost * 0.05 + extraCost + dop;
    setResult(`Примерная стоимость доставки: ${deliveryCost.toFixed(2)} рублей`);
  };

  return (
    <section className="calc-banner">
      {!showCalc && (
        <div className="main-banner">
        <img src={banner} alt="Banner" className="banner-bg" />
        <div className="banner-content">
          <h1 className="banner-title">
            Выкуп и доставка товара из Китая для селлеров <span className="wb">WB</span> и <span className="ozon">OZON</span>
          </h1>
          <button className="banner-btn" onClick={() => setShowCalc(true)}>
            Рассчитать доставку
          </button>
        </div>
      </div>
      )}

      {showCalc && (
        <div className="calc-container">
          <div className="header-calc">
          <h3>Калькулятор приблизительного рассчета стоимости доставки</h3>
          <button className="close-btn1" onClick={() => setShowCalc(false)} aria-label="Закрыть">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
</button>

          </div>
          <form onSubmit={handleSubmit} className="calc-form">
          <input
  type="text"
  placeholder="Вес (кг)"
  value={wei}
  onChange={handleChange1}
  className={inputErrors.wei ? "input-error" : ""}
/>

<input
  type="text"
  placeholder="Объем (м³)"
  value={volume}
  onChange={handleChange2}
  className={inputErrors.volume ? "input-error" : ""}
/>

<input
  type="text"
  placeholder="Стоимость товара (RUB)"
  value={cost}
  onChange={handleChange3}
  className={inputErrors.cost ? "input-error" : ""}
/>
            
            <div className="full-checkbox-group">
            <div className="checkbox-group">
              <h4>Тарифы</h4>
              <label>
                <input
                    type="checkbox"
                    checked={option1}
                    disabled={option2 || option3 || option4}
                    onChange={() => {
                      const next = !option1;
                      setOption1(next);
                      if (next) {
                        setOption2(false)
                        setOption3(false);
                        setOption4(false);
                      }
                      }}
                />
                Экспресс
              </label>
              <label>
                <input
                    type="checkbox"
                    checked={option2}
                    disabled={option4 || option3 || option1} 
                    onChange={() => {
                    const next = !option2;
                    setOption2(next);
                    if (next) {
                      setOption1(false)
                      setOption3(false);
                      setOption4(false);
                    }
                    }}
                />
                Авиадоставка
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={option3}
                    disabled={option2 || option4 || option1} 
                    onChange={() => {
                        const next = !option3;
                        setOption3(next);
                        if (next) {
                          setOption1(false)
                          setOption2(false);
                          setOption4(false);
                        }
                        }}
                  />
                  Стандартное авто
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={option4}
                    disabled={option2 || option3 || option1} 
                    onChange={() => {
                      const next = !option4;
                      setOption4(next);
                      if (next) {
                        setOption1(false)
                        setOption2(false);
                        setOption3(false);
                      }
                    }}
                  />
                  Медленное авто
                </label>             
            </div>

            <div className="checkbox-group">
              <h4>Дополнительные услуги</h4>
              <label><input type="checkbox" checked={dopOption1} onChange={() => setDopOption1(prev=>!prev)} />Страховка</label>
              <label><input type="checkbox" checked={dopOption2} onChange={() => setDopOption2(prev=>!prev)} />Надёжная упаковка</label>
            </div>
            </div>
            {errorMassage && <div className="error-message">{errorMassage}</div>}
            <button className="button-result" type="submit">Рассчитать стоимость доставки</button>
          </form>

          <button className="consult-btn" onClick={() => setKons(prev=>!prev)}>Консультация</button>

          <div className={`consult-form-wrapper ${kons ? "open" : ""}`}>
            <div className="consult-form">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" />
              <input type="text" value={numder} onChange={(e) => setNumder(e.target.value)} placeholder="Введите номер телефона" />
              
              <textarea
              value={quastion}
              onChange={(e) => {
                setQuastion(e.target.value);
                const el = e.target as HTMLTextAreaElement;
                el.style.height = "auto";
                el.style.height = `${el.scrollHeight}px`;
              }}
              placeholder="Введите ваш вопрос"
              className="textarea-question"
              rows={1}
              />
          
              <button onClick={() => alert(`спасибо ${name}, с вами свяжутся в течение 12 часов`)}>Отправить</button>
            </div>
          </div>

          <div className="calc-result">
          {result && <div className="calc-result">{result}</div>}
            
          </div>
        </div>
      )}
    </section>
  );
};
