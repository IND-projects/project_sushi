import axios from 'axios'

const data = axios.create({
  baseURL: 'https://localhost:7247'
});

export const DataReseive = data.get('https://localhost:7247/Home/GetRolls');