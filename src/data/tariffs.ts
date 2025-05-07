import { Tariff } from "../types/tariff";

export const tariffs:Tariff[] = [
    {
      id: "express",
      title: "Экспресс",
      description:'Авиадоставка образцов за 48 часов до Москвы',
      img:'https://pandacnexpress.ru/images/tariff/p-r.png',
      price: "Фиксированная цена 30$/кг",
      ps:'Оплата по прибытии груза на наш склад в России'
      
    },
    {
      id: "standard",
      title: "Авиадоставка",
      description:'Самый быстрый и надежный вариант доставки',
      img:'https://pandacnexpress.ru/images/tariff/p-2.png',
      price: "8-13 дней от 2$/кг",
      ps:'Оплата по прибытии груза на наш склад в России'
      
    },
    {
      id: "standard",
      title: "Стандартное авто",
      description:'Самый выгодный тариф по соотношению цены и качества',
      img:'https://pandacnexpress.ru/images/tariff/p-3.png',
      price: "15-20 дней от 1.5$/кг",
      ps:'Оплата по прибытии груза на наш склад в России'
      
    },
    {
      id: "standard",
      title: "Медленное авто",
      description:'Самый дешевый тариф для запланированных пополнений остатков на складах',
      img:'https://pandacnexpress.ru/images/tariff/p-4.png',
      price: "25-35 дней от 1.1$/кг",
      ps:'Оплата по прибытии груза на наш склад в России'
     
    }
  ];
  