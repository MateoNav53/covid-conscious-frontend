export default {
    login : user =>{
        return fetch('https://covid-conscious.herokuapp.com/user/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include'
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : ""}};
        })
    },
    register : user =>{
        return fetch('https://covid-conscious.herokuapp.com/user/register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json())  
        .then(data => data);
    },
    logout : () => {
        return fetch('https://covid-conscious.herokuapp.com/user/logout',{
            credentials: 'include'
        })
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated: () => {
        return fetch('https://covid-conscious.herokuapp.com/user/authenticated', {
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include'
        })
            .then(res=>{
                if(res.status !== 401)
                    return res.json().then(data => data)
                else
                    return {isAuthenticated: false, user: {username: ""}};
            })
    }
}