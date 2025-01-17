import { API_KEY } from './config';
import axios from "axios"
import { BASE_URL } from "@/app/config"

export const supportedCodes = async () => {
    const result = await axios.get(`${BASE_URL}/${API_KEY}/codes`)
    return result
}

export const pairConversion = async (base: string, target: string, amount: number | undefined) => {
    const result = await axios.get(`${BASE_URL}/${API_KEY}/pair/${base}/${target}/${amount}`)
    return result
}