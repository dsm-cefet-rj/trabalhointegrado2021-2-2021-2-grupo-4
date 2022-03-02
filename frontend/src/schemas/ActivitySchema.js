import {string, object, number, setLocale } from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

const numericMsg = "O campo deve ser um número."
const menorQueUnTotais = "O campo deve ser menor ou igual ao limite de 300 horas"

export let activitySchema = object().shape(
    {
        type: string().required(),
        description: string().required().max(100),
        hours: number().typeError(numericMsg).integer().min(0)
        .max(300, menorQueUnTotais).required().default(0)
    }
)