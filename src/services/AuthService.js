import axios from 'axios'

export default {
    login : user =>{
        console.log(user);
        return fetch('http://localhost:7000/user/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : "",role : ""}};
        })
    },
    register: user => {
        return axios.post('http://localhost:7000/user/register', user)
        // .then(res => res.json())
        .then(data => data);
    },
    // logout: () => {
    //     return axios.get('http://localhost:7000/user/logout')
    //         // .then(res => res.json())
    //         .then(data => data);
    // },
    //this isn't giving me a 401 error anymore, 
    //but maybe that's because there's not info being sent?
    logout : ()=>{
        return fetch('http://localhost:7000/user/logout')
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated: () => {
        return fetch('http://localhost:7000/user/authenticated')
            .then(res=>{
                if(res.status !== 401)
                    return res.json().then(data => data)
                else
                    return {isAuthenticated: false, user: {username: ""}};
            })
    }
}