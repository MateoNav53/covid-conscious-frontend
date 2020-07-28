import axios from 'axios'

export default {
    login: user => {
        return axios.post('http://localhost:7000/user/login', user)
        .then(res => {
            if(res.status !== 401)
                    return res.json().then(data => data)
            else
                return {isAuthenticated: false, user: {username: ""}};
        })
    },
    register: user => {
        return axios.post('http://localhost:7000/user/register', user)
        .then(res => res.json())
        .then(data => data);
    },
    logout: () => {
        return axios.get('http://localhost:7000/user/logout')
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated: () => {
        return axios.get('http://localhost:7000/user/authenticated')
            .then(res=>{
                if(res.status !== 401)
                    return res.json().then(data => data)
                else
                    return {isAuthenticated: false, user: {username: ""}};
            })
    }
}