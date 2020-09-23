export default {
    getLogs: () => {
        return fetch('https://covid-conscious.herokuapp.com/user/covidlog', 
            {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*'
             }
          }
            )
            .then(res =>{
                console.log(res)
                if(res.status !== 401){
                    return res.json().then(data => data);
                }
                else
                    return {message : {messagBody : "UnAuthorized", errorMessage: true}};
            });
    },
}