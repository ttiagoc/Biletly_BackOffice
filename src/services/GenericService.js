import axios from 'axios'

const URL_BASE = "https://api-biletly.onrender.com/";

export default class GenericService {

  getAll = async (link) => {
    let response;
   await axios
      .get(URL_BASE + link)
     
      .then((result) => {
        console.log(result.data);
        response = result.data;
      })
      .catch((error) => {
        console.log(error);
        response = error
      });
  
    return response
  
  }

  
  getById = (link,id) => {

    axios
      .get(URL_BASE + link + '/' + id) //getById
      .then((result) => {
        console.log(result.data);
        const response = result.data;
        return response
      })
      .catch((error) => {
        console.log(error);
      });
  
  
  }

  Delete(link,id, token) {

 
    let urlDelete = URL_BASE + link + '/' +  id   //delete

    const options = {
      method: "DELETE",
      url: urlDelete,
      headers: {
        "token": token,
        "content-type": "application/json",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
    };
    
    axios
      .request(options)
      .then((result) => {
       
       console.log(result)
  
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
}