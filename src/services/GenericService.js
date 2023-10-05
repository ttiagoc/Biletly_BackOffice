import axios from 'axios'

const URL_BASE = "http://localhost:3000/";

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

  Delete(link,id) {

 
    let url = URL_BASE + link + '/' +  id   //delete
    
    axios
      .delete(url)
      .then((result) => {
   
       console.log(result)
  
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  
}