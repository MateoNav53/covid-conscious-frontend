export default {
    getLogs: () => {
        return fetch('http://localhost:7000/user/covidlog', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
                .then(res =>{
                    if(res.status !== 401){
                        return res.json().then(data => data);
                    }
                    else
                        return {message : {messagBody : "UnAuthorized", errorMessage: true}};
                });
    }
}