export default {
    login: user => {
        return fetch('http://localhost:7000/user/login',{
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(data => data);
    },
    register: user => {
        return fetch('http://localhost:7000/user/register',{
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(data => data);
    },
    logout: () => {
        return fetch('http://localhost:7000/user/logoout')
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