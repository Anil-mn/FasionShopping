import { API } from "../backend";


export const getProductByCata = (id) => {
    return fetch(`${API}/products/${id}`, {
        method: "GET"
      })
        .then(response => {
          return response.json();
        })
        .catch(err => console.log(err));
        
}

export const getAllCata = (id) => {
  return fetch(`${API}/categories`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
      
}