import {
  API_KEY, BASE_URL, IMG_URL, language
 } from './api.mjs'

import axios from 'axios';

const url = `${BASE_URL}2?${API_KEY}&${language}`;

console.log(url)

function getMoovi(){
  axios.get(url)
    .then(response => console.log(response.data))
    .catch(error => console.error(error))

  console.log("passei aqui")
}

getMoovi()