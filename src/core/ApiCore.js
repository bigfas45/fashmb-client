import { API } from "../config";

export const createDocument = (userId, token, document) => {
  return  fetch(`${API}/document/create/${userId}`, {
       method: "POST",
       headers: {
           Accept: "application/json",
           
           Authorization: `Bearer ${token}`
       },
       body: document
   })
       .then(response => {
           return response.json();
       })
       .catch(err => {
           console.log(err);
       });
};



export const updateDocument = (userId, docId, token, document) => {
  return  fetch(`${API}/document/${docId}/${userId}`, {
       method: "PUT",
       headers: {
           Accept: "application/json",
           
           Authorization: `Bearer ${token}`
       },
       body: document
   })
       .then(response => {
           return response.json();
       })
       .catch(err => {
           console.log(err);
       });
};


export const updatePayment = (userId, docId, token, document) => {
    return  fetch(`${API}/paystack/${docId}/${userId}`, {
         method: "PUT",
         headers: {
             Accept: "application/json",
             
             Authorization: `Bearer ${token}`
         },
         body: document
     })
         .then(response => {
             return response.json();
         })
         .catch(err => {
             console.log(err);
         });
  };


export const getProjectDocument = ( userId) => {
  return fetch (`${API}/document/related/${userId}`, {
      method: "GET",
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
};


export const createLoan= (userId, token, document) => {
    return  fetch(`${API}/project/create/${userId}`, {
         method: "POST",
         headers: {
             Accept: "application/json",
             
             Authorization: `Bearer ${token}`
         },
         body: document
     })
         .then(response => {
             return response.json();
         })
         .catch(err => {
             console.log(err);
         });
  };


  export const getProject = ( userId) => {
    return fetch (`${API}/project/user/${userId}`, {
        method: "GET",
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
  };


  
  export const getProjectAdmin = () => {
    return fetch (`${API}/project`, {
        method: "GET",
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
  };


  export const readDoc = (userId) => {
    return fetch (`${API}/document/related/${userId}`, {
        method: "GET",
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
  };
  
  


