import { IPanda } from "../types/questions";

export const quastions:IPanda[] = [
    {
        title:'сколько клиентов у панды?',
        variants:[1000,2000,4500],
        correct:2
    },
    {
        title:'сколько лет панде?',
        variants:['1год','2года','3года'],
        correct:1
    },
    {
        title:'вам нравится панда?',
        variants:['да','нет','пока не заказывал'],
        correct:0
    }
]