
var envs = {
    dev: {
        api: 'http://192.168.0.52:3000',
    },
    stg: {
        api: '',
    }
}

const env = envs.dev

const Accept = 'application/appointment.v1+json';

var API = env.api;

const header = () => {
    return {
        'Accept': Accept,
        'Content-Type': 'application/json'
    }
}

export function loginRequest(email, password) {
    return fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: header(),
        body: JSON.stringify({
            email: email.toLowerCase(),
            password: password
        })
    })
        .then(response => response.json())
        .then(data => data)
        .catch((error) => { throw error });
}