import axios from 'axios';


const API_KEY = '22066234-d3ae24ea4cbae634ab9646340';
const URL = 'https://pixabay.com/api/';


export const getImages  = (text, count) => {

    try{
       const data =  axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}`)
       return data;
    }

    catch(error) {
        console.log(error);
    }

}

