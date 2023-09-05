import axios from 'axios'

const data = axios.create({
  baseURL: 'http://127.0.0.1:5001'
});

export const DataReseive = data.get('123');