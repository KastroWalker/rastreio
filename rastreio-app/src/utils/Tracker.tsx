import axios from 'axios';
const apiUrl = 'http://localhost:8080/api'

export const tracker = async (code: string) => {
    return await axios.get(`${apiUrl}/rastreio/${code}`)
}