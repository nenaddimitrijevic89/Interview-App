import axios from 'axios';

const adminService = ({ email, password }) => {
    return axios.post('http://localhost:3333/login', { email, password })
}

export { adminService };